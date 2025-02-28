<?php

namespace App\Models;

//use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lift extends Model
{
//    use HasFactory;

    protected $table = 'lifts';

    protected $guarded = false;

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
