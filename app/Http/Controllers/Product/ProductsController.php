<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Cart;
use App\Models\Category;
use App\Models\Product;
use App\Models\Review;
use App\Models\Vendor;
use App\Models\Wishlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\File;
use Inertia\Inertia;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::paginate(10);
        $wishlist = Wishlist::where('user_id', Auth::id())->get();
        $cart = Cart::where('user_id', Auth::id())->get();
        // $carts = 

       $d = Cart::where('user_id', Auth::id())->with('cartItem.product')->get();

    //    dd($d);
      

        return inertia('Products/Index', ['products' => $products, 'c' => $cart, 'w' => $wishlist, 'ac' => $d]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {


        return inertia::render('Products/Create', ['profile' => asset(Auth::user()->profile), 'categories' => Category::all()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {


        $product = Validator::make($request->all()[0], [
            'description' => 'required',
            'name' => 'required',
            'price' => 'required',
            'category' => 'required',
            'brand' => 'required',
        ]);

        $product = $product->getData();

        $category_id = Category::query()->where('name', 'like', '%' . $product['category'] . '%')->get();

        $vendor = Vendor::where('user_id', '=' , Auth::id())->get();

        $vendor = $vendor[0]->id;


        $product = Product::create([
            'name' => $product['name'],
            'description' => $product['description'],
            'price' => $product['price'],
            'vendor_id' => $vendor,
            'category_id' => $category_id[0]['id'],
            'brand_id' => 1,
            'image_url' => $product['image']->store('productImages')
        ]);

        if ($request->all()[1]) {

            foreach ($request->all()[1] as $value) {
                    $path = $value->store('productImages');
                    $product->images()->create([
                        'image_url' => $path
                    ]);
            }
        }

        return redirect('/products');

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::with('images', 'category', 'brand', 'reviews.user', 'vendor')->findOrFail($id);

     

        return inertia::render('Display/Show', ['products' => $product, 'name' => $product->name]);
        
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

    public function shop()
    {
        $products = Product::with('reviews')->get();
        return Inertia::render('Products/Shop', ['products' => $products]);
    }
}
