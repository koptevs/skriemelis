<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LiftManagerSeeder extends Seeder
{
    public $valditaji_source;

    public function run(): void
    {
        $this->valditaji_source = include 'sources/valditaji.php';

        foreach ($this->valditaji_source as $key => $valditajs) {
            DB::table('lift_managers')->insert(
                [
                    'id'                                 => $key,
                    'name'                               => $valditajs['valditajs_nosaukums'],
                    'reg_number'                         => $valditajs['valditajs_reg_nr'],
                    'address'                            => $valditajs['valditajs_adrese'],
                    'contract_number'                    => $valditajs['valditajs_liguma_nr'],
                    'contract_date'                      => $valditajs['valditajs_liguma_datums'],
                    'contact_person'                     => $valditajs['valditajs_kontakt_person'],
                    'contact_person_position'            => $valditajs['valditajs_kontakt_person_amats'],
                    'contact_person_phone'               => $valditajs['valditajs_kontakt_person_talrunis'],
                    'contact_person_phone_bill'          => $valditajs['valditajs_kontakt_person_talrunis_rekinam'],
                    'bank_name'                          => $valditajs['valditajs_bankas_nosaukums'],
                    'bank_code'                          => $valditajs['valditajs_bankas_kods'],
                    'bank_account'                       => $valditajs['valditajs_bankas_konts'],
                    'bill_pay_days'                      => $valditajs['valditajs_rekina_apmaksas_dienas'],
                    'protocol_with_electric_measurments' => $valditajs['protokols_ar_merijumiem'],
                    'notes'                              => $valditajs['valditajs_piezimes'],
                ]);
        }
    }
}
