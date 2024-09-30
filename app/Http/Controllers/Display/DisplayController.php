<?php

namespace App\Http\Controllers\Display;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DisplayController extends Controller
{
  
    public function index()
    {
        return Inertia::render('Display/Index');
    }

  






    


}
