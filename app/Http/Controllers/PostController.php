<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //$posts = Post::with('user')->get();

        $posts = Post::with('user')->get()->map(function ($post) {
            $post->formatted_created_at = $post->created_at->format('D d M Y');
            return $post;
        });

        return Inertia::render('Admin/Posts/Posts', [
        //    'posts' => Post::all(),
            'posts' => $posts,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */

    public function create()
    {
        return Inertia::render('Admin/Posts/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    // public function store(StorePostRequest $request)
    public function store(Request $request)
    {
        // dd($request->all());
        //  dd(auth()->id()); 

        $request->validate([
            'title' => 'required|min:3',
            'excerpt' => 'required|min:3',
            'body' => 'required|min:3',
            'image' => 'required',
        ]);

        Post::create([
            'user_id' => auth()->id(),
            'title' => $request->title,
            'excerpt' => $request->excerpt,
            'body' => $request->body,
            'image' => $request->image,
        ]);
        // flash message https://inertiajs.com/shared-data#flash-messages
        return redirect('admin/posts')->with('message', 'Post was created!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return Inertia::render('Admin/Posts/Post', [
            'post' => $post,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    // public function update(UpdatePostRequest $request, Post $post) 
    // ???? UpdatePostRequest
    public function update(Request $request, Post $post)
    {
        //  dd($request->all());
        $request->validate([
            'title' => 'required|min:3',
            'body' => 'required|min:3',
        ]);

        $id = $request->id;
        Post::find($id)->update([
            'title' => $request->title,
            'excerpt' => $request->excerpt,
            'body' => $request->body,
            'image' => $request->image,
        ]);

        return redirect('admin/posts')->with('message', 'Post was updated!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post, Request $request)
    {
        //   dd($request->all());
        $id = $request->id;
        Post::find($id)->delete();

        return redirect('admin/posts')->with('message', 'Post was deleted!');
    }
}
