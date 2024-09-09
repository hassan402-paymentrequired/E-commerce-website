<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OrderHistory extends Model
{
    use HasFactory;

    public function vendor(): BelongsTo
    {
        return $this->belongsTo(Vendor::class);

    }
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);

    }
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);

    }

    public function OrderHistory():BelongsTo
    {
        return $this->belongsTo(Transactions::class);
    }
}
