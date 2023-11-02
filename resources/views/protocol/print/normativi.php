<?php

$pdf->SetFont($tehniskas_parbaudes_normativi_label_font_family, '', $tehniskas_parbaudes_normativi_label_font_size);
left_padding();
$pdf->cell($tehniskas_parbaudes_normativi_label_cell_width, $tehniskas_parbaudes_normativi_cell_height, 'Tehniskās pārbaudes normatīvi:', 0, 0, 'L', false);
$pdf->SetFont($tehniskas_parbaudes_normativi_font_family, '', $tehniskas_parbaudes_normativi_font_size);
$pdf->cell(0, $tehniskas_parbaudes_normativi_cell_height, 'MK.Not.Nr.679 no 17.11.2020;  LRTDEA metodika 04.11/001', 0, 1, 'L', false);

$pdf->SetFont($font_family_default, '', $font_size_s);
$pdf->setLineWidth($default_line_width);
