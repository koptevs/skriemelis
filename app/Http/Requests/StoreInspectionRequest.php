<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreInspectionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'protocol_number'      => 'required|string',
            'lift_id'              => 'required|int',
            'inspection_type'      => 'required|string',
            'inspection_next_type' => 'required|string',
            'expert'               => 'required|string',
            'date_start'           => 'required|date',
            'date_end'             => 'required|date',
            'date_next'            => 'nullable|date',
            'date_next_normal'     => 'nullable|date',
            'label'                => 'required|string',
            'bir_number'           => 'nullable|string',
            'inspection_result'    => 'nullable|string',
            'participant_1'        => 'nullable|int',
            'participant_2'        => 'nullable|int',
            'non_compliances_0'    => 'nullable|string',
            'non_compliances_1'    => 'nullable|string',
            'non_compliances_2'    => 'nullable|string',
            'non_compliances_3'    => 'nullable|string',
            'notes'                => 'nullable|string',
            'notes_for_protokol'   => 'nullable|string',
            'extra_check_reason' => 'nullable|string',
            'not_checked_forced' => 'nullable|string',
        ];
    }
}
