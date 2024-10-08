<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    public function images(): HasMany
    {
        return $this->hasMany(ProductImage::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function brand(): BelongsTo
    {
        return $this->belongsTo(Brand::class);
    }

    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class);
    }
    public function OrderHistory(): HasMany
    {
        return $this->hasMany(OrderHistory::class);
    }

    public function wishlistItem():HasMany
    {
        return $this->hasMany(WishListItem::class);
    }
    public function vendor():BelongsTo
    {
        return $this->belongsTo(Vendor::class);
    }

    public function cart():BelongsTo
    {
       return $this->belongsTo(Cart::class);
    }
    public function cartItem():HasMany
    {
       return $this->hasMany(CartItem::class);
    }

}
