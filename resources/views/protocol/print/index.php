<?php
//dd($lift_manager->toArray());
//dd(json_decode($inspection->toArray()['non_compliances_1']));
//dd(json_decode($inspection['non_compliances_1']));
//dd($mechanic->toArray());
//dd($lift->toArray());
//dd($inspection->toArray());
require __DIR__.'/../tfpdf/tfpdf.php';
require __DIR__.'/../variables.php';
require __DIR__.'/../functions.php';
require __DIR__.'/../data/lifti.php';
require __DIR__.'/../data/valditaji.php';
require __DIR__.'/../data/parbaudes.php';


// $digitally_signed    = false;
$digitally_signed = true;
// $parbaude_piedalijas = true;
$parbaude_piedalijas = false;
$headless            = false;
$is_blank            = false;


$parbaude     = $inspection;
$lifts        = $lift->toArray()[0];
$valditajs_id = $lift_manager['id'];
//dd($valditajs_id);
$lifts_uzstadisanas_gads = $lifts['installation_year'];
$lifts_adrese_indeks     = $lifts['address_postal_code'];
$lifts_reg_nr            = $lifts['reg_number'];
$lifts_uzstaditajs       = $lifts['installer'];
$lifts_rupn_nr           = $lifts['factory_number'];
$lifts_tips              = $lifts['lift_type'];
$lifts_celtspeja         = $lifts['load'];


$parbaude_neatbilstibas_0              = json_decode($inspection['non_compliances_0']);
$parbaude_neatbilstibas_1              = json_decode($inspection['non_compliances_1']);
$parbaude_neatbilstibas_2              = json_decode($inspection['non_compliances_3']);
$parbaude_neatbilstibas_3              = json_decode($inspection['non_compliances_3']);
$parbaude_atkartotas_parbaudes_iemesls = $inspection[''];
$parbaude_nr                           = $inspection['protocol_number'];
$parbaude_zimes_nr                     = $inspection['label'];
$parbaude_mehanika_kompanija           = $mechanic ? $mechanic['company'] : '';
$parbaude_mehanikis_vards_uzvards      = $mechanic ? $mechanic['name'] : '';
$parbaude_bir_reg_nr                   = $inspection['bir_number'];


$parbaude_veids             = $inspection['inspection_type'];
$parbaude_datums_start      = $inspection['date_start'];
$parbaude_datums_end        = $inspection['date_end'];
$parbaude_next_datums       = $inspection['date_next'];
$parbaude_netika_parbaudits = $inspection[''];

$valditajs_nosaukums               = $lift_manager['name'];
$valditajs_liguma_nr               = $lift_manager['contract_number'];
$valditajs_liguma_datums           = $lift_manager['contract_date'];
$valditajs_adrese                  = $lift_manager['address'];
$valditajs_reg_nr                  = $lift_manager['reg_number'];
$valditajs_protokols_ar_merijumiem = $lift_manager['protocol_with_electric_measurments'];
$valditajs_kontakt_person          = $lift_manager['contact_person'];
$valditajs_kontakt_person_amats    = $lift_manager['contact_person_position'];


$is_atkartota   = 'Atkārtotā' === $parbaude_veids;
$is_arpuskartas = 'Ārpuskārtas' === $parbaude_veids;

$sign_netika_parbaudits = $is_arpuskartas ? 'O' : '-';


$is_ce = intval($lifts_uzstadisanas_gads) >= 2000;

//$iela_or_bulvaris         = '';
//$iela_array               = explode(' ', $lifts_adrese_iela);
//$last_word_in_adrese_iela = $iela_array[ count($iela_array) - 1 ];
//if (( $last_word_in_adrese_iela !== 'bulvāris' ) && ( $last_word_in_adrese_iela !== 'bulvaris' ) && ( $last_word_in_adrese_iela !== 'gatve' ) && ( $last_word_in_adrese_iela !== 'prospekts' ) && ( $last_word_in_adrese_iela !== 'aleja' ) && ( $last_word_in_adrese_iela !== 'līnija' ) ) {
//    $iela_or_bulvaris = 'iela';
//}
//$kapnu_telpa                  = $lifts_adrese_kapnu_telpa ? '-' . $lifts_adrese_kapnu_telpa : '';
//$lifts_parbaudes_adrese_short = $lifts_adrese_iela . ' ' . $iela_or_bulvaris . ' ' . $lifts_adrese_maja . $kapnu_telpa;
$lifts_parbaudes_adrese_short = $lifts['address'];
//$lifts_parbaudes_adrese       = $lifts_adrese_novads ? $lifts_parbaudes_adrese_short . ', ' . $lifts_adrese_pilseta . ', ' . $lifts_adrese_novads . ', ' . $lifts_adrese_indeks : $lifts_parbaudes_adrese_short . ', ' . $lifts_adrese_pilseta . ', ' . $lifts_adrese_indeks;

$lifts_parbaudes_adrese = $lifts['address'];

$parbaude_datums = '';
if ($parbaude_datums_start === $parbaude_datums_end) {
    $parbaude_datums = $parbaude_datums_start;
} else {
    $parbaude_datums = explode('.', $parbaude_datums_start)[0].' - '.$parbaude_datums_end;
}

$checkboxes       = array();
$empty_checkboxes = array();

$pdf = new tFPDF('P', 'mm', 'A4');
$pdf->SetAutoPageBreak(false, 10);
require __DIR__.'/../fonts.php';
$pdf->addPage();
$pdf->setLineWidth($default_line_width);

$prp_netika_parbaudits = numbered_string_to_array($parbaude_netika_parbaudits ?? '');

