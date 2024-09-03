<?php

namespace App\Http\Controllers\Payment;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Orders;
use App\Models\Transactions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Str;
use Stripe\Climate\Order;

use App\Http\Requests;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Paystack;
use Unicodeveloper\Paystack\Paystack as PaystackPaystack;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function handleGatewayCallback()
    {
        $paymentDetails = Paystack::getPaymentData();

        // dd($paymentDetails['data']);

        $payment = $paymentDetails['data'];

        
        $transaction = Transactions::create([
            'user_id' => Auth::id(),
            'transaction_type' => $payment['channel'],
            'amount' => $payment['amount'],
            'currency' => $payment['currency'],
            'status' => $payment['status'],
            'reference' => $payment['reference']
        ]);

        $order = Orders::create([
            'user_id' => Auth::id(),
            'total_amount' => $payment['amount'],
            'currency' => $payment['currency'],
            'status' => 'pending',
            'order_number' =>'ORD-' . date('Ymd') . '-' . strtoupper(Str::random(5)),
            'payment_method' => $payment['channel'],
            'shipping_address' => Auth::user()->address,
        ]);

        $carts = Cart::where('user_id', Auth::id())->with('cartItem.product')->get();

        $carts[0]->delete();


        return Inertia::render('Payment/PaymentSuccess', ['product' => Auth::user()->phone_number , 'order' => $order ]);
        
    }

    public function redirectToGateway()
    {
        try{

            $data = array(
                "amount" => 700 * 100,
                "reference" => '',
                "email" => 'user@mail.com',
                "currency" => "NGN",
                "orderID" => 23456,
            );


            return Paystack::getAuthorizationUrl($data)->redirectNow();

        }catch(\Exception $e) {
            dd($e->getMessage());
            return Redirect::back()->withMessage(['msg'=>'The paystack token has expired. Please refresh the page and try again.', 'type'=>'error']);
        }        
    }




    public function success(Request $request)
    {
        return "success";
    }

    public function cancel(Request $request)
    {
        return "failure";
    }
}