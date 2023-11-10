<?php
//
// VERTEJUMI - consists of 4 rows
//
$pdf->Ln(2);

// first row
$pdf->cell($left_padding, 5, '', 0, 0, 'L', false);;
$pdf->cell($vertejumi_first_col_width, $vertejumi_row_height, ' Vērtējumi:', 'LTR', 0, 'L', false);
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($vertejumi_second_col_width, $vertejumi_row_height, ' 0 - neatbilstības nav konstatētas', 'TR', 0, 'L',
    false);
$pdf->cell($vertejumi_third_col_width, $vertejumi_row_height,
    ' 1- konstatētas maznozīmīgas neatbilstības, kas nerada būtiskus ', 'TR', 1, 'L', false);
// second row
$pdf->cell($left_padding, 5, '', 0, 0, 'L', false);;
$pdf->cell($vertejumi_first_col_width, $vertejumi_row_height, '', 'LBR', 0, 'L', false);
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($vertejumi_second_col_width, $vertejumi_row_height, '', 'BR', 0, 'L', false);
$pdf->cell($vertejumi_third_col_width, $vertejumi_row_height,
    ' draudus cilvēku dzīvībai, veselībai, īpašumam vai videi', 'BR', 1, 'L', false);
// third row
$pdf->cell($left_padding, 5, '', 0, 0, 'L', false);;
$pdf->cell($vertejumi_first_col_width, $vertejumi_row_height, '', 'LR', 0, 'L', false);
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($vertejumi_second_col_width, $vertejumi_row_height,
    ' 2 - konstatētas būtiskas neatbilstības, kas var radīt ', 'R', 0, 'L', false);
$pdf->cell($vertejumi_third_col_width, $vertejumi_row_height,
    ' 3 - konstatētas bīstamas neatbilstības, kas rada tiešus draudus ', 'R', 1, 'L', false);
// fourth row
$pdf->cell($left_padding, 5, '', 0, 0, 'L', false);;
$pdf->cell($vertejumi_first_col_width, $vertejumi_row_height, '', 'LBR', 0, 'L', false);
$pdf->SetFont($font_family_default, '', $parbaudes_rezultati_text_font_size);
$pdf->cell($vertejumi_second_col_width, $vertejumi_row_height,
    ' draudus cilvēku dzīvībai, veselībai, īpašumam vai videi', 'BR', 0, 'L', false);
$pdf->cell($vertejumi_third_col_width, $vertejumi_row_height, ' cilvēku dzīvībai, veselībai, īpašumam vai videi', 'BR',
    1, 'L', false);

$pdf->Ln(2);
