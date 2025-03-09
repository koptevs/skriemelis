<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateLiftRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'regNumber'          => 'nullable|string',
            'liftManager'        => 'nullable|int',
            'type'               => 'nullable|string',
            'category'           => 'nullable|string',
            'factoryNumber'      => 'nullable|string',
            'model'              => 'nullable|string',
            'speed'              => 'nullable|decimal:0,2',
            'load'               => 'nullable|int',
            'manufacturer'       => 'nullable|string',
            'installer'          => 'nullable|string',
            'instYear'           => 'nullable|int',
            'floorsServiced'     => 'nullable|int',
            'address'            => 'nullable|string',
            'addressCity'        => 'nullable|string',
            'addressCountry'     => 'nullable|string',
            'addressPostalCode'  => 'nullable|string',
            'buildingSeries'     => 'nullable|string',
            'birUrl'             => 'nullable|string',
            'googleCoordinates'  => 'nullable|string',
            'entryCode'          => 'nullable|string',
            'inspectionStatus'   => 'nullable|string',
            'nextInspectionDate' => 'nullable|date',
            'notes'              => 'nullable|string',
        ];
    }

}
