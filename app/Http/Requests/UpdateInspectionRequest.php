<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateInspectionRequest extends FormRequest
{

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'protocol_number'      => 'required|string',
            'lift_id'              => 'nullable|int',
            'inspection_type'      => 'nullable|string',
            'inspection_next_type' => 'nullable|string',
            'expert'               => 'nullable|int',
            'date_start'           => 'nullable|date',
            'date_end'             => 'nullable|date',
            'date_next'            => 'nullable|date',
            'date_next_normal'     => 'nullable|date',
            'label'                => 'nullable|string',
            'bir_number'           => 'nullable|string',
            'inspection_result'    => 'nullable|int',
            'participants'         => 'nullable|string',
            'lift_manager'         => 'nullable|int',
            'non_compliances_0'    => 'nullable|string',
            'non_compliances_1'    => 'nullable|string',
            'non_compliances_2'    => 'nullable|string',
            'non_compliances_3'    => 'nullable|string',
            'extra_check_reason'   => 'nullable|string',
            'not_checked_forced'   => 'nullable|string',
            'notes'                => 'nullable|string',
            'notes_for_protokol'   => 'nullable|string',
        ];
    }

}
