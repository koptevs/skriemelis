<?php

$pdf->setLineWidth($zinas_par_line_width);
left_padding();
$pdf->SetFont($zinas_par_label_font_family, '', $zinas_par_label_font_size);
$pdf->cell($zinas_par_label_cell_width, $zinas_par_cell_height, 'liftu:', 0, 0, 'L', false);
$pdf->SetFont($zinas_par_font_family, '', $zinas_par_font_size);
$pdf->cell($zinas_par_reg_nr_label_cell_width, $zinas_par_cell_height, 'Rūpn. Nr.', 'BT', 0, 'R', false);
$pdf->SetFont($zinas_par_label_font_family, '', $zinas_par_label_font_size);
$pdf->cell($zinas_par_reg_nr_cell_width, $zinas_par_cell_height, $lifts_rupn_nr, 'BT', 0, 'L', false);
$pdf->SetFont($zinas_par_font_family, '', $zinas_par_font_size);
$pdf->cell($liftu_uzstadisanas_gads_cell_width, $zinas_par_cell_height, 'Uzstādīšanas gads ', 'B', 0, 'R', false);

$pdf->SetFont($zinas_par_label_font_family, '', $zinas_par_label_font_size);
foreach ( stringToArray($lifts_uzstadisanas_gads) as $key => $val ) {
    $newStr = 0;
    if ($key === 3 ) { // 4 digit year 0-3
        $newStr = 1;
    }
    $pdf->cell($liftu_gads_cell_width, $liftu_cell_height, $val, 'LRB', $newStr, 'C', false);
}

$pdf->SetFont($font_family_default, '', $font_size_s);
$pdf->setLineWidth($default_line_width);
$pdf->Ln(1);
