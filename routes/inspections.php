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
    Route::get('/inspections', [InspectionController::class, 'index'])
         ->name('inspections.index');

    Route::get('/inspections/create', [InspectionController::class, 'create'])
         ->name('inspections.create');

    Route::post('/inspections', [InspectionController::class, 'store'])
         ->name('inspections.store');

    Route::get('/inspections/{inspection}',
        [InspectionController::class, 'show'])
         ->name('inspections.show');

    Route::get('/inspections/{inspection}/edit',
        [InspectionController::class, 'edit'])
         ->name('inspections.edit');

    Route::get('/inspections/{inspection}/protocol',
        [InspectionController::class, 'protocol'])
         ->name('inspections.protocol');

    Route::patch('/inspections/{inspection}',
        [InspectionController::class, 'update'])
         ->name('inspections.update');

    Route::delete('/inspections/{inspection}',
        [InspectionController::class, 'destroy'])
         ->name('inspections.destroy');
});
