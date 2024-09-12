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
     * Show the form for creating a new resource.
     */
    public function create()
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
        $order = Orders::with(['OrderItems', 'OrderItems.Product'])->where('id', $id)->get();
        return Inertia::render('Admin/OrderItems', ['orders' => $order]);
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
        $item = OrderItem::find($id);
        $item->status = $request->value;

        $vendor = Vendor::with('user')->find($item->vendor_id);

        $admin = User::where('is_Admin', true)->get();

        // dd($admin[0]->id);

        $item->save();

        broadcast(new OrderItemsStatusUpdate($vendor->user,$item, $admin[0] ));
        return;
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
