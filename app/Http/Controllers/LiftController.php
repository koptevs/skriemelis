<?php

namespace App\Http\Controllers;

use App\Models\Lift;
use App\Http\Requests\StoreLiftRequest;
use App\Http\Requests\UpdateLiftRequest;
use App\Models\LiftManager;
use Cassandra\Map;
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
                     ->when(
                         Request::input('search'), function ($query, $search) {
                         //Request::input('search') == $search
                         $query->where('reg_number', 'like', "%{$search}%");
                     }
                     )
                     ->when(
                         Request::input('street'), function ($query, $search) {
                         //Request::input('search') == $search
                         $query->where('address', 'like', "%{$search}%");
                     }
                     )
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
        $liftManagers = LiftManager::pluck('name', 'id');

        return Inertia::render(
            'Lift/Create', ['liftManagers' => $liftManagers]
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLiftRequest $request)
    {
//       dd('wewrwr');
//        $data = \request()->all();
        $data = $request->validated();


        $lift = [
            'reg_number'          => $data["regNumber"],
            'factory_number'      => $data["factoryNumber"],
            'lift_type'           => $data["liftType"],
            'lift_category'       => $data["liftCategory"],
            'model'               => $data["model"],
            'speed'               => $data["speed"],
            'load'                => intval($data["load"]),
            'manufacturer'        => $data["manufacturer"],
            'installer'           => $data["installer"],
            'installation_year'   => intval($data["installationYear"]),
            'floors_serviced'     => intval($data["floorsServiced"]),
            'address'             => $data["address"],
            'address_country'     => $data["addressCountry"],
            'address_postal_code' => $data["addressPostalCode"],
            'lift_manager_id'     => $data["liftManager"],
            'notes'               => $data["notes"],
        ];

//        dd($lift);
        Lift::create($lift);

        return to_route('lifts.index');
//        return redirect()->route('lifts.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Lift $lift)
    {
        $lift_with_inspections = Lift::with('inspections')->find($lift->id);
//        dd($lift_with_inspections->inspections);

        return Inertia::render(
            'Lift/Show', [
                'lift'        => $lift_with_inspections
//                'inspections' => $lift->inspections,
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Lift $lift)
    {
        $liftManagers = LiftManager::pluck('name', 'id');

        return Inertia::render(
            'Lift/Edit', ['lift' => $lift, 'liftManagers' => $liftManagers]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLiftRequest $request, Lift $lift)
    {
        $data = $request->validated();

        $newLiftData = [
            'reg_number'          => $data["regNumber"],
            'factory_number'      => $data["factoryNumber"],
            'lift_type'           => $data["liftType"],
            'lift_category'       => $data["liftCategory"],
            'model'               => $data["model"],
            'speed'               => $data["speed"],
            'load'                => intval($data["load"]),
            'manufacturer'        => $data["manufacturer"],
            'installer'           => $data["installer"],
            'installation_year'   => intval($data["installationYear"]),
            'floors_serviced'     => intval($data["floorsServiced"]),
            'address'             => $data["address"],
            'address_country'     => $data["addressCountry"],
            'address_postal_code' => $data["addressPostalCode"],
            'lift_manager_id'     => $data["liftManager"],
            'notes'               => $data["notes"],
        ];
//        dd($newLiftData);

        $lift->update($newLiftData);

        return to_route('lifts.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lift $lift)
    {
        $lift->delete();

        return to_route('lifts.index');
    }
}

