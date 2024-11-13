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
use App\Models\Product;

class SiteController extends Controller
{
    public function welcome()
    {
        return Inertia::render('Home/Welcome', [
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
        $posts = Post::with('user')->get();

        return Inertia::render('Posts/Posts', [
           // 'posts' => Post::all(),
            'posts' =>  $posts,

        ]);
    }

    public function showPost(Post $post)
    {
        $post->load('user');
        return Inertia::render('Posts/Post', [
            'post' => $post,
        ]);
    }

    public function FramerMotion()
    {
        return Inertia::render('FramerMotion/FramerMotion');
    }

    public function Toggle()
    {
        return Inertia::render('Toggle/Toggle');
    }
    public function LandingPage()
    {
        return Inertia::render('Landing/LandingPage'); 
    }
    
    public function LayoutsExample()
    {
        return Inertia::render('LayoutsExample/LayoutsExample'); 
    }

    public function services()
    {
        return Inertia::render('Services/Services'); 
    }

    public function TestCode()
    {
        return Inertia::render('TestCode/TestCode'); 
    }
    
}
