<?php

namespace App\Http\Controllers;

use App\Models\Inspection;
use App\Models\Lift;
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
            'Inspection/Index', [
                'inspections' => Inspection::all()
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $lifts = Lift::pluck('reg_number', 'id');

        return Inertia::render(
            'Inspection/Create', ['lifts' => $lifts]
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreInspectionRequest $request)
//    public function store()
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
            'participant_1'        => $data["participant_1"],
            'participant_2'        => $data["participant_2"],
            'non_compliances_0'    => $data["non_compliances_0"],
            'non_compliances_1'    => $data["non_compliances_1"],
            'non_compliances_2'    => $data["non_compliances_2"],
            'non_compliances_3'    => $data["non_compliances_3"],
            'notes'                => $data["notes"],
            'notes_for_protokol'   => $data["notes_for_protokol"],
        ];
        Inspection::create($inspection);
    }

    /**
     * Display the specified resource.
     */
    public function show(Inspection $inspection)
    {
//        dd(json_decode("[\"3.1 Mašīntelpā lūka ir bojāta.\",\"3.1 Mašīntelpā nav 5 cm. apmaļu grīdā ap nesošām trosēm.\",\"3.1 Nav dielektrisko paklāju pie galvenā barošanas slēdža.\",\"3.6 Eļļas noplūde no lifta mašīnas reduktora.\",\"4.1 Lifta kabīnes grīdas segums ir bojāts.\",\"5.3 Palielināta lifta kabīnes un pretsvara brīvkustība vadotnēs (nolietoti vādkurpji).\",\"9.0 Aizsardzības aparāti VA1 un VA3 vadības skapī ir nolietoti.\"]",
//            true));

        return Inertia::render(
            'Inspection/Show', [
                'inspection' => $inspection
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Inspection $inspection)
    {
        {
            return Inertia::render(
                'Lift/Edit'
            );
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateInspectionRequest $request, Inspection $inspection)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Inspection $inspection)
    {
        //
    }
}
