<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::latest()->paginate(2);

        return Inertia::render('Shop/Products', [
            'products' => $products,
            'userFavorites' => auth()->user() ? auth()->user()->favorites->pluck('id') : [],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia('Admin/Products/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        dd($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }

    public function toggleFavorite(Product $product)
    {
        dd('test toggleFavorite');
        $user = auth()->user();

        if ($user->favorites()->where('product_id', $product->id)->exists()) {
            $user->favorites()->detach($product);
        } else {
            $user->favorites()->attach($product);
        }

        return back();
    }
}
