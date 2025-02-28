<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MechanicSeeder extends Seeder
{
    public $mechanics_source;

    public function run(): void
    {
         $this->mechanics_source = include 'sources/mechanics.php';

        foreach ($this->mechanics_source as $mehanic) {
            DB::table('mechanics')->insert([
                    'name'          => $mehanic['name'],
                    'personal_code' => $mehanic['personal_code'],
                    'company'       => $mehanic['company'],
                    'phone'         => $mehanic['phone'],
                    'email'         => $mehanic['email'],
                    'notes'         => $mehanic['notes'],
                ]
            );
        }
    }
}
