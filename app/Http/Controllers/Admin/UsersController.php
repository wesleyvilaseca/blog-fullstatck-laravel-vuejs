<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function __construct()
    {
    }

    public function index(Request $request)
    {
        $data['tags'] = Tag::all();
        return Inertia::render('admin/Users/Views/Index', $data);
    }
}