$prp_0          = arrToArr($parbaude_neatbilstibas_0);
$prp_1          = arrToArr($parbaude_neatbilstibas_1);
$prp_2          = arrToArr($parbaude_neatbilstibas_2);
$prp_3          = arrToArr($parbaude_neatbilstibas_3);
$is_empty_prp_0 = ! $parbaude_neatbilstibas_0[0];
$is_empty_prp_1 = ! $parbaude_neatbilstibas_1[0];
$is_empty_prp_2 = ! $parbaude_neatbilstibas_2[0];
$is_empty_prp_3 = ! $parbaude_neatbilstibas_3[0];
$prp_2_3        = array_merge($parbaude_neatbilstibas_3, $parbaude_neatbilstibas_2);
$prp_all        = array_merge($parbaude_neatbilstibas_3, $parbaude_neatbilstibas_2, $parbaude_neatbilstibas_1);

if ($is_atkartota || $is_arpuskartas) {
    $prp_all = array_merge($parbaude_atkartotas_parbaudes_iemesls, $prp_all);
    $prp_1   = array_merge($parbaude_atkartotas_parbaudes_iemesls, $prp_1);
}

// echo '<pre>';
// dd( $parbaude['parbaude_neatbilstibas_1'] );
// dd( $prp_1 );
// var_dump( $prp_2 );
// var_dump( $prp_3 );
// echo '</pre>';
// die();
//
// SPACE FOR HEADER
//

// $pdf->Ln( $space_for_header ); //15
//
//


// headless
if ($headless) {
    $pdf->setFillColor(255, 255, 255);
    left_padding();
    $pdf->cell(0, 17, '', 0, 1, 'C', true);
} else {
    include_once 'header.php';
}
// headless

require_once 'title.php';
require_once 'valditajs.php';
require_once 'adrese.php';
require_once 'reg_nr.php';
require_once 'parbaudes_veids.php';
require_once 'normativi.php';
require_once 'zinas_par.php';
require_once 'liftu.php';
require_once 'lifta_tips.php';
require_once 'celtspeja.php';
require_once 'parbaudes_rezultati.php';
require_once 'vertejumi.php';


//
// NEATBILSTIBU APRAKSTI
//
$pdf->Ln(1);
left_padding();
$pdf->SetFont($font_family_default_bold, '', 9);
$pdf->cell(35, 4, 'Neatbilstību apraksti', '', 0, 'L', false);
$pdf->SetFont($font_family_default, '', 8);
$pdf->cell(45, 4, '(papildus norādijumi, piezīmes):', '', 0, 'L', false);
$pdf->SetLineWidth(0.1);
$pdf->cell(0, 4, '', 'B', 1, 'L', false);


function break_long_line($long_line, $max_line_len = 115)
{
    $array_of_sentences = explode('. ', $long_line);
    $len                = count($array_of_sentences);
    $compact_arr[]      = $array_of_sentences[0].'.';
    $current            = 0;
    for ($i = 1; $i < $len; $i++) {
        if (mb_strlen(($compact_arr[$current] ?? '').$array_of_sentences[$i]) <= $max_line_len) {
            $compact_arr[$current] = (($compact_arr[$current] ?? '').' '.$array_of_sentences[$i].'.');
        } else {
            ++$current;
            $compact_arr[$current] = (($compact_arr[$current] ?? '').' '.$array_of_sentences[$i].'.');
        }
    }

    return $compact_arr;
}

$too_many_items = (count($prp_all)) >= 10;

if ( ! $too_many_items) {
    $pdf->SetFont('TimesNewRomanRegular', '', 9);
    foreach ($prp_1 as $res_index => $res_res) {
        left_padding();
        // $pdf->multicell( 0, 3, $res_index . ' - ' . $res_res, 'B', 'L', false );
        if (strlen($res_res) > 130) {
            $breaked_arr      = break_long_line($res_res, 130);
            $breaked_arr_size = count($breaked_arr);
            for ($i = 0; $i < $breaked_arr_size; $i++) {
                if (0 !== $i) {
                    left_padding();
                    $pdf->multicell(0, 4, '       '.$breaked_arr[$i], 'B', 'L', false);
                } else {
                    $pdf->multicell(0, 4, $res_index.' - '.$breaked_arr[$i], 'B', 'L', false);
                }
            }
        } else {
            $pdf->multicell(0, 4, gettype($res_index) === 'integer' ? ('     '.$res_res) : ($res_index.' - '.$res_res),
                'B', 'L', false);
        }
    }

    $prp_all_len = count($prp_all);

    if ($is_empty_prp_2 && $is_empty_prp_3) {
        for ($i = 0; $i < 9 - $prp_all_len; $i++) {
            left_padding();
            $pdf->multicell(0, 4, '', 'B', 'L', false);
        }
    }

    if ( ! $is_empty_prp_2 || ! $is_empty_prp_3) {
        left_padding();
        $pdf->cell(0, 4, '', 'B', 1, 'L', false);
    }

    if ( ! $is_empty_prp_2) {
        left_padding();
        $pdf->SetFont('TimesNewRomanBold', '', 8);
        $pdf->cell(0, 4, '    Neatbilstības ar vērtējumu 2:', 'B', 1, 'L', false);
        $pdf->SetFont('TimesNewRomanRegular', '', 9);
        foreach ($prp_2 as $res_index => $res_res) {
            left_padding();
            $pdf->multicell(0, 4, $res_index.' - '.$res_res, 'B', 'L', false);
        }
    }
    if ( ! $is_empty_prp_3) {
        left_padding();
        $pdf->SetFont('TimesNewRomanBold', '', 8);
        $pdf->cell(0, 4, '    Neatbilstības ar vērtējumu 3:', 'B', 1, 'L', false);
        $pdf->SetFont('TimesNewRomanRegular', '', 9);
        foreach ($prp_3 as $res_index => $res_res) {
            left_padding();
            $pdf->multicell(0, 4, $res_index.' - '.$res_res, 'B', 'L', false);
        }
    }
    if ( ! $is_empty_prp_2 || ! $is_empty_prp_3) {
        for ($i = 0; $i < 6 - $prp_all_len; $i++) {
            left_padding();
            $pdf->multicell(0, 4, '', 'B', 'L', false);
        }
    }
} else {
    $pdf->SetFont('TimesNewRomanRegular', '', 8);
    foreach ($prp_all as $res_index => $res_res) {
        left_padding();
        if (strlen($res_res) > 160) {
            $breaked_arr      = break_long_line($res_res, 160);
            $breaked_arr_size = count($breaked_arr);
            for ($i = 0; $i < $breaked_arr_size; $i++) {
                if (0 !== $i) {
                    left_padding();
                    $pdf->multicell(0, 3, '       '.$breaked_arr[$i], 'B', 'L', false);
                } else {
                    $pdf->multicell(0, 3, $res_index.' - '.$breaked_arr[$i], 'B', 'L', false);
                }
            }
        } else {
            $pdf->multicell(0, 4, gettype($res_index) === 'integer' ? ('     '.$res_res) : ($res_index.' - '.$res_res),
                'B', 'L', false);
        }
    }
}


