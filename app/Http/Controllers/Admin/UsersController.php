<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

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
        $validate = Validator::make($request->all(), [
            'name'      => ['required'],
            'email'     => ['required'],
            'userType'  => ['required'],
            'password'  => ['required']
        ]);

        if ($validate->fails()) {
            return Redirect::route('user.create')->with('error', $validate->errors());
        }

        $exist = User::where(['email' => $request->email])->first();
        if ($exist) {
            return Redirect::route('user.create')->with('warning', 'There is already a user with this email');
        }

        $result = User::create([
            'name'      => $request->name,
            'email'     => $request->email,
            'userType'  => $request->userType,
            'password'  => Hash::make($request->password)
        ]);

        if (!$result) {
            return Redirect::route('user.create')->with('warning', 'Error on operation, please try again!');
        }

        return Redirect::route('users')->with('success', 'User created successfully');
    }

    public function edit(int $id, Request $request)
    {
        $user = User::find($id);
        if (!$user) {
            return Redirect::route('users')->with('warning', 'Not authorized operation!');
        }

        $data['user']   = $user;
        $data['title']  = 'Edit User';
        return Inertia::render('admin/Users/Views/Create', $data);
    }

    public function update(int $id, Request $request)
    {
        $user = User::find($id);
        if (!$user) {
            return Redirect::route('users')->with('warning', 'Not authorized operation!');
        }

        $validate = Validator::make($request->all(), [
            'name'      => ['required'],
            'email'     => ['required'],
            'userType'  => ['required'],
        ]);

        if ($validate->fails()) {
            return Redirect::route('user.edit')->with('error', $validate->errors());
        }

        $data = [
            'name'      => $request->name,
            'email'     => $request->email,
            'userType'  => $request->userType,
        ];

        if (@isset($request->password)) {
            $data['password'] = Hash::make($request->password);
        }

        $result = User::where('id', $user->id)->update($data);

        if (!$result) {
            return Redirect::route('user.create')->with('warning', 'Error on operation, please try again!');
        }

        return Redirect::route('users')->with('success', 'Edit user successfully');
    }

    public function delete(int $id, Request $request)
    {
        $user = User::find($id);
        if (!$user) {
            return Redirect::route('users')->with('warning', 'Not authorized operation!');
        }

        $result = User::where('id', $user->id)->delete();

        if (!$result) {
            return Redirect::route('user.create')->with('warning', 'Error on operation, please try again!');
        }

        return Redirect::route('users')->with('success', 'Edit user successfully');
    }
}
