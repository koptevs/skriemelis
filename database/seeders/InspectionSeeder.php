<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class InspectionSeeder extends Seeder
{
    public $inspections_source;
    public $counter;

    public function run(): void
    {
        $this->inspections_source = include 'sources/parbaudes.php';
        foreach ($this->inspections_source as $inspection) {
            $this->counter++;
            // var_dump($this->counter);
            // var_dump($inspection);
            $lift_id = \App\Models\Lift::query()->where('reg_number', 'like',$inspection['parbaude_lifts_reg_nr'])->pluck('id')->toArray()[0];
        //    dd($lift_id);
            DB::table('inspections')->insert(
                [
                    'protocol_number' => $inspection['parbaude_nr'],
                    'lift_id' => $lift_id,
                    'inspection_type' => $inspection['parbaude_veids'],
                    'inspection_next_type' => $inspection['parbaude_next_veids'],
                    'expert' => substr($inspection['parbaude_nr'], -2),
                    'date_start' =>  Carbon::createFromFormat('d.m.Y', $inspection['parbaude_datums_start']),
                    'date_end' =>  Carbon::createFromFormat('d.m.Y', $inspection['parbaude_datums_end'] ? $inspection['parbaude_datums_end'] : $inspection['parbaude_datums_start']),
                    'date_next' =>  $inspection['parbaude_next_datums'] !== '' ? Carbon::createFromFormat('d.m.Y', $inspection['parbaude_next_datums'] ) : null,
                    'date_next_normal' =>  $inspection['parbaude_next_normal_datums'] !== '' ? Carbon::createFromFormat('d.m.Y', $inspection['parbaude_next_normal_datums'] ) : null,

                    'label' => $inspection['parbaude_zimes_nr'],
                    'bir_number' => $inspection['parbaude_bir_reg_nr'],

                    'participant_1' => $inspection['parbaude_mehanikis_vards_uzvards'],
                    'notes' => $inspection['piezimes'],
                    'notes_for_protokol' => serialize($inspection['atkartotas_parbaudes_iemesls']),

                    'non_compliances_0' => $inspection['parbaude_neatbilstibas_0'] ? $inspection['parbaude_neatbilstibas_0'] : '',
                    'non_compliances_1' => $inspection['parbaude_neatbilstibas_1'],
                    'non_compliances_2' => $inspection['parbaude_neatbilstibas_2'],
                    'non_compliances_3' => $inspection['parbaude_neatbilstibas_3'],
                ]
            );
        }
    }
}
