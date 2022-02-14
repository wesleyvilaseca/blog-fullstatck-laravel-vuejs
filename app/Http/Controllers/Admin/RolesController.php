<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class RolesController extends Controller
{
    public function index()
    {
        // $role = Role::where('name', 'admin')->first();
        // dd($role->permissions);
        $data['roles'] = Role::all();
        return Inertia::render('admin/Roles/Views/Index', $data);
    }

    public function create()
    {
    }

    public function store()
    {
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
}
