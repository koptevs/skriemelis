<?php

$pdf->cell($left_padding, 5, '', 0, 0, 'L', false);;
$pdf->cell($section_valditajs_left_col_width, $section_valditajs_height / 2, ' Adrese:', 'LRT', 0, 'L', false);
$pdf->cell(0, $section_valditajs_height / 2, ' Pārbaudes adrese:', 'RT', 1, 'L', false);
$pdf->cell($left_padding, 5, '', 0, 0, 'L', false);;
$pdf->cell($section_valditajs_left_col_width, $section_valditajs_height / 2, $lift_manager_address, 'LRB', 0, 'C', false);
$pdf->cell(0, $section_valditajs_height / 2, $lifts_parbaudes_adrese, 'RB', 1, 'C', false);

