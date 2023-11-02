<?php

left_padding();
$pdf->setFillColor(128, 128, 255);
$pdf->cell($section_valditajs_left_col_width, $section_valditajs_height / 2, ' Valdītājs:', 'LRT', 0, 'L', $is_filled);
$pdf->cell(20, $section_valditajs_height / 2, ' Līguma Nr.', 0, 0, 'L', false);
$pdf->cell(40, $section_valditajs_height / 2, $valditajs_liguma_nr, 'B', 1, 'C', false);

left_padding();
$pdf->cell($section_valditajs_left_col_width, $section_valditajs_height / 2, $valditajs_nosaukums, 'LRB', 0, 'C', false);
$pdf->cell(20, $section_valditajs_height / 2, '', 0, 0, 'L', false);
$pdf->cell(40, $section_valditajs_height / 2, $valditajs_liguma_datums, 0, 1, 'C', false);
