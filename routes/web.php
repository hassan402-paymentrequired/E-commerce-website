<?php

use App\Http\Controllers\Auth\AuthenticateUserController;
use App\Http\Controllers\Auth\ProfileController;
use App\Http\Controllers\Auth\RegisterUserController;
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

    Route::post('/product/cart', [CartController::class, 'store']);
    Route::post('/products/category', ProductCategory::class);
    Route::post('/product/wishlist', [WishListController::class, 'store']);
    Route::get('/products/create', [ProductsController::class, 'create']);
    Route::post('/products/create', [ProductsController::class, 'store']);
});