<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    public function index()
    {
        $data['permissions'] = Permission::All();
        return Inertia::render('admin/Permissions/Views/Index', $data);
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
