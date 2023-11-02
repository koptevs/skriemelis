<?php

function get_lift_data_by_id($id)
{
    global $lifti;

    return $lifti[$id];
}

function left_padding()
{
    global $pdf;
    global $left_padding;
    if (isset($left_padding)) {
        $pdf->cell($left_padding, 5, '', 0, 0, 'L', false);
    }
}

//function stringToArray( $s )
//{
//    $r = array();
//    for ( $i = 0; $i < strlen($s); $i++ ) {
//        $r[ $i ] = $s[ $i ];
//    }
//
//    return $r;
//}
function stringToArray($n)
{
    $s = strval($n);
    $r = array();
    for ($i = 0; $i < strlen($s); $i++) {
        $r[$i] = $s[$i];
    }

    return $r;
}

function arrToArr($someArr)
{
    // Array to '1.4' =>'wewerw' array

    $res = [];
    foreach ($someArr as $value) {
        $trimmed = trim($value);
        $index   = mb_substr($trimmed, 0, 3);
        $string  = mb_substr($trimmed, 4);
        if (isset($res[$index])) {
            $res[$index] = $res[$index].' '.$string;
        } else {
            $res[$index] = $string;
        }
    }
    return $res;
}


function numbered_string_to_array($mystr)
{
    // https://stackoverflow.com/questions/5539169/how-do-i-remove-extra-spaces-tabs-and-line-feeds-from-a-sentence-and-substitute
    // That should replace all multiple white-spaces, tabs and new-lines with just one.

    $without_tabs            = preg_replace('/\s+/S', ' ', $mystr);
    $string_without_newlines = preg_replace('~[\r\n]+~', '', $without_tabs);
    $array_of_characters     = mb_str_split(trim($string_without_newlines));
    $arr_len                 = count($array_of_characters);
    // var_dump( $array_of_characters );
    // die();

    $result = array();

    $current_array = array();

    for ($i = 0; $i < $arr_len; $i++) {
        if (is_numeric($array_of_characters[$i]) && '.' === $array_of_characters[$i + 1] && is_numeric($array_of_characters[$i + 2])) {
            $temp_array[] = $array_of_characters[$i];
            $temp_array[] = $array_of_characters[$i + 1];
            $temp_array[] = $array_of_characters[$i + 2];

            $current_array = implode($temp_array);

            if ( ! isset($result[$current_array])) {
                $result[$current_array] = array();
            }
            $temp_array = array();
            ++$i;
            ++$i;
            // continue;

        } else {
            $result[$current_array][] = $array_of_characters[$i];
        }
    }

    foreach ($result as $res_index => $res_value) {
        $result[$res_index] = trim(implode($res_value));
    }

    ksort($result, SORT_NUMERIC);

    return $result;
}

function getPositionForCheckbox($pdf)
{
    global $checkboxes;
    $x            = $pdf->GetX();
    $y            = $pdf->GetY();
    $checkboxes[] = array(
        'x' => $x,
        'y' => $y,
    );
}

function getPositionForEmptyCheckbox($pdf)
{
    global $empty_checkboxes;
    $x                  = $pdf->GetX();
    $y                  = $pdf->GetY();
    $empty_checkboxes[] = array(
        'x' => $x,
        'y' => $y,
    );
}

function check_list_divider($multiplier = 1)
{
    global $pdf;
    global $checklist_width;
    global $checklist_divider_width;
    global $checklist_line_height;
    global $accent_color_light;
    $pdf->setFillColor(...$accent_color_light);
    $pdf->cell($checklist_divider_width, $checklist_line_height * $multiplier, '', '', 0, 'L', true);
    $pdf->setFillColor(255, 255, 255);
}

function check_list_header($title = 'Enter title as an argument')
{
    global $pdf;
    global $checklist_width;
    global $checklist_divider_width;
    global $checklist_line_height;
    global $accent_color_light;
    global $accent_color;
    global $padding;
    global $main_font;
    global $main_font_size;

    $pdf->setFillColor(...$accent_color_light);
    $pdf->SetDrawColor(...$accent_color_light);
    $y = $pdf->GetY();
    $pdf->SetY($y + 0.3);
    $pdf->SetFont($main_font, '', $main_font_size);
    left_padding();
    $pdf->cell($checklist_width, 5, $padding.$title, 'LRTB', 1, 'L', true);
    $pdf->setFillColor(255, 255, 255);
    $pdf->SetDrawColor(...$accent_color);
}
