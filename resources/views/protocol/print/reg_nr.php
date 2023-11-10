<?php


$pdf->cell($left_padding, 5, '', 0, 0, 'L', false);;

$pdf->setLineWidth($section_reg_nr_line_width);
$pdf->cell($section_reg_nr_label_width, $section_reg_nr_height, 'Reģ, Nr.:', 0, 0, 'C', false);

foreach (stringToArray($lift_manager_reg_number) as $key => $val) {
    $newStr = 0;
    if ($key === 10) {
        $newStr = 1;
    }
    $pdf->cell($section_reg_nr_digit_width, $section_reg_nr_height, $val, 'LRB', $newStr, 'C', false);
}
$pdf->setLineWidth($default_line_width);
$pdf->Ln(1);
