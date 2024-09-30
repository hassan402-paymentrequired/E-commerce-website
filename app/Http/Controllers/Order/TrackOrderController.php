<?php

namespace App\Http\Controllers\Order;

use App\Events\OrderItemsStatusUpdate;
use App\Http\Controllers\Controller;
use App\Models\OrderItem;
use App\Models\Orders;
use App\Models\User;
use App\Models\Vendor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TrackOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Orders::where('user_id', '=', Auth::id())->get();
        return Inertia::render('Profile/Order', ['orders' => $orders]);
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $order = Orders::with(['OrderItems', 'OrderItems.Product'])->where('id', $id)->get();
        return Inertia::render('Admin/OrderItems', ['orders' => $order]);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $item = OrderItem::find($id);
        $item->status = $request->value;

        $vendor = Vendor::with('user')->find($item->vendor_id);

        $admin = User::where('is_Admin', true)->get();

        // dd($admin);
        if($admin){

            $item->save();
    
            // broadcast(new OrderItemsStatusUpdate($vendor->user,$item, $admin[0] ));
            return redirect()->back();
        }
        $item->save();
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $order = Orders::find($id);
        $order->delete();

        return redirect()->back();
    }
}
