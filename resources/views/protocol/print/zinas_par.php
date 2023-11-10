<?php

$pdf->setLineWidth($zinas_par_line_width);
$pdf->cell($left_padding, 5, '', 0, 0, 'L', false);
$pdf->SetFont($zinas_par_label_font_family, '', $zinas_par_label_font_size);
$pdf->cell($zinas_par_label_cell_width, $zinas_par_cell_height, 'Ziņas par', 0, 0, 'L', false);
$pdf->SetFont($zinas_par_font_family, '', $zinas_par_font_size);
$pdf->cell($zinas_par_reg_nr_label_cell_width, $zinas_par_cell_height, 'Reģ. Nr.', 0, 0, 'R', false);
$pdf->SetFont($zinas_par_label_font_family, '', $zinas_par_label_font_size);
$pdf->cell($zinas_par_reg_nr_cell_width, $zinas_par_cell_height, $lift_reg_number, 0, 0, 'L', false);
$pdf->SetFont($zinas_par_font_family, '', $zinas_par_font_size);
$pdf->cell($zinas_par_uzstaditajs_label_cell_width, $zinas_par_cell_height, 'Uzstādītājs:', 'B', 0, 'C', false);
$pdf->SetFont($zinas_par_label_font_family, '', $zinas_par_label_font_size);
$pdf->cell($zinas_par_uzstaditajs_cell_width, $zinas_par_cell_height, $lift_installer, 'B', 1, 'C', false);
