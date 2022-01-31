<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tag;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class TagController extends Controller
{
    public function all(Request $request)
    {
        $tags = Tag::orderBy('id', 'desc')->get();
        return response()->json(['message' => '', 'tags' => $tags], 200);
    }

    public function create(Request $request)
    {

        $validate = Validator::make($request->all(), [
            'tagName' => ['required']
        ]);

        if ($validate->fails()) {
            return response()->json($validate->errors(), 203);
        }

        $exist = Tag::where('tagName', 'like', '%' . $request->tagName . '%')->first();
        if ($exist) {
            return response()->json(['message' => 'The is already a tag with that name!'], 203);
        }

        $response = Tag::create(['tagName' => $request->tagName]);
        if (!$response) {
            return response()->json(['message' => 'Error on operation, please try again!'], 203);
        }

        return response()->json(['message' => 'Success on operation'], 200);
    }

    public function update(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'tagName' => ['required'],
            'id' => ['required']
        ]);

        if ($validate->fails()) {
            return response()->json($validate->errors(), 203);
        }

        $tag = Tag::find($request->id);
        if(!$tag) {
            return response()->json(['message' => 'operation not authorized!'], 203); 
        }

        $exist = Tag::where('tagName', 'like', '%' . $request->tagName . '%')->first();
        if ($exist and ($exist->id !== $request->id)) {
            return response()->json(['message' => 'The is already a tag with that name!'], 203);
        }

        $tag->tagName = $request->tagName;
        $response = $tag->update();
        if (!$response) {
            return response()->json(['message' => 'Error on operation, please try again!'], 203);
        }

        return response()->json(['message' => 'Success on operation'], 200);
    }

    public function delete(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'id' => ['required']
        ]);

        if ($validate->fails()) {
            return response()->json($validate->errors(), 203);
        }

        $tag = Tag::find($request->id);
        if(!$tag) {
            return response()->json(['message' => 'operation not authorized!'], 203); 
        }

        $response = $tag->delete();
        if (!$response) {
            return response()->json(['message' => 'Error on operation, please try again!'], 203);
        }

        return response()->json(['message' => 'Success on operation'], 200);
    }
}
