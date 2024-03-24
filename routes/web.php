<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\PostController;
use GuzzleHttp\Psr7\Request;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// Guset Site pages
// was
// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//         'foo' => 'baar'
//     ]);
// });

Route::controller(SiteController::class)->group(function () {
    Route::get('/', 'welcome')->name('welcome');
    Route::get('/services', 'services')->name('services'); 
    Route::get('/about', 'about')->name('about');
    Route::get('/contact', 'contact')->name('contact');
    Route::get('/LandingPage', 'LandingPage')->name('LandingPage');
    Route::get('/LayoutsExample', 'LayoutsExample')->name('LayoutsExample');
    Route::get('/TestCode', 'TestCode')->name('TestCode');

    Route::get('/posts', 'posts')->name('posts');
    Route::get('/posts/{post}', 'showPost')->name('showPost');
    // Route::get('/create', 'createPost')->name('createPost');
    // Route::post('/create', 'savePost')->name('savePost');
    Route::get('/framer-motion', 'FramerMotion')->name('FramerMotion');
    Route::get('/Toggle', 'Toggle')->name('Toggle');
});

//simple test rout
// Route::post('/create', function (Request $request) {
//     dd($request->all());
// });


// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('dashboard');
// });

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('dashboard');
    
    //Posts
    Route::controller(PostController::class)->group(function () {
        Route::get('/admin/posts', 'index')->name('admin.posts');
        Route::get('/admin/posts/{post}', 'show')->name('admin.show');
        Route::get('/admin/create', 'create')->name('admin/create');
        Route::post('/admin/create', 'store')->name('store');
        Route::delete('/admin/delete', 'destroy')->name('post.destroy');
        Route::patch('/admin/update', 'update')->name('post.update');
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
