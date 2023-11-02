<?php
// ver.001 - before 'ar parbaudes rezultatiem iepazinos for RNP'
// require( './fpdf/fpdf.php' );
require '../tfpdf/tfpdf.php';
require '../variables.php';
require '../functions.php';
require '../data/lifti.php';
require '../data/valditaji.php';
require '../data/parbaudes.php';



$digitally_signed    = true;
$parbaude_piedalijas = false;
$headless            = false;
$is_blank            = false;

// var_dump( $_GET );
// die();

$parbaude  = $parbaudes[ $_GET['check'] ?? '04.45/151-23/02' ];
$lifts     = $lifti[ $parbaude['parbaude_lifts_reg_nr'] ];
$valditajs = $valditaji[ $parbaude['parbaude_valditajs'] ];

$lifts_adrese_kapnu_telpa = $lifts['lifts_adrese_kapnu_telpa'];
$lifts_uzstadisanas_gads  = $lifts['lifts_uzstadisanas_gads'];
$lifts_adrese_iela        = $lifts['lifts_adrese_iela'];
$lifts_adrese_maja        = $lifts['lifts_adrese_maja'];
$lifts_adrese_pilseta     = $lifts['lifts_adrese_pilseta'];
$lifts_adrese_indeks      = $lifts['lifts_adrese_indeks'];
$lifts_reg_nr             = $lifts['lifts_reg_nr'];
$lifts_uzstaditajs        = $lifts['lifts_uzstaditajs'];
$lifts_rupn_nr            = $lifts['lifts_rupn_nr'];
$lifts_tips               = $lifts['lifts_tips'];
$lifts_celtspeja          = $lifts['lifts_celtspeja'];


$parbaude_neatbilstibas_0              = $parbaude['parbaude_neatbilstibas_0'];
$parbaude_neatbilstibas_1              = $parbaude['parbaude_neatbilstibas_1'];
$parbaude_neatbilstibas_2              = $parbaude['parbaude_neatbilstibas_2'];
$parbaude_neatbilstibas_3              = $parbaude['parbaude_neatbilstibas_3'];
$parbaude_atkartotas_parbaudes_iemesls = $parbaude['atkartotas_parbaudes_iemesls'];
$parbaude_nr                           = $parbaude['parbaude_nr'];
$parbaude_zimes_nr                     = $parbaude['parbaude_zimes_nr'];
$parbaude_mehanika_kompanija           = $parbaude['parbaude_mehanika_kompanija'];
$parbaude_mehanikis_vards_uzvards      = $parbaude['parbaude_mehanikis_vards_uzvards'];
$parbaude_bir_reg_nr                   = $parbaude['parbaude_bir_reg_nr'];


$parbaude_veids             = $parbaude['parbaude_veids'];
$parbaude_datums_start      = $parbaude['parbaude_datums_start'];
$parbaude_datums_end        = $parbaude['parbaude_datums_end'];
$parbaude_next_datums       = $parbaude['parbaude_next_datums'];
$parbaude_netika_parbaudits = $parbaude['parbaude_netika_parbaudits'];

$valditajs_nosaukums               = $valditajs['valditajs_nosaukums'];
$valditajs_liguma_nr               = $valditajs['valditajs_liguma_nr'];
$valditajs_liguma_datums           = $valditajs['valditajs_liguma_datums'];
$valditajs_adrese                  = $valditajs['valditajs_adrese'];
$valditajs_reg_nr                  = $valditajs['valditajs_reg_nr'];
$valditajs_protokols_ar_merijumiem = $valditajs['protokols_ar_merijumiem'];



$is_atkartota = 'atkārtotā' === $parbaude_veids;
$is_ce        = intval( $lifts_uzstadisanas_gads ) >= 2000;

$iela_or_bulvaris         = '';
$iela_array               = explode( ' ', $lifts_adrese_iela );
$last_word_in_adrese_iela = $iela_array[ count( $iela_array ) - 1 ];
if ( ( $last_word_in_adrese_iela !== 'bulvāris' ) && ( $last_word_in_adrese_iela !== 'bulvaris' ) && ( $last_word_in_adrese_iela !== 'gatve' ) && ( $last_word_in_adrese_iela !== 'prospekts' ) ) {
	$iela_or_bulvaris = 'iela';
}
$kapnu_telpa                  = $lifts_adrese_kapnu_telpa ? '-' . $lifts_adrese_kapnu_telpa : '';
$lifts_parbaudes_adrese_short = $lifts_adrese_iela . ' ' . $iela_or_bulvaris . ' ' . $lifts_adrese_maja . $kapnu_telpa;
$lifts_parbaudes_adrese       = $lifts_parbaudes_adrese_short . ', ' . $lifts_adrese_pilseta . ', ' . $lifts_adrese_indeks;

$parbaude_datums = '';
if ( $parbaude_datums_start === $parbaude_datums_end ) {
	$parbaude_datums = $parbaude_datums_start;
} else {
	$parbaude_datums = explode( '.', $parbaude_datums_start )[0] . ' - ' . $parbaude_datums_end;
}

$checkboxes       = array();
$empty_checkboxes = array();

$pdf = new tFPDF( 'P', 'mm', 'A4' );
$pdf->SetAutoPageBreak( false, 10 );
require '../fonts.php';
$pdf->addPage();
$pdf->setLineWidth( $default_line_width );

$prp_netika_parbaudits = numbered_string_to_array( $parbaude_netika_parbaudits ?? '' );
$prp_0                 = numbered_string_to_array( $parbaude_neatbilstibas_0 ?? '' );
$prp_1                 = numbered_string_to_array( $parbaude_neatbilstibas_1 ?? '' );
$prp_2                 = numbered_string_to_array( $parbaude_neatbilstibas_2 ?? '' );
$prp_3                 = numbered_string_to_array( $parbaude_neatbilstibas_3 ?? '' );
$prp_2_3               = numbered_string_to_array( $parbaude_neatbilstibas_3 . "\n" . $parbaude_neatbilstibas_2 );
$prp_all               = numbered_string_to_array( $parbaude_neatbilstibas_3 . "\n" . $parbaude_neatbilstibas_2 . "\n" . $parbaude_neatbilstibas_1 );

if ( $is_atkartota ) {
	$prp_all = array_merge( $parbaude_atkartotas_parbaudes_iemesls, $prp_all );
	$prp_1   = array_merge( $parbaude_atkartotas_parbaudes_iemesls, $prp_1 );
}



// echo '<pre>';
// var_dump( $parbaude['parbaude_neatbilstibas'] );
// var_dump( $prp_1 );
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
if ( $headless ) {
	$pdf->setFillColor( 255, 255, 255 );
	left_padding();
	$pdf->cell( 0, 17, '', 0, 1, 'C', true );
} else {
	require_once '../header.php';
}
// headless

$pdf->SetFont( 'ArialBoldItalic', '', 10 );
left_padding();
$pdf->setFillColor( 128, 128, 255 );
$pdf->cell( 0, 11, 'LIFTA TEHNISKĀS PĀRBAUDES PROTOKOLS Nr. ' . $parbaude_nr, 0, 1, 'C', false );
$pdf->Image( '../img/latak_logo.jpg', $width - 5, 30, 22, );
$pdf->SetFont( $font_family_default_bold, '', $font_size_default );

//
// VALDITAJS
//
left_padding();
$pdf->setFillColor( 128, 128, 255 );
$pdf->cell( $section_valditajs_left_col_width, $section_valditajs_height / 2, ' Valdītājs:', 'LRT', 0, 'L', $is_filled );
$pdf->cell( 20, $section_valditajs_height / 2, ' Līguma Nr.', 0, 0, 'L', false );
$pdf->cell( 40, $section_valditajs_height / 2, $valditajs_liguma_nr, 'B', 1, 'C', false );

left_padding();
$pdf->cell( $section_valditajs_left_col_width, $section_valditajs_height / 2, $valditajs_nosaukums, 'LRB', 0, 'C', false );
$pdf->cell( 20, $section_valditajs_height / 2, '', 0, 0, 'L', false );
$pdf->cell( 40, $section_valditajs_height / 2, $valditajs_liguma_datums, 0, 1, 'C', false );


//
// ADRESE
//
left_padding();

$pdf->cell( $section_valditajs_left_col_width, $section_valditajs_height / 2, ' Adrese:', 'LRT', 0, 'L', false );
$pdf->cell( 0, $section_valditajs_height / 2, ' Pārbaudes adrese:', 'RT', 1, 'L', false );

left_padding();

$pdf->cell( $section_valditajs_left_col_width, $section_valditajs_height / 2, $valditajs_adrese, 'LRB', 0, 'C', false );
$pdf->cell( 0, $section_valditajs_height / 2, $lifts_parbaudes_adrese, 'RB', 1, 'C', false );

//
// REG NR
//
left_padding();

$pdf->setLineWidth( $section_reg_nr_line_width );
$pdf->cell( $section_reg_nr_label_width, $section_reg_nr_height, 'Reģ, Nr.:', 0, 0, 'C', false );

foreach ( stringToArray( $valditajs_reg_nr ) as $key => $val ) {
	$newStr = 0;
	if ( $key === 10 ) {
		$newStr = 1;
	}
	$pdf->cell( $section_reg_nr_digit_width, $section_reg_nr_height, $val, 'LRB', $newStr, 'C', false );
}
$pdf->setLineWidth( $default_line_width );
$pdf->Ln( 1 );

