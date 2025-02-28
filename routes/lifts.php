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
    Route::get('/lifts', [LiftController::class, 'index'])->name('lifts.index');

    Route::get('/lifts/create', [LiftController::class, 'create'])
         ->name('lifts.create');

    Route::post('/lifts', [LiftController::class, 'store'])
         ->name('lifts.store');

    Route::get('/lifts/{lift}', [LiftController::class, 'show'])
         ->name('lifts.show');

    Route::get('/lifts/{lift}/edit', [LiftController::class, 'edit'])
         ->name('lifts.edit');

    Route::get('/lifts/{lift}/checklist', [LiftController::class, 'checklist'])
         ->name('lifts.checklist');

    Route::patch('/lifts/{lift}', [LiftController::class, 'update'])
         ->name('lifts.update');

    Route::delete('/lifts/{lift}', [LiftController::class, 'destroy'])
         ->name('lifts.destroy');
});
