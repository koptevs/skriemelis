<?php

use App\Http\Controllers\Settings\PasswordController;
use App\Http\Controllers\Settings\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\WorkOS\Http\Middleware\ValidateSessionWithWorkOS;
use App\Http\Controllers\MechanicController;

Route::middleware([
    'auth',
    ValidateSessionWithWorkOS::class,
])->group(function () {
    Route::get('/mechanics', [MechanicController::class, 'index'])
         ->name('mechanics.index');

    Route::get('/mechanics/create', [MechanicController::class, 'create'])
         ->name('mechanics.create');

    Route::post('/mechanics', [MechanicController::class, 'store'])
         ->name('mechanics.store');

    Route::get('/mechanics/{mechanic}', [MechanicController::class, 'show'])
         ->name('mechanics.show');

    Route::get('/mechanics/{mechanic}/edit',
        [MechanicController::class, 'edit'])
         ->name('mechanics.edit');

    Route::patch('/mechanics/{mechanic}', [MechanicController::class, 'update'])
         ->name('mechanics.update');

    Route::delete('/mechanics/{mechanic}',
        [MechanicController::class, 'destroy'])
         ->name('mechanics.destroy');
});
