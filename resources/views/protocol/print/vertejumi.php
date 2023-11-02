<?php

//
// VERTEJUMI - consists of 4 rows
//
$pdf->Ln(2);

// first row
left_padding();
$pdf->cell($vertejumi_first_col_width, $vertejumi_row_height, ' Vērtējumi:', 'LTR', 0, 'L', false);
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($vertejumi_second_col_width, $vertejumi_row_height, ' 0 - neatbilstības nav konstatētas', 'TR', 0, 'L', false);
$pdf->cell($vertejumi_third_col_width, $vertejumi_row_height, ' 1- konstatētas maznozīmīgas neatbilstības, kas nerada būtiskus ', 'TR', 1, 'L', false);
// first row
left_padding();
$pdf->cell($vertejumi_first_col_width, $vertejumi_row_height, '', 'LBR', 0, 'L', false);
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($vertejumi_second_col_width, $vertejumi_row_height, '', 'BR', 0, 'L', false);
$pdf->cell($vertejumi_third_col_width, $vertejumi_row_height, ' draudus cilvēku dzīvībai, veselībai, īpašumam vai videi', 'BR', 1, 'L', false);
// first row
left_padding();
$pdf->cell($vertejumi_first_col_width, $vertejumi_row_height, '', 'LR', 0, 'L', false);
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($vertejumi_second_col_width, $vertejumi_row_height, ' 2 - konstatētas būtiskas neatbilstības, kas var radīt ', 'R', 0, 'L', false);
$pdf->cell($vertejumi_third_col_width, $vertejumi_row_height, ' 3 - konstatētas bīstamas neatbilstības, kas rada tiešus draudus ', 'R', 1, 'L', false);
// first row
left_padding();
$pdf->cell($vertejumi_first_col_width, $vertejumi_row_height, '', 'LBR', 0, 'L', false);
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($vertejumi_second_col_width, $vertejumi_row_height, ' draudus cilvēku dzīvībai, veselībai, īpašumam vai videi', 'BR', 0, 'L', false);
$pdf->cell($vertejumi_third_col_width, $vertejumi_row_height, ' cilvēku dzīvībai, veselībai, īpašumam vai videi', 'BR', 1, 'L', false);

$pdf->Ln(2);

//
// NOVERTEJUMS
//

left_padding();
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
