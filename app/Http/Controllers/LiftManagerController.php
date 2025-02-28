<?php

namespace App\Http\Controllers;

use App\Models\LiftManager;
use App\Http\Requests\StoreLiftManagerRequest;
use App\Http\Requests\UpdateLiftManagerRequest;
use Inertia\Inertia;

class LiftManagerController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //        $liftManagers = LiftManager::all();
        $liftManagers = LiftManager::with('lifts')->get();

        //        dd($liftManagers);

        return Inertia::render(
            'LiftManager/Index', [
            'liftManagers' => $liftManagers,
        ],
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render(
            'LiftManager/Create'
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLiftManagerRequest $request)
    {
        /* old
                 $liftManager = [
            'name'                               => $data["name"],
            'reg_number'                         => $data["regNumber"],
            'address'                            => $data["address"],
            'contract_number'                    => $data["contractNumber"],
            'contract_date'                      => $data["contractDate"],
            'contact_person'                     => $data["contactPerson"],
            'contact_person_position'            => $data["contactPersonPosition"],
            'contact_person_phone'               => $data["contactPersonPhone"],
            'contact_person_phone_bill'          => $data["contactPersonPhoneBill"],
            'email_for_docs'                     => $data["emailForDocs"],
            'bank_name'                          => $data["bankName"],
            'bank_code'                          => $data["bankCode"],
            'bank_account'                       => $data["bankAccount"],
            'bill_pay_days'                      => $data["billPayDays"],
            'protocol_with_electric_measurments' => $data["protocolWithElectricMeasurments"],
            'notes'                              => $data["notes"],
        ];
        LiftManager::create($liftManager);

        return to_route('lift-managers.index');
         */
    }

    /**
     * Display the specified resource.
     */
    public function show(LiftManager $liftManager)
    {
        //        dd(LiftManager::find($liftManager->id)->lifts);
        //        dd($liftManager->lifts()->get());
        return Inertia::render(
            'LiftManager/Show', [
                'liftManager' => $liftManager,
                'lifts'       => $liftManager->lifts()->get(),
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(LiftManager $liftManager)
    {
        return Inertia::render(
            'LiftManager/Edit', ['liftManager' => $liftManager]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(
        UpdateLiftManagerRequest $request,
        LiftManager $liftManager
    ) {
        /* old
          $data = $request->validated();
//        dd($data);
        $newLiftManagerData = [
            'name'                               => $data["name"],
            'reg_number'                         => $data["regNumber"],
            'address'                            => $data["address"],
            'contract_number'                    => $data["contractNumber"],
            'contract_date'                      => $data["contractDate"],
            'contact_person'                     => $data["contactPerson"],
            'contact_person_position'            => $data["contactPersonPosition"],
            'contact_person_phone'               => $data["contactPersonPhone"],
            'contact_person_phone_bill'          => $data["contactPersonPhoneBill"],
            'email_for_docs'                     => $data["emailForDocs"],
            'bank_name'                          => $data["bankName"],
            'bank_code'                          => $data["bankCode"],
            'bank_account'                       => $data["bankAccount"],
            'bill_pay_days'                      => $data["billPayDays"],
            'notes'                              => $data["notes"],
        ];
        $newLiftManagerData['protocol_with_electric_measurments'] = $data["protocolWithElectricMeasurments"] === 0 ? false : $data["protocolWithElectricMeasurments"];
//dd($newLiftManagerData);
        $liftManager->update($newLiftManagerData);

        return to_route('lift-managers.index');
         */
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(LiftManager $liftManager)
    {
        $liftManager->delete();
        return to_route('lift-managers.index');
    }

}
