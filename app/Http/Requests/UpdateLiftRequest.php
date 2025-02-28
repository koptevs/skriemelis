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
            'regNumber'         => 'required|string',
            'factoryNumber'     => 'required|string',
            'liftType'          => 'required|string',
            'liftCategory'      => 'required|string',
            'model'             => 'nullable|string',
            'speed'             => 'nullable|string',
            'load'              => 'required|integer',
            'manufacturer'      => 'nullable|string',
            'installer'         => 'nullable|string',
            'installationYear'  => 'required|integer',
            'floorsServiced'    => 'nullable|integer',
            'address'           => 'required|string',
            'addressCountry'    => 'required|string',
            'addressPostalCode' => 'required|string',
            'liftManager'       => 'nullable|string',
            'notes'             => 'nullable|string',
        ];
    }

}
