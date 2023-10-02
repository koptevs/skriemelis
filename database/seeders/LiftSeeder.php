<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LiftSeeder extends Seeder
{
    public $lifti_source;

    public function run(): void
    {
        $this ->lifti_source = include 'sources/lifti.php';
        
        foreach ($this->lifti_source as $lifts) {
            // code...
            DB::table('lifts')->insert(
                [
                    'reg_number' => $lifts['lifts_reg_nr'],
                    'lift_type' => $lifts['lifts_tips'],
                    'lift_category' => $lifts['lifts_kategorija'],
                    'factory_number' => $lifts['lifts_rupn_nr'],
                    'model' => $lifts['lifts_modelis'] ?? null,
                    'speed' => $lifts['lifts_atrums'] ?? null,
                    'load' => $lifts['lifts_celtspeja'],
                    'manufacturer' => $lifts['lifts_razotajs'] ?? null,
                    // 'manufacture_year' => $lifts['lifts_razosanas_gada'] ?? null,
                    'installer' => $lifts['lifts_uzstaditajs'] ?? null,
                    'installation_year' => $lifts['lifts_uzstadisanas_gads'],
                    'floors_total' => $lifts['stavu_skaits'] ?? null,
                    'floors_serviced' => $lifts['lifts_stavu_skaits'] ?? null,
                    'address_country' => $lifts['lifts_adree_valsts'] ?? 'Latvija',
                    'address_novads' => $lifts['lifts_adrese_novads'] ?? null,
                    'address_pagasts' => $lifts['lifts_adrese_pagasts'] ?? null,
                    'address_city' => $lifts['lifts_adrese_pilseta'] ?? 'Rīga',
                    'address_street' => $lifts['lifts_adrese_iela'],
                    'address_building' => $lifts['lifts_adrese_maja'],
                    'address_entrance' => $lifts['lifts_adrese_kapnu_telpa'],
                    'address_postal_code' => $lifts['lifts_adrese_indeks'],
                    'notes' => $lifts['lifts_piezimes'] ?? null,
                    'lift_manager_id' => $lifts['lifts_parvaldnieks'] ?? null,


                    ]
            );
        }
    }
}
