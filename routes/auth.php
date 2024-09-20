<?php

use App\Http\Controllers\Auth\ProfileController;
use App\Http\Controllers\Buyer\BuyerController;
use App\Http\Controllers\Vendor\VendorController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;


Route::middleware('auth')->group(function(){

    Route::post('/buyer/profile', [BuyerController::class, 'profileUpdate'])->name("profile-update");
    Route::get('/buyer/setting', [BuyerController::class, 'setting'])->name("setting view");

    Route::patch("/buyer/password-update/{user}", [ProfileController::class, 'update']);

    // vendor
       Route::post('/vendor/profile', [VendorController::class, 'profileUpdate'])->name("profile-update");
       Route::get('/vendor/setting', [VendorController::class, 'setting'])->name("setting view");
       Route::patch('/vendor/store-update/{id}', [VendorController::class, 'storeUpdate'])->name("update store");
});

 
Route::get('/auth/google', function () {
    return Socialite::driver('google')->redirect();
});
 
Route::get('/auth/callback', function () {
    $googleUser = Socialite::driver('google')->user();

    dd($googleUser);
    $existingUser = User::where('email', $googleUser->email)->first();

    if ($existingUser) {
        Auth::login($existingUser, true);
    } else {
        $newUser = User::create([
            'name' => $googleUser->name,
            'email' => $googleUser->email,
            'google_id' => $googleUser->id,
            'password' => bcrypt(str_random(16)), 
        ]);

        Auth::login($newUser);
    }
});
