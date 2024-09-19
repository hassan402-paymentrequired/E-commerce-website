<?php

namespace App\Http\Controllers\Buyer;

use App\Http\Controllers\Controller;
use App\Models\OrderHistory;
use App\Models\OrderItem;
use App\Models\Orders;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response as FacadesResponse;
use Inertia\Inertia;
use Nette\Utils\Strings;

class BuyerController extends Controller
{
    public function index()
    {
        $recent = OrderItem::with('vendor', 'product')->where('user_id', Auth::id())->get();
        $pendingOder = OrderItem::where('status', "pending")->where('user_id', Auth::id())->count();
        $complete = OrderHistory::where('status', 'completed')->where('user_id', Auth::id())->count();
        $canceled = OrderHistory::where('status', 'canceled')->where('user_id', Auth::id())->count();
        return Inertia::render('buyer/Dashboard', ['recentPurchases' => $recent, 'pending' => $pendingOder, 'complete' =>   $complete, 'canceled' => $canceled]);
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

    public function AllOrderItems(String $id)
    {

        $order = Orders::find($id);
        $order_items = OrderItem::where('orders_id', $order->id)->with('product', 'vendor')->get();
        // dd($order_items);
        return Inertia::render('buyer/OrderItems', ['orders' => $order_items]);
    }

    public function setting(){
        return Inertia::render("buyer/Setting");
    }

    public function profileUpdate(Request $request){

        $user = User::find(Auth::id());

        try {
            
            $user->email = $request->email;
            $user->name = $request->name;
            $user->address = $request->address;
    
            $user->save();

            return redirect()->back();

        } catch (\Exception $e) {
            dd($e);
        }


    }

}
