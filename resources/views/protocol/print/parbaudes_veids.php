<?php

$pdf->setLineWidth($parbaudes_veids_line_width);
left_padding();
$pdf->SetFont($parbaudes_veids_label_font_family, '', $parbaudes_veids_label_font_size);
$pdf->cell($parbaudes_veids_1col_width, $parbaudes_veids_cell_height, 'Pārbaudes veids', 0, 0, 'L', false);
$pdf->SetFont($parbaudes_veids_font_family, '', $parbaudes_veids_font_size);
$pdf->cell($parbaudes_veids_2col_width, $parbaudes_veids_cell_height, 'Pirmreizējā*', 0, 0, 'C', false);
$pdf->SetFont($parbaudes_veids_mark_font_family, '', $parbaudes_veids_mark_font_size);
$pdf->cell($parbaudes_veids_3col_width, $parbaudes_veids_cell_height, $parbaude_veids === 'pirmreizējā' ? 'X' : '', 1, 0, 'C', false);
$pdf->SetFont($parbaudes_veids_font_family, '', $parbaudes_veids_font_size);
$pdf->cell($parbaudes_veids_4col_width, $parbaudes_veids_cell_height, 'Kārtējā', 0, 0, 'C', false);
$pdf->SetFont($parbaudes_veids_mark_font_family, '', $parbaudes_veids_mark_font_size);
$pdf->cell($parbaudes_veids_5col_width, $parbaudes_veids_cell_height, $parbaude_veids === 'kārtējā' ? 'X' : '', 1, 0, 'C', false);
$pdf->SetFont($parbaudes_veids_font_family, '', $parbaudes_veids_font_size);
$pdf->cell($parbaudes_veids_6col_width, $parbaudes_veids_cell_height, 'Ārpuskārtas', 0, 0, 'C', false);
$pdf->SetFont($parbaudes_veids_mark_font_family, '', $parbaudes_veids_mark_font_size);
$pdf->cell($parbaudes_veids_7col_width, $parbaudes_veids_cell_height, $parbaude_veids === 'ārpuskārtas' ? 'X' : '', 1, 0, 'C', false);
$pdf->SetFont($parbaudes_veids_font_family, '', $parbaudes_veids_font_size);
$pdf->cell($parbaudes_veids_8col_width, $parbaudes_veids_cell_height, 'Atkārtotā', 0, 0, 'C', false);
$pdf->SetFont($parbaudes_veids_mark_font_family, '', $parbaudes_veids_mark_font_size);
$pdf->cell($parbaudes_veids_9col_width, $parbaudes_veids_cell_height, $parbaude_veids === 'atkārtotā' ? 'X' : '', 1, 1, 'C', false);

$pdf->SetFont($font_family_default, '', $font_size_s);
$pdf->setLineWidth($default_line_width);
