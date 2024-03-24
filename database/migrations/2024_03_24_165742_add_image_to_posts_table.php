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
        if (!Schema::hasColumn('excerpt', 'image')) {
            Schema::table('posts', function (Blueprint $table) {
                $table->text('excerpt')->after('title')->nullable();
                $table->string('image')->after('body')->nullable();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('posts', function (Blueprint $table) {
            // Drop the columns if they exist
            $table->dropColumn(['excerpt', 'image']);
        });
    }
};
