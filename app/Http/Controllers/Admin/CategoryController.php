<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    //

    public function all() {
        $tags = Category::orderBy('id', 'desc')->get();
        return response()->json(['message' => '', 'categories' => $tags], 200);
    }

    public function create(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'name'      => ['required'],
            'iconImage' => ['required'],
        ]);

        if ($validate->fails()) {
            return response()->json($validate->errors(), 203);
        }

        $result = Category::create([
            'categoryName'      => $request->name,
            'iconImage'         => $request->iconImage,
        ]);

        if (!$result) {
            return response()->json(['message' => 'Error on operation, please try again!'], 203);
        }

        return response()->json(['message' => 'Success on operation'], 200);

    }

    public function upload(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'photos' => ['required|image|mimes:jpeg,jpg,png'],
        ]);

        if ($validate->fails()) {
            return response()->json($validate->errors(), 203);
        }

        $picName = time() . '.' . $request->file->extension();
        $request->file->move(public_path('uploads'), $picName);
        return $picName;
    }

    public function upload_delete(Request $request)
    {
        $filename = $request->imagename;
        $file_patch = public_path() . '/uploads/' . $filename;
        if (file_exists($file_patch)) {
            @unlink($file_patch);
            return 'done';
        }
    }
}
