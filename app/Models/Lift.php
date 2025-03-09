<?php

namespace App\Models;

//use Illuminate\Database\Eloquent\Factories\HasFactory;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Lift extends Model
{
//    use HasFactory;

    protected $table = 'lifts';

    protected $guarded = false;

    protected function nextInspectionDate(): Attribute
    {
        return Attribute::make(
//            get: fn (string $value) => ucfirst($value),
            set: fn (string $value) => Carbon::parse($value),
        );
    }

    public function lift_manager(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(LiftManager::class);
    }

    public function inspections()
    {
        return $this->hasMany(Inspection::class, 'lift_id', 'id');
    }

    //    protected $fillable = [
//        'reg_number',
//        'lift_type',
//        'lift_category',
//        'factory_number',
//        'model',
//        'speed',
//        'load',
//        'manufacturer',
//        'installer',
//        'installation_year',
//        'floors_total',
//        'floors_serviced',
//        'address_country',
//        'address_novads',
//        'address_pagasts',
//        'address_city',
//        'address_street',
//        'address_building',
//        'address_entrance',
//        'address_postal_code',
//        'notes',
//        'lift_manager_id',
//    ];
}
