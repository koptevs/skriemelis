<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreLiftRequest extends FormRequest
{

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // return false;
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'regNumber'            => 'required|string',
            'factoryNumber'        => 'required|string',
            'liftType'             => 'required|string',
            'liftCategory'         => 'required|string',
            'model'                => 'nullable|string',
            'speed'                => 'nullable|string',
            'load'                 => 'required|int',
            'manufacturer'         => 'nullable|string',
            'installer'            => 'nullable|string',
            'installationYear'     => 'required|int',
            'floorsServiced'       => 'nullable|int',
            'address'              => 'required|string',
            'addressCity'          => 'required|string',
            'addressCountry'       => 'required|string',
            'addressPostalCode'    => 'required|string',
            'liftManager'          => 'required|int',
            'notes'                => 'nullable|string',
            'inspection_status'    => 'nullable|string',
            'entry_code'           => 'nullable|string',
            'building_series'      => 'nullable|string',
            'next_inspection_date' => 'nullable|date',
        ];
    }

    public function messages()
    {
        return [
            'load.string' => "Грузоподъёмность какая?",
        ];
    }

}
