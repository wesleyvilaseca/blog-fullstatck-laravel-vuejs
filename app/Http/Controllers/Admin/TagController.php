<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tag;
use Gate;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Symfony\Component\HttpFoundation\Response;

class TagController extends Controller
{
    private $tag;
    protected static $acl = 'tags_';

    public function __construct(
        Tag $tag
    ) {
        $this->tag = $tag;
    }

    public function index(Request $request)
    {
        abort_if(Gate::denies(self::$acl . 'access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $data['tags'] = $this->tag->all();

        return Inertia::render('admin/Tags/Views/Index', $data);
    }

    public function all(Request $request)
    {
        $tags = Tag::orderBy('id', 'desc')->get();
        return response()->json(['message' => '', 'tags' => $tags], 200);
    }

    public function create(Request $request)
    {
        abort_if(Gate::denies(self::$acl . 'create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $validate = Validator::make($request->all(), [
            'tagName' => ['required']
        ]);

        if ($validate->fails()) {
            return Redirect::route('admin.tags')->with('error', $validate->errors());
        }

        $exist = Tag::where('tagName', 'like', '%' . $request->tagName . '%')->first();
        if ($exist) {
            return Redirect::route('admin.tags')->with('warning', 'The is already a tag with that name!');
        }

        $response = Tag::create(['tagName' => $request->tagName]);
        if (!$response) {
            return Redirect::route('admin.tags')->with('warning', 'Error on operation, please try again!');
        }

        return Redirect::route('admin.tags')->with('success', 'Success on operation');
    }

    public function update(Request $request)
    {
        abort_if(Gate::denies('tags_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $validate = Validator::make($request->all(), [
            'tagName'   => ['required'],
            'id'        => ['required']
        ]);

        if ($validate->fails()) {
            return Redirect::route('admin.tags')->with('error', $validate->errors());
        }

        $tag = Tag::find($request->id);
        if (!$tag) {
            return  Redirect::route('admin.tags')->with('warning', 'operation not authorized!');
        }

        $exist = Tag::where('tagName', 'like', '%' . $request->tagName . '%')->first();
        if ($exist and ($exist->id !== $request->id)) {
            return Redirect::route('admin.tags')->with('warning', 'The is already a tag with that name!');
        }

        $tag->tagName = $request->tagName;
        $response = $tag->update();
        if (!$response) {
            return Redirect::route('admin.tags')->with('error', 'Error on operation, please try again!');
        }

        return Redirect::route('admin.tags')->with('success', 'Success on operation');
    }

    public function delete(Request $request)
    {
        abort_if(Gate::denies(self::$acl . 'delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $validate = Validator::make($request->all(), [
            'id' => ['required']
        ]);

        if ($validate->fails()) {
            return Redirect::route('admin.tags')->with('error', $validate->errors());
        }

        $tag = Tag::find($request->id);
        if (!$tag) {
            return  Redirect::route('admin.tags')->with('warning', 'operation not authorized!');
        }

        $response = $tag->delete();
        if (!$response) {
            return Redirect::route('admin.tags')->with('error', 'Error on operation, please try again!');
        }

        return Redirect::route('admin.tags')->with('success', 'Success on operation');
    }
}
