<?php

$pdf->Image(__DIR__ . '/../img/tuv.jpg', $width - 35, 11, 50, );
$pdf->SetFont('ArialBold', '', 10);
$pdf->cell($left_padding, 5, '', 0, 0, 'L', false);
$pdf->setFillColor(128, 128, 255);
$pdf->cell($width * 0.75, 5, 'LATVIJAS RŪPNIEKU TEHNISKĀS DROŠĪBAS EKSPERTU APVIENĪBA', 0, 1, 'C', false);

$pdf->SetFont('Arial', '', 8);
$pdf->cell($left_padding, 5, '', 0, 0, 'L', false);
$pdf->setFillColor(255, 128, 128);
$pdf->cell($left_padding, 5, '', 0, 0, 'L', false);
$pdf->cell($width * 0.75, 3, 'TUV Rheinland grupa, SIA', '', 1, 'C', false);

$pdf->cell($left_padding, 5, '', 0, 0, 'L', false);
$pdf->SetDrawColor(44, 123, 178);
$pdf->setLineWidth(0.4);
$pdf->cell($width * 0.05, 1, '', '', 0, 'C', false);
$pdf->cell($width * 0.65, 1, '', 'B', 1, 'C', false);


$pdf->SetFont($font_family_default, '', 7);
$pdf->cell($left_padding, 5, '', 0, 0, 'L', false);
$pdf->setFillColor(255, 128, 128);
$pdf->cell($left_padding, 5, '', 0, 0, 'L', false);
$pdf->cell($width * 0.75, 6, 'Katlakalna iela 9A, Rīga, LV-1073, Latvija, Tālr. 67568607, www.tuv.lv, e-pasts: tuv@tuv.lv', '', 1, 'C', false);



$pdf->SetFont('ArialRegular', '', 9);
$pdf->setFillColor(255, 128, 128);
$pdf->cell($left_padding, 5, '', 0, 0, 'L', false);
$pdf->cell($width * 0.75, 3, 'DARBA AIZSARDZĪBAS UN IEKĀRTU NOVĒRTĒŠANAS INSPEKCIJA', '', 1, 'C', false);

$pdf->SetDrawColor(0, 0, 0);
$pdf->cell($left_padding, 5, '', 0, 0, 'L', false);
$pdf->cell(0, 1, '', 'B', 1, 'C', false);


$pdf->setLineWidth($default_line_width);
