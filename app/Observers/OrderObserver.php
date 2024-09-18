<?php

namespace App\Observers;

use App\Mail\OrderShipped;
use App\Models\orders;
use Illuminate\Support\Facades\Mail;

class OrderObserver
{
    /**
     * Handle the orders "created" event.
     */
    public function created(orders $orders): void
    {
        //
    }

    /**
     * Handle the orders "updated" event.
     */
    public function updated(orders $orders): void
    {
        Mail::to('lateefoluwafemi303@gmail.com')->send(new OrderShipped($orders));

    }

    /**
     * Handle the orders "deleted" event.
     */
    public function deleted(orders $orders): void
    {
        //
    }

    /**
     * Handle the orders "restored" event.
     */
    public function restored(orders $orders): void
    {
        //
    }

    /**
     * Handle the orders "force deleted" event.
     */
    public function forceDeleted(orders $orders): void
    {
        //
    }
}
