<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class InspectionSeeder extends Seeder
{

    /**
     * Run the database seeds.
     */


    public $inspections_source;

    public $counter;

    public $inspections_02_2022;

    public $inspections_02_2023;

    public $inspections_02_2024;

    public $inspections_02_2025;

    public $inspections_02;


    public function run(): void
    {
        $this->inspections_source = include 'sources/parbaudes.php';

        $this->inspections_2022 = array_filter(
            array_filter($this->inspections_source,
                fn($key) => substr($key, -2) === '02', ARRAY_FILTER_USE_KEY),
            fn($key) => substr($key, -5) === '22/02', ARRAY_FILTER_USE_KEY
        );
        ksort($this->inspections_2022);

        $this->inspections_2023 = array_filter(
            array_filter($this->inspections_source,
                fn($key) => substr($key, -2) === '02', ARRAY_FILTER_USE_KEY),
            fn($key) => substr($key, -5) === '23/02', ARRAY_FILTER_USE_KEY
        );
        ksort($this->inspections_2023);

        $this->inspections_2024 = array_filter(
            array_filter($this->inspections_source,
                fn($key) => substr($key, -2) === '02', ARRAY_FILTER_USE_KEY),
            fn($key) => substr($key, -5) === '24/02', ARRAY_FILTER_USE_KEY
        );
        ksort($this->inspections_2024);

        $this->inspections_2025 = array_filter(
            array_filter($this->inspections_source,
                fn($key) => substr($key, -2) === '02', ARRAY_FILTER_USE_KEY),
            fn($key) => substr($key, -5) === '25/02', ARRAY_FILTER_USE_KEY
        );
        ksort($this->inspections_2025);

        $this->inspections_02 = array_merge($this->inspections_2022,
            $this->inspections_2023, $this->inspections_2024, $this->inspections_2025);

        //        dd($this->inspections_02);
        //dd($this->inspections_source);

        //        ksort($this->inspections_02);
        //        dd($this->inspections_02);
        foreach ($this->inspections_02 as $inspection) {
            $this->counter++;
            //             var_dump($this->counter);
            // var_dump($inspection);
            $lift_id = \App\Models\Lift::query()
                                       ->where('reg_number', 'like',
                                           $inspection['parbaude_lifts_reg_nr'])
                                       ->pluck('id')
                                       ->toArray()[0];
            //                dd($lift_id);
//            var_dump($lift_id);
            $expert       = substr($inspection['parbaude_nr'], -2);
            $manager = $inspection['parbaude_valditajs'];
//            $lift_manager = $inspection['parbaude_valditajs'];
            //            if ($expert === '02' && $lift_manager !== '99') {
            if ($expert === '02') {
                $participants = [];

                // KONE

                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Olegs Jevstratovs')) {
                    array_push($participants, 1);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Olegs Bogorads')) {
                    array_push($participants, 2);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Andrejs Strīkis')) {
                    array_push($participants, 3);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Dāvis Morozs')) {
                    array_push($participants, 4);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Mārtiņš Gudrītis')) {
                    array_push($participants, 5);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Girts Priževoits')) {
                    array_push($participants, 6);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Toms Eglītis')) {
                    array_push($participants, 7);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Artūrs Stiris')) {
                    array_push($participants, 8);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Jūris Indriksons')) {
                    array_push($participants, 9);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Jevgēnijs Prihodjko')) {
                    array_push($participants, 10);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Viktors Kozlāns')) {
                    array_push($participants, 11);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Dāvis Kauliņš')) {
                    array_push($participants, 12);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Mairis Gobiņš')) {
                    array_push($participants, 13);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Andrējs Brīvulis')) {
                    array_push($participants, 14);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Andrejs Pavličenko')) {
                    array_push($participants, 15);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Kristiāns Lapīņš')) {
                    array_push($participants, 16);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Indulis Siktars')) {
                    array_push($participants, 17);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Alvils Laganovskis')) {
                    array_push($participants, 18);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Marks Kirkins')) {
                    array_push($participants, 19);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Aleksandrs Mihailovs')) {
                    array_push($participants, 20);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Edgars Ošmjanskis')) {
                    array_push($participants, 21);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Vladislavs Truskovskis')) {
                    array_push($participants, 22);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Vadims Plavčenko')) {
                    array_push($participants, 23);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Juris Obrazcovs')) {
                    array_push($participants, 24);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Boris Topasovs')) {
                    array_push($participants, 25);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Aleksejs Kijasovs')) {
                    array_push($participants, 26);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Mārtiņš_RHL')) {
                    array_push($participants, 27);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Artūrs Rieka')) {
                    array_push($participants, 28);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Valerijs Grizāns')) {
                    array_push($participants, 29);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Romans Sibiļevs')) {
                    array_push($participants, 30);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Vladimirs Domanovs')) {
                    array_push($participants, 31);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Viktors Domanovs')) {
                    array_push($participants, 32);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Dmitrijs Brokers')) {
                    array_push($participants, 33);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Eduards Dubro')) {
                    array_push($participants, 34);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Pjotrs Greizmanis')) {
                    array_push($participants, 35);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Dmitrijs Gorskijs')) {
                    array_push($participants, 36);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Olegs Tarasenko')) {
                    array_push($participants, 37);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Andrejs Šilovs')) {
                    array_push($participants, 38);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Nikita Gavriļuks')) {
                    array_push($participants, 39);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Sergejs Prohors')) {
                    array_push($participants, 40);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Jānis Krūmiņš')) {
                    array_push($participants, 41);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Jānis_Liftremonts')) {
                    array_push($participants, 42);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Vladislavs Kukainis')) {
                    array_push($participants, 43);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Artūrs_LIFTS')) {
                    array_push($participants, 44);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Aleksejs_Rīgas_Lifti')) {
                    array_push($participants, 45);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Guntis_Rīgas_Lifti')) {
                    array_push($participants, 46);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Ruslans Kudrjavcevs')) {
                    array_push($participants, 47);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Gennadijs_RHL')) {
                    array_push($participants, 48);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Leonids_RHL')) {
                    array_push($participants, 49);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Haralds_KONE')) {
                    array_push($participants, 50);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Serhii Zhuravljov')) {
                    array_push($participants, 51);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Vladyslav Kuznetsov')) {
                    array_push($participants, 52);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Igors Grigorjevs')) {
                    array_push($participants, 53);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Jurij_Ukr')) {
                    array_push($participants, 54);
                }
                if (str_contains($inspection['parbaude_mehanikis_vards_uzvards'],
                    'Andrejs Žeļezņakovs')) {
                    array_push($participants, 55);
                }

                //                dd($lift_id);
                DB::table('lifts')
                  ->where('id',
                      intval($lift_id))
                  ->update(['lift_manager_id' => intval($inspection['parbaude_valditajs'])]);
                DB::table('lifts')
                  ->where('id',
                      intval($lift_id))
                  ->update(['inspection_status' => $inspection['parbaude_neatbilstibas_3'] !== '' ? '3' : ($inspection['parbaude_neatbilstibas_2'] !== '' ? '2' : ($inspection['parbaude_neatbilstibas_1'] !== '' ? '1' : '0'))]);
                DB::table('lifts')->where('id',
                    intval($lift_id))->update([
                    'next_inspection_date' => $inspection['parbaude_next_datums'] !== '' ? Carbon::createFromFormat('d.m.Y',
                        $inspection['parbaude_next_datums']) : null,
                ]);

                //                next_inspection_date

                DB::table('inspections')->insert(
                    [
                        'protocol_number'      => $inspection['parbaude_nr'],
                        'lift_id'              => $lift_id,
                        'lift_manager'         => $inspection['parbaude_valditajs'] !== '' ? $inspection['parbaude_valditajs'] : 0,
                        'inspection_type'      => $inspection['parbaude_veids'],
                        'inspection_next_type' => $inspection['parbaude_next_veids'],
                        'expert'               => substr($inspection['parbaude_nr'],
                            -2),
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

                        'participants'       => json_encode($participants,
                            JSON_UNESCAPED_UNICODE),
                        'notes_for_protokol' => json_encode([],
                            JSON_UNESCAPED_UNICODE),

                        //                    'non_compliances_0' => json_encode(explode("\n", $inspection['parbaude_neatbilstibas_0']),
                        //                        JSON_UNESCAPED_UNICODE),

                        //                        'notes'              => $inspection['piezimes'],
                        'notes'              => $inspection['piezimes'] !== '' ? json_encode(explode("\n",
                            $inspection['piezimes']),
                            JSON_UNESCAPED_UNICODE) : json_encode([],
                            JSON_UNESCAPED_UNICODE),
                        'non_compliances_0'  => $inspection['parbaude_neatbilstibas_0'] !== '' ? json_encode(explode("\n",
                            $inspection['parbaude_neatbilstibas_0']),
                            JSON_UNESCAPED_UNICODE) : json_encode([],
                            JSON_UNESCAPED_UNICODE),

                        'non_compliances_1' => $inspection['parbaude_neatbilstibas_1'] !== '' ? json_encode(explode("\n",
                            $inspection['parbaude_neatbilstibas_1']),
                            JSON_UNESCAPED_UNICODE) : json_encode([],
                            JSON_UNESCAPED_UNICODE),

                        'non_compliances_2' => $inspection['parbaude_neatbilstibas_2'] !== '' ? json_encode(explode("\n",
                            $inspection['parbaude_neatbilstibas_2']),
                            JSON_UNESCAPED_UNICODE) : json_encode([],
                            JSON_UNESCAPED_UNICODE),

                        'non_compliances_3'  => $inspection['parbaude_neatbilstibas_3'] !== '' ? json_encode(explode("\n",
                            $inspection['parbaude_neatbilstibas_3']),
                            JSON_UNESCAPED_UNICODE) : json_encode([],
                            JSON_UNESCAPED_UNICODE),
                        'inspection_result'  => $inspection['parbaude_neatbilstibas_3'] !== '' ? 3 : ($inspection['parbaude_neatbilstibas_2'] !== '' ? 2 : ($inspection['parbaude_neatbilstibas_1'] !== '' ? 1 : 0)),

                        //                    'non_compliances_2'  => json_encode(explode("\n", $inspection['parbaude_neatbilstibas_2']),
                        //                        JSON_UNESCAPED_UNICODE),

                        //                    'non_compliances_3'  => json_encode(explode("\n", $inspection['parbaude_neatbilstibas_3']),
                        //                        JSON_UNESCAPED_UNICODE),
                        'extra_check_reason' => json_encode($inspection['atkartotas_parbaudes_iemesls'],
                            JSON_UNESCAPED_UNICODE),
                        'not_checked_forced' => array_key_exists('parbaude_netika_parbaudits',
                            $inspection) ?
                            $inspection['parbaude_netika_parbaudits'] !== '' ?
                                json_encode(explode("\n",
                                    preg_replace('/\t+/S', '',
                                        $inspection['parbaude_netika_parbaudits'])),
                                    JSON_UNESCAPED_UNICODE) : json_encode([],
                                JSON_UNESCAPED_UNICODE)


                            :
                            json_encode([], JSON_UNESCAPED_UNICODE),
                        // строка -> удаляются все табы -> создаётся массив с разделением по новой строке -> переводится в строку для сохранения в базе
                    ]
                );
            }
        }
    }

}

