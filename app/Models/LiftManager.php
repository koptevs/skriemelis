<?php

namespace App\Models;

//use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LiftManager extends Model
{
//    use HasFactory;

    protected $table = 'lift_managers';

    protected $guarded = false;

    public function lifts()
    {
        return $this->hasMany(Lift::class);
    }
}
