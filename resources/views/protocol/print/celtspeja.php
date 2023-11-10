<?php

$pdf->SetFont($font_family_default, '', $font_size_default);
$pdf->cell($left_padding, 5, '', 0, 0, 'L', false);
$pdf->cell(20, 4, 'Celtspēja', 'B', 0, 'L', false);
$pdf->SetFont('ArialBold', '', $font_size_s);
$pdf->cell(15, 4, $lift_load, 'B', 0, 'L', false);
$pdf->SetFont($font_family_default, '', $font_size_s);
$pdf->cell(0, 4, 'kg.', 'B', 1, 'L', false);