//
// PARBAUDES VEIDS
//
$pdf->setLineWidth( $parbaudes_veids_line_width );
left_padding();
$pdf->SetFont( $parbaudes_veids_label_font_family, '', $parbaudes_veids_label_font_size );
$pdf->cell( $parbaudes_veids_1col_width, $parbaudes_veids_cell_height, 'Pārbaudes veids', 0, 0, 'L', false );
$pdf->SetFont( $parbaudes_veids_font_family, '', $parbaudes_veids_font_size );
$pdf->cell( $parbaudes_veids_2col_width, $parbaudes_veids_cell_height, 'Pirmreizējā*', 0, 0, 'C', false );
$pdf->SetFont( $parbaudes_veids_mark_font_family, '', $parbaudes_veids_mark_font_size );
$pdf->cell( $parbaudes_veids_3col_width, $parbaudes_veids_cell_height, $parbaude_veids === 'pirmreizējā' ? 'X' : '', 1, 0, 'C', false );
$pdf->SetFont( $parbaudes_veids_font_family, '', $parbaudes_veids_font_size );
$pdf->cell( $parbaudes_veids_4col_width, $parbaudes_veids_cell_height, 'Kārtējā', 0, 0, 'C', false );
$pdf->SetFont( $parbaudes_veids_mark_font_family, '', $parbaudes_veids_mark_font_size );
$pdf->cell( $parbaudes_veids_5col_width, $parbaudes_veids_cell_height, $parbaude_veids === 'kārtējā' ? 'X' : '', 1, 0, 'C', false );
$pdf->SetFont( $parbaudes_veids_font_family, '', $parbaudes_veids_font_size );
$pdf->cell( $parbaudes_veids_6col_width, $parbaudes_veids_cell_height, 'Ārpuskārtas', 0, 0, 'C', false );
$pdf->SetFont( $parbaudes_veids_mark_font_family, '', $parbaudes_veids_mark_font_size );
$pdf->cell( $parbaudes_veids_7col_width, $parbaudes_veids_cell_height, $parbaude_veids === 'ārpuskārtas' ? 'X' : '', 1, 0, 'C', false );
$pdf->SetFont( $parbaudes_veids_font_family, '', $parbaudes_veids_font_size );
$pdf->cell( $parbaudes_veids_8col_width, $parbaudes_veids_cell_height, 'Atkārtotā', 0, 0, 'C', false );
$pdf->SetFont( $parbaudes_veids_mark_font_family, '', $parbaudes_veids_mark_font_size );
$pdf->cell( $parbaudes_veids_9col_width, $parbaudes_veids_cell_height, $parbaude_veids === 'atkārtotā' ? 'X' : '', 1, 1, 'C', false );

$pdf->SetFont( $font_family_default, '', $font_size_s );
$pdf->setLineWidth( $default_line_width );
//
// TEHNISKAS PARBAUDES NORMATIVI
//
$pdf->SetFont( $tehniskas_parbaudes_normativi_label_font_family, '', $tehniskas_parbaudes_normativi_label_font_size );
left_padding();
$pdf->cell( $tehniskas_parbaudes_normativi_label_cell_width, $tehniskas_parbaudes_normativi_cell_height, 'Tehniskās pārbaudes normatīvi:', 0, 0, 'L', false );
$pdf->SetFont( $tehniskas_parbaudes_normativi_font_family, '', $tehniskas_parbaudes_normativi_font_size );
$pdf->cell( 0, $tehniskas_parbaudes_normativi_cell_height, 'MK.Not.Nr.679 no 17.11.2020;  LRTDEA metodika 04.11/001', 0, 1, 'L', false );

$pdf->SetFont( $font_family_default, '', $font_size_s );
$pdf->setLineWidth( $default_line_width );
// $pdf->Ln( 10 );
//
// ZINAS PAR
//
$pdf->setLineWidth( $zinas_par_line_width );
left_padding();
$pdf->SetFont( $zinas_par_label_font_family, '', $zinas_par_label_font_size );
$pdf->cell( $zinas_par_label_cell_width, $zinas_par_cell_height, 'Ziņas par', 0, 0, 'L', false );
$pdf->SetFont( $zinas_par_font_family, '', $zinas_par_font_size );
$pdf->cell( $zinas_par_reg_nr_label_cell_width, $zinas_par_cell_height, 'Reģ. Nr.', 0, 0, 'R', false );
$pdf->SetFont( $zinas_par_label_font_family, '', $zinas_par_label_font_size );
$pdf->cell( $zinas_par_reg_nr_cell_width, $zinas_par_cell_height, $lifts_reg_nr, 0, 0, 'L', false );
$pdf->SetFont( $zinas_par_font_family, '', $zinas_par_font_size );
$pdf->cell( $zinas_par_uzstaditajs_label_cell_width, $zinas_par_cell_height, 'Uzstādītājs:', 'B', 0, 'C', false );
$pdf->SetFont( $zinas_par_label_font_family, '', $zinas_par_label_font_size );
$pdf->cell( $zinas_par_uzstaditajs_cell_width, $zinas_par_cell_height, $lifts_uzstaditajs, 'B', 1, 'C', false );

//
// LIFTU
//

$pdf->setLineWidth( $zinas_par_line_width );
left_padding();
$pdf->SetFont( $zinas_par_label_font_family, '', $zinas_par_label_font_size );
$pdf->cell( $zinas_par_label_cell_width, $zinas_par_cell_height, 'liftu:', 0, 0, 'L', false );
$pdf->SetFont( $zinas_par_font_family, '', $zinas_par_font_size );
$pdf->cell( $zinas_par_reg_nr_label_cell_width, $zinas_par_cell_height, 'Rūpn. Nr.', 'BT', 0, 'R', false );
$pdf->SetFont( $zinas_par_label_font_family, '', $zinas_par_label_font_size );
$pdf->cell( $zinas_par_reg_nr_cell_width, $zinas_par_cell_height, $lifts_rupn_nr, 'BT', 0, 'L', false );
$pdf->SetFont( $zinas_par_font_family, '', $zinas_par_font_size );
$pdf->cell( $liftu_uzstadisanas_gads_cell_width, $zinas_par_cell_height, 'Uzstādīšanas gads ', 'B', 0, 'R', false );

$pdf->SetFont( $zinas_par_label_font_family, '', $zinas_par_label_font_size );
foreach ( stringToArray( $lifts_uzstadisanas_gads ) as $key => $val ) {
	$newStr = 0;
	if ( $key === 3 ) { // 4 digit year 0-3
		$newStr = 1;
	}
	$pdf->cell( $liftu_gads_cell_width, $liftu_cell_height, $val, 'LRB', $newStr, 'C', false );
}

$pdf->SetFont( $font_family_default, '', $font_size_s );
$pdf->setLineWidth( $default_line_width );
$pdf->Ln( 1 );

//
// LIFTA TIPS
//
left_padding();
$pdf->SetFont( $lifta_tips_label_font_family, '', $lifta_tips_label_font_size );
$pdf->cell( $lifta_tips_label_cell_width, $lifta_tips_cell_height, 'Lifta tips:', 0, 0, 'L', false );

$pdf->SetFont( $lifta_tips_font_family, '', $lifta_tips_font_size );
$pdf->cell( $lifta_tips_cell_width, $lifta_tips_cell_height, 'elektriskais ', 0, 0, 'R', false );
$pdf->SetFont( $lifta_tips_label_font_family, '', $lifta_tips_label_font_size );
$pdf->cell( $lifta_tips_mark_cell_width, $lifta_tips_cell_height, $lifts_tips === 'elektriskais' ? 'X' : '', 1, 0, 'C', false );

$pdf->SetFont( $lifta_tips_font_family, '', $lifta_tips_font_size );
$pdf->cell( $lifta_tips_cell_width, $lifta_tips_cell_height, 'hidrauliskais ', 0, 0, 'R', false );
$pdf->SetFont( $lifta_tips_label_font_family, '', $lifta_tips_label_font_size );
$pdf->cell( $lifta_tips_mark_cell_width, $lifta_tips_cell_height, $lifts_tips === 'hidrauliskais' ? 'X' : '', 1, 1, 'C', false );

$pdf->SetFont( $font_family_default, '', $font_size_s );
$pdf->Ln( 1 );
//
// CELTSPEJA
//

$pdf->SetFont( $font_family_default, '', $font_size_default );
left_padding();
$pdf->cell( 20, 4, 'Celtspēja', 'B', 0, 'L', false );
$pdf->SetFont( 'ArialBold', '', $font_size_s );
$pdf->cell( 15, 4, $lifts_celtspeja, 'B', 0, 'L', false );
$pdf->SetFont( $font_family_default, '', $font_size_s );
$pdf->cell( 0, 4, 'kg.', 'B', 1, 'L', false );


$pdf->SetFont( $font_family_default, '', $font_size_s );

//
// PARBAUDES REZULTATI
//
$pdf->Ln( 1 );
left_padding();
$pdf->SetFont( 'ArialBold', '', 10 );
$pdf->cell( 0, 3, 'Pārbaudes rezultāti', 0, 1, 'L', false );
$pdf->Ln( 0.5 );


// parbaudes rezultati header start
left_padding();
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '1. Visparīgi', 0, 0, 'L', false );
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_label_font_size );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '0', 0, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '1', 0, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '2', 0, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '3', 0, 0, 'C', false );

$pdf->cell( $parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '4. Kabīne', 0, 0, 'L', false );
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_label_font_size );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '0', 0, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '1', 0, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '2', 0, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '3', 0, 1, 'C', false );
// parbaudes rezultati header end
// parbaudes rezultati 1 row start
left_padding();
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '1.1 Lifta atbilstības deklarācija*', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, 'O', 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false );

