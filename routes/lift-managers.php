<?php

use App\Http\Controllers\Settings\PasswordController;
use App\Http\Controllers\Settings\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\WorkOS\Http\Middleware\ValidateSessionWithWorkOS;

Route::middleware([
    'auth',
    ValidateSessionWithWorkOS::class,
])->group(function () {
    Route::get('/lift-managers', [LiftManagerController::class, 'index'])
         ->name('lift-managers.index');

    Route::get('/lift-managers/create',
        [LiftManagerController::class, 'create'])
         ->name('lift-managers.create');

    Route::post('/lift-managers', [LiftManagerController::class, 'store'])
         ->name('lift-managers.store');

    Route::get('/lift-managers/{liftManager}',
        [LiftManagerController::class, 'show'])
         ->name('lift-managers.show');

    Route::get('/lift-managers/{liftManager}/edit',
        [LiftManagerController::class, 'edit'])
         ->name('lift-managers.edit');

    Route::patch('/lift-managers/{liftManager}',
        [LiftManagerController::class, 'update'])
         ->name('lift-managers.update');

    Route::delete('/lift-managers/{liftManager}',
        [LiftManagerController::class, 'destroy'])
         ->name('lift-managers.destroy');
});