//
// SLEDZIENS
//


$pdf->Ln(5);
left_padding();
$pdf->SetFont('ArialBold', '', 9);
$pdf->cell(20, 4, 'Slēdziens:', 0, 0, 'L', false);
$pdf->SetFont('ArialRegular', '', 9);
$pdf->cell(25, 4, 'vajadzīgo atzīmēt', 0, 0, 'R', false);
$pdf->SetFont('ArialBold', '', 9);
$pdf->cell(25, 4, 'X', 0, 1, 'L', false);
$pdf->Ln(3);

//
// SLEDZIENS
//

$pdf->setLineWidth($derigs_ekspluatacijai_line_width);
left_padding();

$pdf->SetFont($derigs_ekspluatacijai_mark_font_family, '', $derigs_ekspluatacijai_mark_font_size);
$pdf->cell(1, $derigs_ekspluatacijai_cell_height, '', 0, 0, 'C', false);
$pdf->cell($derigs_ekspluatacijai_1col_width, $derigs_ekspluatacijai_cell_height,
    ! $is_empty_prp_2 || ! $is_empty_prp_3 || $is_blank ? '' : 'X', 1, 0, 'C', false);
// var_dump(count ($prp_1));
// die();
$pdf->SetFont($derigs_ekspluatacijai_font_family, '', $derigs_ekspluatacijai_font_size);
$pdf->cell($derigs_ekspluatacijai_2col_width, $derigs_ekspluatacijai_cell_height, ' Lietošana atļauta', 0, 0, 'L',
    false);

$pdf->SetFont($derigs_ekspluatacijai_mark_font_family, '', $derigs_ekspluatacijai_mark_font_size);
$pdf->cell($derigs_ekspluatacijai_3col_width, $derigs_ekspluatacijai_cell_height,
    $is_empty_prp_2 || ! $is_empty_prp_3 || $is_blank ? '' : 'X', 1, 0, 'C', false);

$pdf->SetFont($derigs_ekspluatacijai_font_family, '', $derigs_ekspluatacijai_font_size);
$pdf->cell($derigs_ekspluatacijai_4col_width, $derigs_ekspluatacijai_cell_height, ' Lietošana pieļaujama 30 dienas', 0,
    0, 'L', false);

$pdf->SetFont($derigs_ekspluatacijai_mark_font_family, '', $derigs_ekspluatacijai_mark_font_size);
$pdf->cell($derigs_ekspluatacijai_5col_width, $derigs_ekspluatacijai_cell_height,
    $is_empty_prp_3 || $is_blank ? '' : 'X', 1, 0, 'C', false);

$pdf->SetFont($derigs_ekspluatacijai_font_family, '', $derigs_ekspluatacijai_font_size);
$pdf->cell($derigs_ekspluatacijai_6col_width, $derigs_ekspluatacijai_cell_height, ' Lietošana nav pieļaujama', 0, 1,
    'L', false);

$pdf->setLineWidth($default_line_width);

//
// NAKOSA PARBAUDE
//
//dd($parbaude_datums_start);2023-05-30
//dd($parbaude_next_datums);
$pdf->Ln(4);
left_padding();
$pdf->SetFont($font_family_default_bold, '', $font_size_default);
$pdf->cell($nakosa_parbaude_1col_width, 5, 'Nākošā pārbaude ', 0, 0, 'L', false);
// date("j.n.Y",date_create_from_format("j.n.Y", $parbaude['parbaude_datums']))
if ( ! $is_empty_prp_3) {
    $next_check = 'pec neatbīlstības novēršanas';
} elseif ($parbaude_next_datums) {
    $next_check =  date_format(date_create_from_format('Y-m-d', $parbaude_next_datums),'d.m.Y' );
} elseif (!$is_empty_prp_2) {
    $next_check = $parbaude_datums_start ? date_format(date_add(date_create_from_format('Y-m-d',
        $parbaude_datums_start), date_interval_create_from_date_string('1 month')), 'd.m.Y') : '';
} else {
    $next_check = $parbaude_datums_start ?  date_format(date_add(date_create_from_format('Y-m-d',
        $parbaude_datums_start), date_interval_create_from_date_string('1 year')), 'd.m.Y') : '';
}
// $pdf->cell( $nakosa_parbaude_2col_width, 5, $parbaude['parbaude_datums'], "B", 0, 'C', false );
$pdf->cell($nakosa_parbaude_2col_width + 20, 5, $next_check, 'B', 0, 'C', false);
// $pdf->cell( $nakosa_parbaude_2col_width, 5, $parbaude['parbaude_datums'] ? date_format( date_add( date_create_from_format( 'j.n.Y', $parbaude['parbaude_datums'] ), date_interval_create_from_date_string( '1 month' ) ), 'd.m.Y' ) : '', 'B', 0, 'C', false );

$pdf->cell($nakosa_parbaude_3col_width - 20, 5, '', 0, 0, 'L', false);
$pdf->cell($nakosa_parbaude_4col_width, 5, 'Pieļaujamā celtspēja ', 0, 0, 'L', false);
$pdf->cell($nakosa_parbaude_5col_width, 5, $lifts_celtspeja, 'B', 0, 'C', false);
$pdf->cell($nakosa_parbaude_6col_width, 5, 'kg.', 0, 1, 'L', false);

