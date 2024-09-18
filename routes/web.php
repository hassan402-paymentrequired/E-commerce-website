<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Auth\AuthenticateUserController;
use App\Http\Controllers\Auth\ProfileController;
use App\Http\Controllers\Auth\RegisterUserController;
use App\Http\Controllers\Buyer\BuyerController;
use App\Http\Controllers\Display\DisplayController;
use App\Http\Controllers\Order\TrackOrder;
use App\Http\Controllers\Order\TrackOrderController;
use App\Http\Controllers\Payment\PaymentController;
use App\Http\Controllers\Product\CartController;
use App\Http\Controllers\Product\ProductCategory;
use App\Http\Controllers\Product\ProductsController;
use App\Http\Controllers\Product\WishListController;
use App\Http\Controllers\Vendor\VendorController;
use App\Mail\OrderShipped;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

// admin
Route::post('/admin/login', [AdminController::class, 'store'])->name('admin-login')->middleware('guest');
  Route::get('/admin', [AdminController::class, 'index'])->name('admin-dashboard')->middleware('auth');

Route::get('/', [DisplayController::class, 'index'])->name('landing-page');
Route::get('/register', [RegisterUserController::class, 'create']);
Route::post('/users/register', [RegisterUserController::class, 'store']);
Route::get('/users/login', [AuthenticateUserController::class, 'create'])->name('login');
Route::post('/users/login', [AuthenticateUserController::class, 'store']);
Route::post('/users/logout', [AuthenticateUserController::class, 'destroy']);
Route::get('/product/shop', [ProductsController::class, 'shop'])->name('shop');
Route::get('/product/cart', [CartController::class, 'index'])->name('cart.show');
Route::post('/product/cart/reduce', [CartController::class, 'reduce'])->name('cart.count-reduce');


Route::middleware('auth')->group(function()  {
    Route::get('/vendor/store/create', [VendorController::class, 'create'])->name('vendor.create');
    Route::post('/vendor/store/create', [VendorController::class, 'store'])->name('vendor.store');
    
    Route::get('/products', [ProductsController::class, 'index']);
    Route::get('/account', [ProfileController::class, 'index']);

    Route::post('/product/check-out', [PaymentController::class, 'redirectToGateway'])->name('pay');
    Route::get('/payment/callback', [PaymentController::class, 'handleGatewayCallback']);
    Route::get('/product/order/{order}',[TrackOrderController::class, 'track']);
    Route::patch('/order/order_items/update/{id}',[TrackOrderController::class, 'update']);
    Route::get('/order',[TrackOrderController::class, 'index']);
    Route::delete('/order/destroy/{id}',[TrackOrderController::class, 'destroy'])->name('order-destroy');
    Route::get('/order/items/{id}',[TrackOrderController::class, 'show'])->name('order.show');

    Route::post('/product/cart', [CartController::class, 'store'])->name('cart.product.add');
    Route::post('/products/category', ProductCategory::class)->name('product_category_add');
    Route::post('/product/wishlist', [WishListController::class, 'store'])->name('product.wishlist');
    Route::get('/products/create', [ProductsController::class, 'create'])->name('product.create');
    Route::post('/products/create', [ProductsController::class, 'store'])->name('product.store');
    Route::get('/product/v1/{product}', [ProductsController::class, 'show'])->name('product.show');
    Route::delete('/product/cart-destroy/{id}', [CartController::class, 'destroy'])->name('cart.destroy');

    Route::get('/product/check-out/success', [PaymentController::class, 'success'])->name('product.check-out.success');
    Route::get('/product/check-out/cancel', [PaymentController::class, 'cancel'])->name('product.check-out.cancel');

    // vendor
    Route::get('/vendor/dashboard', [VendorController::class, 'index'])->name('vendor-dashboard');
    Route::get('/vendor/products', [VendorController::class, 'AllVendorProduct'])->name('vendor-products');
    Route::get('/vendor/orders', [VendorController::class, 'AllVendorOrder'])->name('vendor-order');
    Route::get('/setting', [VendorController::class, 'setting'])->name('vendor-setting');
    Route::get('/VendorPuchases', [VendorController::class, 'VendorPuchases'])->name('vendor-puchase');
    Route::delete('/vendor/destroy/{id}', [VendorController::class, 'destroy'])->name('vendor-destroy');
    Route::get('/vendor/order/{id}', action: [VendorController::class, 'AllOrderItems'])->name('vendor-order-items');


    // buyer
    Route::get('/buyer/dashboard', [BuyerController::class, 'index'])->name('buyer-dashboard');
    Route::get('/buyer/purchases', [BuyerController::class, 'buyerPuchases'])->name('buyer-puchase');
    Route::get('/buyer/orders', [BuyerController::class, 'AllBuyerOrders'])->name('buyer-order');
    Route::get('/buyer/order/{id}', action: [BuyerController::class, 'AllOrderItems'])->name('buyer-order-items');
    Route::delete('/buyer/destroy/{id}', [BuyerController::class, 'destroy'])->name('buyer-destroy');
    
    // admin

    Route::get('/admin/products', [AdminController::class, 'products'])->name('admin-products');
Route::get('/admin/vendors', [AdminController::class, 'vendors'])->name('admin-vendor');
    Route::get('/admin/orders', [AdminController::class, 'orders'])->name('admin-orders');
    Route::get('/admin/buyers', [AdminController::class, 'buyers'])->name('admin-buyers');
    Route::patch('/order/admin/update/{id}',[AdminController::class, 'update']);


});