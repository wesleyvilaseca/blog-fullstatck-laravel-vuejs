<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class LoginController extends Controller
{

    public function index()
    {
        return Inertia::render('admin/Login/Views/Index', []);
    }

    public function login(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'email'         => ['required'],
            'password'      => ['required']
        ]);

        if ($validate->fails()) {
            return Redirect::route('admin.home')->with('error', $validate->errors());
        }

        if (!Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return Redirect::back()->with('warning', 'User not found');
        };

        return Redirect::route('admin.home');
    }

    public function logout()
    {
        Auth::logout();
        return Redirect::route('login');
    }
}
