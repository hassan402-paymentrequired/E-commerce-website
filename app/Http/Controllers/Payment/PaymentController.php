<?php

namespace App\Http\Controllers\Payment;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Orders;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Stripe\Climate\Order;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $carts = Cart::where('user_id', Auth::id())->with('cartItem.product')->get();
        $cart = $carts->all()[0]->cartItem;
        // dd($cart);
        $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET_KEY'));
        $line = [];
        $total= 0;
        foreach ($cart as $value) {
            $line[] = [[
                'price_data' => [
                  'currency' => 'usd',
                  'product_data' => [
                    'name' => $value->product->name,
                    // 'image' => [$value->product->image_url],
                  ],
                  'unit_amount' => $value->product->price * 100,
                ],
                'quantity' => 1,
              ]];
              $total += $value->product->price;
        }

        $session = $stripe->checkout->sessions->create([
            'line_items' => $line,
            'mode' => 'payment',
            'success_url' => route('product.check-out.success', [], true),
            'cancel_url' => route('product.check-out.cancel', [], true),
          ]);

          $order = new Order();

          $order->status = 'pending';
          $order->user_id = Auth::id();
          $order->total_amount = $total;
          $order->session_id = $session->id;

          return redirect($session->url);
          
    }


    public function success(Request $request)
    {
        return "success";
    }

    public function cancel(Request $request)
    {
        return "failure";
    }

    /**
     * Store a newly created resource in storage.
     */
    public function webhook(Request $request)
    {
        $endpoint_secret = env('WEBHOOK_SECRET');
        $payload = @file_get_contents('php://input');
        $sign = $_SERVER['HTTP_STRIPE_SIGNATURE'];
        $event = null;

        try {

            $event = \Stripe\Webhook::constructEvent(
                $payload,
                $sign,
                $endpoint_secret
            );
            
        } catch (\UnexpectedValueException $th) {
           return response('', 400);
        }catch(\Stripe\Exception\SignatureVerificationException $e){
           return response('', 400);
        }

        switch ($event->type ) {
            case 'checkout.session.completed':
               $sesssion = $event->data->object;

               $order = Orders::where('session_id', $sesssion->id)->first();

               if($order && $order->status === 'pending')
               {
                $order->status = 'paid';
                $order->save();
               }
                break;
            
            default:
                dd('error');
                break;
        }

        return response('');

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function paystack(Request $request)
    {
        $url = "https://api.paystack.co/transaction/initialize";

        $fields = [
          'email' => "customer@email.com",
          'amount' => "20000",
          'callback_url' => "http://127.0.0.1:8000/product/cart",
          'metadata' => ["cancel_action" => "http://127.0.0.1:8000/product/cart"]
        ];
      
        $fields_string = http_build_query($fields);
      
        //open connection
        $ch = curl_init();
        
        //set the url, number of POST vars, POST data
        curl_setopt($ch,CURLOPT_URL, $url);
        curl_setopt($ch,CURLOPT_POST, true);
        curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
          "Authorization: Bearer sk_test_f04a3b53739653d3fc87b01a2fdcb4835562bcad",
          "Cache-Control: no-cache",
          "Access-Control-Allow-Origin: *"
        ));
        
        //So that curl_exec returns the contents of the cURL; rather than echoing it
        curl_setopt($ch,CURLOPT_RETURNTRANSFER, true); 
        
        //execute post
        $result = curl_exec($ch);

        $result = json_decode($result, true);
        dd($result);
       return redirect(url($result['data']['authorization_url']));

    }
}
