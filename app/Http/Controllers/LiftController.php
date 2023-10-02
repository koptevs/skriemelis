<?php

namespace App\Http\Controllers;

use App\Models\Lift;
use App\Http\Requests\StoreLiftRequest;
use App\Http\Requests\UpdateLiftRequest;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class LiftController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $lifts = Lift::query()
                     ->when(Request::input('search'), function ($query, $search) { //Request::input('search') == $search
                         $query->where('reg_number', 'like', "%{$search}%");
                     })
                     ->when(Request::input('street'), function ($query, $search) { //Request::input('search') == $search
                         $query->where('address_street', 'like', "%{$search}%");
                     })
                     ->paginate(100)
                     ->withQueryString();
//        dd($lifts);
//        ->through(fn($lift)=>[
//            'reg_number' => $lift->reg_number
//        ]);


        return Inertia::render(
            'Lift/Index', [
            'lifts'   => $lifts,
            'filters' => Request::only(['search', "street"])
        ],
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render(
            'Lift/Create', []
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLiftRequest $request)
    {
        $lift = [
            'reg_number'          => 'qwe',
            'lift_type'           => 'elektriskais',
            'lift_category'       => 'CE',
            'factory_number'      => '223322',
            'model'               => 'Model',
            'speed'               => '1.1',
            'load'                => 650,
            'manufacturer'        => 'KONE',
            'installer'           => 'Sharazh',
            'installation_year'   => '2023',
            'floors_total'        => '7',
            'floors_serviced'     => '7',
            'address_country'     => 'Latvia',
            'address_novads'      => '',
            'address_pagasts'     => '',
            'address_city'        => 'Rigas',
            'address_street'      => 'Dzervju',
            'address_building'    => '3',
            'address_entrance'    => 'II',
            'address_postal_code' => 'LV-1019',
            'notes'               => 'Long-long notes. Long-long notes. Long-long notes. Long-long notes. ',
            'lift_manager_id'     => '12',
        ];

//        Lift::create($lift);
        return 'LiftController-store';
    }

    /**
     * Display the specified resource.
     */
    public function show(Lift $lift)
    {
//        dd($lift);
        return Inertia::render(
            'Lift/Show', [
                'lift' => $lift,
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Lift $lift)
    {
        return 'LiftController-edit';
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLiftRequest $request, Lift $lift)
    {
        $lift = Lift::find(22);
        $lift->update(
            [
                'reg_number' => '9CD777777'
            ]
        );
        dd($lift);

        return 'LiftController-update';
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lift $lift)
    {
        $lift = Lift::find(22);
        $lift->delete();
        //        dd($lift->toArray());
        //        dd($lift);
        return 'LiftController-destroy';
    }
}
