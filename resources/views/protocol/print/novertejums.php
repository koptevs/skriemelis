<?php
//
// NOVERTEJUMS
//

$pdf->cell($left_padding, 5, '', 0, 0, 'L', false);;
$pdf->SetFont($font_family_default_bold, '', 9);
$pdf->cell(25, 4.1, 'Novērtējums:', '', 0, 'L', false);
$pdf->cell(5, 4.1, 'X', 1, 0, 'C', false);
$pdf->SetFont($font_family_default, '', 8);
$pdf->cell(10, 4.1, 'vai', '', 0, 'C', false);
$pdf->SetFillColor(200, 200, 200);
$pdf->cell(5, 4.1, '', 1, 0, 'L', true);
$pdf->cell(10, 4.1, '', '', 0, 'C', false);
$pdf->SetFont($font_family_default_bold, '', 9);
$pdf->cell(5, 4.1, 'O', 1, 0, 'C', false);
$pdf->SetFont($font_family_default, '', 8);
$pdf->cell(30, 4.1, '- nav nepieciešams', '', 1, 'C', false);
