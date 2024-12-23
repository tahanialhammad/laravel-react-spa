<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\ProductController;
use GuzzleHttp\Psr7\Request;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//simple test rout
// Route::post('/create', function (Request $request) {
//     dd($request->all());
// });


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

    // Blog
    Route::get('/posts', 'posts')->name('posts');
    Route::get('/posts/{post}', 'showPost')->name('showPost');
    // Route::get('/create', 'createPost')->name('createPost');
    // Route::post('/create', 'savePost')->name('savePost');

    Route::get('/framer-motion', 'FramerMotion')->name('FramerMotion');
    Route::get('/Toggle', 'Toggle')->name('Toggle');
});


    // Route::controller(ProductController::class)->group(function () {
    //     Route::get('/products', 'index')->name('products');
    //     // Route::post('/products/{product}/favorite', 'toggleFavorite')->middleware('auth');
    // });
    //test
  //  Route::post('/products/{product}/favorite', [ProductController::class, 'toggleFavorite'])->name('products.favorite');

   // Products in shop
    Route::resource('products', ProductController::class);

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

    // Products
     Route::resource('products', ProductController::class)->only(['create', 'store', 'edit', 'update', 'destroy']);

    Route::controller(AdminController::class)->group(function () {
        // MyCalendar
        Route::get('/admin/mycalendar', 'MyCalendar')->name('admin.mycalendar');
        // FAQ
        Route::get('/admin/faqs', 'faqs')->name('admin.faqs');
        // OrdersChart
        Route::get('/admin/OrdersChart', 'OrdersChart')->name('admin.ordersChart');

        //Shop
        Route::get('/admin/products', 'AdminProducts')->name('admin.products');
    });
});

// Auth users and admin
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'dashboard'])->name('dashboard');

    // Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Blog
    Route::resource('myposts', PostController::class);
    Route::delete('/myposts', [PostController::class, 'destroy'])->name('myposts.destroy');
    Route::delete('/myposts/{post}', [PostController::class, 'show'])->name('myposts.show');

    // Shop
    Route::get('/wishlist', [FavoriteController::class, 'index'])->name('product.wishlist');
    Route::post('/favorites', [FavoriteController::class, 'toggleFavorite'])->name('product.toggleFavorite');
});

require __DIR__ . '/auth.php';
