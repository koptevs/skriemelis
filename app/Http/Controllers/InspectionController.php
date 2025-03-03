<?php

namespace App\Http\Controllers;

use App\Models\Inspection;
use App\Models\Lift;
use App\Models\Mechanic;
use App\Models\LiftManager;

use App\Http\Requests\StoreInspectionRequest;
use App\Http\Requests\UpdateInspectionRequest;

use Illuminate\Support\Facades\Request;

use Inertia\Inertia;

class InspectionController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render(
            'inspection/index', [
                'inspections' => Inspection::with('lift')->get(),
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $lifts     = Lift::pluck('reg_number', 'id');
        $mechanics = Mechanic::select('id', 'name', 'company')
                             ->get()
                             ->toArray();
        $managers  = LiftManager::select('id', 'name')->get()->toArray();

        return Inertia::render(
            'inspection/create',
            [
                'lifts'     => $lifts,
                'mechanics' => $mechanics,
                'managers'  => $managers,
            ]
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreInspectionRequest $request)
    {
        //        dd($request);
        //        dd(strtotime('2023-10-24'));
        $data = $request->validated();
        //        dd($data);
        $inspection = [
            'protocol_number'      => $data["protocol_number"],
            'lift_id'              => intval($data["lift_id"]),
            'inspection_type'      => $data["inspection_type"],
            'inspection_next_type' => $data["inspection_next_type"],
            'expert'               => $data["expert"],
            'date_start'           => $data["date_start"],
            'date_end'             => $data["date_end"],
            'date_next'            => $data["date_next"],
            'date_next_normal'     => $data["date_next_normal"],
            'label'                => $data["label"],
            'bir_number'           => $data["bir_number"],
            'inspection_result'    => $data["inspection_result"],
            'participants'         => $data["participants"] ? $data["participants"] : null,
            'lift_manager'         => $data["lift_manager"],
            'non_compliances_0'    => $data["non_compliances_0"],
            'non_compliances_1'    => $data["non_compliances_1"],
            'non_compliances_2'    => $data["non_compliances_2"],
            'non_compliances_3'    => $data["non_compliances_3"],
            'notes'                => $data["notes"],
            'notes_for_protokol'   => $data["notes_for_protokol"],
            'extra_check_reason'   => $data["extra_check_reason"],
            'not_checked_forced'   => $data["not_checked_forced"],
        ];
        Inspection::create($inspection);
    }

    /**
     * Display the specified resource.
     */
    public function show(Inspection $inspection)
    {
        //        dd($inspection->lift_id);
        //        dd(json_decode("[\"3.1 Mašīntelpā lūka ir bojāta.\",\"3.1 Mašīntelpā nav 5 cm. apmaļu grīdā ap nesošām trosēm.\",\"3.1 Nav dielektrisko paklāju pie galvenā barošanas slēdža.\",\"3.6 Eļļas noplūde no lifta mašīnas reduktora.\",\"4.1 Lifta kabīnes grīdas segums ir bojāts.\",\"5.3 Palielināta lifta kabīnes un pretsvara brīvkustība vadotnēs (nolietoti vādkurpji).\",\"9.0 Aizsardzības aparāti VA1 un VA3 vadības skapī ir nolietoti.\"]",
        //            true));

        return Inertia::render(
            'inspection/show', [
                'inspection' => $inspection,
                'lift'       => Lift::find($inspection->lift_id),
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Inspection $inspection)
    {
        $lifts     = Lift::pluck('reg_number', 'id');
        $mechanics = Mechanic::select('id', 'name', 'company')
                             ->get()
                             ->toArray();
        $managers  = LiftManager::select('id', 'name')->get()->toArray();
        //dd(json_decode($inspection['participants']));
        $first_participant = json_decode($inspection['participants']) ? Mechanic::find(json_decode($inspection['participants'])[0]) : '';

        return Inertia::render(
            'inspection/edit', [
                'inspection'         => $inspection,
                'currentLift'        => $inspection->lift()->get(),
                'currentLiftManager' => LiftManager::find($inspection['lift_manager']),
                'currentMechanic'    => $first_participant,
                'allLifts'           => $lifts,
                'allMechanics'       => $mechanics,
                'allManagers'        => $managers,
                //            'mechanic'     => Mechanic::find($inspection['participant_1'])->select('id', 'name', 'company')->get()
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function protocol(Inspection $inspection)
    {
        //    dd($inspection->lift()->get());
        //        dd($inspection);
        return Inertia::render(

            'inspection/protocol/pdf',
            [
                'inspection'   => $inspection,
                'lift'         => $inspection->lift()->get(),
                'lift_manager' => LiftManager::find($inspection['lift_manager']),
                'mechanic'     => Mechanic::find($inspection['participant_1']),
                //            'mechanic'     => Mechanic::find($inspection['participant_1'])->select('id', 'name', 'company')->get(),
            ]
        );
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(
        UpdateInspectionRequest $request,
        Inspection $inspection
    ) {
        $data = $request->validated();

        $newInspectionData = [
            'protocol_number'      => $data["protocol_number"],
            'lift_id'              => intval($data["lift_id"]),
            'inspection_type'      => $data["inspection_type"],
            'inspection_next_type' => $data["inspection_next_type"],
            'expert'               => $data["expert"],
            'date_start'           => $data["date_start"],
            'date_end'             => $data["date_end"],
            'date_next'            => $data["date_next"],
            'date_next_normal'     => $data["date_next_normal"],
            'label'                => $data["label"],
            'bir_number'           => $data["bir_number"],
            'inspection_result'    => $data["inspection_result"],
            'participants'         => $data["participants"] ? $data["participants"] : null,
            'lift_manager'         => $data["lift_manager"],
            'non_compliances_0'    => $data["non_compliances_0"],
            'non_compliances_1'    => $data["non_compliances_1"],
            'non_compliances_2'    => $data["non_compliances_2"],
            'non_compliances_3'    => $data["non_compliances_3"],
            'notes'                => $data["notes"],
            'notes_for_protokol'   => $data["notes_for_protokol"],
            'extra_check_reason'   => $data["extra_check_reason"],
            'not_checked_forced'   => $data["not_checked_forced"],
        ];
        // dd($newInspectionData);
        $inspection->update($newInspectionData);

        return to_route('inspections.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Inspection $inspection)
    {
        //
    }

}
