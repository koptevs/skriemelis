import * as React from "react";

import {
    Head,
    Link,
    router,
    usePage,
    useForm as inertiaUseForm,
} from "@inertiajs/react";

import dayjs from "dayjs";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import { useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import DatePickerWithAlert from "@/Shared/DatePickerWithAlert";

import Layout from "../AdminPanel/Layout";

import CheckboxWithImage from "@/Shared/CheckboxWithImage";

import ZvansNedarbojas from "./Fields/ZvansNedarbojas";
import VadibasAparatsNolietots from "./Fields/VadibasAparatsNolietots";
import StopBedreNestandarts from "./Fields/StopBedreNestandarts";
import StopBedreNedarbojas from "./Fields/StopBedreNedarbojas";
import NostiepejsNolietots from "./Fields/NostiepejsNolietots";
import NostiepejaSledzisNedarbojas from "./Fields/NostiepejaSledzisNedarbojas";
import PretsvarsBuferisAttalumsNepietiek from "./Fields/PretsvarsBuferisAttalumsNepietiek";
import PretsvaraBrivkustiba from "./Fields/PretsvaraBrivkustiba";
import KabinesBrivkustiba from "./Fields/KabinesBrivkustiba";
import KabinesUnPretsvaraBrivkustiba from "./Fields/KabinesUnPretsvaraBrivkustiba";
import AtsperesPretsvaraNolietotas from "./Fields/AtsperesPretsvaraNolietotas";
import PretsvaraVadkurpesNolietotas from "./Fields/PretsvaraVadkurpesNolietotas";
import KabinesVadkurpesNolietotas from "./Fields/KabinesVadkurpesNolietotas";
import KabinesUnPretsvaraVadkurpesNolietotas from "./Fields/KabinesUnPretsvaraVadkurpesNolietotas";
import ApdareKabineBojata from "./Fields/ApdareKabineBojata";
import ApdareKabineNolietota from "./Fields/ApdareKabineNolietota";
import GridaKabineBojata from "./Fields/GridaKabineBojata";
import GridaKabineNolietota from "./Fields/GridaKabineNolietota";
import GriestiKabineBojati from "./Fields/GriestiKabineBojati";
import GriestiKabineNolietoti from "./Fields/GriestiKabineNolietoti";
import KabinesDurvisBojatas from "./Fields/KabinesDurvisBojatas";
import KabinesDASprauga from "./Fields/KabinesDASprauga";
import ReverseNedarbojas from "./Fields/ReverseNedarbojas";
import ApgaismojumsKabineNepietiek from "./Fields/ApgaismojumsKabineNepietiek";
import KabinesDurvisVarAtvert from "./Fields/KabinesDurvisVarAtvert";
import BridinajumaDurvimNav from "./Fields/BridinajumaDurvimNav";
import BridinajumaLukaiNav from "./Fields/BridinajumaLukaiNav";
import LukaBojata from "./Fields/LukaBojata";
import EllasNoplude from "./Fields/EllasNoplude";
import ReduktorsNolietotsUnEllasNoplude from "./Fields/ReduktorsNolietotsUnEllasNoplude";
import ApgaismojumsMasintelpaNepietiek from "./Fields/ApgaismojumsMasintelpaNepietiek";
import ApgaismojumsSahtaNepietiek from "./Fields/ApgaismojumsSahtaNepietiek";
import ApgaismojumsMasintelpaUnSahtalpaNepietiek from "./Fields/ApgaismojumsMasintelpaUnSahtalpaNepietiek";
import ApmalesApNesosamTrosemNav from "./Fields/ApmalesApNesosamTrosemNav";
import ApmalesApAITrosemNav from "./Fields/ApmalesApAITrosemNav";
import ApmalesApNesosamUnAITrosemNav from "./Fields/ApmalesApNesosamUnAITrosemNav";
import PaklajuPieGalvSledzaNav from "./Fields/PaklajuPieGalvSledzaNav";
import PaklajuPieNKUNav from "./Fields/PaklajuPieNKUNav";
import PaklajuPieGalvSledzaUnNKUNav from "./Fields/PaklajuPieGalvSledzaUnNKUNav";
import NesosoTrosuNodilums from "./Fields/NesosoTrosuNodilums";
import AprikojumsMasintelpa from "./Fields/AprikojumsMasintelpa";
import PrieksmetiMasintelpa from "./Fields/PrieksmetiMasintelpa";
import AprikojumsUnPrieksmetiMasintelpa from "./Fields/AprikojumsUnPrieksmetiMasintelpa";
import AINolietots from "./Fields/AINolietots";
import AITroseNolietota from "./Fields/AITroseNolietota";
import AIUnTroseNolietoti from "./Fields/AIUnTroseNolietoti";
import AtsperesBremzuNolietotas from "./Fields/AtsperesBremzuNolietotas";
import UzlikasBremzuNolietotas from "./Fields/UzlikasBremzuNolietotas";
import VadskriemelaNodilums from "./Fields/VadskriemelaNodilums";
import VadskriemelaNevienmerigsNodilums from "./Fields/VadskriemelaNevienmerigsNodilums";
import NKUAprikojumsNolietots from "./Fields/NKUAprikojumsNolietots";
import NKUAizsardzibasAutomatiNolietoti from "./Fields/NKUAizsardzibasAutomatiNolietoti";
import NKUKontaktoriNolietoti from "./Fields/NKUKontaktoriNolietoti";
import NKUAizsardzibasAutomatiUnKontaktoriNolietoti from "./Fields/NKUAizsardzibasAutomatiUnKontaktoriNolietoti";
import NKUAizsardzibasAutomatsVA1Nolietots from "./Fields/NKUAizsardzibasAutomatsVA1Nolietots";
import NKUAizsardzibasAutomatsVA2Nolietots from "./Fields/NKUAizsardzibasAutomatsVA2Nolietots";
import NKUAizsardzibasAutomatsVA3Nolietots from "./Fields/NKUAizsardzibasAutomatsVA3Nolietots";
import NKUAizsardzibasAutomatiVA1UnVA2Nolietoti from "./Fields/NKUAizsardzibasAutomatiVA1UnVA2Nolietoti";
import NKUAizsardzibasAutomatiVA1UnVA3Nolietoti from "./Fields/NKUAizsardzibasAutomatiVA1UnVA3Nolietoti";
import NKUAizsardzibasAutomatiVA2UnVA3Nolietoti from "./Fields/NKUAizsardzibasAutomatiVA2UnVA3Nolietoti";
import RevizijaNedarbojas from "./Fields/RevizijaNedarbojas";
import RevizijasStopNedarbojas from "./Fields/RevizijasStopNedarbojas";
import RevizijasNav from "./Fields/RevizijasNav";
import StopJumtaNedarbojas from "./Fields/StopJumtaNedarbojas";

export default function Create({ lifts, auth, mechanics, managers, page }) {
    const [nonCompliances0, setNonCompliances0] = React.useState([]);
    const [nonCompliances1, setNonCompliances1] = React.useState([]);
    const [nonCompliances2, setNonCompliances2] = React.useState([]);
    const [nonCompliances3, setNonCompliances3] = React.useState([]);
    const [cleared, setCleared] = React.useState(false);

    const liftsArray = Object.entries(lifts).map(function (entry) {
        return {
            id: entry[0],
            label: `${entry[1]}`,
        };
    });

    const mechanicsArray = mechanics.map((entry) => ({
        id: entry.id,
        label: `${entry.name} - ${entry.company}`,
    }));
    const managersArray = managers.map((entry) => ({
        id: entry.id,
        name: `${entry.id} - ${entry.name}`,
    }));

    const {
        register,
        control,
        handleSubmit,
        formState,
        setValue,
        watch,
        getValues,
        reset,
    } = useForm({
        defaultValues: {
            inspectionDateStart: dayjs(),
            inspectionDateEnd: dayjs(),
            inspectionDateNext: dayjs(),
            inspectionDateNextNormal: dayjs().add(1, "year"),
            inspectionType: "kārtējā",
            inspectionNextType: "kārtējā",
            // protocolNumber: "04.45/518-23/02",
            // liftId: "4CL013877",
            nonCompliances1: [],
            nonCompliances2: [],
            nonCompliances3: [],
            notes: "",
        },
    });

    const watchAllFields = watch();

    const { errors } = formState;
    const { errors: inertiaErrors } = usePage().props;

    const onSubmit = (data) => {
        let extraCheckReasonEnterString = "";
        if (data.inspectionType === "atkārtotā") {
            extraCheckReasonEnterString = "Atkārtotās pārbaudes iemesls:";
        } else if (data.inspectionType === "ārpuskārtas") {
            extraCheckReasonEnterString = "Ārpuskārtas pārbaudes iemesls:";
        }

        const extraCheckReason = [];
        if (data.inspectionType !== "kārtējā") {
            extraCheckReason.push(extraCheckReasonEnterString);

            if (data.inspectionType === "ārpuskārtas") {
                if (data.pacelsanasMehanismaNomaina) {
                    extraCheckReason.push(
                        "lifta pacelšanas mehānisma nomaiņa."
                    );
                    extraCheckReason.push(
                        "Mehānisms tika slogots ar slodzi +25% no nominālas un atbilst prasībām."
                    );
                }
                if (data.atrumaIerobezotajaNomaina) {
                    extraCheckReason.push("ātruma ierobežotāja nomaņia.");
                }
                nonCompliances0.push("test");
                // data.vertZero !== "" ? data.vertZero.split("\n") : [];
            }
            if (data.inspectionType === "atkārtotā") {
                if (data.NovNeatb2) {
                    extraCheckReason.push(
                        "Noverstas kārtējās pārbaudes neatbilstības ar vērtējumu 2:"
                    );
                }
                if (data.NovNeatb3) {
                    extraCheckReason.push(
                        "Noverstas kārtējās pārbaudes neatbilstības ar vērtējumu 3:"
                    );
                }
            }
            if (data.extraCheckReasonTextField !== "") {
                extraCheckReason.push(data.extraCheckReasonTextField);
            }
        }

        const notCheckedForced = [];
        if (data.inspectionType !== "kārtējā") {
            if (data.pacelsanasMehanismaNomaina) {
                notCheckedForced.push(
                    `1.1 Lifta atbilstības deklarācija.\n1.2 Lifta atbilstības sertifikāts.\n1.3 Lifta lietošanas dokumentācija.\n1.4 Brīdinājumi, apzimējumi un informācija par lifta lietošanu.\n3.2 Ātruma ierobežotājs un ķērājierīce elektriskajiem liftiem.\n3.3 Augšupejošas kabīnes ātruma ierobežošanas ierīce.\n3.4 Vadības ierīces.\n3.5 Gala slēdži.\n3.7 Trauksmes ierīce ārkārtas gadījumos.\n3.8 Darbināšana ārkārtas gadījumos.\n3.9 Lifta apstadināšanas ierīces.\n4.1 Lifta kabīne.\n4.2 Celtspējas kontroles ierīce.\n5.1 Šahtas atbilstība.\n5.2 Šahtas nožogojumi.\n5.3 Vadotnes un metālkonstrukcija.\n5.4 Lifta buferi.\n5.5 Pretsvars un kabīnes jumts.\n6.1 Hidraulisko liftu drošības ierīces.\n6.2 Lifta hidrauliskās sistēmas cauruļvadi.\n7.1 Šahtas un kabīnes durvis.\n7.2 Durvju slēgšanas un drošības ierīces.\n8.0 Apgaismojumi.\n9.0 Elektriskās iekārtas un ietaises.`
                );
            }
            if (data.atrumaIerobezotajaNomaina) {
                notCheckedForced.push(
                    `1.1 Lifta atbilstības deklarācija.\n1.2 Lifta atbilstības sertifikāts.\n1.3 Lifta lietošanas dokumentācija.\n2.1 Trošu, siksnu nostiepuma kontrole.\n2.2 Lifta piekāre un tās elementi.\n1.4 Brīdinājumi, apzimējumi un informācija par lifta lietošanu.\n3.1 Mašīntelpa un trīšu telpas.\n3.3 Augšupejošas kabīnes ātruma ierobežošanas ierīce.\n3.4 Vadības ierīces.\n3.5 Gala slēdži.\n3.6 Lifta mašīna.\n3.7 Trauksmes ierīce ārkārtas gadījumos.\n3.8 Darbināšana ārkārtas gadījumos.\n3.9 Lifta apstadināšanas ierīces.\n4.1 Lifta kabīne.\n4.2 Celtspējas kontroles ierīce.\n4.3 Lifta kabīnes līmeņošanas un apstāšanas precizitāte\n5.1 Šahtas atbilstība.\n5.2 Šahtas nožogojumi.\n5.3 Vadotnes un metālkonstrukcija.\n5.4 Lifta buferi.\n5.5 Pretsvars un kabīnes jumts.\n6.1 Hidraulisko liftu drošības ierīces.\n6.2 Lifta hidrauliskās sistēmas cauruļvadi.\n7.1 Šahtas un kabīnes durvis.\n7.2 Durvju slēgšanas un drošības ierīces.\n8.0 Apgaismojumi.\n9.0 Elektriskās iekārtas un ietaises.`
                );
            }
        }
        // NovNeatb2
        // NovNeatb3

        const dataToSent = {
            protocol_number: data.protocolNumber,
            lift_id: data.liftId,
            inspection_type: data.inspectionType,
            inspection_next_type: data.inspectionNextType,
            expert: auth.user.expert_number,
            date_start: data.inspectionDateStart.format("YYYY-MM-DD"),
            date_end: data.inspectionDateEnd.format("YYYY-MM-DD"),
            date_next: data.inspectionDateNext.format("YYYY-MM-DD"),
            date_next_normal:
                data.inspectionDateNextNormal.format("YYYY-MM-DD"),
            label: data.label,
            bir_number: data.birNumber,
            inspection_result: "",
            participant_1: data.participant1Id ? data.participant1Id : null,
            participant_2: data.participant2Id ? data.participant2Id : null,
            lift_manager: data.manager,
            non_compliances_0: nonCompliances0.length
                ? JSON.stringify(nonCompliances0)
                : JSON.stringify([]),
            non_compliances_1: !!nonCompliances1.length
                ? // ? nonCompliances1.join(" ")
                  JSON.stringify(nonCompliances1)
                : JSON.stringify([]),
            non_compliances_2: !!nonCompliances2.length
                ? // ? nonCompliances2.join(" ")
                  JSON.stringify(nonCompliances2)
                : JSON.stringify([]),
            non_compliances_3: !!nonCompliances3.length
                ? // ? nonCompliances3.join(" ")
                  JSON.stringify(nonCompliances3)
                : JSON.stringify([]),
            // extra_check_reason: JSON.stringify([]),
            extra_check_reason: JSON.stringify(extraCheckReason),

            not_checked_forced: JSON.stringify(notCheckedForced),
            notes: data.notes ? data.notes : "",
            notes_for_protokol: data.notes_for_protokol
                ? data.notes_for_protokol
                : "",
        };
        console.log(dataToSent);

        // router.post(route("inspections.store"));
        // router.post(route("inspections.store"), data);
        router.post(route("inspections.store"), dataToSent);
    };

    const objectWithNotesToArrayOfStrings = (someObject) => {
        const filtered = Object.entries(someObject).filter(
            // only checked-true pass and notes if not empty
            ([key, value]) => !!value === true
        );
        const notesArray = filtered.filter((item) => item[0] === "notes");
        const notesValue = notesArray[0] //undefined if empty array
            ? notesArray[0][1].split("\n")
            : null;
        const filteredWithoutNotes = filtered.filter(
            (item) => item[0] !== "notes"
        );
        const reduced = filteredWithoutNotes.map((item) =>
            item[0].replace(/%%%/g, ".")
        );
        const reducedWithNotes = notesValue
            ? reduced.concat(notesValue).sort()
            : reduced.sort();
        return reducedWithNotes;
    };

    React.useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            // console.log("Watch", value.vertZero);
            setNonCompliances0(() =>
                value.vertZero ? value.vertZero.split("\n") : []
            );
            setNonCompliances1(() =>
                objectWithNotesToArrayOfStrings(value.nonCompliances1)
            );
            setNonCompliances2(() =>
                objectWithNotesToArrayOfStrings(value.nonCompliances2)
            );
            setNonCompliances3(() =>
                objectWithNotesToArrayOfStrings(value.nonCompliances3)
            );
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    React.useEffect(() => {
        if (cleared) {
            const timeout = setTimeout(() => {
                setCleared(false);
            }, 1500);

            return () => clearTimeout(timeout);
        }
        return () => {};
    }, [cleared]);

    return (
        <Layout>
            <Head title="Create new inspection" />
            <div className="flex justify-between">
                <h1>Create new inspection</h1>
                <Button
                    size="small"
                    variant="contained"
                    color="info"
                    className="h-8 mt-4 tracking-widest"
                >
                    Clear all fields
                </Button>
            </div>
            {Object.keys(inertiaErrors).length !== 0 && (
                <span style={{ color: "red", fontSize: "18px" }}>
                    {JSON.stringify(inertiaErrors, 2, 2)}
                </span>
            )}
            <Box
                className="flex flex-wrap space-y-2"
                component="form"
                sx={{
                    py: 1,
                    "& .MuiTextField-root": {
                        // width: "200px",
                    },
                }}
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                // autoComplete="off"
                // className="space-y-4"
            >
                {" "}
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={2}>
                        <TextField
                            size="small"
                            label="Protokol. Nr."
                            fullWidth
                            // autoComplete
                            helperText={errors.protocolNumber?.message}
                            {...register("protocolNumber", {
                                required: {
                                    value: true,
                                    message: "Protocol number is required.",
                                },
                            })}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    fontSize: "12px",
                                    color: "red",
                                },
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={2}>
                        <Controller
                            control={control}
                            name="liftId"
                            rules={{
                                required: {
                                    value: true,
                                    message:
                                        "Lift registration number is required.",
                                },
                            }}
                            render={({ field, fieldState: { error } }) => {
                                const { onChange, value, ref } = field;
                                return (
                                    <>
                                        <Autocomplete
                                            id="liftId"
                                            // disablePortal
                                            clearOnEscape
                                            options={liftsArray}
                                            // sx={{ width: 200 }}
                                            fullWidth
                                            autoHighlight
                                            value={
                                                value
                                                    ? liftsArray.find(
                                                          (option) => {
                                                              return (
                                                                  value ===
                                                                  option.id
                                                              );
                                                          }
                                                      ) ?? null
                                                    : null
                                            }
                                            onChange={(event, newValue) => {
                                                onChange(
                                                    newValue
                                                        ? newValue.id
                                                        : null
                                                );
                                            }}
                                            getOptionLabel={(option) => {
                                                return option.label;
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Lift BIR Reg. Nr."
                                                    fullWidth
                                                    size="small"
                                                    helperText={
                                                        errors.liftId?.message
                                                    }
                                                    sx={{
                                                        "& .MuiFormHelperText-root":
                                                            {
                                                                fontSize:
                                                                    "12px",
                                                                color: "red",
                                                            },
                                                    }}
                                                />
                                            )}
                                        />
                                    </>
                                );
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <TextField
                            size="small"
                            label="Label"
                            fullWidth
                            // autoComplete
                            helperText={errors.label?.message}
                            {...register("label", {
                                required: {
                                    value: true,
                                    message: "Label is required.",
                                },
                            })}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    fontSize: "12px",
                                    color: "red",
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <TextField
                            size="small"
                            label="BIR Reg"
                            fullWidth
                            // autoComplete
                            helperText={errors.birNumber?.message}
                            {...register("birNumber", {
                                // required: {
                                //     value: true,
                                //     message: "Label is required.",
                                // },
                            })}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    color: "red",
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl
                            component="fieldset"
                            // fullWidth
                        >
                            <FormLabel
                                component="legend"
                                id="demo-row-radio-buttons-group-label"
                                className="font-bold ml-3"
                            >
                                Pārbaudes veids
                            </FormLabel>

                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                sx={{
                                    "& .MuiButtonBase-root": {
                                        padding: 0,
                                    },
                                }}
                            >
                                <FormControlLabel
                                    labelPlacement="top"
                                    value="kārtējā"
                                    control={
                                        <Radio
                                            {...register("inspectionType")}
                                            size="small"
                                        />
                                    }
                                    label="Kārtējā"
                                    checked={
                                        getValues("inspectionType") ===
                                            "kārtējā" ||
                                        getValues("inspectionType") === null
                                    }
                                />
                                <FormControlLabel
                                    labelPlacement="top"
                                    value="atkārtotā"
                                    control={
                                        <Radio
                                            checked={
                                                getValues("inspectionType") ===
                                                "atkārtotā"
                                            }
                                            color="secondary"
                                            size="small"
                                            {...register("inspectionType")}
                                            // sx={{
                                            //     "& .MuiSvgIcon-root": {
                                            //         fontSize: 12,
                                            //     },
                                            // }}
                                        />
                                    }
                                    label="Atkārtotā"
                                />
                                <FormControlLabel
                                    labelPlacement="top"
                                    value="ārpuskārtas"
                                    control={
                                        <Radio
                                            {...register("inspectionType")}
                                            size="small"
                                        />
                                    }
                                    label="Arpuskārtas"
                                    checked={
                                        getValues("inspectionType") ===
                                        "ārpuskārtas"
                                    }
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={4} md={2}>
                        <DatePickerWithAlert
                            // className="w-64"
                            control={control}
                            name="inspectionDateStart"
                            label="Pārbaudes sākums"
                            defaultValue={dayjs()}
                            // noalert
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} md={2}>
                        <DatePickerWithAlert
                            // className="w-64"
                            control={control}
                            name="inspectionDateEnd"
                            label="Pārbaudes beigums"
                            defaultValue={dayjs()}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} md={2}>
                        <DatePickerWithAlert
                            // className="w-64"
                            control={control}
                            name="inspectionDateNext"
                            label="Nākamā pārbaude"
                            defaultValue={dayjs().add(1, "year")}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} md={2}>
                        <DatePickerWithAlert
                            // className="w-64"
                            control={control}
                            name="inspectionDateNextNormal"
                            label="Nākamā normāla pārbaude"
                            defaultValue={dayjs().add(1, "year")}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl
                            component="fieldset"
                            // fullWidth
                        >
                            <FormLabel
                                component="legend"
                                id="demo-row-radio-buttons-group-label"
                                className="font-bold ml-3"
                            >
                                Nakamās pārbaudes veids
                            </FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                sx={{
                                    "& .MuiButtonBase-root": {
                                        padding: 0,
                                    },
                                }}
                            >
                                <FormControlLabel
                                    labelPlacement="top"
                                    value="kārtējā"
                                    control={
                                        <Radio
                                            {...register("inspectionNextType")}
                                            size="small"
                                        />
                                    }
                                    label="Kārtējā"
                                    checked={
                                        getValues("inspectionNextType") ===
                                            "kārtējā" ||
                                        getValues("inspectionNextType") === null
                                    }
                                />
                                <FormControlLabel
                                    labelPlacement="top"
                                    value="atkārtotā"
                                    control={
                                        <Radio
                                            checked={
                                                getValues(
                                                    "inspectionNextType"
                                                ) === "atkārtotā"
                                            }
                                            color="secondary"
                                            size="small"
                                            {...register("inspectionNextType")}
                                            // sx={{
                                            //     "& .MuiSvgIcon-root": {
                                            //         fontSize: 12,
                                            //     },
                                            // }}
                                        />
                                    }
                                    label="Atkārtotā"
                                />
                                <FormControlLabel
                                    labelPlacement="top"
                                    value="ārpuskārtas"
                                    control={
                                        <Radio
                                            {...register("inspectionNextType")}
                                            size="small"
                                        />
                                    }
                                    label="Arpuskārtas"
                                    checked={
                                        getValues("inspectionNextType") ===
                                        "ārpuskārtas"
                                    }
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    {/* {JSON.stringify(mechanicsArray, 2, 2)} */}
                    <Grid item xs={12} sm={4}>
                        <Controller
                            control={control}
                            name="participant1Id"
                            // rules={{
                            //     required: {
                            //         value: true,
                            //         message:
                            //             "Lift registration number is required.",
                            //     },
                            // }}
                            render={({ field, fieldState: { error } }) => {
                                const { onChange, value, ref } = field;
                                return (
                                    <>
                                        <Autocomplete
                                            id="participant1Id"
                                            // disablePortal
                                            clearOnEscape
                                            options={mechanicsArray}
                                            // sx={{ width: 200 }}
                                            fullWidth
                                            autoHighlight
                                            value={
                                                value
                                                    ? mechanicsArray.find(
                                                          (option) => {
                                                              return (
                                                                  value ===
                                                                  option.id
                                                              );
                                                          }
                                                      ) ?? null
                                                    : null
                                            }
                                            onChange={(event, newValue) => {
                                                onChange(
                                                    newValue
                                                        ? newValue.id
                                                        : null
                                                );
                                            }}
                                            getOptionLabel={(option) => {
                                                return option.label;
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Participant 1"
                                                    fullWidth
                                                    size="small"
                                                    helperText={
                                                        errors.participant1Id
                                                            ?.message
                                                    }
                                                    sx={{
                                                        "& .MuiFormHelperText-root":
                                                            {
                                                                fontSize:
                                                                    "12px",
                                                                color: "red",
                                                            },
                                                    }}
                                                />
                                            )}
                                        />
                                    </>
                                );
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Controller
                            control={control}
                            name="participant2Id"
                            // rules={{
                            //     required: {
                            //         value: true,
                            //         message:
                            //             "Lift registration number is required.",
                            //     },
                            // }}
                            render={({ field, fieldState: { error } }) => {
                                const { onChange, value, ref } = field;
                                return (
                                    <>
                                        <Autocomplete
                                            id="participant2Id"
                                            // disablePortal
                                            clearOnEscape
                                            options={mechanicsArray}
                                            // sx={{ width: 200 }}
                                            fullWidth
                                            autoHighlight
                                            value={
                                                value
                                                    ? mechanicsArray.find(
                                                          (option) => {
                                                              return (
                                                                  value ===
                                                                  option.id
                                                              );
                                                          }
                                                      ) ?? null
                                                    : null
                                            }
                                            onChange={(event, newValue) => {
                                                onChange(
                                                    newValue
                                                        ? newValue.id
                                                        : null
                                                );
                                            }}
                                            getOptionLabel={(option) => {
                                                return option.label;
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Participant 2"
                                                    fullWidth
                                                    size="small"
                                                    helperText={
                                                        errors.participant2Id
                                                            ?.message
                                                    }
                                                    sx={{
                                                        "& .MuiFormHelperText-root":
                                                            {
                                                                fontSize:
                                                                    "12px",
                                                                color: "red",
                                                            },
                                                    }}
                                                />
                                            )}
                                        />
                                    </>
                                );
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Controller
                            control={control}
                            name="manager"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Lift Manager is required.",
                                },
                            }}
                            render={({ field, fieldState: { error } }) => {
                                const { onChange, value, ref } = field;
                                return (
                                    <>
                                        <Autocomplete
                                            id="manager"
                                            // disablePortal
                                            clearOnEscape
                                            options={managersArray}
                                            // sx={{ width: 200 }}
                                            fullWidth
                                            autoHighlight
                                            value={
                                                value
                                                    ? managersArray.find(
                                                          (option) => {
                                                              return (
                                                                  value ===
                                                                  option.id
                                                              );
                                                          }
                                                      ) ?? null
                                                    : null
                                            }
                                            onChange={(event, newValue) => {
                                                onChange(
                                                    newValue
                                                        ? newValue.id
                                                        : null
                                                );
                                            }}
                                            getOptionLabel={(option) => {
                                                return option.name;
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Lift Manager"
                                                    fullWidth
                                                    size="small"
                                                    helperText={
                                                        errors.manager?.message
                                                    }
                                                    sx={{
                                                        "& .MuiFormHelperText-root":
                                                            {
                                                                fontSize:
                                                                    "12px",
                                                                color: "red",
                                                            },
                                                    }}
                                                />
                                            )}
                                        />
                                    </>
                                );
                            }}
                        />
                    </Grid>
                </Grid>
                {(getValues("inspectionType") === "atkārtotā" ||
                    getValues("inspectionType") === "ārpuskārtas") && (
                    <div className=" w-full pl-2 py-1">
                        <Typography
                            variant="h5"
                            className="font-bold  text-slate-600 tracking-wider"
                        >
                            {getValues("inspectionType") === "atkārtotā"
                                ? "Atkārtotas pārbaudes iemesls"
                                : "Ārpuskārtas pārbaudes iemesls"}
                        </Typography>
                        {getValues("inspectionType") === "atkārtotā" && (
                            <>
                                <FormControlLabel
                                    control={
                                        <Controller
                                            name="NovNeatb2"
                                            control={control}
                                            render={({ field: props }) => (
                                                <Checkbox
                                                    className={`font-bold`}
                                                    {...props}
                                                />
                                            )}
                                        />
                                    }
                                    label="Noverstas kārtējās pārbaudes neatbilstības ar vērtējumu 2"
                                />
                                <FormControlLabel
                                    control={
                                        <Controller
                                            name="NovNeatb3"
                                            control={control}
                                            render={({ field: props }) => (
                                                <Checkbox
                                                    className={`font-bold`}
                                                    {...props}
                                                />
                                            )}
                                        />
                                    }
                                    label="Noverstas kārtējās pārbaudes neatbilstības ar vērtējumu 3"
                                />
                            </>
                        )}
                        {getValues("inspectionType") === "ārpuskārtas" && (
                            <>
                                <FormControlLabel
                                    // className="hidden"
                                    control={
                                        <Controller
                                            name="pacelsanasMehanismaNomaina"
                                            control={control}
                                            render={({ field: props }) => (
                                                <Checkbox
                                                    className={`font-bold`}
                                                    {...props}
                                                    // checked={props.value}
                                                    // onChange={(e) =>
                                                    //     props.onChange(e.target.checked)
                                                    // }
                                                />
                                            )}
                                        />
                                    }
                                    label="Pacelšanas mehānisma nomaiņa (noslogots ar 25%)"
                                />
                                <FormControlLabel
                                    control={
                                        <Controller
                                            name="atrumaIerobezotajaNomaina"
                                            control={control}
                                            render={({ field: props }) => (
                                                <Checkbox
                                                    className={`font-bold`}
                                                    {...props}
                                                    // checked={props.value}
                                                    // onChange={(e) =>
                                                    //     props.onChange(e.target.checked)
                                                    // }
                                                />
                                            )}
                                        />
                                    }
                                    label="Ātruma ierobežotāja nomaņia"
                                />
                            </>
                        )}

                        <TextField
                            multiline
                            rows={4}
                            size="small"
                            label={
                                getValues("inspectionType") === "atkārtotā"
                                    ? "Atkārtotas pārbaudes iemesls"
                                    : "Ārpuskārtas pārbaudes iemesls"
                            }
                            fullWidth
                            // autoComplete
                            helperText={errors.notes?.message}
                            {...register("extraCheckReasonTextField")}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    color: "red",
                                },
                                "& .MuiInputLabel-root": {
                                    // marginTop: "-0.3em",
                                    // padding: "5px",
                                    // fontSize: "16px",
                                    // backgroundColor: "white",
                                },
                            }}
                        />

                        {getValues("inspectionType") === "atkārtotā" && (
                            <TextField
                                multiline
                                rows={4}
                                size="small"
                                label="Vertējums 0"
                                fullWidth
                                // autoComplete
                                // helperText={errors.notes?.message}
                                {...register("vertZero")}
                                sx={{
                                    marginTop: "1em",
                                    "& .MuiFormHelperText-root": {
                                        color: "red",
                                    },
                                    "& .MuiInputLabel-root": {
                                        // marginTop: "-0.3em",
                                        // padding: "5px",
                                        // fontSize: "16px",
                                        // backgroundColor: "white",
                                    },
                                }}
                            />
                        )}
                    </div>
                )}
                <div className="bg-slate-200 w-full pl-2 py-1">
                    <Typography className="font-bold  text-slate-600 tracking-wider">
                        BEDRE
                    </Typography>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <StopBedreNestandarts control={control} />
                        <StopBedreNedarbojas control={control} />
                        <NostiepejsNolietots control={control} />
                        <NostiepejaSledzisNedarbojas control={control} />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <PretsvarsBuferisAttalumsNepietiek control={control} />
                        <PretsvaraBrivkustiba control={control} />
                        <KabinesBrivkustiba control={control} />
                        <KabinesUnPretsvaraBrivkustiba control={control} />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <AtsperesPretsvaraNolietotas control={control} />
                        <PretsvaraVadkurpesNolietotas control={control} />
                        <KabinesVadkurpesNolietotas control={control} />
                        <KabinesUnPretsvaraVadkurpesNolietotas
                            control={control}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}></Grid>
                </Grid>
                <div className="bg-slate-200 w-full pl-2 py-1">
                    <Typography className="font-bold  text-slate-600 tracking-wider">
                        KABĪNE
                    </Typography>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={2}>
                        <ZvansNedarbojas control={control} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <VadibasAparatsNolietots control={control} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <ApdareKabineBojata control={control} />
                        <ApdareKabineNolietota control={control} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <GridaKabineBojata control={control} />
                        <GridaKabineNolietota control={control} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <GriestiKabineBojati control={control} />
                        <GriestiKabineNolietoti control={control} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <KabinesDurvisBojatas control={control} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <KabinesDASprauga control={control} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <ReverseNedarbojas control={control} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <ApgaismojumsKabineNepietiek control={control} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <KabinesDurvisVarAtvert control={control} />
                    </Grid>
                </Grid>
                <div className="bg-slate-200 w-full pl-2 py-1">
                    <Typography className="font-bold  text-slate-600 tracking-wider">
                        MAŠĪNTELPA
                    </Typography>
                </div>
                <Grid container spacing={2}>
                    {/* Mašīntelpa - row 1 */}
                    <Grid item xs={12} sm={3}>
                        <BridinajumaDurvimNav control={control} />
                        <BridinajumaLukaiNav control={control} />
                        <LukaBojata control={control} />
                        <EllasNoplude control={control} />
                        <ReduktorsNolietotsUnEllasNoplude control={control} />
                        <ApgaismojumsMasintelpaNepietiek control={control} />
                        <ApgaismojumsSahtaNepietiek control={control} />
                        <ApgaismojumsMasintelpaUnSahtalpaNepietiek
                            control={control}
                        />
                    </Grid>
                    {/* Mašīntelpa - row 2 */}
                    <Grid item xs={12} sm={3}>
                        <ApmalesApNesosamTrosemNav control={control} />
                        <ApmalesApAITrosemNav control={control} />
                        <ApmalesApNesosamUnAITrosemNav control={control} />
                        <PaklajuPieGalvSledzaNav control={control} />
                        <PaklajuPieNKUNav control={control} />
                        <PaklajuPieGalvSledzaUnNKUNav control={control} />
                    </Grid>

                    {/* Mašīntelpa - row 3 */}

                    <Grid item xs={12} sm={3}>
                        <NesosoTrosuNodilums control={control} />
                        <AprikojumsMasintelpa control={control} />
                        <PrieksmetiMasintelpa control={control} />
                        <AprikojumsUnPrieksmetiMasintelpa control={control} />
                        <AINolietots control={control} />
                        <AITroseNolietota control={control} />
                        <AIUnTroseNolietoti control={control} />
                    </Grid>

                    {/* Mašīntelpa - row 4 */}

                    <Grid item xs={12} sm={3}>
                        <AtsperesBremzuNolietotas control={control} />
                        <UzlikasBremzuNolietotas control={control} />
                        <VadskriemelaNodilums control={control} />
                        <VadskriemelaNevienmerigsNodilums control={control} />
                    </Grid>
                </Grid>
                <div className="bg-slate-200 w-full pl-2 py-1">
                    <Typography className="font-bold  text-slate-600 tracking-wider">
                        НКУ
                    </Typography>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <NKUAprikojumsNolietots control={control} />
                        <NKUAizsardzibasAutomatiNolietoti control={control} />
                        <NKUKontaktoriNolietoti control={control} />
                        <NKUAizsardzibasAutomatiUnKontaktoriNolietoti
                            control={control}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <NKUAizsardzibasAutomatsVA1Nolietots
                            control={control}
                        />
                        <NKUAizsardzibasAutomatsVA2Nolietots
                            control={control}
                        />
                        <NKUAizsardzibasAutomatsVA3Nolietots
                            control={control}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <NKUAizsardzibasAutomatiVA1UnVA2Nolietoti
                            control={control}
                        />
                        <NKUAizsardzibasAutomatiVA1UnVA3Nolietoti
                            control={control}
                        />
                        <NKUAizsardzibasAutomatiVA2UnVA3Nolietoti
                            control={control}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}></Grid>
                </Grid>
                <div className="bg-slate-200 w-full pl-2 py-1">
                    <Typography className="font-bold  text-slate-600 tracking-wider">
                        KABĪNES JUMTS UN ŠAHTA
                    </Typography>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <RevizijaNedarbojas control={control} />
                        <RevizijasStopNedarbojas control={control} />
                        <RevizijasNav control={control} />
                        <StopJumtaNedarbojas control={control} />
                    </Grid>
                </Grid>
                <div className="bg-slate-200 w-full pl-2 py-1">
                    <Typography className="font-bold  text-slate-600 tracking-wider">
                        Papildus neatbilstības
                    </Typography>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        {/* notes */}
                        <TextField
                            multiline
                            rows={4}
                            size="small"
                            label="Papildus neatbilstības ar vertējumu 1"
                            fullWidth
                            // autoComplete
                            helperText={errors.notes?.message}
                            {...register("nonCompliances1.notes")}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    color: "red",
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {/* notes */}
                        <TextField
                            multiline
                            rows={4}
                            size="small"
                            label="Papildus neatbilstības ar vertējumu 2"
                            fullWidth
                            // autoComplete
                            helperText={errors.notes?.message}
                            {...register("nonCompliances2.notes")}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    color: "red",
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {/* notes */}
                        <TextField
                            multiline
                            rows={4}
                            size="small"
                            label="Papildus neatbilstības ar vertējumu 3"
                            fullWidth
                            // autoComplete
                            helperText={errors.notes?.message}
                            {...register("nonCompliances3.notes")}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    color: "red",
                                },
                            }}
                        />
                    </Grid>
                </Grid>
                <div style={{ width: "100%" }}>
                    {!!nonCompliances1.length && (
                        <Typography
                            variant="h6"
                            className="font-bold text-slate-700"
                        >
                            Neatbilstības ar vertējumu 1
                        </Typography>
                    )}

                    {nonCompliances1.map((string) => (
                        <p key={string} className="m-0">
                            {string}
                        </p>
                    ))}

                    {!!nonCompliances2.length && (
                        <Typography
                            variant="h6"
                            className="font-bold text-slate-700"
                        >
                            Neatbilstības ar vertējumu 2
                        </Typography>
                    )}

                    {nonCompliances2.map((string) => (
                        <p key={string} className="m-0">
                            {string}
                        </p>
                    ))}

                    {!!nonCompliances3.length && (
                        <Typography
                            variant="h6"
                            className="font-bold text-slate-700"
                        >
                            Neatbilstības ar vertējumu 3
                        </Typography>
                    )}

                    {nonCompliances3.map((string) => (
                        <p key={string} className="m-0">
                            {string}
                        </p>
                    ))}
                </div>
                <div>{JSON.stringify(nonCompliances1, 2, 2)}</div>
                <div>{JSON.stringify(nonCompliances2, 2, 2)}</div>
                <div>{JSON.stringify(nonCompliances3, 2, 2)}</div>
                <DevTool control={control} />
                <Button
                    type="submit"
                    size="small"
                    variant="contained"
                    color="success"
                    className="ml-2 mt-64 h-8"
                    // disabled={!formState.isValid}
                >
                    Create
                </Button>
                {/* <pre>{JSON.stringify(watchAllFields, 2, 2)}</pre> */}
                {/* <pre>
                        {`InspectionDateStart: ${dayjs(
                            watchAllFields.inspectionDateStart
                        ).format("DD.MM.YYYY")}  `}
                    </pre>
                    <pre>
                        {`InspectionDateEnd: ${dayjs(
                            watchAllFields.inspectionDateEnd
                        ).format("DD.MM.YYYY")}  `}
                    </pre> */}
            </Box>
            <Typography variant="h5">LVS 344:2022</Typography>
            .<br />
            .<br />
            .<br />
            .<br />
            <Typography variant="h5">Citas neatbilstības</Typography>
            Reduktora sazobē ir liels dilums un brīvgaita.
            <br />
            Velkošām trosēm ir palielināts dilums.
            <br />
            Nav evakuācijas roktura
            <br />
            Nolietojies reversa mehānisms.
            <br />
            Dokumentācija neatrodas iekārtas tuvumā.
            <br />
            Durvju gumijā robi (robs). Выбоина, щербина
            <br />
            No 1.-3. stāvam nav apgaismojuma instalācijas šahtā.
            <br />
            Stacijas elektroiekārtas nolietojums - ielīp releji.
            <br />
            Šahtas durvju sprauga pie apakšas ir lielāka par 10mm.
            <br />
            Gala slēdža lineāls nav nofiksēts uz ass.
            <br />
            Apdegušie kontakti, nolietojusies elektroiekārta.
            <br />
            Kustās vadotnes stiprinājums.
            <br />
            Vārpstas vāks vav uzstādīts. - Крышка вала не установлена.
            <br />
            Nekorekta durvju veršanas mehānisma darbība.
            <br />
            Klaudzieni ātruma ierobežotāja iericē.
            <br />
            Text
            <br />
            Text
            <br />
            Text
            <br />
            Text
            <br />
            Text
            <br />
            Text
            <br />
        </Layout>
    );
}
// dayjs(watchAllFields.StartDate).format("DD.MM.YYYY");
// Reduktora sazobē ir liels dilums un brīvgaita
