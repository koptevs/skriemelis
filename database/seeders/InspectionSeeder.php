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
            $lift_id = \App\Models\Lift::query()->where('reg_number', 'like',
                $inspection['parbaude_lifts_reg_nr'])->pluck('id')->toArray()[0];
            //    dd($lift_id);
            $expert       = substr($inspection['parbaude_nr'], -2);
            $lift_manager = $inspection['parbaude_valditajs'];
            if ($expert === '02' && $lift_manager !== '99') {
                switch ($inspection['parbaude_mehanikis_vards_uzvards']) {
                    case 'Olegs Jevstratovs':
                        $participant_1 = 1;
                        $participant_2 = null;
                        break;
                    case 'Olegs Bogorads':
                        $participant_1 = 2;
                        $participant_2 = null;
                        break;
                    case 'Jevgēnijs Prihodjko':
                        $participant_1 = 3;
                        $participant_2 = null;
                        break;
                    case 'Boris':
                        $participant_1 = 4;
                        $participant_2 = null;
                        break;
                    case 'Aleksejs Kijasovs':
                        $participant_1 = 5;
                        $participant_2 = null;
                        break;
                    case 'Boris & Aleks':
                        $participant_1 = 4;
                        $participant_2 = 5;
                        break;
                    case 'Martiņš & Artūrs':
                        $participant_1 = 6;
                        $participant_2 = 7;
                        break;
                    default:
                        $participant_1 = null;
                        $participant_2 = null;
                }
            }
            DB::table('lifts')->where('id',
                $lift_id)->update(['lift_manager_id' => intval($inspection['parbaude_valditajs'])]);
            DB::table('inspections')->insert(
                [
                    'protocol_number'      => $inspection['parbaude_nr'],
                    'lift_id'              => $lift_id,
                    'lift_manager'         => $inspection['parbaude_valditajs'] !== '' ? $inspection['parbaude_valditajs'] : 0,
                    'inspection_type'      => $inspection['parbaude_veids'],
                    'inspection_next_type' => $inspection['parbaude_next_veids'],
                    'expert'               => substr($inspection['parbaude_nr'], -2),
                    'date_start'           => Carbon::createFromFormat('d.m.Y',
                        $inspection['parbaude_datums_start']),
                    'date_end'             => Carbon::createFromFormat('d.m.Y',
                        $inspection['parbaude_datums_end'] ? $inspection['parbaude_datums_end'] : $inspection['parbaude_datums_start']),
                    'date_next'            => $inspection['parbaude_next_datums'] !== '' ? Carbon::createFromFormat('d.m.Y',
                        $inspection['parbaude_next_datums']) : null,
                    'date_next_normal'     => $inspection['parbaude_next_normal_datums'] !== '' ? Carbon::createFromFormat('d.m.Y',
                        $inspection['parbaude_next_normal_datums']) : null,

                    'label'      => $inspection['parbaude_zimes_nr'] ? $inspection['parbaude_zimes_nr'] : 'nav izsniegta',
                    'bir_number' => $inspection['parbaude_bir_reg_nr'],

                    'participant_1'      => $participant_1,
                    'participant_2'      => $participant_2,
                    'notes'              => $inspection['piezimes'],
                    'notes_for_protokol' => json_encode([], JSON_UNESCAPED_UNICODE),

//                    'non_compliances_0' => json_encode(explode("\n", $inspection['parbaude_neatbilstibas_0']),
//                        JSON_UNESCAPED_UNICODE),

                    'non_compliances_0' => $inspection['parbaude_neatbilstibas_0'] !== '' ? json_encode(explode("\n",
                        $inspection['parbaude_neatbilstibas_0']),
                        JSON_UNESCAPED_UNICODE) : json_encode([], JSON_UNESCAPED_UNICODE),

                    'non_compliances_1' => $inspection['parbaude_neatbilstibas_1'] !== '' ? json_encode(explode("\n",
                        $inspection['parbaude_neatbilstibas_1']),
                        JSON_UNESCAPED_UNICODE) : json_encode([], JSON_UNESCAPED_UNICODE),

                    'non_compliances_2' => $inspection['parbaude_neatbilstibas_2'] !== '' ? json_encode(explode("\n",
                        $inspection['parbaude_neatbilstibas_2']),
                        JSON_UNESCAPED_UNICODE) : json_encode([], JSON_UNESCAPED_UNICODE),

                    'non_compliances_3'  => $inspection['parbaude_neatbilstibas_3'] !== '' ? json_encode(explode("\n",
                        $inspection['parbaude_neatbilstibas_3']),
                        JSON_UNESCAPED_UNICODE) : json_encode([], JSON_UNESCAPED_UNICODE),


//                    'non_compliances_2'  => json_encode(explode("\n", $inspection['parbaude_neatbilstibas_2']),
//                        JSON_UNESCAPED_UNICODE),

//                    'non_compliances_3'  => json_encode(explode("\n", $inspection['parbaude_neatbilstibas_3']),
//                        JSON_UNESCAPED_UNICODE),
                    'extra_check_reason' => json_encode($inspection['atkartotas_parbaudes_iemesls'],
                        JSON_UNESCAPED_UNICODE),
                    'not_checked_forced' => array_key_exists('parbaude_netika_parbaudits', $inspection) ?
                        $inspection['parbaude_netika_parbaudits'] !== '' ?
                            json_encode(explode("\n",
                                preg_replace('/\t+/S', '', $inspection['parbaude_netika_parbaudits'])),
                                JSON_UNESCAPED_UNICODE) : json_encode([], JSON_UNESCAPED_UNICODE)


                        :
                        json_encode([], JSON_UNESCAPED_UNICODE),
                    // строка -> удаляются все табы -> создаётся массив с разделением по новой строке -> переводится в строку для сохранения в базе
                ]
            );
        }
    }
//    }
}
