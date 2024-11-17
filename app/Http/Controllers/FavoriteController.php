<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Favorite;

class FavoriteController extends Controller
{
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
