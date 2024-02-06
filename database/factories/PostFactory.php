<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    //  run faker in seeder
    public function definition(): array
    {
        return [
            'title' => $this->faker->words(4, true),
            'body' => $this->faker->sentences(4, true),
        ];
    }
}
