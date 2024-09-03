<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->enum('status', ['pending', 'completed', 'shipped', 'unpaid', 'paid']);
            $table->string('order_number')->unique(); 
            $table->decimal('total_amount', 10, 2); 
            $table->string('currency')->default('NGN'); 
            $table->text('shipping_address')->nullable()->nullable(); 
            $table->text('billing_address')->nullable()->nullable(); 
            $table->string('payment_method')->nullable()->nullable(); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
