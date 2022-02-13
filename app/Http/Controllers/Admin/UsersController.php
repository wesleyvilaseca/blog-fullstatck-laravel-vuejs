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
        $data['users'] = User::all();
        return Inertia::render('admin/Users/Views/Index', $data);
    }

    public function create(Request $request)
    {
        $data['title'] = 'New User';
        return Inertia::render('admin/Users/Views/Create', $data);
    }

    public function store(Request $request)
    {
    }

    public function edit(int $id, Request $request)
    {
    }

    public function update(int $id, Request $request)
    {
    }

    public function delete(int $id, Request $request)
    {
    }
}
