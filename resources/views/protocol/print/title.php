<?php

$pdf->SetFont('ArialBoldItalic', '', 10);
left_padding();
$pdf->setFillColor(128, 128, 255);
$pdf->cell(0, 11, 'LIFTA TEHNISKĀS PĀRBAUDES PROTOKOLS Nr. ' . $protocol_number, 0, 1, 'C', false);
$pdf->Image(__DIR__.'/../img/latak_logo.jpg', $width - 5, 30, 22, );
$pdf->SetFont($font_family_default_bold, '', $font_size_default);
