<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CustomerController;
use GuzzleHttp\Psr7\Request;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



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
    Route::get('/shop', 'shop')->name('shop');


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

// Auth only admin
Route::middleware(['auth', 'verified', 'is_admin'])->group(function () {
    //  Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('dashboard');

    //Posts
    Route::controller(PostController::class)->group(function () {
        Route::get('/admin/posts', 'index')->name('admin.posts');
        Route::get('/admin/posts/{post}', 'show')->name('admin.show');
        Route::get('/admin/create', 'create')->name('admin/create');
        Route::post('/admin/create', 'store')->name('store');
        Route::delete('/admin/delete', 'destroy')->name('post.destroy');
        Route::patch('/admin/update', 'update')->name('post.update');
    });

    // Customers
    Route::controller(CustomerController::class)->group(function () {
        Route::get('/admin/customers', 'index')->name('admin.customers');
        Route::get('/admin/add-user', 'addUser')->name('admin.addUser');
    });


    Route::controller(AdminController::class)->group(function () {
        // MyCalendar
        Route::get('/admin/mycalendar', 'MyCalendar')->name('admin.mycalendar');
        // FAQ
        Route::get('/admin/faqs', 'faqs')->name('admin.faqs');
        // OrdersChart
        Route::get('/admin/OrdersChart', 'OrdersChart')->name('admin.ordersChart');

    });
});

// Auth users and admin
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'dashboard'])->name('dashboard');

    // Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
