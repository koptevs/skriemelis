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

import atsperes from "@/img/atsperes.png";

import bremzes from "@/img/bremzes.png";

import evakuacija from "@/img/evakuacija.png";

import kovriki from "@/img/kovriki.png";
import lamp from "@/img/lamp.png";
import manjetsi from "@/img/manjetsi.png";
import mitrums from "@/img/mitrums.png";
import os from "@/img/os.png";

import rules from "@/img/rules.png";
import skriemelis from "@/img/skriemelis.png";
import skriemelis_nevienmerigs from "@/img/skriemelis_nevienmerigs.png";
import zeme from "@/img/zeme.png";

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

export default function Create({ lifts, auth }) {
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
            protocolNumber: "04.45/518-23/02",
            liftId: "4CL013877",
            nonCompliances1: [],
            nonCompliances2: [],
            notes: "",
        },
    });

    const watchAllFields = watch();

    const { errors } = formState;
    const { errors: inertiaErrors } = usePage().props;

    const onSubmit = (data) => {
        console.log(data.inspectionDateStart.format("YYYY-MM-DD"));

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
            participant_1: "",
            participant_2: "",
            non_compliances_0: !!nonCompliances0.length
                ? nonCompliances0.join(" ")
                : "",
            non_compliances_1: !!nonCompliances1.length
                ? nonCompliances1.join(" ")
                : "",
            non_compliances_2: !!nonCompliances2.length
                ? nonCompliances2.join(" ")
                : "",
            non_compliances_3: !!nonCompliances3.length
                ? nonCompliances3.join(" ")
                : "",
            notes: data.notes ? data.notes : "",
            notes_for_protokol: data.notes_for_protokol
                ? data.notes_for_protokol
                : "",
        };
        // console.log(
        //     "1 ",
        //     nonCompliances1,
        //     "2 ",
        //     nonCompliances2,
        //     "3 ",
        //     nonCompliances3
        // );
        // router.post(route("inspections.store"));
        console.log(dataToSent);
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
            {!!inertiaErrors.length && JSON.stringify(inertiaErrors, 2, 2)}

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
                </Grid>
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
                    <Grid item xs={12} sm={3}>
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
                    </Grid>
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
                    <Grid item xs={12} sm={3}>
                        {/* ZZZ */}
                        <BridinajumaDurvimNav control={control} />
                        <BridinajumaLukaiNav control={control} />

                        {/* LukaBojata */}
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="3.1 Mašīntelpā lūka ir bojāta."
                            nonCompliancesLevel="1"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Mašīntelpā lūka ir bojāta.
                                </Typography>
                            }
                        />
                        {/* EllasNoplude */}
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="3.6 Eļļas noplūde no lifta mašīnas reduktora."
                            nonCompliancesLevel="1"
                            imageSource={mitrums}
                            control={control}
                            label={
                                <Typography component="span">
                                    Eļļas noplūde no lifta mašīnas reduktora.
                                </Typography>
                            }
                        />
                        {/* ReduktorsNolietotsUnEllasNoplude */}
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="3.6 Lifta mašīnas reduktora nolietojums un eļļas noplūde."
                            nonCompliancesLevel="1"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Lifta mašīnas reduktora nolietojums un eļļas
                                    noplūde.
                                </Typography>
                            }
                        />
                        {/* ApgaismojumsMasintelpaNepietiek */}
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="8.0 Nepietiekams apgaismojums mašintelpā."
                            nonCompliancesLevel="1"
                            imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Nepietiekams apgaismojums mašintelpā.
                                </Typography>
                            }
                        />
                        {/* ApgaismojumsSahtalpaNepietiek */}
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="8.0 Nepietiekams šahtas apgaismojums."
                            nonCompliancesLevel="1"
                            imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Nepietiekams šahtas apgaismojums.
                                </Typography>
                            }
                        />
                        {/* ApgaismojumsMasintelpaUnSahtalpaNepietiek */}
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="8.0 Nepietiekams mašīntelpas un šahtas apgaismojums."
                            nonCompliancesLevel="1"
                            imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Nepietiekams mašīntelpas un šahtas
                                    apgaismojums.
                                </Typography>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        {/* ApmalesApNesosamTrosemNav */}
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="3.1 Mašīntelpā nav 5 cm. apmaļu grīdā ap nesošām trosēm."
                            nonCompliancesLevel="1"
                            imageSource={manjetsi}
                            control={control}
                            label={
                                <Typography component="span">
                                    Mašīntelpā nav 5 cm. apmaļu grīdā ap nesošām
                                    trosēm.
                                </Typography>
                            }
                        />
                        {/* ApmalesApAITrosemNav */}
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="3.1 Mašīntelpā nav 5cm. apmaļu grīdā ap ātruma ierobežotāja trosēm."
                            nonCompliancesLevel="1"
                            imageSource={manjetsi}
                            control={control}
                            label={
                                <Typography component="span">
                                    Mašīntelpā nav 5cm. apmaļu grīdā ap ātruma
                                    ierobežotāja trosēm.
                                </Typography>
                            }
                        />
                        {/* ApmalesApNesosamUnAITrosemNav */}
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="3.1 Mašīntelpā nav 5cm. apmaļu grīdā ap ātruma ierobežotāja un nesošām trosēm."
                            nonCompliancesLevel="1"
                            imageSource={manjetsi}
                            control={control}
                            label={
                                <Typography component="span">
                                    Mašīntelpā nav 5cm. apmaļu grīdā ap ātruma
                                    ierobežotāja un nesošām trosēm.
                                </Typography>
                            }
                        />
                        {/* PaklajuPieGalvSledzaNav */}
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="3.1 Nav dielektrisko paklāju pie galvenā barošanas slēdža."
                            nonCompliancesLevel="1"
                            imageSource={kovriki}
                            control={control}
                            label={
                                <Typography component="span">
                                    Nav dielektrisko paklāju pie galvenā
                                    barošanas slēdža.
                                </Typography>
                            }
                        />
                        {/* PaklajuPieNKUNav */}
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="3.1 Nav dielektrisko paklāju pie vadības skapja."
                            nonCompliancesLevel="1"
                            imageSource={kovriki}
                            control={control}
                            label={
                                <Typography component="span">
                                    Nav dielektrisko paklāju pie vadības skapja.
                                </Typography>
                            }
                        />
                        {/* PaklajuPieGalvSledzaUnNKUNav */}
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="3.1 Nav dielektrisko paklāju pie vadības skapja un pie galvenā barošanas slēdža."
                            nonCompliancesLevel="1"
                            imageSource={kovriki}
                            control={control}
                            label={
                                <Typography component="span">
                                    Nav dielektrisko paklāju pie vadības skapja
                                    un pie galvenā barošanas slēdža.
                                </Typography>
                            }
                        />
                    </Grid>
                    {/* MT3 */}
                    <Grid item xs={12} sm={3}>
                        {/* NesosoTrosuNodilums */}
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="2.2 Nesošo trošu nodilums."
                            nonCompliancesLevel="1"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Nesošo trošu nodilums.
                                </Typography>
                            }
                        />
                        {/* AprikojumsMasintelpa */}
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="3.1 Mašīntelpā ir aprīkojums, kas nav saistīts ar liftu."
                            nonCompliancesLevel="1"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Mašīntelpā ir aprīkojums, kas nav saistīts
                                    ar liftu.
                                </Typography>
                            }
                        />

                        {/* PrieksmetiMasintelpa */}
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="3.1 Mašīntelpā ir priekšmeti, kas nav saistīti ar lifta ekspluatāciju."
                            nonCompliancesLevel="1"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Mašīntelpā ir priekšmeti, kas nav saistīti
                                    ar lifta ekspluatāciju.
                                </Typography>
                            }
                        />
                        {/* AprikojumsUnPrieksmetiMasintelpa */}
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="3.1 Mašīntelpā ir priekšmeti un aprīkojums, kas nav saistīti ar liftu. "
                            nonCompliancesLevel="1"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Mašīntelpā ir priekšmeti un aprīkojums, kas
                                    nav saistīti ar liftu.
                                </Typography>
                            }
                        />
                        {/* AINolietots */}
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="3.2 Ātruma ierobežotājs ir nolietots."
                            nonCompliancesLevel="1"
                            imageSource={os}
                            control={control}
                            label={
                                <Typography component="span">
                                    Ātruma ierobežotājs ir nolietots.
                                </Typography>
                            }
                        />
                        {/* AITroseNolietota */}
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="3.2 Ātruma ierobežotāja trose ir nodilis."
                            nonCompliancesLevel="1"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Ātruma ierobežotāja trose ir nodilis.
                                </Typography>
                            }
                        />
                        {/* AIUnTroseNolietoti */}
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="3.2 Ātruma ierobežotājs un tā trose ir nolietoti."
                            nonCompliancesLevel="1"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Ātruma ierobežotājs un tā trose ir
                                    nolietoti.
                                </Typography>
                            }
                        />
                    </Grid>
                    {/* MT4 */}
                    {/* AtsperesBremzuNolietotas */}
                    <Grid item xs={12} sm={3}>
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="3.6 Bremžu atsperes ir nodilušas."
                            nonCompliancesLevel="1"
                            imageSource={atsperes}
                            control={control}
                            label={
                                <Typography component="span">
                                    Bremžu atsperes ir nodilušas.
                                </Typography>
                            }
                        />
                        {/* UzlikasBremzuNolietotas */}
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="3.6 Bremžu uzlikas ir nodilušas."
                            nonCompliancesLevel="1"
                            imageSource={bremzes}
                            control={control}
                            label={
                                <Typography component="span">
                                    Bremžu uzlikas ir nodilušas.
                                </Typography>
                            }
                        />
                        {/* VadskriemelaNodilums */}
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="3.6 Vādskriemeļa nodilums."
                            nonCompliancesLevel="1"
                            imageSource={skriemelis}
                            control={control}
                            label={
                                <Typography component="span">
                                    Vādskriemeļa nodilums.
                                </Typography>
                            }
                        />
                        {/* VadskriemelaNevienmerigsNodilums */}
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="3.6 Nevienmērīgs lifta mašīnas vadošā skriemeļa nodilums."
                            nonCompliancesLevel="1"
                            imageSource={skriemelis_nevienmerigs}
                            control={control}
                            label={
                                <Typography component="span">
                                    Nevienmērīgs lifta mašīnas vadošā skriemeļa
                                    nodilums.
                                </Typography>
                            }
                        />

                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="9.0 Aizsardzības aparāti VA1 un VA2 vadības skapī ir nolietoti."
                            nonCompliancesLevel="1"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Aizsardzības aparāti VA1 un VA2 vadības
                                    skapī ir nolietoti.
                                </Typography>
                            }
                        />
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="9.0 Aizsardzības aparāti VA1 un VA3 vadības skapī ir nolietoti."
                            nonCompliancesLevel="1"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Aizsardzības aparāti VA1 un VA3 vadības
                                    skapī ir nolietoti.
                                </Typography>
                            }
                        />
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="9.0 Aizsardzības aparāti VA2 un VA3 vadības skapī ir nolietoti."
                            nonCompliancesLevel="1"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Aizsardzības aparāti VA2 un VA3 vadības
                                    skapī ir nolietoti.
                                </Typography>
                            }
                        />
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="9.0 Aizsardzības aparāti un elektriskie kontaktori vadības skapī ir nolietoti."
                            nonCompliancesLevel="1"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Aizsardzības aparāti un elektriskie
                                    kontaktori vadības skapī ir nolietoti.
                                </Typography>
                            }
                        />
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="9.0 Aizsardzības aparāti vadības skapī ir nolietoti."
                            nonCompliancesLevel="1"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Aizsardzības aparāti vadības skapī ir
                                    nolietoti.
                                </Typography>
                            }
                        />
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="9.0 Aizsardzības aparāts VA1 vadības skapī ir nolietots."
                            nonCompliancesLevel="1"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Aizsardzības aparāts VA1 vadības skapī ir
                                    nolietots.
                                </Typography>
                            }
                        />
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="9.0 Aizsardzības aparāts VA2 vadības skapī ir nolietots."
                            nonCompliancesLevel="1"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Aizsardzības aparāts VA2 vadības skapī ir
                                    nolietots.
                                </Typography>
                            }
                        />
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="9.0 Aizsardzības aparāts VA3 vadības skapī ir nolietots."
                            nonCompliancesLevel="1"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Aizsardzības aparāts VA3 vadības skapī ir
                                    nolietots.
                                </Typography>
                            }
                        />
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="9.0 Elektriskie kontaktori vadības skapī ir nolietoti."
                            nonCompliancesLevel="1"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Elektriskie kontaktori vadības skapī ir
                                    nolietoti.
                                </Typography>
                            }
                        />
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="9.0 Vadības stacijas elektriskais aprīkojums ir nolietojies."
                            nonCompliancesLevel="1"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Vadības stacijas elektriskais aprīkojums ir
                                    nolietojies.
                                </Typography>
                            }
                        />
                    </Grid>
                </Grid>
                <div className="bg-slate-200 w-full pl-2 py-1">
                    <Typography className="font-bold  text-slate-600 tracking-wider">
                        KABĪNES JUMTS UN ŠAHTA
                    </Typography>
                </div>
                <Grid container spacing={2}>
                    {/*  
                    3.4 Izvērtēšanas vadības ierīce uz kabīnes jumta nedarbojas.
                    3.4 Izvērtēšanas vadības ierīcei uz kabīnes jumta nedarbojas STOP poga.
                    3.4 Nav izvērtēšanas vadības ierīces uz kabīnes jumta.
                    3.9 Stopslēdzis kabīnes jumtā nedarbojas.
                    */}
                    <Grid item xs={12}>
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="3.4 Izvērtēšanas vadības ierīce uz kabīnes jumta nedarbojas."
                            nonCompliancesLevel="3"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Izvērtēšanas vadības ierīce uz kabīnes jumta
                                    nedarbojas.
                                </Typography>
                            }
                        />
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="3.4 Izvērtēšanas vadības ierīcei uz kabīnes jumta nedarbojas STOP poga."
                            nonCompliancesLevel="1"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Izvērtēšanas vadības ierīcei uz kabīnes
                                    jumta nedarbojas STOP poga.
                                </Typography>
                            }
                        />
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="3.4 Nav izvērtēšanas vadības ierīces uz kabīnes jumta."
                            nonCompliancesLevel="3"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Nav izvērtēšanas vadības ierīces uz kabīnes
                                    jumta.
                                </Typography>
                            }
                        />
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="3.9 Stopslēdzis kabīnes jumtā nedarbojas."
                            nonCompliancesLevel="1"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Stopslēdzis kabīnes jumtā nedarbojas.
                                </Typography>
                            }
                        />
                    </Grid>
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
                <div>{JSON.stringify(nonCompliances1, 2, 2)}</div>
                <div>{JSON.stringify(nonCompliances2, 2, 2)}</div>
                <div>{JSON.stringify(nonCompliances3, 2, 2)}</div>
                {/* <DevTool control={control} /> */}
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
        </Layout>
    );
}
// dayjs(watchAllFields.StartDate).format("DD.MM.YYYY");
