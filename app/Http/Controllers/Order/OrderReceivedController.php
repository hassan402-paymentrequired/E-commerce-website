<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use App\Models\Orders;
use Illuminate\Http\Request;

class OrderReceivedController extends Controller
{
    public function OrderReceived(string $id)
    {
        $order = Orders::where('delivery_code', $id)->get();
        $order[0]->status = "completed";
        $order->save();
        return redirect('/order/receive/success');
    }
}
