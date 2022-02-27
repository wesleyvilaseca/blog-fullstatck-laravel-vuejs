<?php

namespace App\Http\Controllers\Common;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $limit = 3;
        $data['blogs']      = Blog::orderBy('id', 'desc')->with(['blogcategories', 'user'])->paginate(3);
        $data['limit']      = $limit;
        $data['categories'] = Category::all();

        return Inertia::render('blog/Blog/Views/Index', $data);
    }

    public function moreposts()
    {
        $result = Blog::orderBy('id', 'desc')->with(['blogcategories', 'user'])->paginate(3);
        
        return response()->json(['data' => $result], 200);
    }

    public function post(string $slug, Request $request) {
        $exist = Blog::where('slug', $slug)->first();
        if(!$exist) {
            return Redirect::route('home');
        }

        $views = $exist->views;

        Blog::where('id', $exist->id)->update(['views' => $views + 1]);

        $data['post'] = Blog::where('id', $exist->id)->with(['blogcategories', 'user'])->first();
        return Inertia::render('blog/Blog/Views/Post', $data);
    }
}
