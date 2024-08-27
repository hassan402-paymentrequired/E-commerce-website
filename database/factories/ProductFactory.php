<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'vendor_id' => 1,
            'category_id' => 1,
            'brand_id' => 1,
            'name' => 'laptop',
            'description' => 'i want to text this sheet',
            'price' => 13.00,
            'image_uril' => 'i want to text this sheet',
        
        ];
    }
}
