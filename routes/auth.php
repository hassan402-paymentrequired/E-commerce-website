<?php

use App\Http\Controllers\Buyer\BuyerController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function(){

    Route::post('/buyer/profile', [BuyerController::class, 'profileUpdate'])->name("profile-update");
    Route::get('/buyer/setting', [BuyerController::class, 'setting'])->name("setting view");
});
