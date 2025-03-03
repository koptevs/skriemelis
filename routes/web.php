<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\WorkOS\Http\Middleware\ValidateSessionWithWorkOS;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/portfolio/landing', function () {
    return Inertia::render('portfolio/landing', [
        'canLogin'       => Route::has('login'),
        'canRegister'    => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion'     => PHP_VERSION,
    ]);
 });

Route::middleware([
    'auth',
    ValidateSessionWithWorkOS::class,
])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/lifts.php';
require __DIR__.'/lift-managers.php';
require __DIR__.'/inspections.php';
require __DIR__.'/mechanics.php';
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