$pdf->cell( $parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false );
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '4.1 Lifta kabīne', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['4.1'] ) ? '-' : ( isset( $prp_1['4.1'] ) || isset( $prp_2['4.1'] ) || isset( $prp_3['4.1'] ) || $is_blank ? '' : ( $is_atkartota ? ( isset( $prp_0['4.1'] ) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['4.1'] ) ? '' : ( ! isset( $prp_1['4.1'] ) || isset( $prp_2['4.1'] ) || isset( $prp_3['4.1'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['4.1'] ) ? '' : ( ! isset( $prp_2['4.1'] ) || isset( $prp_3['4.1'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['4.1'] ) ? '' : ( ! isset( $prp_3['4.1'] ) || $is_blank ? '' : 'X' ), 1, 1, 'C', false );
// parbaudes rezultati 1 row end

// parbaudes rezultati 2 row start
left_padding();
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '1.2 Lifta atbilstības sertifikāts*', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, 'O', 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false );

$pdf->cell( $parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false );
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '4.2 Celtspējas kontroles ierīce', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, ! $is_ce ? 'O' : ( $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 1, 'C', false );
// parbaudes rezultati 2 row end

// parbaudes rezultati 3 row start
left_padding();
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '1.3 Lifta lietošanas dokumentācija', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['1.3'] ) ? '-' : ( isset( $prp_1['1.3'] ) || isset( $prp_2['1.3'] ) || isset( $prp_3['1.3'] ) || $is_blank ? '' : ( $is_atkartota ? ( isset( $prp_0['1.3'] ) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['1.3'] ) ? '' : ( ! isset( $prp_1['1.3'] ) || isset( $prp_2['1.3'] ) || isset( $prp_3['1.3'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['1.3'] ) ? '' : ( ! isset( $prp_2['1.3'] ) || isset( $prp_3['1.3'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['1.3'] ) ? '' : ( ! isset( $prp_3['1.3'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );

$pdf->cell( $parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false );
$pdf->SetFont( $font_family_default, '', 7 );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '4.3 Lifta kabīnes līmeņošanas un apstāšanas precizitāte', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['4.3'] ) ? '-' : ( isset( $prp_1['4.3'] ) || isset( $prp_2['4.3'] ) || isset( $prp_3['4.3'] ) || $is_blank ? '' : ( $is_atkartota ? ( isset( $prp_0['4.3'] ) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['4.3'] ) ? '' : ( ! isset( $prp_1['4.3'] ) || isset( $prp_2['4.3'] ) || isset( $prp_3['4.3'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['4.3'] ) ? '' : ( ! isset( $prp_2['4.3'] ) || isset( $prp_3['4.3'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['4.3'] ) ? '' : ( ! isset( $prp_3['4.3'] ) || $is_blank ? '' : 'X' ), 1, 1, 'C', false );

// parbaudes rezultati 3 row end

// parbaudes rezultati 4 row start
left_padding();
$pdf->SetFont( $font_family_default, '', 7 );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '1.4 Brīdinājumi, apzimējumi un informācija par lifta lietošanu', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );

// $pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_1['1.4'] ) || $is_blank ? '' : 'X', 1, 0, 'C', false );
// $pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, ! isset( $prp_1['1.4'] ) || $is_blank ? '' : 'X', 1, 0, 'C', false );
// $pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false );
// $pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['1.4'] ) ? '-' : ( isset( $prp_1['1.4'] ) || isset( $prp_2['1.4'] ) || isset( $prp_3['1.4'] ) || $is_blank ? '' : ( $is_atkartota ? ( isset( $prp_0['1.4'] ) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['1.4'] ) ? '' : ( ! isset( $prp_1['1.4'] ) || isset( $prp_2['1.4'] ) || isset( $prp_3['1.4'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['1.4'] ) ? '' : ( ! isset( $prp_2['1.4'] ) || isset( $prp_3['1.4'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['1.4'] ) ? '' : ( ! isset( $prp_3['1.4'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );

$pdf->cell( $parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false );

$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '5. Šahta', 0, 1, 'L', false );
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_label_font_size );
// parbaudes rezultati 4 row end

// parbaudes rezultati 5 row start
left_padding();
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width + $parbaudes_rezultati_mark_column_width * 4, $parbaudes_rezultati_cell_height, '2. Troses, ķēdes, to stīprinājumi', 0, 0, 'L', false );
$pdf->cell( $parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false );

$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '5.1 Šahtas atbilstība', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['5.1'] ) ? '-' : ( isset( $prp_1['5.1'] ) || isset( $prp_2['5.1'] ) || isset( $prp_3['5.1'] ) || $is_blank ? '' : ( $is_atkartota ? ( isset( $prp_0['5.1'] ) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['5.1'] ) ? '' : ( ! isset( $prp_1['5.1'] ) || isset( $prp_2['5.1'] ) || isset( $prp_3['5.1'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['5.1'] ) ? '' : ( ! isset( $prp_2['5.1'] ) || isset( $prp_3['5.1'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['5.1'] ) ? '' : ( ! isset( $prp_3['5.1'] ) || $is_blank ? '' : 'X' ), 1, 1, 'C', false );

// parbaudes rezultati 5 row end

// parbaudes rezultati 6 row start
left_padding();
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '2.1 Trošu, siksnu nostiepuma kontrole', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['2.1'] ) ? '-' : ( isset( $prp_1['2.1'] ) || isset( $prp_2['2.1'] ) || isset( $prp_3['2.1'] ) || $is_blank ? '' : ( $is_atkartota ? ( isset( $prp_0['2.1'] ) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['2.1'] ) ? '' : ( ! isset( $prp_1['2.1'] ) || isset( $prp_2['2.1'] ) || isset( $prp_3['2.1'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['2.1'] ) ? '' : ( ! isset( $prp_2['2.1'] ) || isset( $prp_3['2.1'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['2.1'] ) ? '' : ( ! isset( $prp_3['2.1'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );

$pdf->cell( $parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false );
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '5.2 Šahtas nožogojumi', 'TB', 0, 'L', false );

$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['5.2'] ) ? '-' : ( isset( $prp_1['5.2'] ) || isset( $prp_2['5.2'] ) || isset( $prp_3['5.2'] ) || $is_blank ? '' : ( $is_atkartota ? ( isset( $prp_0['5.2'] ) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['5.2'] ) ? '' : ( ! isset( $prp_1['5.2'] ) || isset( $prp_2['5.2'] ) || isset( $prp_3['5.2'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['5.2'] ) ? '' : ( ! isset( $prp_2['5.2'] ) || isset( $prp_3['5.2'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['5.2'] ) ? '' : ( ! isset( $prp_3['5.2'] ) || $is_blank ? '' : 'X' ), 1, 1, 'C', false );

// parbaudes rezultati 6 row end

// parbaudes rezultati 7 row start
left_padding();
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '2.2 Lifta piekāre un tās elementi', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['2.2'] ) ? '-' : ( isset( $prp_1['2.2'] ) || isset( $prp_2['2.2'] ) || isset( $prp_3['2.2'] ) || $is_blank ? '' : ( $is_atkartota ? ( isset( $prp_0['2.2'] ) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['2.2'] ) ? '' : ( ! isset( $prp_1['2.2'] ) || isset( $prp_2['2.2'] ) || isset( $prp_3['2.2'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['2.2'] ) ? '' : ( ! isset( $prp_2['2.2'] ) || isset( $prp_3['2.2'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['2.2'] ) ? '' : ( ! isset( $prp_3['2.2'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );

$pdf->cell( $parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false );
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '5.3 Vadotnes un metālkonstrukcija', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['5.3'] ) ? '-' : ( isset( $prp_1['5.3'] ) || isset( $prp_2['5.3'] ) || isset( $prp_3['5.3'] ) || $is_blank ? '' : ( $is_atkartota ? ( isset( $prp_0['5.3'] ) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['5.3'] ) ? '' : ( ! isset( $prp_1['5.3'] ) || isset( $prp_2['5.3'] ) || isset( $prp_3['5.3'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['5.3'] ) ? '' : ( ! isset( $prp_2['5.3'] ) || isset( $prp_3['5.3'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['5.3'] ) ? '' : ( ! isset( $prp_3['5.3'] ) || $is_blank ? '' : 'X' ), 1, 1, 'C', false );

// parbaudes rezultati 7 row end

// parbaudes rezultati $parbaudes_rezultati_text_font_size row start
left_padding();
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width + $parbaudes_rezultati_mark_column_width * 4, $parbaudes_rezultati_cell_height, '3. Mašīntelpa un elektriskā iekārta', 0, 0, 'L', false );
$pdf->cell( $parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false );

$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '5.4 Lifta buferi', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', 9 );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['5.4'] ) ? '-' : ( isset( $prp_1['5.4'] ) || isset( $prp_2['5.4'] ) || isset( $prp_3['5.4'] ) || $is_blank ? '' : ( $is_atkartota ? ( isset( $prp_0['5.4'] ) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['5.4'] ) ? '' : ( ! isset( $prp_1['5.4'] ) || isset( $prp_2['5.4'] ) || isset( $prp_3['5.4'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['5.4'] ) ? '' : ( ! isset( $prp_2['5.4'] ) || isset( $prp_3['5.4'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['5.4'] ) ? '' : ( ! isset( $prp_3['5.4'] ) || $is_blank ? '' : 'X' ), 1, 1, 'C', false );

// parbaudes rezultati $parbaudes_rezultati_text_font_size row end

// parbaudes rezultati 9 row start
left_padding();
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '3.1 Mašīntelpa un trīšu telpas', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.1'] ) ? '-' : ( isset( $prp_1['3.1'] ) || isset( $prp_2['3.1'] ) || isset( $prp_3['3.1'] ) || $is_blank ? '' : ( $is_atkartota ? ( isset( $prp_0['3.1'] ) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.1'] ) ? '' : ( ! isset( $prp_1['3.1'] ) || isset( $prp_2['3.1'] ) || isset( $prp_3['3.1'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.1'] ) ? '' : ( ! isset( $prp_2['3.1'] ) || isset( $prp_3['3.1'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.1'] ) ? '' : ( ! isset( $prp_3['3.1'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );

$pdf->cell( $parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false );
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '5.5 Pretsvars un kabīnes jumts', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['5.5'] ) ? '-' : ( isset( $prp_1['5.5'] ) || isset( $prp_2['5.5'] ) || isset( $prp_3['5.5'] ) || $is_blank ? '' : ( $is_atkartota ? ( isset( $prp_0['5.5'] ) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['5.5'] ) ? '' : ( ! isset( $prp_1['5.5'] ) || isset( $prp_2['5.5'] ) || isset( $prp_3['5.5'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['5.5'] ) ? '' : ( ! isset( $prp_2['5.5'] ) || isset( $prp_3['5.5'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['5.5'] ) ? '' : ( ! isset( $prp_3['5.5'] ) || $is_blank ? '' : 'X' ), 1, 1, 'C', false );

// parbaudes rezultati 9 row end

// parbaudes rezultati 10 row start
left_padding();
$pdf->SetFont( $font_family_default, '', 7 );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '3.2 Ātruma ierobežotājs un ķērājierīce elektriskajiem liftiem', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.2'] ) ? '-' : ( isset( $prp_1['3.2'] ) || isset( $prp_2['3.2'] ) || isset( $prp_3['3.2'] ) || $is_blank ? '' : ( $is_atkartota ? ( isset( $prp_0['3.2'] ) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.2'] ) ? '' : ( ! isset( $prp_1['3.2'] ) || isset( $prp_2['3.2'] ) || isset( $prp_3['3.2'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.2'] ) ? '' : ( ! isset( $prp_2['3.2'] ) || isset( $prp_3['3.2'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.2'] ) ? '' : ( ! isset( $prp_3['3.2'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );


$pdf->cell( $parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false );

$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '6. Hidrauliskās iekārtas', 0, 1, 'L', false );
// parbaudes rezultati 10 row end

// parbaudes rezultati 11 row start
left_padding();
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '3.3 Augšupejošas kabīnes ātruma ierobežošanas ierīce', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, ! $is_ce ? 'O' : ( $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false );

$pdf->cell( $parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false );
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '6.1 Hidraulisko liftu drošības ierīces', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, 'O', 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 1, 'C', false );
// parbaudes rezultati 11 row end

// parbaudes rezultati 12 row start
left_padding();
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '3.4 Vadības ierīces', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.4'] ) ? '-' : ( isset( $prp_1['3.4'] ) || isset( $prp_2['3.4'] ) || isset( $prp_3['3.4'] ) || $is_blank ? '' : ( $is_atkartota ? ( isset( $prp_0['3.4'] ) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.4'] ) ? '' : ( ! isset( $prp_1['3.4'] ) || isset( $prp_2['3.4'] ) || isset( $prp_3['3.4'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.4'] ) ? '' : ( ! isset( $prp_2['3.4'] ) || isset( $prp_3['3.4'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.4'] ) ? '' : ( ! isset( $prp_3['3.4'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );

$pdf->cell( $parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false );
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '6.2 Lifta hidrauliskās sistēmas cauruļvadi', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, 'O', 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 1, 'C', false );
// parbaudes rezultati 12 row end

// parbaudes rezultati 13 row start
left_padding();
$pdf->SetFont( $font_family_default, '', 7 );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '3.5 Gala slēdži', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.5'] ) ? '-' : ( isset( $prp_1['3.5'] ) || isset( $prp_2['3.5'] ) || isset( $prp_3['3.5'] ) || $is_blank ? '' : ( $is_atkartota ? ( isset( $prp_0['3.5'] ) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.5'] ) ? '' : ( ! isset( $prp_1['3.5'] ) || isset( $prp_2['3.5'] ) || isset( $prp_3['3.5'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.5'] ) ? '' : ( ! isset( $prp_2['3.5'] ) || isset( $prp_3['3.5'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.5'] ) ? '' : ( ! isset( $prp_3['3.5'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );

$pdf->cell( $parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false );

$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '7. Šahtas durvis', 0, 1, 'L', false );
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_label_font_size );
// parbaudes rezultati 13 row end

// parbaudes rezultati 14 row start
left_padding();
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '3.6 Lifta mašīna', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.6'] ) ? '-' : ( isset( $prp_1['3.6'] ) || isset( $prp_2['3.6'] ) || isset( $prp_3['3.6'] ) || $is_blank ? '' : ( $is_atkartota ? ( isset( $prp_0['3.6'] ) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.6'] ) ? '' : ( ! isset( $prp_1['3.6'] ) || isset( $prp_2['3.6'] ) || isset( $prp_3['3.6'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.6'] ) ? '' : ( ! isset( $prp_2['3.6'] ) || isset( $prp_3['3.6'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.6'] ) ? '' : ( ! isset( $prp_3['3.6'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );

$pdf->cell( $parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false );
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '7.1 Šahtas un kabīnes durvis', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['7.1'] ) ? '-' : ( isset( $prp_1['7.1'] ) || isset( $prp_2['7.1'] ) || isset( $prp_3['7.1'] ) || $is_blank ? '' : ( $is_atkartota ? ( isset( $prp_0['7.1'] ) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['7.1'] ) ? '' : ( ! isset( $prp_1['7.1'] ) || isset( $prp_2['7.1'] ) || isset( $prp_3['7.1'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['7.1'] ) ? '' : ( ! isset( $prp_2['7.1'] ) || isset( $prp_3['7.1'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['7.1'] ) ? '' : ( ! isset( $prp_3['7.1'] ) || $is_blank ? '' : 'X' ), 1, 1, 'C', false );

// parbaudes rezultati 14 row end

// parbaudes rezultati 15 row start
left_padding();
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '3.7 Trauksmes ierīce ārkārtas gadījumos', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.7'] ) ? '-' : ( isset( $prp_1['3.7'] ) || isset( $prp_2['3.7'] ) || isset( $prp_3['3.7'] ) || $is_blank ? '' : ( $is_atkartota ? ( isset( $prp_0['3.7'] ) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.7'] ) ? '' : ( ! isset( $prp_1['3.7'] ) || isset( $prp_2['3.7'] ) || isset( $prp_3['3.7'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.7'] ) ? '' : ( ! isset( $prp_2['3.7'] ) || isset( $prp_3['3.7'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.7'] ) ? '' : ( ! isset( $prp_3['3.7'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );

$pdf->cell( $parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false );
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '7.2 Durvju slēgšanas un drošības ierīces', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['7.2'] ) ? '-' : ( isset( $prp_1['7.2'] ) || isset( $prp_2['7.2'] ) || isset( $prp_3['7.2'] ) || $is_blank ? '' : ( $is_atkartota ? ( isset( $prp_0['7.2'] ) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['7.2'] ) ? '' : ( ! isset( $prp_1['7.2'] ) || isset( $prp_2['7.2'] ) || isset( $prp_3['7.2'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['7.2'] ) ? '' : ( ! isset( $prp_2['7.2'] ) || isset( $prp_3['7.2'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['7.2'] ) ? '' : ( ! isset( $prp_3['7.2'] ) || $is_blank ? '' : 'X' ), 1, 1, 'C', false );

// parbaudes rezultati 15 row end


// parbaudes rezultati 16 row start
left_padding();
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '3.8 Darbināšana ārkārtas gadījumos', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.8'] ) ? '-' : ( isset( $prp_1['3.8'] ) || isset( $prp_2['3.8'] ) || isset( $prp_3['3.8'] ) || $is_blank ? '' : ( $is_atkartota ? ( isset( $prp_0['3.8'] ) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.8'] ) ? '' : ( ! isset( $prp_1['3.8'] ) || isset( $prp_2['3.8'] ) || isset( $prp_3['3.8'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.8'] ) ? '' : ( ! isset( $prp_2['3.8'] ) || isset( $prp_3['3.8'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.8'] ) ? '' : ( ! isset( $prp_3['3.8'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );

$pdf->cell( $parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '8. Apgaismojumi', 'TB', 0, 'L', false );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['8.0'] ) ? '-' : ( isset( $prp_1['8.0'] ) || isset( $prp_2['8.0'] ) || isset( $prp_3['8.0'] ) || $is_blank ? '' : ( $is_atkartota ? ( isset( $prp_0['8.0'] ) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['8.0'] ) ? '' : ( ! isset( $prp_1['8.0'] ) || isset( $prp_2['8.0'] ) || isset( $prp_3['8.0'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['8.0'] ) ? '' : ( ! isset( $prp_2['8.0'] ) || isset( $prp_3['8.0'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['8.0'] ) ? '' : ( ! isset( $prp_3['8.0'] ) || $is_blank ? '' : 'X' ), 1, 1, 'C', false );

// parbaudes rezultati 16 row end


// parbaudes rezultati 17 row start
left_padding();
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '3.9 Lifta apstadināšanas ierīces', 'TB', 0, 'L', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.9'] ) ? '-' : ( isset( $prp_1['3.9'] ) || isset( $prp_2['3.9'] ) || isset( $prp_3['3.9'] ) || $is_blank ? '' : ( $is_atkartota ? ( isset( $prp_0['3.9'] ) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.9'] ) ? '' : ( ! isset( $prp_1['3.9'] ) || isset( $prp_2['3.9'] ) || isset( $prp_3['3.9'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.9'] ) ? '' : ( ! isset( $prp_2['3.9'] ) || isset( $prp_3['3.9'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['3.9'] ) ? '' : ( ! isset( $prp_3['3.9'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );

$pdf->cell( $parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false );
$pdf->SetFont( $font_family_default_bold, '', $parbaudes_rezultati_label_font_size );
$pdf->cell( $parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '9. Elektriskās iekārtas un ietaises', 'TB', 0, 'L', false );

$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['9.0'] ) ? '-' : ( isset( $prp_1['9.0'] ) || isset( $prp_2['9.0'] ) || isset( $prp_3['9.0'] ) || $is_blank ? '' : ( $is_atkartota ? ( isset( $prp_0['9.0'] ) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['9.0'] ) ? '' : ( ! isset( $prp_1['9.0'] ) || isset( $prp_2['9.0'] ) || isset( $prp_3['9.0'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['9.0'] ) ? '' : ( ! isset( $prp_2['9.0'] ) || isset( $prp_3['9.0'] ) || $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_netika_parbaudits['9.0'] ) ? '' : ( ! isset( $prp_3['9.0'] ) || $is_blank ? '' : 'X' ), 1, 1, 'C', false );

// parbaudes rezultati 17 row end
//
// VERTEJUMI - consists of 4 rows
//
$pdf->Ln( 2 );

// first row
left_padding();
$pdf->cell( $vertejumi_first_col_width, $vertejumi_row_height, ' Vērtējumi:', 'LTR', 0, 'L', false );
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $vertejumi_second_col_width, $vertejumi_row_height, ' 0 - neatbilstības nav konstatētas', 'TR', 0, 'L', false );
$pdf->cell( $vertejumi_third_col_width, $vertejumi_row_height, ' 1- konstatētas maznozīmīgas neatbilstības, kas nerada būtiskus ', 'TR', 1, 'L', false );
// first row
left_padding();
$pdf->cell( $vertejumi_first_col_width, $vertejumi_row_height, '', 'LBR', 0, 'L', false );
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $vertejumi_second_col_width, $vertejumi_row_height, '', 'BR', 0, 'L', false );
$pdf->cell( $vertejumi_third_col_width, $vertejumi_row_height, ' draudus cilvēku dzīvībai, veselībai, īpašumam vai videi', 'BR', 1, 'L', false );
// first row
left_padding();
$pdf->cell( $vertejumi_first_col_width, $vertejumi_row_height, '', 'LR', 0, 'L', false );
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $vertejumi_second_col_width, $vertejumi_row_height, ' 2 - konstatētas būtiskas neatbilstības, kas var radīt ', 'R', 0, 'L', false );
$pdf->cell( $vertejumi_third_col_width, $vertejumi_row_height, ' 3 - konstatētas bīstamas neatbilstības, kas rada tiešus draudus ', 'R', 1, 'L', false );
// first row
left_padding();
$pdf->cell( $vertejumi_first_col_width, $vertejumi_row_height, '', 'LBR', 0, 'L', false );
$pdf->SetFont( $font_family_default, '', $parbaudes_rezultati_text_font_size );
$pdf->cell( $vertejumi_second_col_width, $vertejumi_row_height, ' draudus cilvēku dzīvībai, veselībai, īpašumam vai videi', 'BR', 0, 'L', false );
$pdf->cell( $vertejumi_third_col_width, $vertejumi_row_height, ' cilvēku dzīvībai, veselībai, īpašumam vai videi', 'BR', 1, 'L', false );

$pdf->Ln( 2 );

//
// NOVERTEJUMS
//

left_padding();
$pdf->SetFont( $font_family_default_bold, '', 9 );
$pdf->cell( 25, 4.1, 'Novērtējums:', '', 0, 'L', false );
$pdf->cell( 5, 4.1, 'X', 1, 0, 'C', false );
$pdf->SetFont( $font_family_default, '', 8 );
$pdf->cell( 10, 4.1, 'vai', '', 0, 'C', false );
$pdf->SetFillColor( 200, 200, 200 );
$pdf->cell( 5, 4.1, '', 1, 0, 'L', true );
$pdf->cell( 10, 4.1, '', '', 0, 'C', false );
$pdf->SetFont( $font_family_default_bold, '', 9 );
$pdf->cell( 5, 4.1, 'O', 1, 0, 'C', false );
$pdf->SetFont( $font_family_default, '', 8 );
$pdf->cell( 30, 4.1, '- nav nepieciešams', '', 1, 'C', false );

//
// NEATBILSTIBU APRAKSTI
//
$pdf->Ln( 1 );
left_padding();
$pdf->SetFont( $font_family_default_bold, '', 9 );
$pdf->cell( 35, 4, 'Neatbilstību apraksti', '', 0, 'L', false );
$pdf->SetFont( $font_family_default, '', 8 );
$pdf->cell( 45, 4, '(papildus norādijumi, piezīmes):', '', 0, 'L', false );
$pdf->SetLineWidth( 0.1 );
$pdf->cell( 0, 4, '', 'B', 1, 'L', false );


function break_long_line( $long_line, $max_line_len = 115 ) {

	$array_of_sentences = explode( '. ', $long_line );
	$len                = count( $array_of_sentences );
	$compact_arr[]      = $array_of_sentences[0] . '.';
	$current            = 0;
	for ( $i = 1; $i < $len; $i++ ) {
		if ( mb_strlen( ( $compact_arr[ $current ] ?? '' ) . $array_of_sentences[ $i ] ) <= $max_line_len ) {
			$compact_arr[ $current ] = ( ( $compact_arr[ $current ] ?? '' ) . ' ' . $array_of_sentences[ $i ] . '.' );
		} else {
			++$current;
			$compact_arr[ $current ] = ( ( $compact_arr[ $current ] ?? '' ) . ' ' . $array_of_sentences[ $i ] . '.' );
		}
	}
	return $compact_arr;
}

$too_many_items = ( count( $prp_all ) ) >= 10;

if ( ! $too_many_items ) {
	$pdf->SetFont( 'TimesNewRomanRegular', '', 9 );
	foreach ( $prp_1 as $res_index => $res_res ) {
		left_padding();
		// $pdf->multicell( 0, 3, $res_index . ' - ' . $res_res, 'B', 'L', false );
		if ( strlen( $res_res ) > 130 ) {
			$breaked_arr      = break_long_line( $res_res, 130 );
			$breaked_arr_size = count( $breaked_arr );
			for ( $i = 0; $i < $breaked_arr_size; $i++ ) {
				if ( 0 !== $i ) {
					left_padding();
					$pdf->multicell( 0, 4, '       ' . $breaked_arr[ $i ], 'B', 'L', false );
				} else {
					$pdf->multicell( 0, 4, $res_index . ' - ' . $breaked_arr[ $i ], 'B', 'L', false );
				}
			}
		} else {
			$pdf->multicell( 0, 4, gettype( $res_index ) === 'integer' ? ( '     ' . $res_res ) : ( $res_index . ' - ' . $res_res ), 'B', 'L', false );
		}
	}

	$prp_all_len = count( $prp_all );

	if ( ! $prp_2 && ! $prp_3 ) {
		for ( $i = 0; $i < 9 - $prp_all_len; $i++ ) {
			left_padding();
			$pdf->multicell( 0, 4, '', 'B', 'L', false );
		}
	}

	if ( $prp_2 || $prp_3 ) {
		left_padding();
		$pdf->cell( 0, 4, '', 'B', 1, 'L', false );
	}
	if ( $prp_2 ) {
		left_padding();
		$pdf->SetFont( 'TimesNewRomanBold', '', 8 );
		$pdf->cell( 0, 4, '    Neatbilstības ar vērtējumu 2:', 'B', 1, 'L', false );
		$pdf->SetFont( 'TimesNewRomanRegular', '', 9 );
		foreach ( $prp_2 as $res_index => $res_res ) {
			left_padding();
			$pdf->multicell( 0, 4, $res_index . ' - ' . $res_res, 'B', 'L', false );
		}
	}
	if ( $prp_3 ) {
		left_padding();
		$pdf->SetFont( 'TimesNewRomanBold', '', 8 );
		$pdf->cell( 0, 4, '    Neatbilstības ar vērtējumu 3:', 'B', 1, 'L', false );
		$pdf->SetFont( 'TimesNewRomanRegular', '', 9 );
		foreach ( $prp_3 as $res_index => $res_res ) {
			left_padding();
			$pdf->multicell( 0, 4, $res_index . ' - ' . $res_res, 'B', 'L', false );
		}
	}
	if ( $prp_2 || $prp_3 ) {
		for ( $i = 0; $i < 6 - $prp_all_len; $i++ ) {
			left_padding();
			$pdf->multicell( 0, 4, '', 'B', 'L', false );
		}
	}
} else {
	$pdf->SetFont( 'TimesNewRomanRegular', '', 8 );
	foreach ( $prp_all as $res_index => $res_res ) {
		left_padding();
		if ( strlen( $res_res ) > 160 ) {
			$breaked_arr      = break_long_line( $res_res, 160 );
			$breaked_arr_size = count( $breaked_arr );
			for ( $i = 0; $i < $breaked_arr_size; $i++ ) {
				if ( 0 !== $i ) {
					left_padding();
					$pdf->multicell( 0, 3, '       ' . $breaked_arr[ $i ], 'B', 'L', false );
				} else {
					$pdf->multicell( 0, 3, $res_index . ' - ' . $breaked_arr[ $i ], 'B', 'L', false );
				}
			}
		} else {
			$pdf->multicell( 0, 4, gettype( $res_index ) === 'integer' ? ( '     ' . $res_res ) : ( $res_index . ' - ' . $res_res ), 'B', 'L', false );
		}
	}
}


//
// SLEDZIENS
//


$pdf->Ln( 5 );
left_padding();
$pdf->SetFont( 'ArialBold', '', 9 );
$pdf->cell( 20, 4, 'Slēdziens:', 0, 0, 'L', false );
$pdf->SetFont( 'ArialRegular', '', 9 );
$pdf->cell( 25, 4, 'vajadzīgo atzīmēt', 0, 0, 'R', false );
$pdf->SetFont( 'ArialBold', '', 9 );
$pdf->cell( 25, 4, 'X', 0, 1, 'L', false );
$pdf->Ln( 3 );

//
// SLEDZIENS
//

$pdf->setLineWidth( $derigs_ekspluatacijai_line_width );
left_padding();

$pdf->SetFont( $derigs_ekspluatacijai_mark_font_family, '', $derigs_ekspluatacijai_mark_font_size );
$pdf->cell( 1, $derigs_ekspluatacijai_cell_height, '', 0, 0, 'C', false );
$pdf->cell( $derigs_ekspluatacijai_1col_width, $derigs_ekspluatacijai_cell_height, count( $prp_2 ) || count( $prp_3 ) || $is_blank ? '' : 'X', 1, 0, 'C', false );
// var_dump(count ($prp_1));
// die();
$pdf->SetFont( $derigs_ekspluatacijai_font_family, '', $derigs_ekspluatacijai_font_size );
$pdf->cell( $derigs_ekspluatacijai_2col_width, $derigs_ekspluatacijai_cell_height, ' Lietošana atļauta', 0, 0, 'L', false );

$pdf->SetFont( $derigs_ekspluatacijai_mark_font_family, '', $derigs_ekspluatacijai_mark_font_size );
$pdf->cell( $derigs_ekspluatacijai_3col_width, $derigs_ekspluatacijai_cell_height, ! count( $prp_2 ) || count( $prp_3 ) || $is_blank ? '' : 'X', 1, 0, 'C', false );

$pdf->SetFont( $derigs_ekspluatacijai_font_family, '', $derigs_ekspluatacijai_font_size );
$pdf->cell( $derigs_ekspluatacijai_4col_width, $derigs_ekspluatacijai_cell_height, ' Lietošana pieļaujama 30 dienas', 0, 0, 'L', false );

$pdf->SetFont( $derigs_ekspluatacijai_mark_font_family, '', $derigs_ekspluatacijai_mark_font_size );
$pdf->cell( $derigs_ekspluatacijai_5col_width, $derigs_ekspluatacijai_cell_height, ! count( $prp_3 ) || $is_blank ? '' : 'X', 1, 0, 'C', false );

$pdf->SetFont( $derigs_ekspluatacijai_font_family, '', $derigs_ekspluatacijai_font_size );
$pdf->cell( $derigs_ekspluatacijai_6col_width, $derigs_ekspluatacijai_cell_height, ' Lietošana nav pieļaujama', 0, 1, 'L', false );

$pdf->setLineWidth( $default_line_width );

//
// NAKOSA PARBAUDE
//
$pdf->Ln( 5 );
left_padding();
$pdf->SetFont( $font_family_default_bold, '', $font_size_default );
$pdf->cell( $nakosa_parbaude_1col_width, 5, 'Nākošā pārbaude ', 0, 0, 'L', false );
// date("j.n.Y",date_create_from_format("j.n.Y", $parbaude['parbaude_datums']))
if ( count( $prp_3 ) ) {
	$next_check = 'pec neatbīlstības novēršanas';
} elseif ( count( $prp_2 ) ) {
	$next_check = $parbaude_datums_start ? date_format( date_add( date_create_from_format( 'j.n.Y', $parbaude_datums_start ), date_interval_create_from_date_string( '1 month' ) ), 'd.m.Y' ) : '';
} elseif ( $parbaude_next_datums ) {
	$next_check = $parbaude_next_datums;
} else {
	$next_check = $parbaude_datums_start ? date_format( date_add( date_create_from_format( 'j.n.Y', $parbaude_datums_start ), date_interval_create_from_date_string( '1 year' ) ), 'd.m.Y' ) : '';

}
// $pdf->cell( $nakosa_parbaude_2col_width, 5, $parbaude['parbaude_datums'], "B", 0, 'C', false );
	$pdf->cell( $nakosa_parbaude_2col_width + 20, 5, $next_check, 'B', 0, 'C', false );
// $pdf->cell( $nakosa_parbaude_2col_width, 5, $parbaude['parbaude_datums'] ? date_format( date_add( date_create_from_format( 'j.n.Y', $parbaude['parbaude_datums'] ), date_interval_create_from_date_string( '1 month' ) ), 'd.m.Y' ) : '', 'B', 0, 'C', false );

$pdf->cell( $nakosa_parbaude_3col_width - 20, 5, '', 0, 0, 'L', false );
$pdf->cell( $nakosa_parbaude_4col_width, 5, 'Pieļaujamā celtspēja ', 0, 0, 'L', false );
$pdf->cell( $nakosa_parbaude_5col_width, 5, $lifts_celtspeja, 'B', 0, 'C', false );
$pdf->cell( $nakosa_parbaude_6col_width, 5, 'kg.', 0, 1, 'L', false );

//
// IEKARTA MARKETA
//


$pdf->Ln( 4 );
left_padding();
$pdf->SetFont( $font_family_default_bold, '', $font_size_default );
$pdf->cell( $iekarta_marketa_1col_width, 5, 'Iekārta marķēta ar pārbaudes zīmi Nr. ', 0, 0, 'L', false );
$pdf->cell( $iekarta_marketa_2col_width, 5, $parbaude['parbaude_zimes_nr'], 'B', 0, 'C', false );
$pdf->cell( $iekarta_marketa_3col_width, 5, '', 0, 0, 'L', false );
if ( $digitally_signed ) {
	$pdf->cell( $iekarta_marketa_4col_width, 5, '', 0, 0, 'L', false );
	$pdf->cell( $iekarta_marketa_5col_width - 18, 5, 'Eksperts      ', 0, 0, 'C', false );
	$pdf->cell( $iekarta_marketa_6col_width + 18, 5, 'Igors Koptevs', 0, 1, 'L', false );
} else {
	$pdf->cell( $iekarta_marketa_4col_width, 5, 'Eksperts ', 0, 0, 'L', false );
	$pdf->cell( $iekarta_marketa_5col_width, 5, '', 'B', 0, 'R', false );
	$pdf->cell( $iekarta_marketa_6col_width, 5, 'Igors Koptevs', 0, 1, 'L', false );
}

$pdf->SetFillColor( 123, 123, 123 );
$pdf->SetFont( $font_family_default, '', 7 );
if ( $digitally_signed ) {
	$pdf->cell( $width - $iekarta_marketa_6col_width + 5, 3, '', 0, 0, 'R', false );
} else {
	$pdf->cell( $width - $iekarta_marketa_6col_width + 5, 3, '(vārds, uzvārds, paraksts, zīmogs)', 0, 0, 'R', false );
}
$pdf->cell( $iekarta_marketa_6col_width, 3, '', 0, 1, 'R', false );

//
// PARBAUDE PIEDALIJAS
//

$pdf->Ln( 2 );
left_padding();
$pdf->SetFont( $font_family_default_bold, '', $font_size_default );

if ( $valditajs_nosaukums === 'VAS "Valsts nekustamie īpašumi"' ) {
	$pdf->cell( 0, 4.5, 'VAS "Valsts nekustamie īpašumi"', 0, 1, 'L', false );
}

if ( $parbaude_piedalijas ) {
	$pdf->cell( 0, 4.5, 'Pārbaudē piedalījās ', 0, 1, 'L', false );
}

left_padding();

if ( $valditajs_nosaukums === 'VAS "Valsts nekustamie īpašumi"' ) {
	$pdf->cell( $parbaude_piedalijas_1col_width - 30, 5, 'bīstamo iekārtu ekspluatācijas inženieris     Uldis Pārups', '', 0, 'L', false );
}

$pdf->SetFont( $font_family_default_bold, '', $font_size_s );
if ( $parbaude_piedalijas ) {
	if ( $digitally_signed ) {
		$pdf->cell( $parbaude_piedalijas_1col_width + 10, 5, $parbaude_mehanika_kompanija ? $parbaude_mehanika_kompanija . ' mehāniķis   ' : '', 0, 0, 'R', false );
	} else {

		$pdf->cell( $parbaude_piedalijas_1col_width, 5, $parbaude_mehanika_kompanija ? $parbaude_mehanika_kompanija . ' mehāniķis' : '', 'B', 0, 'L', false );
	}
} else {
	$pdf->cell( $parbaude_piedalijas_1col_width, 5, '', '', 0, 'L', false );
}

$pdf->SetFont( $font_family_default_bold, '', $font_size_default );
// $pdf->cell( $parbaude_piedalijas_2col_width, 5, "", "B", 0, 'R', false );

if ( $parbaude_piedalijas ) {
	$pdf->cell( $parbaude_piedalijas_2col_width - 20, 5, $parbaude_mehanikis_vards_uzvards, 'B', 0, 'R', false );

} else {

	$pdf->cell( $parbaude_piedalijas_2col_width - 10, 5, '', 0, 0, 'R', false );
}
$pdf->SetFont( $font_family_default_bold, '', $font_size_default );
if ( $parbaude_piedalijas ) {
	$pdf->cell( $parbaude_piedalijas_3col_width, 5, '', 0, 0, 'L', false );
}
$pdf->cell( $parbaude_piedalijas_4col_width, 5, 'Pārbaudes datums', 0, 0, 'L', false );
$pdf->cell( $parbaude_piedalijas_5col_width + 15, 5, $parbaude_datums, 'B', 1, 'C', false );
// $pdf->cell( $parbaude_piedalijas_5col_width, 5, $parbaude_datums_start, 'B', 1, 'C', false );

$pdf->SetFillColor( 123, 123, 123 );
$pdf->SetFont( $font_family_default, '', 7 );

$pdf->cell( $parbaude_piedalijas_1col_width + 20, 3, '', 0, 0, 'R', false );
if ( $digitally_signed || ! $parbaude_piedalijas ) {
	$pdf->cell( 0, 3, '', 0, 1, 'L', false );
} else {
	$pdf->cell( 0, 3, '( amats, vārds, uzvārds, paraksts )', 0, 1, 'L', false );
}

// FOOTER

$pdf->Ln( 2 );
$pdf->SetFont( 'ArialBoldItalic', '', $font_size_xs );

if ( ! $headless ) {
	$pdf->cell( 40, 3, 'BIR Reg . Nr . ' . $parbaude_bir_reg_nr, 0, 0, 'R', false );
	$pdf->cell( 0, 3, '', 0, 1, 'C', false );
	$pdf->SetFont( $font_family_default, '', $font_size_xs );
}


left_padding();
$pdf->cell( 20, 3, '', 0, 0, 'L', false );

if ( $digitally_signed ) {
	$pdf->cell( 0, 3, 'Protokols parakstīts ar drošu elektronisko parakstu un satur laika zīmogu. ', 0, 1, 'C', false );
} else {
	$pdf->cell( 0, 3, '', 0, 1, 'C', false );
}
if ( ! $headless ) {
	left_padding();
	$pdf->cell( 20, 3, '04.27_015 . doc', 0, 0, 'L', false );
	$pdf->cell( 0, 3, 'Protokols attiecas tikai uz augstākminēto iekārtu . Lūdzam glabāt līdzvertīgi iekārtas pasei. ', 0, 1, 'C', false );
	left_padding();
	$pdf->cell( 20, 3, '09.03.2022', 0, 0, 'L', false );
	$pdf->cell( 0, 3, 'Tehniskās pārbaudes protokolu aizliegts pavairot nepilnā apjomā bez inspicēšanas institūcijas rakstiskas atļaujas. ', 0, 1, 'C', false );
	left_padding();
}

// Lifta elektromērījumi
if ( 'atkārtotā' !== $parbaude_veids && $valditajs_protokols_ar_merijumiem ) {

	$pdf->AddPage();
	$pdf->Ln( 10 );

	$pdf->SetFont( 'ArialBold', '', 10 );
	left_padding();
	$pdf->setFillColor( 128, 128, 255 );
	$pdf->cell( 0, 5, 'Lifta elektromērījumi:', 0, 1, 'C', false );

	$pdf->SetFont( 'ArialRegular', '', 10 );
	left_padding();
	$pdf->cell( 0, 5, 'Pielikums pārbaudes protokolam Nr . : ' . $parbaude_nr, 0, 1, 'C', false );

	// first table

	$pdf->Ln( 5 );
	// first table first row
	left_padding();
	$pdf->SetFont( 'ArialBold', '', 10 );
	$pdf->cell( $el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false );
	$pdf->cell( $el_merijumi_first_table_row_1_width, $el_merijumi_first_table_row_height * 2, 'Mēriekārta', 'TLR', 0, 'C', false );
	$pdf->cell( $el_merijumi_first_table_row_2_width, $el_merijumi_first_table_row_height, ' Nosaukums:', 'TRB', 0, 'L', false );
	$pdf->SetFont( 'ArialRegular', '', 10 );
	$pdf->cell( $el_merijumi_first_table_row_3_width, $el_merijumi_first_table_row_height, ' ProInstall 200', 'TRB', 1, 'L', false );

	// first table second row
	left_padding();
	$pdf->SetFont( 'ArialBold', '', 10 );
	$pdf->cell( $el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false );
	$pdf->cell( $el_merijumi_first_table_row_1_width, $el_merijumi_first_table_row_height, '', 'LBR', 0, 'C', false );
	$pdf->cell( $el_merijumi_first_table_row_2_width, $el_merijumi_first_table_row_height, ' Ident . Nr . ', 'RB', 0, 'L', false );
	$pdf->SetFont( 'ArialRegular', '', 10 );
	$pdf->cell( $el_merijumi_first_table_row_3_width, $el_merijumi_first_table_row_height, ' 309482', 'RB', 1, 'L', false );

	// first table third row
	left_padding();
	$pdf->SetFont( 'ArialBold', '', 10 );
	$pdf->cell( $el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false );
	$pdf->cell( $el_merijumi_first_table_row_1_width + $el_merijumi_first_table_row_2_width, $el_merijumi_first_table_row_height, ' Mērījumu metodika:', 'LBR', 0, 'L', false );
	$pdf->SetFont( 'ArialRegular', '', 10 );
	$pdf->cell( $el_merijumi_first_table_row_3_width, $el_merijumi_first_table_row_height, ' LRTDEA Nr.08.43 / 016', 'RB', 1, 'L', false );

	// first table fourth row
	left_padding();
	$pdf->SetFont( 'ArialBold', '', 10 );
	$pdf->cell( $el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false );
	$pdf->cell( $el_merijumi_first_table_row_1_width + $el_merijumi_first_table_row_2_width, $el_merijumi_first_table_row_height, ' Normatīvs', 'LBR', 0, 'L', false );
	$pdf->SetFont( 'ArialRegular', '', 10 );
	$pdf->cell( $el_merijumi_first_table_row_3_width, $el_merijumi_first_table_row_height, ' LVS344 :2014', 'BR', 1, 'L', false );

	// first table fifth row
	left_padding();
	$pdf->SetFont( 'ArialBold', '', 10 );
	$pdf->cell( $el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false );
	$pdf->cell( $el_merijumi_first_table_row_1_width + $el_merijumi_first_table_row_2_width, $el_merijumi_first_table_row_height, ' Vizuālā apskate', 'LBR', 0, 'L', false );
	$pdf->cell( $el_merijumi_first_table_row_3_width, $el_merijumi_first_table_row_height, '', 'RB', 1, 'C', false );


	// first table end







	// second table

	$pdf->Ln( 5 );
	// second table first row
	left_padding();
	$pdf->SetFont( 'ArialRegular', '', 10 );
	$pdf->cell( $el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, 'Nr . ', 'TLR', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, ' Mērījumu vieta', 'TLR', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, ' Izolācijas', 'TLR', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, ' Zemējuma', 'TLR', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, ' Pārejas', 'TLR', 1, 'L', false );

	// second table second row
	left_padding();
	$pdf->cell( $el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, '', 'LR', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, ' ( līnijas vai iekārtas nosaukums )', 'LR', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, ' pretestība, MΩ', 'LR', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, ' pretestība, Ω', 'LR', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, ' pretestība, Ω', 'LR', 1, 'L', false );

	// second table third row
	left_padding();
	$pdf->cell( $el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, '', 'LR', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, '', 'LR', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, ' ( Pārbaudes ', 'LR', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, '', 'LR', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, '', 'LR', 1, 'L', false );

	// second table fourth row
	left_padding();
	$pdf->cell( $el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, '', 'LR', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, '', 'LR', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, ' ( spriegums ', 'LR', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, '', 'LR', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, '', 'LR', 1, 'L', false );

	// second table fifth row
	left_padding();
	$pdf->cell( $el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, '', 'LR', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, '', 'LR', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, ' 500V ) ', 'LRB', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, '', 'LRB', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width * 2, $el_merijumi_second_table_row_height, '', 'LRB', 1, 'L', false );

	// second table sixth row
	left_padding();
	$pdf->cell( $el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, '', 'LRB', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, '', 'LRB', 0, 'L', false );

	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '≥ 1,0 ', 'LRB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, ' < 1,0 ', 'RB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '≤ 4,0 ', 'RB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '˃ 4,0 ', 'RB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '≤ 0,1 ', 'RB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '˃ 0,1 ', 'RB', 1, 'C', false );


	// second table sixth row
	left_padding();
	$pdf->SetFillColor( $el_merijumi_red_fill_color, $el_merijumi_green_fill_color, $el_merijumi_blue_fill_color );
	$pdf->cell( $el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, ' 1.', 'LRB', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, ' Barojošais kabelis', 'LRB', 0, 'L', false );
	$pdf->SetFont( 'ArialBold', '', 10 );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'LRB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'RB', 0, 'C', false );
	$pdf->SetFont( 'ArialRegular', '', 10 );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 0, 'C', true );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 1, 'C', true );


	// second table seventh row
	left_padding();
	$pdf->SetFillColor( $el_merijumi_red_fill_color, $el_merijumi_green_fill_color, $el_merijumi_blue_fill_color );
	$pdf->cell( $el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, ' 2.', 'LRB', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, ' Lifta elektrodzinējs', 'LRB', 0, 'L', false );
	$pdf->SetFont( 'ArialBold', '', 10 );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'LRB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'RB', 0, 'C', false );
	$pdf->SetFont( 'ArialRegular', '', 10 );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 0, 'C', true );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 1, 'C', true );

	// second table eighth row
	left_padding();
	$pdf->SetFillColor( $el_merijumi_red_fill_color, $el_merijumi_green_fill_color, $el_merijumi_blue_fill_color );
	$pdf->cell( $el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, ' 3.', 'LRB', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, ' Elektreomagnētiskās bremzes', 'LRB', 0, 'L', false );
	$pdf->SetFont( 'ArialBold', '', 10 );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'LRB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'RB', 0, 'C', false );
	$pdf->SetFont( 'ArialRegular', '', 10 );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 0, 'C', true );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 1, 'C', true );

	// second table nineth row
	left_padding();
	$pdf->SetFillColor( $el_merijumi_red_fill_color, $el_merijumi_green_fill_color, $el_merijumi_blue_fill_color );
	$pdf->cell( $el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, ' 4.', 'LRB', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, ' Pazeminošais transformators', 'LRB', 0, 'L', false );
	$pdf->SetFont( 'ArialBold', '', 10 );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'LRB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'RB', 0, 'C', false );
	$pdf->SetFont( 'ArialRegular', '', 10 );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 0, 'C', true );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 1, 'C', true );

	// second table tenth row
	left_padding();
	$pdf->SetFillColor( $el_merijumi_red_fill_color, $el_merijumi_green_fill_color, $el_merijumi_blue_fill_color );
	$pdf->cell( $el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, ' 5.', 'LRB', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, ' Kabīnes durvju elektrodzinējs', 'LRB', 0, 'L', false );
	$pdf->SetFont( 'ArialBold', '', 10 );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'LRB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'RB', 0, 'C', false );
	$pdf->SetFont( 'ArialRegular', '', 10 );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 0, 'C', true );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 1, 'C', true );

	// second table eleventh row
	left_padding();
	$pdf->SetFillColor( $el_merijumi_red_fill_color, $el_merijumi_green_fill_color, $el_merijumi_blue_fill_color );
	$pdf->cell( $el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, ' 6.', 'LRB', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, ' Galaslēdžu kabelis', 'LRB', 0, 'L', false );
	$pdf->SetFont( 'ArialBold', '', 10 );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'LRB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'RB', 0, 'C', false );
	$pdf->SetFont( 'ArialRegular', '', 10 );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 0, 'C', true );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 1, 'C', true );

	// second table twelwth row
	left_padding();
	$pdf->SetFillColor( $el_merijumi_red_fill_color, $el_merijumi_green_fill_color, $el_merijumi_blue_fill_color );
	$pdf->cell( $el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, ' 7.', 'LRB', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, ' Apgaismojuma ķēde', 'LRB', 0, 'L', false );
	$pdf->SetFont( 'ArialBold', '', 10 );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'LRB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'RB', 0, 'C', false );
	$pdf->SetFont( 'ArialRegular', '', 10 );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 0, 'C', true );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 1, 'C', true );

	// second table thirteenth row
	left_padding();
	$pdf->SetFillColor( $el_merijumi_red_fill_color, $el_merijumi_green_fill_color, $el_merijumi_blue_fill_color );
	$pdf->cell( $el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, ' 8.', 'LRB', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, ' Metālkonstrukcijas', 'LRB', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 0, 'C', true );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 0, 'C', true );
	$pdf->SetFont( 'ArialBold', '', 10 );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, 'X', 'RB', 0, 'C', false );
	$pdf->SetFont( 'ArialRegular', '', 10 );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 1, 'C', false );


	// second table fourteenth row
	left_padding();
	$pdf->cell( $el_merijumi_automargin, $el_merijumi_first_table_row_height, '', 0, 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_1_width, $el_merijumi_second_table_row_height, ' 8.', 'LRB', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_2_width, $el_merijumi_second_table_row_height, ' Metālkonstrukcijas', 'LRB', 0, 'L', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'TRBL', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 0, 'C', false );
	$pdf->cell( $el_merijumi_second_table_col_data_width, $el_merijumi_second_table_row_height, '', 'RB', 1, 'C', false );

	// second table end

	// el merijumi sledziens
	$pdf->Ln( 10 );
	// el merijumi sledziens first row
	left_padding();
	$pdf->SetFont( 'ArialBold', '', 10 );
	$pdf->cell( 15, $el_merijumi_sledziens_row_height, 'Slēdziens:', '', 1, 'L', false );
	$pdf->Ln( $el_merijumi_sledziens_line_distance );

	// el merijumi sledziens second row
	left_padding();
	$pdf->SetFont( 'ArialRegular', '', 10 );
	$pdf->cell( 25, $el_merijumi_sledziens_row_height, 'Atbilstošo atzīmēt ', '', 0, 'L', false );
	getPositionForCheckbox( $pdf );
	$pdf->cell( 5, $el_merijumi_sledziens_row_height, '', '', 1, 'L', false );
	$pdf->Ln( $el_merijumi_sledziens_line_distance );

	// el merijumi sledziens third row
	left_padding();
	$pdf->SetFont( 'ArialRegular', '', 10 );
	$pdf->cell( $el_merijumi_sledziens_col_1_width, $el_merijumi_sledziens_row_height, 'Izolācijas pretestība', '', 0, 'L', false );
	$pdf->SetFont( 'ArialBold', '', 10 );
	$pdf->cell( $el_merijumi_sledziens_col_2_width, $el_merijumi_sledziens_row_height, 'atbilst', '', 0, 'L', false );
	$pdf->SetFont( 'ArialRegular', '', 10 );
	getPositionForCheckbox( $pdf );
	$pdf->cell( $el_merijumi_sledziens_col_checkbox_width, $el_merijumi_sledziens_row_height, '', '', 0, 'L', false );
	$pdf->cell( $el_merijumi_sledziens_col_4_width, $el_merijumi_sledziens_row_height, 'neatbilst', '', 0, 'L', false );
	getPositionForEmptyCheckbox( $pdf );
	$pdf->cell( $el_merijumi_sledziens_col_checkbox_width, $el_merijumi_sledziens_row_height, '', '', 0, 'L', false );
	$pdf->cell( $el_merijumi_sledziens_col_5_width, $el_merijumi_sledziens_row_height, 'normai,', '', 1, 'L', false );
	$pdf->Ln( $el_merijumi_sledziens_line_distance );

	// el merijumi sledziens fourth row
	left_padding();
	$pdf->SetFont( 'ArialRegular', '', 10 );
	$pdf->cell( $el_merijumi_sledziens_col_1_width, $el_merijumi_sledziens_row_height, 'Zemējuma pretestība', '', 0, 'L', false );
	$pdf->SetFont( 'ArialBold', '', 10 );
	$pdf->cell( $el_merijumi_sledziens_col_2_width, $el_merijumi_sledziens_row_height, 'atbilst', '', 0, 'L', false );
	$pdf->SetFont( 'ArialRegular', '', 10 );
	getPositionForCheckbox( $pdf );
	$pdf->cell( $el_merijumi_sledziens_col_checkbox_width, $el_merijumi_sledziens_row_height, '', '', 0, 'L', false );
	$pdf->cell( $el_merijumi_sledziens_col_4_width, $el_merijumi_sledziens_row_height, 'neatbilst', '', 0, 'L', false );
	getPositionForEmptyCheckbox( $pdf );
	$pdf->cell( $el_merijumi_sledziens_col_checkbox_width, $el_merijumi_sledziens_row_height, '', '', 0, 'L', false );
	$pdf->cell( $el_merijumi_sledziens_col_5_width, $el_merijumi_sledziens_row_height, 'normai,', '', 1, 'L', false );
	$pdf->Ln( $el_merijumi_sledziens_line_distance );

	// el merijumi sledziens fifth row
	left_padding();
	$pdf->SetFont( 'ArialRegular', '', 10 );
	$pdf->cell( $el_merijumi_sledziens_col_1_width, $el_merijumi_sledziens_row_height, 'Pārejas pretestība', '', 0, 'L', false );
	$pdf->SetFont( 'ArialBold', '', 10 );
	$pdf->cell( $el_merijumi_sledziens_col_2_width, $el_merijumi_sledziens_row_height, 'atbilst', '', 0, 'L', false );
	$pdf->SetFont( 'ArialRegular', '', 10 );
	getPositionForCheckbox( $pdf );
	$pdf->cell( $el_merijumi_sledziens_col_checkbox_width, $el_merijumi_sledziens_row_height, '', '', 0, 'L', false );
	$pdf->cell( $el_merijumi_sledziens_col_4_width, $el_merijumi_sledziens_row_height, 'neatbilst', '', 0, 'L', false );
	getPositionForEmptyCheckbox( $pdf );
	$pdf->cell( $el_merijumi_sledziens_col_checkbox_width, $el_merijumi_sledziens_row_height, '', '', 0, 'L', false );
	$pdf->cell( $el_merijumi_sledziens_col_5_width, $el_merijumi_sledziens_row_height, 'normai . ', '', 1, 'L', false );
	$pdf->Ln( $el_merijumi_sledziens_line_distance );

	// el merijumi sledziens sixth row
	left_padding();
	$pdf->cell( $width, $el_merijumi_sledziens_row_height, 'Neatbilstību apraksti( papildus norādījumi ):', '', 1, 'L', false );
	$pdf->Ln( 2 );

	// el merijumi sledziens lines 3 rows
	left_padding();
	left_padding();
	$pdf->cell( $el_merijumi_sledziens_col_lines_width, $el_merijumi_sledziens_row_height, '', 'B', 1, 'L', false );
	left_padding();
	left_padding();
	$pdf->cell( $el_merijumi_sledziens_col_lines_width, $el_merijumi_sledziens_row_height, '', 'B', 1, 'L', false );
	left_padding();
	left_padding();
	$pdf->cell( $el_merijumi_sledziens_col_lines_width, $el_merijumi_sledziens_row_height, '', 'B', 1, 'L', false );




	$pdf->Ln( 12 );
	left_padding();
	left_padding();
	$pdf->SetFont( $font_family_default_bold, '', $font_size_default );

	$pdf->cell( 25, 5, 'Eksperts ', 0, 0, 'L', false );
	$pdf->cell( 45, 5, 'Igors Koptevs', 'B', 1, 'C', false );

	left_padding();
	left_padding();
	$pdf->SetFillColor( 123, 123, 123 );
	$pdf->SetFont( $font_family_default, '', 7 );
	$pdf->cell( 25, 3, '', 0, 0, 'R', false );
	$pdf->cell( 45, 3, '( vārds, uzvārds )', 0, 1, 'C', false );

	$pdf->Ln( 3 );
	$pdf->SetFont( $font_family_default_bold, '', $font_size_default );
	left_padding();
	left_padding();
	$pdf->cell( 35, 5, 'Pārbaudes datums ', 0, 0, 'L', false );
	$pdf->cell( 45, 5, $parbaude_datums, 'B', 1, 'C', false );


	// footer
	$pdf->Ln( 50 );
	left_padding();

	if ( $digitally_signed ) {
		$pdf->cell( 0, 7, 'Protokols parakstīts ar drošu elektronisko parakstu un satur laika zīmogu . ', 0, 0, 'C', false );
	} else {
		$pdf->cell( 0, 7, '', 0, 0, 'L', false );
	}



	// getPositionForCheckbox($pdf); //place where checkbox is needed
	foreach ( $checkboxes as $checkbox ) {
		$pdf->Image( '../img/checkbox.png', $checkbox['x'] + $el_merijumi_second_table_col_data_width / 2 - $checkbox_image_width / 2, $checkbox['y'], $checkbox_image_width, $checkbox_image_height, );
	}
	foreach ( $empty_checkboxes as $empty_checkbox ) {
		$pdf->Image( '../img/empty_checkbox.png', $empty_checkbox['x'] + $el_merijumi_second_table_col_data_width / 2 - $checkbox_image_width / 2, $empty_checkbox['y'], $checkbox_image_width, $checkbox_image_height, );
	}
	// var_dump($checkboxes);


}



// var_dump( explode( ',', $lifts['lifts_parbaudes_adrese'] )[0] );
// $output_address = explode( ',', $lifts['lifts_parbaudes_adrese'] )[0];
$output_date = implode( '.', array_reverse( explode( '.', $parbaude_datums_start ) ) );
// $output_date = $parbaude_datums_start;
$pdf->output( 'I', $output_date . '_' . $lifts_reg_nr . '_' . $lifts_parbaudes_adrese_short . '.pdf', true );
// $pdf->output( 'I', $output_date . '_' . $lifts_reg_nr . '_' . str_replace( ',', '_', $lifts_parbaudes_adrese_short ), true );
// $pdf->output( 'I', $output_date . '_' . $lifts_reg_nr . '_' . str_replace( ',', '_', $lifts_parbaudes_adrese_short ) . '. pdf', true );
