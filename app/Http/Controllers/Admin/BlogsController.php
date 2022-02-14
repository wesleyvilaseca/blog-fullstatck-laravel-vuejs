<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogsController extends Controller
{
    public function index()
    {
        $data['blogs'] = Blog::all();
        $data['title'] = "Blogs";
        return Inertia::render('admin/Blogs/Views/Index', $data);
    }

    public function create(Request $request)
    {
        $data['title'] = "New Blog";
        return Inertia::render('admin/Blogs/Views/Create', $data);
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
