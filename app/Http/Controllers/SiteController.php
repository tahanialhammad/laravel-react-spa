<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use \App\Models\Post;

class SiteController extends Controller
{
    public function welcome()
    {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'foo' => 'baar'
        ]);
    }

    public function about()
    {
        return Inertia::render('About', [
            'name' => 'Tahani Alhammad'
        ]);
    }

    public function contact()
    {
        return Inertia::render('Contact', [
            'name' => 'Tahani Alhammad'
        ]);
    }

    public function posts()
    {
        return Inertia::render('Posts', [
            'posts' => Post::all(),
        ]);
    }
}
