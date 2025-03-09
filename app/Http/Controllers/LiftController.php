<?php

namespace App\Http\Controllers;

use App\Models\Lift;
use App\Http\Requests\StoreLiftRequest;
use App\Http\Requests\UpdateLiftRequest;
use App\Models\LiftManager;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

//use Cassandra\Map; transferred from old

class LiftController extends Controller
{

    /**
     * Display a listing of the resource.
     */

    // Job::with('employer')->get(); //Laracasts 13. Eager Loading

    public function index()
    {
        // $lifts = Lift::all();
        // $lifts = Lift::query()->paginate(3)->withQueryString();

        // $lifts = Lift::all()->map(fn($lift)=>[
        // 'name' => $lift->name
        // ])

        /*     $lifts = Lift::query()->paginate(10);
            return Inertia::render(
                'Lift/Index', ['lifts' => $lifts]
            ); */

        $lifts = Lift::query()
                     ->when(
                         Request::input('search'), function ($query, $search) {
                         //Request::input('search') == $search
                         $query->where('reg_number', 'like', "%{$search}%");
                     })
                     ->when(
                         Request::input('street'), function ($query, $search) {
                         //Request::input('search') == $search
                         $query->where('address', 'like', "%{$search}%");
                     })
                     ->paginate(100)
                     ->withQueryString();
        //        dd($lifts);
        //        ->through(fn($lift)=>[
        //            'reg_number' => $lift->reg_number
        //        ]);


        return Inertia::render(
            'lift/index', [
            'lifts'   => $lifts,
            'filters' => Request::only(['search', 'street']),
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
            'lift/create', ['liftManagers' => $liftManagers]
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLiftRequest $request)
    {
        $data = $request->validated();
//dd($data);

        $lift = [
            'reg_number'           => $data["regNumber"],
            'lift_manager_id'      => $data["liftManager"],
            'type'                 => $data["type"],
            'category'             => $data["category"],
            'factory_number'       => $data["factoryNumber"],
            'model'                => $data["model"],
            'speed'                => $data["speed"],
            'load'                 => intval($data["load"]),
            'manufacturer'         => $data["manufacturer"],
            'installer'            => $data["installer"],
            'installation_year'    => intval($data["instYear"]),
            'floors_serviced'      => intval($data["floorsServiced"]),
            'address'              => $data["address"],
            'address_city'         => $data["addressCity"],
            'address_country'      => $data["addressCountry"],
            'address_postal_code'  => $data["addressPostalCode"],
            'building_series'      => $data["buildingSeries"],
            'bir_url'              => $data["birUrl"],
            'google_coordinates'   => $data["googleCoordinates"],
            'entry_code'           => $data["entryCode"],
            'inspection_status'    => $data["inspectionStatus"],
            'next_inspection_date' => $data["nextInspectionDate"],
            'notes'                => $data["notes"],
        ];


        $lift['created_by'] = auth()->id();

        Lift::create($lift);


        //        Lift::create($data);
        //         dd($request->all());
        //
        // TODO redirect after lift creation
        /* old
         return to_route('lifts.index');
        // return redirect()->route('lifts.index');
         */
    }

    /**
     * Display the specified resource.
     */
    public function show(Lift $lift)
    {
        $lift_with_inspections = Lift::with('inspections')->find($lift->id);
        //        dd($lift_with_inspections->inspections);
        //        dd($lift_with_inspections);

        return Inertia::render(
            'lift/show', [
                'lift' => $lift_with_inspections,
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
            'lift/edit', ['lift' => $lift, 'liftManagers' => $liftManagers]
        );
    }

    // checklist

    /**
     * Show the form for editing the specified resource.
     */
    public function checklist(Lift $lift)
    {
        $lift_with_inspections = Lift::with('inspections')->find($lift->id);
        //    dd($lift_with_inspections->inspections);
        //    dd($lift_with_inspections);


        $liftManagers = LiftManager::pluck('name', 'id');

        return Inertia::render(
            'lift/checklist/pdf', ['lift' => $lift_with_inspections]
        );
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLiftRequest $request, Lift $lift)
    {
                 $data = $request->validated();
//        dd($data);

        $newLiftData = [
            'reg_number'           => $data["regNumber"],
            'lift_manager_id'      => $data["liftManager"],
            'type'                 => $data["type"],
            'category'             => $data["category"],
            'factory_number'       => $data["factoryNumber"],
            'model'                => $data["model"],
            'speed'                => $data["speed"],
            'load'                 => intval($data["load"]),
            'manufacturer'         => $data["manufacturer"],
            'installer'            => $data["installer"],
            'installation_year'    => intval($data["instYear"]),
            'floors_serviced'      => intval($data["floorsServiced"]),
            'address'              => $data["address"],
            'address_city'         => $data["addressCity"],
            'address_country'      => $data["addressCountry"],
            'address_postal_code'  => $data["addressPostalCode"],
            'building_series'      => $data["buildingSeries"],
            'bir_url'              => $data["birUrl"],
            'google_coordinates'   => $data["googleCoordinates"],
            'entry_code'           => $data["entryCode"],
            'inspection_status'    => $data["inspectionStatus"],
            'next_inspection_date' => $data["nextInspectionDate"],
            'notes'                => $data["notes"],
        ];

        /* old

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
            'address_city'        => $data["addressCity"],
            'address_country'     => $data["addressCountry"],
            'address_postal_code' => $data["addressPostalCode"],
            'lift_manager_id'     => $data["liftManager"],
            'notes'               => $data["notes"],
        ];
//        dd($newLiftData);


         */
        $lift->update($newLiftData);
        return to_route('lifts.show', $lift->id);
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
