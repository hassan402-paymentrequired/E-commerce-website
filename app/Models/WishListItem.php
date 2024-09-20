<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
class WishListItem extends Model
{
    use HasFactory;

    public function wishList():BelongsTo
    {
        return $this->belongsTo(Wishlist::class);
    }

    public function product():BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}
