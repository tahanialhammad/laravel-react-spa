<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    // protected $guarded = [];
    protected $fillable = [
        'name',
        'description',
        'price',
        'stock',
        'discount',
        'discount_type',
    ];
    public function favoritedBy()
    {
        return $this->belongsToMany(User::class, 'favorites');
    }

    protected $appends = ['discounted_price']; // Ensure it's included in JSON responses

    public function getDiscountedPriceAttribute()
    {
        if ($this->discount_type === 'percentage') {
            return $this->price - ($this->price * ($this->discount / 100));
        } elseif ($this->discount_type === 'fixed') {
            return max(0, $this->price - $this->discount); // Price doesn't go below zero
        }
        return $this->price;
    }
}
