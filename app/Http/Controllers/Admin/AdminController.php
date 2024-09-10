<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\OrderHistory;
use App\Models\Orders;
use App\Models\Product;
use App\Models\User;
use App\Models\Vendor;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator as FacadesValidator;
use Inertia\Inertia;

class AdminController extends Controller
{
    //

    public function store(Request $request)
    {
        
        $otp = FacadesValidator::make($request->all(), [
            'otp' => 'required'
        ]);

        if($otp->fails()){
            return redirect()->back()->withErrors($otp);
        }

        $otp = $otp->getData();

        $admin = User::where('admin_passkey', $otp['otp'])->get();

        
        if($admin)
        {
            $user = User::find($admin[0]->id);
            Auth::login($user);
            return redirect(route('admin-dashboard'));

        }

        return redirect()->back()->withErrors('Sorry the pass key is incorrect');

        

    }

    public function index()
    {
        $sales = OrderHistory::latest()->get();
        // dd($sales);a
        return Inertia::render('Admin/Dashboard', ['sales' => $sales]);
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

}
