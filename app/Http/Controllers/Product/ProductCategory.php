<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class ProductCategory extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $category = $request->validate([
            'name' => 'required',
            'description' => 'required'
        ]);

        Category::create(($category));
        return redirect()->back();
    }
}
