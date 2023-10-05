<?php

namespace App\Http\Controllers;

use App\Models\LiftManager;
use App\Http\Requests\StoreLiftManagerRequest;
use App\Http\Requests\UpdateLiftManagerRequest;
use Inertia\Inertia;

class LiftManagerController extends Controller
{
    public function index()
    {
        $liftManagers = LiftManager::all();

        return Inertia::render(
            'LiftManager/Index', [
            'liftManagers'   => $liftManagers,
        ],
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public
    function create()
    {
        return Inertia::render(
            'LiftManager/Create'
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public
    function store(
        StoreLiftManagerRequest $request
    ) {
        //
    }

    /**
     * Display the specified resource.
     */
    public
    function show(
        LiftManager $liftManager
    ) {
        return Inertia::render(
            'LiftManager/Show'
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public
    function edit(
        LiftManager $liftManager
    ) {
        return Inertia::render(
            'LiftManager/Edit'
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public
    function update(
        UpdateLiftManagerRequest $request,
        LiftManager $liftManager
    ) {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public
    function destroy(
        LiftManager $liftManager
    ) {
        //
    }
}
