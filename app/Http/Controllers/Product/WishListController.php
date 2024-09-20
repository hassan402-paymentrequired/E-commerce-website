<?php

namespace App\Http\Controllers\Product;

use App\Events\WishListEvent;
use App\Http\Controllers\Controller;
use App\Models\Wishlist;
use App\Models\WishListItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class WishListController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $wishlist = Wishlist::with(['wishListItem.product.category'])->where('user_id', Auth::id())->get();
        return Inertia::render( 'Display/WishList', ['wishlists' => $wishlist]);

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

        $wishExist = Wishlist::where('user_id', Auth::id())->get();

        if (count($wishExist) > 0) {

            $exist = WishListItem::where('product_id', $request->product_id)
                ->where('cart_id', $wishExist->all()[0]->id)
                ->first();


            if (!$exist) {
                WishListItem::create([
                    'product_id' => $request->product_id,
                    'wishlist_id' =>  $wishExist->all()[0]->id,
                ]);

                return redirect()->back();
            }
        } else {

            $cart = Wishlist::create([
                'user_id' => Auth::id(),
            ]);

            $cart->wishListItem()->create([
                'product_id' => $request->product_id,
                'wishlist_id' =>  $wishExist->all()[0]->id,
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
    public function show(string $id)
    {
        //
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
}
