<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Transactions extends Model
{
    use HasFactory;

    public function users():BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function OrderHistory():HasMany
    {
        return $this->hasMany(OrderHistory::class);
    }
}