//
// IEKARTA MARKETA
//


$pdf->Ln(3);
left_padding();
$pdf->SetFont($font_family_default_bold, '', $font_size_default);
$pdf->cell($iekarta_marketa_1col_width, 5, 'Iekārta marķēta ar pārbaudes zīmi Nr. ', 0, 0, 'L', false);
$pdf->cell($iekarta_marketa_2col_width, 5, $parbaude['parbaude_zimes_nr'], 'B', 0, 'C', false);
$pdf->cell($iekarta_marketa_3col_width, 5, '', 0, 0, 'L', false);
if ($digitally_signed) {
    $pdf->cell($iekarta_marketa_4col_width, 5, '', 0, 0, 'L', false);
    $pdf->cell($iekarta_marketa_5col_width - 18, 5, 'Eksperts      ', 0, 0, 'C', false);
    $pdf->cell($iekarta_marketa_6col_width + 18, 5, 'Igors Koptevs', 0, 1, 'L', false);
} else {
    $pdf->cell($iekarta_marketa_4col_width, 5, 'Eksperts ', 0, 0, 'L', false);
    $pdf->cell($iekarta_marketa_5col_width, 5, '', 'B', 0, 'R', false);
    $pdf->cell($iekarta_marketa_6col_width, 5, 'Igors Koptevs', 0, 1, 'L', false);
}

$pdf->SetFillColor(123, 123, 123);
$pdf->SetFont($font_family_default, '', 7);
if ($digitally_signed) {
    $pdf->cell($width - $iekarta_marketa_6col_width + 5, 3, '', 0, 0, 'R', false);
} else {
    $pdf->cell($width - $iekarta_marketa_6col_width + 5, 3, '(vārds, uzvārds, paraksts, zīmogs)', 0, 0, 'R', false);
}
$pdf->cell($iekarta_marketa_6col_width, 3, '', 0, 1, 'R', false);

//
// PARBAUDE PIEDALIJAS
//
$pdf->Ln(2);
left_padding();
$pdf->SetFont($font_family_default_bold, '', $font_size_default);
// ======================================================================================================
if ($valditajs_id === 4) {
    $pdf->cell($parbaude_piedalijas_1col_width + $parbaude_piedalijas_2col_width, 4.5, $valditajs_nosaukums, 0, 0, 'L',
        false);
    $pdf->cell($parbaude_piedalijas_4col_width, 5, 'Pārbaudes datums', 0, 0, 'L', false);
    $pdf->cell($parbaude_piedalijas_5col_width + 5, 5, date_format(date_create_from_format('Y-m-d', $parbaude_datums),'d.m.Y' ), 'B', 1, 'C', false);
} elseif ($valditajs_id === 1 || $valditajs_id === 2) {
    $pdf->cell($parbaude_piedalijas_1col_width + $parbaude_piedalijas_2col_width, 4.5,
        'Ar pārbaudes rezultātiem iepazinos: '.$valditajs_nosaukums, 0, 0, 'L', false);
    $pdf->cell($parbaude_piedalijas_4col_width, 5, 'Pārbaudes datums', 0, 0, 'L', false);
    $pdf->cell($parbaude_piedalijas_5col_width + 5, 5, date_format(date_create_from_format('Y-m-d', $parbaude_datums),'d.m.Y' ), 'B', 1, 'C', false);
} else {
    $pdf->cell($parbaude_piedalijas_1col_width + $parbaude_piedalijas_2col_width, 4.5, '', 0, 0, 'L', false);
    $pdf->cell($parbaude_piedalijas_4col_width, 5, 'Pārbaudes datums', 0, 0, 'L', false);
    $pdf->cell($parbaude_piedalijas_5col_width + 5, 5, date_format(date_create_from_format('Y-m-d', $parbaude_datums),'d.m.Y' ), 'B', 1, 'C', false);
}
// $pdf->Ln( 2 );
// ======================================================================================================

if ($parbaude_piedalijas) {
    $pdf->cell(0, 4.5, 'Pārbaudē piedalījās ', 0, 1, 'L', false);
}

left_padding();

if ($valditajs_id === 4 || $valditajs_id === 1 || $valditajs_id === 2) {
    $pdf->cell($parbaude_piedalijas_1col_width - 30, 5,
        $valditajs_kontakt_person_amats.'     '.$valditajs_kontakt_person, '', 0, 'L', false);
}


$pdf->Ln(7);


$pdf->SetFont($font_family_default_bold, '', $font_size_s);
if ($parbaude_piedalijas) {
    if ($digitally_signed) {
        $pdf->cell($parbaude_piedalijas_1col_width + 10, 5,
            $parbaude_mehanika_kompanija ? $parbaude_mehanika_kompanija.' mehāniķis   ' : '', 0, 0, 'R', false);
    } else {
        $pdf->cell($parbaude_piedalijas_1col_width, 5,
            $parbaude_mehanika_kompanija ? $parbaude_mehanika_kompanija.' mehāniķis' : '', 'B', 0, 'L', false);
    }
} else {
    $pdf->cell($parbaude_piedalijas_1col_width, 5, '', '', 0, 'L', false);
}

$pdf->SetFont($font_family_default_bold, '', $font_size_default);
// $pdf->cell( $parbaude_piedalijas_2col_width, 5, "", "B", 0, 'R', false );

if ($parbaude_piedalijas) {
    $pdf->cell($parbaude_piedalijas_2col_width - 20, 5, $parbaude_mehanikis_vards_uzvards, 'B', 0, 'R', false);
} else {
    $pdf->cell($parbaude_piedalijas_2col_width - 10, 5, '', 0, 0, 'R', false);
}
$pdf->SetFont($font_family_default_bold, '', $font_size_default);
if ($parbaude_piedalijas) {
    $pdf->cell($parbaude_piedalijas_3col_width, 5, '', 0, 0, 'L', false);
}
// $pdf->cell( $parbaude_piedalijas_4col_width, 5, 'Pārbaudes datums', 0, 0, 'L', false );
// $pdf->cell( $parbaude_piedalijas_5col_width + 15, 5, $parbaude_datums, 'B', 1, 'C', false );
// $pdf->cell( $parbaude_piedalijas_5col_width, 5, $parbaude_datums_start, 'B', 1, 'C', false );

