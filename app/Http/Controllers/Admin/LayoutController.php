<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LayoutController extends Controller
{
    public function getMenu()
    {
        $menu[] = (object) ['Link' => "/admin/home", 'Title' => "Dashboard", "Icon" => "fa-solid fa-gauge"];
        $menu[] = (object) ["Link" => "/admin/tags", "Title" => "Tags", "Icon" => "fa-solid fa-tags"];
        $menu[] = (object) ["Link" => "/admin/category", "Title" => "Category", "Icon" => "fa-solid fa-code-branch"];
        $menu[] = (object) ["Link" => "/admin/permissions", "Title" => "Permissions", "Icon" => "fa-solid fa-lock"];
        $menu[] = (object) ["Link" => "/admin/roles", "Title" => "Roles", "Icon" => "fa-solid fa-user-group"];
        $menu[] = (object) ["Link" => "/admin/users", "Title" => "Users", "Icon" => "fa-solid fa-users"];

        return $menu;
    }
}
