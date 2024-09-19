<?php

namespace App\Http\Controllers\Product;

use App\Events\CartEvent;
use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $carts = Cart::where('user_id', Auth::id())->with('cartItem.product')->get();
        return Inertia::render('Display/Cart', ['AllCartItems' => $carts]);
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
        // dd($request->all());
        $cartExist = Cart::where('user_id', Auth::id())->get();

        // dd($cartExist->all());
        if(count($cartExist) > 0){

            $exist = CartItem::where('product_id', $request->product_id)
                                ->where('cart_id', $cartExist->all()[0]->id)
                                ->first();

            // dd($exist->quantity);

            if(!$exist){
                CartItem::create([
                    'product_id' => $request->product_id,
                    'cart_id' => $cartExist->all()[0]->id,
                    'price' => $request->price,
                    'quantity' => $request->quantity
                   ]);

                   return redirect()->back();


            }else{
                $exist->quantity += 1; 
            
                $exist->save();

                return redirect()->back();

            }


        }else{

            $cart = Cart::create([
             'user_id' => Auth::id(),
            ]);
     
            $cart->cartItem()->create([
             'product_id' => $request->product_id,
             'price' => $request->price,
             'quantity' => $request->quantity
            ]);

            return redirect()->back();

     
        }
        // $product = Product::find($request->product_id);


    //    broadcast(new CartEvent(Auth::user(), $product ));
    
            return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function reduce(Request $request)
    {
        $item = CartItem::where('product_id', $request->product_id)
                          ->where('cart_id', $request->cart_id)->first();

        if($item){
            $item->quantity -= 1;
            $item->save();
        }
        
        return redirect()->back();
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
        $product = CartItem::where('product_id', '=', $id)->firstOrFail();
        $product->delete();

        return redirect()->back();

    }
}