$pdf->SetFillColor(123, 123, 123);
$pdf->SetFont($font_family_default, '', 7);

$pdf->cell($parbaude_piedalijas_1col_width + 20, 3, '', 0, 0, 'R', false);
if ($digitally_signed || ! $parbaude_piedalijas) {
    $pdf->cell(0, 3, '', 0, 1, 'L', false);
} else {
    $pdf->cell(0, 3, '( amats, vārds, uzvārds, paraksts )', 0, 1, 'L', false);
}

// FOOTER

$pdf->Ln(2);
$pdf->SetFont('ArialBoldItalic', '', $font_size_xs);

if ( ! $headless) {
    $pdf->cell(40, 3, 'BIR Reg . Nr . '.$parbaude_bir_reg_nr, 0, 0, 'R', false);
    $pdf->cell(0, 3, '', 0, 1, 'C', false);
    $pdf->SetFont($font_family_default, '', $font_size_xs);
}


left_padding();
$pdf->cell(20, 3, '', 0, 0, 'L', false);

if ($digitally_signed) {
    $pdf->cell(0, 3, 'Protokols parakstīts ar drošu elektronisko parakstu un satur laika zīmogu. ', 0, 1, 'C', false);
} else {
    $pdf->cell(0, 3, '', 0, 1, 'C', false);
}
if ( ! $headless) {
    left_padding();
    $pdf->cell(20, 3, '04.27_015 . doc', 0, 0, 'L', false);
    $pdf->cell(0, 3, 'Protokols attiecas tikai uz augstākminēto iekārtu . Lūdzam glabāt līdzvertīgi iekārtas pasei. ',
        0, 1, 'C', false);
    left_padding();
    $pdf->cell(20, 3, '09.03.2022', 0, 0, 'L', false);
    $pdf->cell(0, 3,
        'Tehniskās pārbaudes protokolu aizliegts pavairot nepilnā apjomā bez inspicēšanas institūcijas rakstiskas atļaujas. ',
        0, 1, 'C', false);
    left_padding();
}

$is_atkartota   = 'Atkārtotā' === $parbaude_veids;
$is_arpuskartas = 'Ārpuskārtas' === $parbaude_veids;


