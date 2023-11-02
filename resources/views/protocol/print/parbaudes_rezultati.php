<?php

//
// PARBAUDES REZULTATI
//
$pdf->Ln(1);
left_padding();
$pdf->SetFont('ArialBold', '', 10);
$pdf->cell(0, 3, 'Pārbaudes rezultāti', 0, 1, 'L', false);
$pdf->Ln(0.5);


// parbaudes rezultati header start
left_padding();
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '1. Visparīgi', 0, 0, 'L', false);
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_label_font_size);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '0', 0, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '1', 0, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '2', 0, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '3', 0, 0, 'C', false);

$pdf->cell($parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '4. Kabīne', 0, 0, 'L', false);
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_label_font_size);

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '0', 0, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '1', 0, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '2', 0, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '3', 0, 1, 'C', false);
// parbaudes rezultati header end
// parbaudes rezultati 1 row start
left_padding();
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '1.1 Lifta atbilstības deklarācija*', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, 'O', 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false);

$pdf->cell($parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false);
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '4.1 Lifta kabīne', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['4.1']) ? $sign_netika_parbaudits : ( isset($prp_1['4.1']) || isset($prp_2['4.1']) || isset($prp_3['4.1']) || $is_blank ? '' : ( $is_atkartota ? ( isset($prp_0['4.1']) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['4.1']) ? '' : ( ! isset($prp_1['4.1']) || isset($prp_2['4.1']) || isset($prp_3['4.1']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['4.1']) ? '' : ( ! isset($prp_2['4.1']) || isset($prp_3['4.1']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['4.1']) ? '' : ( ! isset($prp_3['4.1']) || $is_blank ? '' : 'X' ), 1, 1, 'C', false);
// parbaudes rezultati 1 row end

// parbaudes rezultati 2 row start
left_padding();
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '1.2 Lifta atbilstības sertifikāts*', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, 'O', 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false);

$pdf->cell($parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false);
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '4.2 Celtspējas kontroles ierīce', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, ! $is_ce ? 'O' : ( isset($prp_netika_parbaudits['4.2']) ? $sign_netika_parbaudits : ( isset($prp_1['4.2']) || isset($prp_2['4.2']) || isset($prp_3['4.2']) || $is_blank ? '' : ( $is_atkartota ? ( isset($prp_0['4.2']) ? 'X' : 'O' ) : 'X' ) ) ), 1, 0, 'C', false);
// $pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, ! $is_ce ? 'O' : ( $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 1, 'C', false);
// parbaudes rezultati 2 row end

// parbaudes rezultati 3 row start
left_padding();
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '1.3 Lifta lietošanas dokumentācija', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['1.3']) ? $sign_netika_parbaudits : ( isset($prp_1['1.3']) || isset($prp_2['1.3']) || isset($prp_3['1.3']) || $is_blank ? '' : ( $is_atkartota ? ( isset($prp_0['1.3']) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['1.3']) ? '' : ( ! isset($prp_1['1.3']) || isset($prp_2['1.3']) || isset($prp_3['1.3']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['1.3']) ? '' : ( ! isset($prp_2['1.3']) || isset($prp_3['1.3']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['1.3']) ? '' : ( ! isset($prp_3['1.3']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);

$pdf->cell($parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false);
$pdf->SetFont($font_family_default, '', 7);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '4.3 Lifta kabīnes līmeņošanas un apstāšanas precizitāte', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['4.3']) ? $sign_netika_parbaudits : ( isset($prp_1['4.3']) || isset($prp_2['4.3']) || isset($prp_3['4.3']) || $is_blank ? '' : ( $is_atkartota ? ( isset($prp_0['4.3']) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['4.3']) ? '' : ( ! isset($prp_1['4.3']) || isset($prp_2['4.3']) || isset($prp_3['4.3']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['4.3']) ? '' : ( ! isset($prp_2['4.3']) || isset($prp_3['4.3']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['4.3']) ? '' : ( ! isset($prp_3['4.3']) || $is_blank ? '' : 'X' ), 1, 1, 'C', false);

// parbaudes rezultati 3 row end

// parbaudes rezultati 4 row start
left_padding();
$pdf->SetFont($font_family_default, '', 7);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '1.4 Brīdinājumi, apzimējumi un informācija par lifta lietošanu', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);

// $pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset( $prp_1['1.4'] ) || $is_blank ? '' : 'X', 1, 0, 'C', false );
// $pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, ! isset( $prp_1['1.4'] ) || $is_blank ? '' : 'X', 1, 0, 'C', false );
// $pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false );
// $pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false );

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['1.4']) ? $sign_netika_parbaudits : ( isset($prp_1['1.4']) || isset($prp_2['1.4']) || isset($prp_3['1.4']) || $is_blank ? '' : ( $is_atkartota ? ( isset($prp_0['1.4']) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['1.4']) ? '' : ( ! isset($prp_1['1.4']) || isset($prp_2['1.4']) || isset($prp_3['1.4']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['1.4']) ? '' : ( ! isset($prp_2['1.4']) || isset($prp_3['1.4']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['1.4']) ? '' : ( ! isset($prp_3['1.4']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);

$pdf->cell($parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false);

$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '5. Šahta', 0, 1, 'L', false);
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_label_font_size);
// parbaudes rezultati 4 row end

// parbaudes rezultati 5 row start
left_padding();
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width + $parbaudes_rezultati_mark_column_width * 4, $parbaudes_rezultati_cell_height, '2. Troses, ķēdes, to stīprinājumi', 0, 0, 'L', false);
$pdf->cell($parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false);

$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '5.1 Šahtas atbilstība', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['5.1']) ? $sign_netika_parbaudits : ( isset($prp_1['5.1']) || isset($prp_2['5.1']) || isset($prp_3['5.1']) || $is_blank ? '' : ( $is_atkartota ? ( isset($prp_0['5.1']) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['5.1']) ? '' : ( ! isset($prp_1['5.1']) || isset($prp_2['5.1']) || isset($prp_3['5.1']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['5.1']) ? '' : ( ! isset($prp_2['5.1']) || isset($prp_3['5.1']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['5.1']) ? '' : ( ! isset($prp_3['5.1']) || $is_blank ? '' : 'X' ), 1, 1, 'C', false);

// parbaudes rezultati 5 row end

// parbaudes rezultati 6 row start
left_padding();
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '2.1 Trošu, siksnu nostiepuma kontrole', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['2.1']) ? $sign_netika_parbaudits : ( isset($prp_1['2.1']) || isset($prp_2['2.1']) || isset($prp_3['2.1']) || $is_blank ? '' : ( $is_atkartota ? ( isset($prp_0['2.1']) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['2.1']) ? '' : ( ! isset($prp_1['2.1']) || isset($prp_2['2.1']) || isset($prp_3['2.1']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['2.1']) ? '' : ( ! isset($prp_2['2.1']) || isset($prp_3['2.1']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['2.1']) ? '' : ( ! isset($prp_3['2.1']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);

$pdf->cell($parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false);
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '5.2 Šahtas nožogojumi', 'TB', 0, 'L', false);

$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['5.2']) ? $sign_netika_parbaudits : ( isset($prp_1['5.2']) || isset($prp_2['5.2']) || isset($prp_3['5.2']) || $is_blank ? '' : ( $is_atkartota ? ( isset($prp_0['5.2']) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['5.2']) ? '' : ( ! isset($prp_1['5.2']) || isset($prp_2['5.2']) || isset($prp_3['5.2']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['5.2']) ? '' : ( ! isset($prp_2['5.2']) || isset($prp_3['5.2']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['5.2']) ? '' : ( ! isset($prp_3['5.2']) || $is_blank ? '' : 'X' ), 1, 1, 'C', false);

// parbaudes rezultati 6 row end

// parbaudes rezultati 7 row start
left_padding();
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '2.2 Lifta piekāre un tās elementi', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['2.2']) ? $sign_netika_parbaudits : ( isset($prp_1['2.2']) || isset($prp_2['2.2']) || isset($prp_3['2.2']) || $is_blank ? '' : ( $is_atkartota ? ( isset($prp_0['2.2']) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['2.2']) ? '' : ( ! isset($prp_1['2.2']) || isset($prp_2['2.2']) || isset($prp_3['2.2']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['2.2']) ? '' : ( ! isset($prp_2['2.2']) || isset($prp_3['2.2']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['2.2']) ? '' : ( ! isset($prp_3['2.2']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);

$pdf->cell($parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false);
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '5.3 Vadotnes un metālkonstrukcija', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['5.3']) ? $sign_netika_parbaudits : ( isset($prp_1['5.3']) || isset($prp_2['5.3']) || isset($prp_3['5.3']) || $is_blank ? '' : ( $is_atkartota ? ( isset($prp_0['5.3']) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['5.3']) ? '' : ( ! isset($prp_1['5.3']) || isset($prp_2['5.3']) || isset($prp_3['5.3']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['5.3']) ? '' : ( ! isset($prp_2['5.3']) || isset($prp_3['5.3']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['5.3']) ? '' : ( ! isset($prp_3['5.3']) || $is_blank ? '' : 'X' ), 1, 1, 'C', false);

// parbaudes rezultati 7 row end

// parbaudes rezultati $parbaudes_rezultati_text_font_size row start
left_padding();
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width + $parbaudes_rezultati_mark_column_width * 4, $parbaudes_rezultati_cell_height, '3. Mašīntelpa un elektriskā iekārta', 0, 0, 'L', false);
$pdf->cell($parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false);

$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '5.4 Lifta buferi', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', 9);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['5.4']) ? $sign_netika_parbaudits : ( isset($prp_1['5.4']) || isset($prp_2['5.4']) || isset($prp_3['5.4']) || $is_blank ? '' : ( $is_atkartota ? ( isset($prp_0['5.4']) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['5.4']) ? '' : ( ! isset($prp_1['5.4']) || isset($prp_2['5.4']) || isset($prp_3['5.4']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['5.4']) ? '' : ( ! isset($prp_2['5.4']) || isset($prp_3['5.4']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['5.4']) ? '' : ( ! isset($prp_3['5.4']) || $is_blank ? '' : 'X' ), 1, 1, 'C', false);

// parbaudes rezultati $parbaudes_rezultati_text_font_size row end

// parbaudes rezultati 9 row start
left_padding();
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '3.1 Mašīntelpa un trīšu telpas', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.1']) ? $sign_netika_parbaudits : ( isset($prp_1['3.1']) || isset($prp_2['3.1']) || isset($prp_3['3.1']) || $is_blank ? '' : ( $is_atkartota ? ( isset($prp_0['3.1']) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.1']) ? '' : ( ! isset($prp_1['3.1']) || isset($prp_2['3.1']) || isset($prp_3['3.1']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.1']) ? '' : ( ! isset($prp_2['3.1']) || isset($prp_3['3.1']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.1']) ? '' : ( ! isset($prp_3['3.1']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);

$pdf->cell($parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false);
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '5.5 Pretsvars un kabīnes jumts', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['5.5']) ? $sign_netika_parbaudits : ( isset($prp_1['5.5']) || isset($prp_2['5.5']) || isset($prp_3['5.5']) || $is_blank ? '' : ( $is_atkartota ? ( isset($prp_0['5.5']) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['5.5']) ? '' : ( ! isset($prp_1['5.5']) || isset($prp_2['5.5']) || isset($prp_3['5.5']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['5.5']) ? '' : ( ! isset($prp_2['5.5']) || isset($prp_3['5.5']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['5.5']) ? '' : ( ! isset($prp_3['5.5']) || $is_blank ? '' : 'X' ), 1, 1, 'C', false);

// parbaudes rezultati 9 row end

// parbaudes rezultati 10 row start
left_padding();
$pdf->SetFont($font_family_default, '', 7);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '3.2 Ātruma ierobežotājs un ķērājierīce elektriskajiem liftiem', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.2']) ? $sign_netika_parbaudits : ( isset($prp_1['3.2']) || isset($prp_2['3.2']) || isset($prp_3['3.2']) || $is_blank ? '' : ( $is_atkartota ? ( isset($prp_0['3.2']) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.2']) ? '' : ( ! isset($prp_1['3.2']) || isset($prp_2['3.2']) || isset($prp_3['3.2']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.2']) ? '' : ( ! isset($prp_2['3.2']) || isset($prp_3['3.2']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.2']) ? '' : ( ! isset($prp_3['3.2']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);


$pdf->cell($parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false);

$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '6. Hidrauliskās iekārtas', 0, 1, 'L', false);
// parbaudes rezultati 10 row end

// parbaudes rezultati 11 row start
left_padding();
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '3.3 Augšupejošas kabīnes ātruma ierobežošanas ierīce', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, ! $is_ce ? 'O' : ( isset($prp_netika_parbaudits['3.3']) ? $sign_netika_parbaudits : ( isset($prp_1['3.3']) || isset($prp_2['3.3']) || isset($prp_3['3.3']) || $is_blank ? '' : ( $is_atkartota ? ( isset($prp_0['3.3']) ? 'X' : 'O' ) : 'X' ) ) ), 1, 0, 'C', false);
// $pdf->cell( $parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, ! $is_ce ? 'O' : ( $is_blank ? '' : 'X' ), 1, 0, 'C', false );
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false);

$pdf->cell($parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false);
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '6.1 Hidraulisko liftu drošības ierīces', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, 'O', 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 1, 'C', false);
// parbaudes rezultati 11 row end

// parbaudes rezultati 12 row start
left_padding();
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '3.4 Vadības ierīces', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.4']) ? $sign_netika_parbaudits : ( isset($prp_1['3.4']) || isset($prp_2['3.4']) || isset($prp_3['3.4']) || $is_blank ? '' : ( $is_atkartota ? ( isset($prp_0['3.4']) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.4']) ? '' : ( ! isset($prp_1['3.4']) || isset($prp_2['3.4']) || isset($prp_3['3.4']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.4']) ? '' : ( ! isset($prp_2['3.4']) || isset($prp_3['3.4']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.4']) ? '' : ( ! isset($prp_3['3.4']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);

$pdf->cell($parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false);
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '6.2 Lifta hidrauliskās sistēmas cauruļvadi', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, 'O', 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, '', 1, 1, 'C', false);
// parbaudes rezultati 12 row end

// parbaudes rezultati 13 row start
left_padding();
$pdf->SetFont($font_family_default, '', 7);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '3.5 Gala slēdži', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.5']) ? $sign_netika_parbaudits : ( isset($prp_1['3.5']) || isset($prp_2['3.5']) || isset($prp_3['3.5']) || $is_blank ? '' : ( $is_atkartota ? ( isset($prp_0['3.5']) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.5']) ? '' : ( ! isset($prp_1['3.5']) || isset($prp_2['3.5']) || isset($prp_3['3.5']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.5']) ? '' : ( ! isset($prp_2['3.5']) || isset($prp_3['3.5']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.5']) ? '' : ( ! isset($prp_3['3.5']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);

$pdf->cell($parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false);

$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '7. Šahtas durvis', 0, 1, 'L', false);
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_label_font_size);
// parbaudes rezultati 13 row end

// parbaudes rezultati 14 row start
left_padding();
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '3.6 Lifta mašīna', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.6']) ? $sign_netika_parbaudits : ( isset($prp_1['3.6']) || isset($prp_2['3.6']) || isset($prp_3['3.6']) || $is_blank ? '' : ( $is_atkartota ? ( isset($prp_0['3.6']) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.6']) ? '' : ( ! isset($prp_1['3.6']) || isset($prp_2['3.6']) || isset($prp_3['3.6']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.6']) ? '' : ( ! isset($prp_2['3.6']) || isset($prp_3['3.6']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.6']) ? '' : ( ! isset($prp_3['3.6']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);

$pdf->cell($parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false);
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '7.1 Šahtas un kabīnes durvis', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['7.1']) ? $sign_netika_parbaudits : ( isset($prp_1['7.1']) || isset($prp_2['7.1']) || isset($prp_3['7.1']) || $is_blank ? '' : ( $is_atkartota ? ( isset($prp_0['7.1']) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['7.1']) ? '' : ( ! isset($prp_1['7.1']) || isset($prp_2['7.1']) || isset($prp_3['7.1']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['7.1']) ? '' : ( ! isset($prp_2['7.1']) || isset($prp_3['7.1']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['7.1']) ? '' : ( ! isset($prp_3['7.1']) || $is_blank ? '' : 'X' ), 1, 1, 'C', false);

// parbaudes rezultati 14 row end

// parbaudes rezultati 15 row start
left_padding();
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '3.7 Trauksmes ierīce ārkārtas gadījumos', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.7']) ? $sign_netika_parbaudits : ( isset($prp_1['3.7']) || isset($prp_2['3.7']) || isset($prp_3['3.7']) || $is_blank ? '' : ( $is_atkartota ? ( isset($prp_0['3.7']) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.7']) ? '' : ( ! isset($prp_1['3.7']) || isset($prp_2['3.7']) || isset($prp_3['3.7']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.7']) ? '' : ( ! isset($prp_2['3.7']) || isset($prp_3['3.7']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.7']) ? '' : ( ! isset($prp_3['3.7']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);

$pdf->cell($parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false);
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '7.2 Durvju slēgšanas un drošības ierīces', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['7.2']) ? $sign_netika_parbaudits : ( isset($prp_1['7.2']) || isset($prp_2['7.2']) || isset($prp_3['7.2']) || $is_blank ? '' : ( $is_atkartota ? ( isset($prp_0['7.2']) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['7.2']) ? '' : ( ! isset($prp_1['7.2']) || isset($prp_2['7.2']) || isset($prp_3['7.2']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['7.2']) ? '' : ( ! isset($prp_2['7.2']) || isset($prp_3['7.2']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['7.2']) ? '' : ( ! isset($prp_3['7.2']) || $is_blank ? '' : 'X' ), 1, 1, 'C', false);

// parbaudes rezultati 15 row end


// parbaudes rezultati 16 row start
left_padding();
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '3.8 Darbināšana ārkārtas gadījumos', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.8']) ? $sign_netika_parbaudits : ( isset($prp_1['3.8']) || isset($prp_2['3.8']) || isset($prp_3['3.8']) || $is_blank ? '' : ( $is_atkartota ? ( isset($prp_0['3.8']) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.8']) ? '' : ( ! isset($prp_1['3.8']) || isset($prp_2['3.8']) || isset($prp_3['3.8']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.8']) ? '' : ( ! isset($prp_2['3.8']) || isset($prp_3['3.8']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.8']) ? '' : ( ! isset($prp_3['3.8']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);

$pdf->cell($parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '8. Apgaismojumi', 'TB', 0, 'L', false);

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['8.0']) ? $sign_netika_parbaudits : ( isset($prp_1['8.0']) || isset($prp_2['8.0']) || isset($prp_3['8.0']) || $is_blank ? '' : ( $is_atkartota ? ( isset($prp_0['8.0']) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['8.0']) ? '' : ( ! isset($prp_1['8.0']) || isset($prp_2['8.0']) || isset($prp_3['8.0']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['8.0']) ? '' : ( ! isset($prp_2['8.0']) || isset($prp_3['8.0']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['8.0']) ? '' : ( ! isset($prp_3['8.0']) || $is_blank ? '' : 'X' ), 1, 1, 'C', false);

// parbaudes rezultati 16 row end


// parbaudes rezultati 17 row start
left_padding();
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '3.9 Lifta apstadināšanas ierīces', 'TB', 0, 'L', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.9']) ? $sign_netika_parbaudits : ( isset($prp_1['3.9']) || isset($prp_2['3.9']) || isset($prp_3['3.9']) || $is_blank ? '' : ( $is_atkartota ? ( isset($prp_0['3.9']) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.9']) ? '' : ( ! isset($prp_1['3.9']) || isset($prp_2['3.9']) || isset($prp_3['3.9']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.9']) ? '' : ( ! isset($prp_2['3.9']) || isset($prp_3['3.9']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['3.9']) ? '' : ( ! isset($prp_3['3.9']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);

$pdf->cell($parbaudes_rezultati_column_spacer, $parbaudes_rezultati_cell_height, '', 0, 0, 'C', false);
$pdf->SetFont($font_family_default_bold, '', $parbaudes_rezultati_label_font_size);
$pdf->cell($parbaudes_rezultati_text_column_width, $parbaudes_rezultati_cell_height, '9. Elektriskās iekārtas un ietaises', 'TB', 0, 'L', false);

$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['9.0']) ? $sign_netika_parbaudits : ( isset($prp_1['9.0']) || isset($prp_2['9.0']) || isset($prp_3['9.0']) || $is_blank ? '' : ( $is_atkartota ? ( isset($prp_0['9.0']) ? 'X' : 'O' ) : 'X' ) ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['9.0']) ? '' : ( ! isset($prp_1['9.0']) || isset($prp_2['9.0']) || isset($prp_3['9.0']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['9.0']) ? '' : ( ! isset($prp_2['9.0']) || isset($prp_3['9.0']) || $is_blank ? '' : 'X' ), 1, 0, 'C', false);
$pdf->cell($parbaudes_rezultati_mark_column_width, $parbaudes_rezultati_cell_height, isset($prp_netika_parbaudits['9.0']) ? '' : ( ! isset($prp_3['9.0']) || $is_blank ? '' : 'X' ), 1, 1, 'C', false);

// parbaudes rezultati 17 row end
