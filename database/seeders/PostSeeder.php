<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds. php artisan migrate:fresh // Or mfs
     */
    public function run(): void
    {
        \App\Models\Post::factory(2)->create();
    }
}