// Lifta elektromērījumi
if (( ! $is_atkartota && ! $is_arpuskartas && $valditajs_protokols_ar_merijumiem)) {
    $pdf->AddPage();
    $pdf->Ln(10);

    $pdf->SetFont('ArialBold', '', 10);
    left_padding();
    $pdf->setFillColor(128, 128, 255);
    $pdf->cell(0, 5, 'Lifta elektromērījumi:', 0, 1, 'C', false);

    $pdf->SetFont('ArialRegular', '', 10);
    left_padding();
    $pdf->cell(0, 5, 'Pielikums pārbaudes protokolam Nr . : '.$parbaude_nr, 0, 1, 'C', false);

    // first table

    $pdf->Ln(5);
    // first table first row
    left_padding();
    $pdf->SetFont('ArialBold', '', 10);
    $pdf->cell($el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false);
    $pdf->cell($el_merijumi_first_table_row_1_width, $el_merijumi_first_table_row_height * 2, 'Mēriekārta', 'TLR', 0,
        'C', false);
    $pdf->cell($el_merijumi_first_table_row_2_width, $el_merijumi_first_table_row_height, ' Nosaukums:', 'TRB', 0, 'L',
        false);
    $pdf->SetFont('ArialRegular', '', 10);
    $pdf->cell($el_merijumi_first_table_row_3_width, $el_merijumi_first_table_row_height, ' ProInstall 200', 'TRB', 1,
        'L', false);

    // first table second row
    left_padding();
    $pdf->SetFont('ArialBold', '', 10);
    $pdf->cell($el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false);
    $pdf->cell($el_merijumi_first_table_row_1_width, $el_merijumi_first_table_row_height, '', 'LBR', 0, 'C', false);
    $pdf->cell($el_merijumi_first_table_row_2_width, $el_merijumi_first_table_row_height, ' Ident . Nr . ', 'RB', 0,
        'L', false);
    $pdf->SetFont('ArialRegular', '', 10);
    $pdf->cell($el_merijumi_first_table_row_3_width, $el_merijumi_first_table_row_height, ' 309482', 'RB', 1, 'L',
        false);

    // first table third row
    left_padding();
    $pdf->SetFont('ArialBold', '', 10);
    $pdf->cell($el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false);
    $pdf->cell($el_merijumi_first_table_row_1_width + $el_merijumi_first_table_row_2_width,
        $el_merijumi_first_table_row_height, ' Mērījumu metodika:', 'LBR', 0, 'L', false);
    $pdf->SetFont('ArialRegular', '', 10);
    $pdf->cell($el_merijumi_first_table_row_3_width, $el_merijumi_first_table_row_height, ' LRTDEA Nr.08.43 / 016',
        'RB', 1, 'L', false);

    // first table fourth row
    left_padding();
    $pdf->SetFont('ArialBold', '', 10);
    $pdf->cell($el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false);
    $pdf->cell($el_merijumi_first_table_row_1_width + $el_merijumi_first_table_row_2_width,
        $el_merijumi_first_table_row_height, ' Normatīvs', 'LBR', 0, 'L', false);
    $pdf->SetFont('ArialRegular', '', 10);
    $pdf->cell($el_merijumi_first_table_row_3_width, $el_merijumi_first_table_row_height, '', 'BR', 1, 'L', false);
    // $pdf->cell($el_merijumi_first_table_row_3_width, $el_merijumi_first_table_row_height, ' LVS344 :2014', 'BR', 1, 'L', false);

    // first table fifth row
    left_padding();
    $pdf->SetFont('ArialBold', '', 10);
    $pdf->cell($el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false);
    $pdf->cell($el_merijumi_first_table_row_1_width + $el_merijumi_first_table_row_2_width,
        $el_merijumi_first_table_row_height, ' Vizuālā apskate', 'LBR', 0, 'L', false);
    $pdf->cell($el_merijumi_first_table_row_3_width, $el_merijumi_first_table_row_height, '', 'RB', 1, 'C', false);


    // first table end


    // second table

    $pdf->Ln(5);
    // second table first row
    left_padding();
    $pdf->SetFont('ArialRegular', '', 10);
    $pdf->cell($el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, 'Nr . ', 'TLR', 0, 'L',
        false);
    $pdf->cell($el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, ' Mērījumu vieta', 'TLR', 0,
        'L', false);
    $pdf->cell($el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, ' Izolācijas', 'TLR',
        0, 'L', false);
    $pdf->cell($el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, ' Zemējuma', 'TLR',
        0, 'L', false);
    $pdf->cell($el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, ' Pārejas', 'TLR', 1,
        'L', false);

    // second table second row
    left_padding();
    $pdf->cell($el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, '', 'LR', 0, 'L', false);
    $pdf->cell($el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height,
        ' ( līnijas vai iekārtas nosaukums )', 'LR', 0, 'L', false);
    $pdf->cell($el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, ' pretestība, MΩ',
        'LR', 0, 'L', false);
    $pdf->cell($el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, ' pretestība, Ω',
        'LR', 0, 'L', false);
    $pdf->cell($el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, ' pretestība, Ω',
        'LR', 1, 'L', false);

    // second table third row
    left_padding();
    $pdf->cell($el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, '', 'LR', 0, 'L', false);
    $pdf->cell($el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, '', 'LR', 0, 'L', false);
    $pdf->cell($el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, ' ( Pārbaudes ',
        'LR', 0, 'L', false);
    $pdf->cell($el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, '', 'LR', 0, 'L',
        false);
    $pdf->cell($el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, '', 'LR', 1, 'L',
        false);

    // second table fourth row
    left_padding();
    $pdf->cell($el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, '', 'LR', 0, 'L', false);
    $pdf->cell($el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, '', 'LR', 0, 'L', false);
    $pdf->cell($el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, ' ( spriegums ',
        'LR', 0, 'L', false);
    $pdf->cell($el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, '', 'LR', 0, 'L',
        false);
    $pdf->cell($el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, '', 'LR', 1, 'L',
        false);

    // second table fifth row
    left_padding();
    $pdf->cell($el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, '', 'LR', 0, 'L', false);
    $pdf->cell($el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, '', 'LR', 0, 'L', false);
    $pdf->cell($el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, ' 500V ) ', 'LRB', 0,
        'L', false);
    $pdf->cell($el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, '', 'LRB', 0, 'L',
        false);
    $pdf->cell($el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, '', 'LRB', 1, 'L',
        false);

    // second table sixth row
    left_padding();
    $pdf->cell($el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, '', 'LRB', 0, 'L', false);
    $pdf->cell($el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, '', 'LRB', 0, 'L', false);

    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '≥ 1,0 ', 'LRB', 0, 'C',
        false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, ' < 1,0 ', 'RB', 0, 'C',
        false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '≤ 4,0 ', 'RB', 0, 'C',
        false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '˃ 4,0 ', 'RB', 0, 'C',
        false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '≤ 0,1 ', 'RB', 0, 'C',
        false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '˃ 0,1 ', 'RB', 1, 'C',
        false);


    // second table sixth row
    left_padding();
    $pdf->SetFillColor($el_merijumi_red_fill_color, $el_merijumi_green_fill_color, $el_merijumi_blue_fill_color);
    $pdf->cell($el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, ' 1.', 'LRB', 0, 'L',
        false);
    $pdf->cell($el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, ' Barojošais kabelis',
        'LRB', 0, 'L', false);
    $pdf->SetFont('ArialBold', '', 10);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'LRB', 0, 'C',
        false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'RB', 0, 'C',
        false);
    $pdf->SetFont('ArialRegular', '', 10);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 0, 'C',
        true);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 1, 'C',
        true);


    // second table seventh row
    left_padding();
    $pdf->SetFillColor($el_merijumi_red_fill_color, $el_merijumi_green_fill_color, $el_merijumi_blue_fill_color);
    $pdf->cell($el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, ' 2.', 'LRB', 0, 'L',
        false);
    $pdf->cell($el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, ' Lifta elektrodzinējs',
        'LRB', 0, 'L', false);
    $pdf->SetFont('ArialBold', '', 10);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'LRB', 0, 'C',
        false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'RB', 0, 'C',
        false);
    $pdf->SetFont('ArialRegular', '', 10);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 0, 'C',
        true);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 1, 'C',
        true);

    // second table eighth row
    left_padding();
    $pdf->SetFillColor($el_merijumi_red_fill_color, $el_merijumi_green_fill_color, $el_merijumi_blue_fill_color);
    $pdf->cell($el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, ' 3.', 'LRB', 0, 'L',
        false);
    $pdf->cell($el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height,
        ' Elektreomagnētiskās bremzes', 'LRB', 0, 'L', false);
    $pdf->SetFont('ArialBold', '', 10);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'LRB', 0, 'C',
        false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'RB', 0, 'C',
        false);
    $pdf->SetFont('ArialRegular', '', 10);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 0, 'C',
        true);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 1, 'C',
        true);

    // second table nineth row
    left_padding();
    $pdf->SetFillColor($el_merijumi_red_fill_color, $el_merijumi_green_fill_color, $el_merijumi_blue_fill_color);
    $pdf->cell($el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, ' 4.', 'LRB', 0, 'L',
        false);
    $pdf->cell($el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height,
        ' Pazeminošais transformators', 'LRB', 0, 'L', false);
    $pdf->SetFont('ArialBold', '', 10);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'LRB', 0, 'C',
        false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'RB', 0, 'C',
        false);
    $pdf->SetFont('ArialRegular', '', 10);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 0, 'C',
        true);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 1, 'C',
        true);

    // second table tenth row
    left_padding();
    $pdf->SetFillColor($el_merijumi_red_fill_color, $el_merijumi_green_fill_color, $el_merijumi_blue_fill_color);
    $pdf->cell($el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, ' 5.', 'LRB', 0, 'L',
        false);
    $pdf->cell($el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height,
        ' Kabīnes durvju elektrodzinējs', 'LRB', 0, 'L', false);
    $pdf->SetFont('ArialBold', '', 10);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'LRB', 0, 'C',
        false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'RB', 0, 'C',
        false);
    $pdf->SetFont('ArialRegular', '', 10);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 0, 'C',
        true);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 1, 'C',
        true);

    // second table eleventh row
    left_padding();
    $pdf->SetFillColor($el_merijumi_red_fill_color, $el_merijumi_green_fill_color, $el_merijumi_blue_fill_color);
    $pdf->cell($el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, ' 6.', 'LRB', 0, 'L',
        false);
    $pdf->cell($el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, ' Galaslēdžu kabelis',
        'LRB', 0, 'L', false);
    $pdf->SetFont('ArialBold', '', 10);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'LRB', 0, 'C',
        false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'RB', 0, 'C',
        false);
    $pdf->SetFont('ArialRegular', '', 10);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 0, 'C',
        true);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 1, 'C',
        true);

    // second table twelwth row
    left_padding();
    $pdf->SetFillColor($el_merijumi_red_fill_color, $el_merijumi_green_fill_color, $el_merijumi_blue_fill_color);
    $pdf->cell($el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, ' 7.', 'LRB', 0, 'L',
        false);
    $pdf->cell($el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, ' Apgaismojuma ķēde', 'LRB',
        0, 'L', false);
    $pdf->SetFont('ArialBold', '', 10);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'LRB', 0, 'C',
        false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'RB', 0, 'C',
        false);
    $pdf->SetFont('ArialRegular', '', 10);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 0, 'C',
        true);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 1, 'C',
        true);

    // second table thirteenth row
    left_padding();
    $pdf->SetFillColor($el_merijumi_red_fill_color, $el_merijumi_green_fill_color, $el_merijumi_blue_fill_color);
    $pdf->cell($el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, ' 8.', 'LRB', 0, 'L',
        false);
    $pdf->cell($el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, ' Metālkonstrukcijas',
        'LRB', 0, 'L', false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 0, 'C',
        true);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 0, 'C',
        true);
    $pdf->SetFont('ArialBold', '', 10);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'RB', 0, 'C',
        false);
    $pdf->SetFont('ArialRegular', '', 10);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 1, 'C', false);


    // second table fourteenth row
    left_padding();
    $pdf->cell($el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, ' 8.', 'LRB', 0, 'L',
        false);
    $pdf->cell($el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, ' Metālkonstrukcijas',
        'LRB', 0, 'L', false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 0, 'C',
        false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 0, 'C',
        false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false);
    $pdf->cell($el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 1, 'C', false);

    // second table end

    // el merijumi sledziens
    $pdf->Ln(10);
    // el merijumi sledziens first row
    left_padding();
    $pdf->SetFont('ArialBold', '', 10);
    $pdf->cell(15, $el_merijumi_sledziens_row_height, 'Slēdziens:', '', 1, 'L', false);
    $pdf->Ln($el_merijumi_sledziens_line_distance);

    // el merijumi sledziens second row
    left_padding();
    $pdf->SetFont('ArialRegular', '', 10);
    $pdf->cell(25, $el_merijumi_sledziens_row_height, 'Atbilstošo atzīmēt ', '', 0, 'L', false);
    getPositionForCheckbox($pdf);
    $pdf->cell(5, $el_merijumi_sledziens_row_height, '', '', 1, 'L', false);
    $pdf->Ln($el_merijumi_sledziens_line_distance);

    // el merijumi sledziens third row
    left_padding();
    $pdf->SetFont('ArialRegular', '', 10);
    $pdf->cell($el_merijumi_sledziens_col_1_width, $el_merijumi_sledziens_row_height, 'Izolācijas pretestība', '', 0,
        'L', false);
    $pdf->SetFont('ArialBold', '', 10);
    $pdf->cell($el_merijumi_sledziens_col_2_width, $el_merijumi_sledziens_row_height, 'atbilst', '', 0, 'L', false);
    $pdf->SetFont('ArialRegular', '', 10);
    getPositionForCheckbox($pdf);
    $pdf->cell($el_merijumi_sledziens_col_checkbox_width, $el_merijumi_sledziens_row_height, '', '', 0, 'L', false);
    $pdf->cell($el_merijumi_sledziens_col_4_width, $el_merijumi_sledziens_row_height, 'neatbilst', '', 0, 'L', false);
    getPositionForEmptyCheckbox($pdf);
    $pdf->cell($el_merijumi_sledziens_col_checkbox_width, $el_merijumi_sledziens_row_height, '', '', 0, 'L', false);
    $pdf->cell($el_merijumi_sledziens_col_5_width, $el_merijumi_sledziens_row_height, 'normai,', '', 1, 'L', false);
    $pdf->Ln($el_merijumi_sledziens_line_distance);

    // el merijumi sledziens fourth row
    left_padding();
    $pdf->SetFont('ArialRegular', '', 10);
    $pdf->cell($el_merijumi_sledziens_col_1_width, $el_merijumi_sledziens_row_height, 'Zemējuma pretestība', '', 0, 'L',
        false);
    $pdf->SetFont('ArialBold', '', 10);
    $pdf->cell($el_merijumi_sledziens_col_2_width, $el_merijumi_sledziens_row_height, 'atbilst', '', 0, 'L', false);
    $pdf->SetFont('ArialRegular', '', 10);
    getPositionForCheckbox($pdf);
    $pdf->cell($el_merijumi_sledziens_col_checkbox_width, $el_merijumi_sledziens_row_height, '', '', 0, 'L', false);
    $pdf->cell($el_merijumi_sledziens_col_4_width, $el_merijumi_sledziens_row_height, 'neatbilst', '', 0, 'L', false);
    getPositionForEmptyCheckbox($pdf);
    $pdf->cell($el_merijumi_sledziens_col_checkbox_width, $el_merijumi_sledziens_row_height, '', '', 0, 'L', false);
    $pdf->cell($el_merijumi_sledziens_col_5_width, $el_merijumi_sledziens_row_height, 'normai,', '', 1, 'L', false);
    $pdf->Ln($el_merijumi_sledziens_line_distance);

    // el merijumi sledziens fifth row
    left_padding();
    $pdf->SetFont('ArialRegular', '', 10);
    $pdf->cell($el_merijumi_sledziens_col_1_width, $el_merijumi_sledziens_row_height, 'Pārejas pretestība', '', 0, 'L',
        false);
    $pdf->SetFont('ArialBold', '', 10);
    $pdf->cell($el_merijumi_sledziens_col_2_width, $el_merijumi_sledziens_row_height, 'atbilst', '', 0, 'L', false);
    $pdf->SetFont('ArialRegular', '', 10);
    getPositionForCheckbox($pdf);
    $pdf->cell($el_merijumi_sledziens_col_checkbox_width, $el_merijumi_sledziens_row_height, '', '', 0, 'L', false);
    $pdf->cell($el_merijumi_sledziens_col_4_width, $el_merijumi_sledziens_row_height, 'neatbilst', '', 0, 'L', false);
    getPositionForEmptyCheckbox($pdf);
    $pdf->cell($el_merijumi_sledziens_col_checkbox_width, $el_merijumi_sledziens_row_height, '', '', 0, 'L', false);
    $pdf->cell($el_merijumi_sledziens_col_5_width, $el_merijumi_sledziens_row_height, 'normai . ', '', 1, 'L', false);
    $pdf->Ln($el_merijumi_sledziens_line_distance);

    // el merijumi sledziens sixth row
    left_padding();
    $pdf->cell($width, $el_merijumi_sledziens_row_height, 'Neatbilstību apraksti( papildus norādījumi ):', '', 1, 'L',
        false);
    $pdf->Ln(2);

    // el merijumi sledziens lines 3 rows
    left_padding();
    left_padding();
    $pdf->cell($el_merijumi_sledziens_col_lines_width, $el_merijumi_sledziens_row_height, '', 'B', 1, 'L', false);
    left_padding();
    left_padding();
    $pdf->cell($el_merijumi_sledziens_col_lines_width, $el_merijumi_sledziens_row_height, '', 'B', 1, 'L', false);
    left_padding();
    left_padding();
    $pdf->cell($el_merijumi_sledziens_col_lines_width, $el_merijumi_sledziens_row_height, '', 'B', 1, 'L', false);


    $pdf->Ln(12);
    left_padding();
    left_padding();
    $pdf->SetFont($font_family_default_bold, '', $font_size_default);

    $pdf->cell(25, 5, 'Eksperts ', 0, 0, 'L', false);
    $pdf->cell(45, 5, 'Igors Koptevs', 'B', 1, 'C', false);

    left_padding();
    left_padding();
    $pdf->SetFillColor(123, 123, 123);
    $pdf->SetFont($font_family_default, '', 7);
    $pdf->cell(25, 3, '', 0, 0, 'R', false);
    $pdf->cell(45, 3, '( vārds, uzvārds )', 0, 1, 'C', false);

    $pdf->Ln(3);
    $pdf->SetFont($font_family_default_bold, '', $font_size_default);
    left_padding();
    left_padding();
    $pdf->cell(35, 5, 'Pārbaudes datums ', 0, 0, 'L', false);
    $pdf->cell(45, 5, date_format(date_create_from_format('Y-m-d', $parbaude_datums),'d.m.Y' ), 'B', 1, 'C', false);


    // footer
    $pdf->Ln(50);
    left_padding();

    if ($digitally_signed) {
        $pdf->cell(0, 7, 'Protokols parakstīts ar drošu elektronisko parakstu un satur laika zīmogu . ', 0, 0, 'C',
            false);
    } else {
        $pdf->cell(0, 7, '', 0, 0, 'L', false);
    }


    // getPositionForCheckbox($pdf); //place where checkbox is needed
    foreach ($checkboxes as $checkbox) {
        $pdf->Image(__DIR__.'/../img/checkbox.png',
            $checkbox['x'] + $el_merijumi_second_table_col_data_width / 2 - $checkbox_image_width / 2, $checkbox['y'],
            $checkbox_image_width, $checkbox_image_height,);
    }
    foreach ($empty_checkboxes as $empty_checkbox) {
        $pdf->Image(__DIR__.'/../img/empty_checkbox.png',
            $empty_checkbox['x'] + $el_merijumi_second_table_col_data_width / 2 - $checkbox_image_width / 2,
            $empty_checkbox['y'], $checkbox_image_width, $checkbox_image_height,);
    }
    // var_dump($checkboxes);


}


// $output_address = explode( ',', $lifts['lifts_parbaudes_adrese'] )[0];
$output_date = implode('.', array_reverse(explode('.', $parbaude_datums_start)));
// dd($output_date);
// $output_date = $parbaude_datums_start;
$pdf->output('I', $output_date.'_'.$lifts_reg_nr.'_'.$lifts_parbaudes_adrese_short.'.pdf', true);
// $pdf->output( 'I', $output_date . '_' . $lifts_reg_nr . '_' . str_replace( ',', '_', $lifts_parbaudes_adrese_short ), true );
// $pdf->output( 'I', $output_date . '_' . $lifts_reg_nr . '_' . str_replace( ',', '_', $lifts_parbaudes_adrese_short ) . '. pdf', true );
exit;
