<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use \App\Models\Post;
use App\Models\Product;

class AdminController extends Controller
{
    // public function dashboard()
    // {
    //     return Inertia::render('Admin/Dashboard/Dashboard');
    // }

    public function MyCalendar()
    {
        return Inertia::render('Admin/MyCalendar/MyCalendar');
    }

    public function faqs()
    {
        return Inertia::render('Admin/Faqs/Faqs');
    }
    
    public function OrdersChart()
    {
        return Inertia::render('Admin/OrdersChart/OrdersChart');
    }

    public function AdminProducts()
    {
       $products = Product::all();
        // $products = Product::all()->map(function ($product) {
        //     return array_merge($product->toArray(), [
        //         'discountedPrice' => $product->discountedPrice(),
        //     ]);
        // });
        return Inertia::render('Admin/Products/Products', compact('products') );
    }
}
