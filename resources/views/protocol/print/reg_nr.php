<?php

left_padding();

$pdf->setLineWidth($section_reg_nr_line_width);
$pdf->cell($section_reg_nr_label_width, $section_reg_nr_height, 'Reģ, Nr.:', 0, 0, 'C', false);

foreach ( stringToArray($valditajs_reg_nr) as $key => $val ) {
    $newStr = 0;
    if ($key === 10 ) {
        $newStr = 1;
    }
    $pdf->cell($section_reg_nr_digit_width, $section_reg_nr_height, $val, 'LRB', $newStr, 'C', false);
}
$pdf->setLineWidth($default_line_width);
$pdf->Ln(1);
