<?php

namespace App\Http\Controllers\Vendor;

use App\Http\Controllers\Controller;
use App\Models\OrderItem;
use App\Models\Orders;
use App\Models\Product;
use App\Models\Vendor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\File;
use Inertia\Inertia;

class VendorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $vendor = Vendor::where('user_id', Auth::id())->get();
        $order = OrderItem::with('vendor', 'user', 'product')->where('vendor_id',  $vendor[0]->id)->latest()->limit(4)->get();
        // dd($order);
        return Inertia::render('Vendor/Dashboard', ['latestOrders' =>  $order]);
    }
    public function setting()
    {
        return Inertia::render('Vendor/Setting');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Vendor/Create');
    }


    public function AllVendorProduct()
    {
        $vendor = Vendor::where('user_id', Auth::id())->first();


         $products = $vendor->products;
        return Inertia::render('Vendor/VendorProducts', ['products' => $products]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
    $varibles = $request->validate([
        'name' => 'required',
        'description' => 'required',
        'address' => 'required',
        'thumbnail' => File::types(['png', 'jpeg', 'jpg', 'svg', 'webp'])
    ]);

    
    $path = $request->thumbnail->store('StoreProfiles');

    $store = Vendor::create([
        'name' => $request->name,
        'address' => $request->address,
        'descrption' => $request->description,
        'user_id' => Auth::id(),
        'thumbnail' => $path
    ]);

     return redirect('/vendor/dashboard');
    
    }

    /**
     * Display the specified resource.
     */
    public function VendorPuchases()
    {

        $purchase = Orders::where('user_id', '=', Auth::id())->get();



        return Inertia::render('Vendor/VendorPuchases', ['purchases' => $purchase]);
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
    public function AllVendorOrder()
    {
        $vendor = Vendor::where('user_id', Auth::id())->get();
        // $order = Orders::with('OrderItems')->where('vendor')
        $order = OrderItem::with('vendor', 'user', 'product')->where('vendor_id',  $vendor[0]->id)->get();
        // dd($order);
        return Inertia::render('Vendor/VendorOrders', ['orders' => $order]);
    }
}
