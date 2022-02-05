<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\TagController;
use App\Http\Controllers\Admin\CategoryController;
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

Route::get('admin/home', function () {
    return Inertia::render('admin/Home/Home', []);
});

Route::prefix('admin/tags')->group(function () {
    Route::get('/',         [TagController::class, 'index'])->name('admin.tags');
    Route::get('/all',      [TagController::class, 'all']);
    Route::post('/create',  [TagController::class, 'create']);
    Route::post('/edit',    [TagController::class, 'update']);
    Route::post('/delete',  [TagController::class, 'delete']);
});


Route::prefix('admin/category')->group(function () {
    Route::get("/all", [CategoryController::class, 'all']);
    Route::post("/create", [CategoryController::class, 'create']);
    Route::post("/edit", [CategoryController::class, 'update']);
    Route::post("/delete", [CategoryController::class, 'delete']);
    Route::post('/photo-upload', [CategoryController::class, 'upload']);
    Route::post('/photo-delete', [CategoryController::class, 'upload_delete']);
});

Route::get('/login', function () {
    return Inertia::render('admin/Login/Login', []);
});


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