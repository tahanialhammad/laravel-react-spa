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
        $products = Product::latest()->paginate(10);

        return Inertia::render('Shop/Products', [
            'products' => $products,
            'userFavorites' => auth()->check() ? auth()->user()->favorites->pluck('id') : [],
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
        // dd($request->all());
        sleep(1);

        $product = $request->validate([
            'name' => 'required|min:3',
            'description' => 'required|min:3',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
            'discount' => 'nullable|numeric|min:0',
            'discount_type' => 'nullable|string|in:fixed,percentage',
        ]);

        Product::create($product);

        return redirect('admin/products')->with('message', 'Products was created!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        if (Auth()->user()) {
            if (Auth()->user()->is_admin) {
                return $this->showAdminProduct($product);
            }
        }

        return Inertia('Shop/Show', compact('product'));
    }

    public function showAdminProduct(Product $product)
    {
        return Inertia('Admin/Products/Show', compact('product'));
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return Inertia('Admin/Products/Edit', compact('product'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        sleep(1);

        $updateProduct = $request->validate([
            'name' => 'required|min:3',
            'description' => 'required|min:3',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
        ]);

        $product->update($updateProduct);

        return redirect('admin/products')
            ->with('message', 'Products was updated!')
            ->with('messageType', 'success');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return redirect('admin/products')->with('message', 'Prodect was deleted!');
    }
}
