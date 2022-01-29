<?php

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

Route::post('tags/all', [TagController::class, 'all']);
Route::post('tags/create', [TagController::class, 'create']);

Route::get('/', function () {
    return view('welcome');
});

Route::any('{slug}', function () {
    return view('welcome');
});