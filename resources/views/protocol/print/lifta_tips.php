<?php

left_padding();
$pdf->SetFont($lifta_tips_label_font_family, '', $lifta_tips_label_font_size);
$pdf->cell($lifta_tips_label_cell_width, $lifta_tips_cell_height, 'Lifta tips:', 0, 0, 'L', false);

$pdf->SetFont($lifta_tips_font_family, '', $lifta_tips_font_size);
$pdf->cell($lifta_tips_cell_width, $lifta_tips_cell_height, 'elektriskais ', 0, 0, 'R', false);
$pdf->SetFont($lifta_tips_label_font_family, '', $lifta_tips_label_font_size);
$pdf->cell($lifta_tips_mark_cell_width, $lifta_tips_cell_height, $lifts_tips === 'elektriskais' ? 'X' : '', 1, 0, 'C', false);

$pdf->SetFont($lifta_tips_font_family, '', $lifta_tips_font_size);
$pdf->cell($lifta_tips_cell_width, $lifta_tips_cell_height, 'hidrauliskais ', 0, 0, 'R', false);
$pdf->SetFont($lifta_tips_label_font_family, '', $lifta_tips_label_font_size);
$pdf->cell($lifta_tips_mark_cell_width, $lifta_tips_cell_height, $lifts_tips === 'hidrauliskais' ? 'X' : '', 1, 1, 'C', false);

$pdf->SetFont($font_family_default, '', $font_size_s);
$pdf->Ln(1);
