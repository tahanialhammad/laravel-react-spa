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

class DashboardController extends Controller
{
    public function dashboard()
    {
        if (Auth()->user()->is_admin) {
            return $this->showAdminDashboard();
        }
        return $this->showUserDashboard();
    }

     public function showAdminDashboard()
    {
        return Inertia::render('Admin/Dashboard/Dashboard');
    }

    public function showUserDashboard()
    {
        return Inertia::render('User/Dashboard/Dashboard');
    }
}
