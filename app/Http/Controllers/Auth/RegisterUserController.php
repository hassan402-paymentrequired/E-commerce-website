<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Inertia\Response;
class RegisterUserController extends Controller
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
    public function create(): Response
    {
        return inertia::render('Auth/Register');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validator =  $request->validate([
            'name' =>  'required',
            'email' =>  'required',
            'address' =>  'required',
            'role' =>  'required',
            'phone_number' =>  'required',
            'password' =>  ['required', 'confirmed'],
        ]);
 
        if ($request->hasFile('profile'))
        {
            $validator['profile'] = $request->profile->store('ProfileStore');
        }

      $user = User::create($validator);



        event(new Registered($user));

        Auth::login($user);


        if($user['role'] === "vendor"){

             return redirect('/vendor/store/create');
        }

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
