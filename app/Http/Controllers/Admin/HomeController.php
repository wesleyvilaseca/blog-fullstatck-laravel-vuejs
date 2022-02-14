<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class HomeController extends Controller
{
    public function index()
    {
        // $role = Role::where('name', 'admin')->first();
        // $category = Permission::where('name', 'posts_edit')->get();
        // $set = Auth::user()->givePermissionTo('category_edit');

        // $set = Auth::user()->givePermissionTo('tags_access');
        // $set = Auth::user()->givePermissionTo('tags_create');
        // $set = Auth::user()->givePermissionTo('tags_edit');
        // $set = Auth::user()->givePermissionTo('tags_delete');

        // $set = Auth::user()->givePermissionTo('posts_access');
        // $set = Auth::user()->givePermissionTo('posts_create');
        // $set = Auth::user()->givePermissionTo($category);
        // $set = Auth::user()->givePermissionTo('posts_delete');

        // $set = Auth::user()->givePermissionTo('users_access');
        // $set = Auth::user()->givePermissionTo('users_create');
        // $set = Auth::user()->givePermissionTo('users_edit');
        // $set = Auth::user()->givePermissionTo('users_delete');

        // $data = Auth::user()->getPermissionNames();
        // dd($data);
        
        // $role->givePermissionTo($category);
        // $role = Role::create(['name' => 'writer']);
        
        // $permission = Permission::create(['name' => 'category_access']);
        // $permission = Permission::create(['name' => 'category_edit']);
        // $permission = Permission::create(['name' => 'category_crete']);
        // $permission = Permission::create(['name' => 'category_delete']);

        // $permission = Permission::create(['name' => 'tags_access']);
        // $permission = Permission::create(['name' => 'tags_create']);
        // $permission = Permission::create(['name' => 'tags_edit']);
        // $permission = Permission::create(['name' => 'tags_delete']);

        // $permission = Permission::create(['name' => 'posts_access']);
        // $permission = Permission::create(['name' => 'posts_create']);
        // $permission = Permission::create(['name' => 'posts_edit']);
        // $permission = Permission::create(['name' => 'posts_delete']);

        // $permission = Permission::create(['name' => 'users_access']);
        // $permission = Permission::create(['name' => 'users_create']);
        // $permission = Permission::create(['name' => 'users_update']);
        // $permission = Permission::create(['name' => 'users_delete']);

        return Inertia::render('admin/Home/Views/Index');
    }
}
