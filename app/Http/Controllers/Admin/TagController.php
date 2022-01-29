<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{
    public function all(Request $request)
    {
        $tags = Tag::all();
        return response()->json(['message' => '', 'tags' => $tags], 200);
    }

    public function create(Request $request)
    {
    }

    public function update(Request $request)
    {
    }

    public function delete(Request $request)
    {
    }
}
