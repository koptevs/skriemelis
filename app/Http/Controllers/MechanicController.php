<?php

namespace App\Http\Controllers;

use App\Models\Mechanic;
use App\Http\Requests\StoreMechanicRequest;
use App\Http\Requests\UpdateMechanicRequest;
use Inertia\Inertia;

class MechanicController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render(
            'mechanic/index', ['mechanics' => Mechanic::all()]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render(
            'mechanic/create'
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMechanicRequest $request)
    {
        $data = $request->validated();

        Mechanic::create($data);

        return to_route('mechanics.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Mechanic $mechanic)
    {
        return Inertia::render(
            'mechanic/show', [
            'mechanic' => $mechanic,
        ],
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Mechanic $mechanic)
    {
        return Inertia::render(
            'mechanic/edit', [
                'mechanic' => $mechanic,
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMechanicRequest $request, Mechanic $mechanic)
    {
        $data = $request->validated();
        //        dd($data);
        $mechanic->update($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Mechanic $mechanic)
    {
        $mechanic->delete();

        return to_route('mechanics.index');
    }

}
