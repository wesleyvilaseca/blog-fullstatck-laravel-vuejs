<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Blogcategory;
use App\Models\Blogtag;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\ModelNotFoundException;

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
        $data['title']      = "New Blog";
        $data['categories'] = Category::all();
        $data['tags']       = Tag::all();
        return Inertia::render('admin/Blogs/Views/Create', $data);
    }

    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'title'             => ['required'],
            'post'              => ['required'],
            'post_excerpt'      => ['required'],
            'metaDescription'   => ['required'],
            'jsonData'          => ['required'],
            'category_id'       => ['required'],
            'tag_id'            => ['required'],
        ]);

        if ($validate->fails()) {
            return response()->json($validate->errors(), 203);
        }

        $blogTags       = [];
        $blogCategories = [];

        try {
            $blog = Blog::create([
                'title'             => $request->title,
                'slug'              => Blog::uniqueSlug($request->title, '-'),
                'post'              => $request->post,
                'post_excerpt'      => $request->post_excerpt,
                'user_id'           => Auth::user()->id,
                'metaDescription'   => $request->metaDescription,
                'jsonData'          => $request->jsonData,
            ]);

            // insert blog categories
            foreach ($request->category_id as $category) {
                $blogCategories[] = ['category_id' => $category, 'blog_id' => $blog->id];
            }

            Blogcategory::insert($blogCategories);

            // insert blog tags
            foreach ($request->tag_id as $tag) {
                $blogTags[] = ['tag_id' => $tag, 'blog_id' => $blog->id];
            }

            Blogtag::insert($blogTags);
            DB::commit();
            return Redirect::route('admin.blogs')->with('success', 'Blog post created successfuly');
            // return response()->json(['msg' => 'Blog post create successfuly'], 200);
        } catch (ModelNotFoundException $exception) {
            DB::rollback();
            return Redirect::route('admin.blogs')->with('warning',  $exception->getMessage());
            // return response()->json(['msg' => 'Error on operation'], 203);
        }
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

    public function imageUpload(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'photos' => ['required|image|mimes:jpeg,jpg,png'],
        ]);

        if ($validate->fails()) {
            return response()->json($validate->errors(), 203);
        }

        $picName = time() . '.' . $request->image->extension();
        $request->image->move(public_path('uploads/blogs'), $picName);
        return response()->json([
            'success'   => true,
            'file'      => [
                'url' => asset('uploads/blogs/' . $picName)
            ]
        ]);
    }
}
