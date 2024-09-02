<?php

use App\Http\Controllers\Auth\AuthenticateUserController;
use App\Http\Controllers\Auth\ProfileController;
use App\Http\Controllers\Auth\RegisterUserController;
use App\Http\Controllers\Payment\PaymentController;
use App\Http\Controllers\Product\CartController;
use App\Http\Controllers\Product\ProductCategory;
use App\Http\Controllers\Product\ProductsController;
use App\Http\Controllers\Product\WishListController;
use App\Http\Controllers\Vendor\VendorController;
use Illuminate\Support\Facades\Route;


Route::get('/', [RegisterUserController::class, 'create']);
Route::post('/users/register', [RegisterUserController::class, 'store']);
Route::get('/users/login', [AuthenticateUserController::class, 'create'])->name('login');
Route::post('/users/login', [AuthenticateUserController::class, 'store']);
Route::post('/users/logout', [AuthenticateUserController::class, 'destroy']);


Route::middleware('auth')->group(function()  {
    Route::get('/vendor/store/create', [VendorController::class, 'create'])->name('vendor.create');
    Route::post('/vendor/store/create', [VendorController::class, 'store'])->name('vendor.store');
    
    Route::get('/products', [ProductsController::class, 'index']);
    Route::get('/account', [ProfileController::class, 'index']);

    // Route::post('/product/check-out', [PaymentController::class, 'create'])->name('product.ckeck-out');
    Route::post('/product/check-out', [PaymentController::class, 'paystack'])->name('product.ckeck-out');
    Route::post('/product/webhook', [PaymentController::class, 'webhook'])->name('check-out.webhook');


    Route::post('/product/cart', [CartController::class, 'store'])->name('cart.product.add');
    Route::post('/products/category', ProductCategory::class)->name('product_category_add');
    Route::post('/product/wishlist', [WishListController::class, 'store'])->name('product.wishlist');
    Route::get('/products/create', [ProductsController::class, 'create'])->name('product.create');
    Route::post('/products/create', [ProductsController::class, 'store'])->name('product.store');
    Route::get('/product/v1/{product}', [ProductsController::class, 'show'])->name('product.show');
    Route::get('/product/cart', [CartController::class, 'index'])->name('cart.show');
    Route::delete('/product/cart-destroy/{id}', [CartController::class, 'destroy'])->name('cart.destroy');

    Route::get('/product/check-out/success', [PaymentController::class, 'success'])->name('product.check-out.success');
    Route::get('/product/check-out/cancel', [PaymentController::class, 'cancel'])->name('product.check-out.cancel');
});