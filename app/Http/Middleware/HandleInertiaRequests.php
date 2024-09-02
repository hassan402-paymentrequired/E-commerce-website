<?php

namespace App\Http\Middleware;

use App\Models\Cart;
use App\Models\User;
use App\Models\Wishlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        // $cartCount = Cart::where('user_id', Auth::id())->with('cartItem')->get();
        // $wishlistCountCount = Wishlist::where('user_id', Auth::id())->count();

        // if(Auth::user() && $cartCount){
        //     $cartCount = count($cartCount[0]->cartItem);
        // }else{
        //     $cartCount = 0;
        //     $wishlistCountCount = 0;
        // }

        // dd($cartCount);
        return array_merge(parent::share($request), [
            'auth' => fn () => $request->user()
                ? $request->user()->only('id', 'name', 'email', 'profile', 'role')
                : null,
            // 'ci' => $cartCount,
            // 'wi' => $wishlistCountCount
        ]);
    }
}
