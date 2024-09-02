<?php

namespace App\Http\Controllers\Vendor;

use App\Http\Controllers\Controller;
use App\Models\Vendor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\File;

class VendorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Vendor/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
    $varibles = $request->validate([
        'name' => 'required',
        'description' => 'required',
        'thumbnail' => File::types(['png', 'jpeg', 'jpg', 'svg', 'webp'])
    ]);

    
    $path = $request->thumbnail->store('StoreProfiles');

    $store = Vendor::create([
        'name' => $request->name,
        'descrption' => $request->description,
        'user_id' => Auth::id(),
        'thumbnail' => $path
    ]);

     return redirect('/products');
    
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
