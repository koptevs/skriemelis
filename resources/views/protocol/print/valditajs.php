<?php

$pdf->cell($left_padding, 5, '', 0, 0, 'L', false);;
$pdf->setFillColor(128, 128, 255);
$pdf->cell($section_valditajs_left_col_width, $section_valditajs_height / 2, ' Valdītājs:', 'LRT', 0, 'L', $is_filled);
$pdf->cell(20, $section_valditajs_height / 2, ' Līguma Nr.', 0, 0, 'L', false);
$pdf->cell(40, $section_valditajs_height / 2, $lift_manager_contract_number, 'B', 1, 'C', false);

$pdf->cell($left_padding, 5, '', 0, 0, 'L', false);;
$pdf->cell($section_valditajs_left_col_width, $section_valditajs_height / 2, $lift_manager_name, 'LRB', 0, 'C',
    false);
$pdf->cell(20, $section_valditajs_height / 2, '', 0, 0, 'L', false);
$pdf->cell(40, $section_valditajs_height / 2, $lift_manager_contract_date, 0, 1, 'C', false);

