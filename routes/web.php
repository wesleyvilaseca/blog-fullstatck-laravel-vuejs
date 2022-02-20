<?php

use App\Http\Controllers\Admin\BlogsController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\TagController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\Admin\LayoutController;
use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\Admin\PermissionController;
use App\Http\Controllers\Admin\RolesController;
use App\Http\Controllers\Admin\UsersController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::middleware(['auth'])->group(function () {
    Route::get('admin/home', [HomeController::class, 'index'])->name('admin.home');
    Route::get('admin/menu', [LayoutController::class, 'getMenu'])->name('amdin.menu');

    Route::prefix('admin/tags')->group(function () {
        Route::get('/',         [TagController::class, 'index'])->name('admin.tags');
        Route::get('/all',      [TagController::class, 'all']);
        Route::post('/create',  [TagController::class, 'create']);
        Route::post('/edit',    [TagController::class, 'update']);
        Route::post('/delete',  [TagController::class, 'delete']);
    });

    Route::prefix('admin/category')->group(function () {
        Route::get("/",                 [CategoryController::class, 'index'])->name('admin.categoryes');
        Route::get("/all",              [CategoryController::class, 'all']);
        Route::post("/create",          [CategoryController::class, 'create']);
        Route::post("/edit",            [CategoryController::class, 'update']);
        Route::post("/delete",          [CategoryController::class, 'delete']);
        Route::post('/photo-upload',    [CategoryController::class, 'upload']);
        Route::post('/photo-delete',    [CategoryController::class, 'upload_delete']);
    });

    Route::prefix('admin/blogs')->group(function () {
        Route::get("/",                     [BlogsController::class, 'index'])->name('admin.blogs');
        Route::get("/create",               [BlogsController::class, 'create'])->name('blog.create');
        Route::post('/create',              [BlogsController::class, 'imageUpload']);
        Route::post("/store-blogpost",      [BlogsController::class, 'store'])->name('blog.store');
        
        Route::get("/edit/{id}",            [BlogsController::class, 'edit'])->name('blog.edit');
        Route::post("/update/{id}",         [BlogsController::class, 'update'])->name('blog.update');
        Route::post("/delete/{id}",         [BlogsController::class, 'delete'])->name('blog.delete');
    });

    Route::prefix('admin/users')->group(function () {
        Route::get('/',                 [UsersController::class, 'index'])->name('users');
        Route::get('/create',           [UsersController::class, 'create'])->name('user.create');
        Route::post('/store',           [UsersController::class, 'store'])->name('user.store');
        Route::get('/edit/{id}',        [UsersController::class, 'edit'])->name('user.edit');
        Route::post('/update/{id}',     [UsersController::class, 'update'])->name('user.update');
        Route::post('/delete/{id}',     [UsersController::class, 'delete'])->name('user.delete');
    });

    Route::prefix('admin/permissions')->group(function () {
        Route::get('/',                 [PermissionController::class, 'index'])->name('permissions');
        Route::get('/create',           [PermissionController::class, 'create'])->name('permission.create');
        Route::post('/store',           [PermissionController::class, 'store'])->name('permission.store');
        Route::get('/edit/{id}',        [PermissionController::class, 'edit'])->name('permission.edit');
        Route::post('/update/{id}',     [PermissionController::class, 'update'])->name('permission.update');
        Route::post('/delete/{id}',     [PermissionController::class, 'delete'])->name('permission.delete');
    });

    Route::prefix('admin/roles')->group(function () {
        Route::get('/',                 [RolesController::class, 'index'])->name('roles');
        Route::get('/create',           [RolesController::class, 'create'])->name('role.create');
        Route::post('/store',           [RolesController::class, 'store'])->name('role.store');
        Route::get('/edit/{id}',        [RolesController::class, 'edit'])->name('role.edit');
        Route::post('/update/{id}',     [RolesController::class, 'update'])->name('role.update');
        Route::post('/delete/{id}',     [RolesController::class, 'delete'])->name('role.delete');
    });
});

Route::get('/login',    [LoginController::class, 'index'])->name("login");
Route::post('/login',   [LoginController::class, 'login'])->name("admin.login");
Route::get('/logout',   [LoginController::class, 'logout'])->name("admin.logout");

Route::get('/', function () {
    return Inertia::render('blog/Home', ['title' => 'inertia teste']);
});

// Route::get('/{any}', function () {
//     return view('welcome');
// })->where('any', '.*');

// Route::get('/{vue_capture?}', function () {
//     return view('welcome');
// })->where('vue_capture', '[\/\w\.-]*');

// Route::any('/{slug}', function () {
//     return view('welcome');
// });