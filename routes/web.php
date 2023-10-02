<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\LiftController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
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

Route::get(
    '/', function () {
        return Inertia::render(
            'Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            ]
        );
    }
);

Route::get(
    '/dashboard', function () {
        return Inertia::render('Dashboard');
    }
)->middleware(['auth', 'verified'])->name('dashboard');

Route::get(
    '/adminpanel', function () {
        return Inertia::render('AdminPanel/Main');
    }
)->middleware(['auth', 'verified'])->name('adminpanel');

Route::get(
    '/second', function () {
        return Inertia::render('AdminPanel/Second');
    }
)->middleware(['auth', 'verified'])->name('second');


Route::middleware('auth')->group(
    function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');

        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');

        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    }
);

Route::get('/lifts', [LiftController::class, 'index'])->name('lift.index');

Route::get('/lifts/create', [LiftController::class, 'create'])->name('lift.create');

Route::get('/lifts/update', [LiftController::class, 'update'])->name('lift.update');

Route::get('/lifts/destroy', [LiftController::class, 'destroy'])->name('lift.destroy');

Route::get('/lifts/{lift}', [LiftController::class, 'show'])->name('lift.show');
// Route::get('/lifts/show', [LiftController@show]);



require __DIR__.'/auth.php';
