<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Wishlist extends Model
{
    use HasFactory;

    public function wishListItem():HasMany
    {
        return $this->hasMany(WishListItem::class);
    }

    public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
