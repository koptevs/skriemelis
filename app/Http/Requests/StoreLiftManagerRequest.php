<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreLiftManagerRequest extends FormRequest
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
            'name'                            => 'required|string',
            'regNumber'                       => 'required|string',
            'address'                         => 'required|string',
            'contractNumber'                  => 'nullable|string',
            'contractDate'                    => 'nullable|string',
            'contactPerson'                   => 'nullable|string',
            'contactPersonPosition'           => 'nullable|string',
            'contactPersonPhone'              => 'nullable|string',
            'contactPersonPhoneBill'          => 'nullable|string',
            'emailForDocs'                    => 'nullable|string',
            'bankName'                        => 'nullable|string',
            'bankCode'                        => 'nullable|string',
            'bankAccount'                     => 'nullable|string',
            'billPayDays'                     => 'nullable|string',
            'protocolWithElectricMeasurments' => 'required|boolean',
            'notes'                           => 'nullable|string',
        ];
    }

}
