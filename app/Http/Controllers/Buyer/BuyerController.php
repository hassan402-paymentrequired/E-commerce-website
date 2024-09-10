<?php

namespace App\Http\Controllers\Buyer;

use App\Http\Controllers\Controller;
use App\Models\OrderHistory;
use App\Models\OrderItem;
use App\Models\Orders;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BuyerController extends Controller
{
    public function index()
    {
        $recent = OrderItem::with('vendor', 'product')->where('user_id', Auth::id())->get();
        return Inertia::render('buyer/Dashboard', ['recentPurchases' => $recent]);
    }
    public function buyerPuchases()
    {
        $purchases = OrderHistory::where('user_id', Auth::id());
        return Inertia::render('buyer/Purchases', ['purchases' => $purchases]);
    }
    public function AllBuyerOrders()
    {
        $order = Orders::where('user_id', Auth::id())->get();
        return Inertia::render('buyer/Order', ['orders' => $order]);
    }

    public function destroy(string $id)
    {
        $user = User::find($id);
        $user->delete();

        return redirect()->back();
    }

}
