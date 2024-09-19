<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\OrderDeleted;
use App\Mail\OrderShipped;
use App\Models\OrderHistory;
use App\Models\Orders;
use App\Models\Product;
use App\Models\User;
use App\Models\Vendor;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator as FacadesValidator;
use Inertia\Inertia;
use Str;
use Stripe\Climate\Order;

class AdminController extends Controller
{
    //

    public function store(Request $request)
    {

        $otp = FacadesValidator::make($request->all(), [
            'otp' => 'required'
        ]);

        if ($otp->fails()) {
            return redirect()->back()->withErrors($otp);
        }

        $otp = $otp->getData();

        $admin = User::where('admin_passkey', $otp['otp'])->get();


        if ($admin) {
            $user = User::find($admin[0]->id);
            Auth::login($user);
            return redirect(route('admin-dashboard'));
        }

        return redirect()->back()->withErrors('Sorry the pass key is incorrect');
    }

    public function index()
    {
        $sales = OrderHistory::with('user', 'vendor', 'product')->limit(3)->get();
        $pending = OrderHistory::where('status', 'pending')->count();
        $complete = OrderHistory::where('status', 'completed')->count();
        $canceled = OrderHistory::where('status', 'canceled')->count();
        // dd($pending, $complete, $canceled);
        return Inertia::render('Admin/Dashboard', ['sales' => $sales, 'pending' =>  $pending, 'complete' => $complete, 'canceled' => $canceled]);
    }

    public function products()
    {
        $products = Product::with('vendor', 'category', 'brand')->get();
        return Inertia::render('Admin/Products', ['products' => $products]);
    }
    public function vendors()
    {
        $vendors = Vendor::with('user')->get();
        return Inertia::render('Admin/Vendors', ['vendors' => $vendors]);
    }
    public function buyers()
    {
        $buyers = User::where('role', '=', 'customer')->get();
        return Inertia::render('Admin/Buyers', ['customers' => $buyers]);
    }
    public function orders()
    {
        $orders = Orders::with('user')->get();
        return Inertia::render('Admin/Orders', ['orders' => $orders]);
    }

    public function update(Request $request, string $id)
    {
        $code =  mt_rand(1000, 999999);

        $order = Orders::find($id);
        $order->status = $request->value;
        $order->delivery_code = $code;
        $order->save();

        $admin = User::where('is_Admin', true)->get();

        $order_items = Orders::where('id', $id)->with(['OrderItems.Product', 'user'])->get();

        foreach ($order_items[0]->OrderItems as $value) {
            $order_history = OrderHistory::create([
                'user_id' => $value->user_id,
                'product_id' => $value->product_id,
                'status' => $value->status,
                'vendor_id' => $value->vendor_id
            ]);
        }

        if ($order->status === "canceled") {
            $order = Orders::find($id);

            $order->delete();
            Mail::to('lateefoluwafemi303@gmail.com')->send(new OrderDeleted('lateefoluwafemi303@gmail.com'));

            return redirect()->back();
        }

        Mail::to('lateefoluwafemi303@gmail.com')->send(new OrderShipped($order_items[0], $code));

        return redirect()->back();
    }
}
