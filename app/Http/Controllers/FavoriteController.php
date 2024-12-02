<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Favorite;
use App\Models\Product;
use Inertia\Inertia;


class FavoriteController extends Controller
{
    public function index()
    {
        // Check if the user is authenticated
        if (auth()->check()) {
            // Fetch the user's favorite products with pagination
            $products = auth()->user()->favorites()->paginate(10);
        } else {
            // If not authenticated, return an empty collection
            $products = collect();
        }
    
        // Pass the products to the Inertia view
        return Inertia::render('User/Shop/Wishlist', compact('products'));
    }
    

    public function toggleFavorite(Request $request)
    {
        // dd($request->all(),  $user = $request->user());
        $request->validate([
            'product_id' => 'required|exists:products,id',
        ]);

        $user = $request->user();
        $productId = $request->product_id;

        // Attach product to favorites
        // $user->favorites()->syncWithoutDetaching([$productId]);

        if ($user->favorites()->where('product_id', $productId)->exists()) {
            $user->favorites()->detach($productId);
        } else {
            $user->favorites()->attach($productId);
        }

        return back();
    }

}
