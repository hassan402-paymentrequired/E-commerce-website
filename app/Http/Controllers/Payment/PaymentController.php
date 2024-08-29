<?php

namespace App\Http\Controllers\Payment;

use App\Http\Controllers\Controller;
use App\Models\Cart;
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
            $line[] = [
                'price_data' => [
                  'currency' => 'usd',
                  'product_data' => [
                    'name' => $value->product->name,
                    // 'image' => [$value->product->image_url],
                  ],
                  'unit_amount' => $value->product->price * 100,
                ],
                'quantity' => 1,
              ];
              $total += $value->product->price;
        }

        $session = $stripe->checkout->sessions->create([
            'line_items' => $line,
            'mode' => 'payment',
            'success_url' => route('product.ckeck-out.success', [], true),
            'cancel_url' => route('product.ckeck-out.cancel', [], true),
          ]);

          $order = new Order();

          $order->status = 'unpaid';
          $order->user_id = Auth::id();
          $order->total_amount = $total;
          $order->session_id = $session->id;

          return redirect($session->url);
          
    }


    public function success(Request $request)
    {
        //
    }

    public function cancel(Request $request)
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
    public function destroy(string $id)
    {
        //
    }
}
