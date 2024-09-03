<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Kernel
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */

     protected $middleware = [
        // \Fruitcake\Cors\HandleCors::class,
        // \Barryvdh\Cors\HandleCors::class,

          // ...
      ];
      
    public function handle(Request $request, Closure $next): Response
    {
        return $next($request);
    }
}
