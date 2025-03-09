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
            'regNumber'          => 'required|string',
            'liftManager'        => 'required|int',
            'type'               => 'required|string',
            'category'           => 'required|string',
            'factoryNumber'      => 'nullable|string',
            'model'              => 'nullable|string',
            'speed'              => 'nullable|decimal:0,2',
            'load'               => 'required|int',
            'manufacturer'       => 'nullable|string',
            'installer'          => 'nullable|string',
            'instYear'           => 'required|int',
            'floorsServiced'     => 'required|int',
            'address'            => 'required|string',
            'addressCity'        => 'required|string',
            'addressCountry'     => 'required|string',
            'addressPostalCode'  => 'required|string',
            'buildingSeries'     => 'nullable|string',
            'birUrl'             => 'nullable|string',
            'googleCoordinates'  => 'nullable|string',
            'entryCode'          => 'nullable|string',
            'inspectionStatus'   => 'nullable|string',
           'nextInspectionDate' => 'nullable|date',
            'notes'              => 'nullable|string',
        ];
    }

    public function messages()
    {
        return [
            'load.string' => "Грузоподъёмность какая?",
        ];
    }

}
