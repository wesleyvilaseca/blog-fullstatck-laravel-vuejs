<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\TagController;
use Illuminate\Support\Facades\Route;

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

Route::get('tags/all', [TagController::class, 'all']);
Route::post('tags/create', [TagController::class, 'create']);
Route::post('tags/edit', [TagController::class, 'update']);
Route::post('tags/delete', [TagController::class, 'delete']);

Route::post('app/upload', [CategoryController::class, 'upload']);

Route::get('/', function () {
    return view('welcome');
});

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');

// Route::get('/{vue_capture?}', function () {
//     return view('welcome');
// })->where('vue_capture', '[\/\w\.-]*');

// Route::any('/{slug}', function () {
//     return view('welcome');
// });