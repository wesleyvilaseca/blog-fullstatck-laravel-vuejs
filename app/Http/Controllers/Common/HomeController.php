<?php

namespace App\Http\Controllers\Common;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $data['title'] =  'inertia teste';
        $data['categories'] = Category::limit(6)->get();
        $data['latest_blogs'] = Blog::orderBy('id', 'desc')->with(['blogcategories', 'user'])->limit(6)->get();

        return Inertia::render('blog/Home/Views/Index', $data);
    }

    public function about()
    {
        $data['title'] =  'inertia teste';
        return Inertia::render('blog/About/Views/Index', $data);
    }

    public function contact()
    {
        $data['title'] =  'inertia teste';
        return Inertia::render('blog/Contact/Views/Index', $data);
    }

    public function author()
    {
        $data['title'] =  'inertia teste';
        return Inertia::render('blog/Author/Views/Index', $data);
    }
}
