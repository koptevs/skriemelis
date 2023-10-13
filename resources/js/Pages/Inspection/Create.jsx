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

import nostiepejs from "@/img/nostiepejs.png";
import attalums from "@/img/attalums.png";
import brivkustiba from "@/img/brivkustiba.png";
import atsperes from "@/img/atsperes.png";
import CheckboxWithImage from "@/Shared/CheckboxWithImage";

export default function Create({ lifts }) {
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
            inspectionDateNextNormal: dayjs("plus year"),
            inspectionType: "kārtējā",
            nonCompliances1: [],
            nonCompliances2: [],
        },
    });

    const watchAllFields = watch();

    const { errors } = formState;

    const onSubmit = (data) => {
        console.log(data);
        // router.post(route("lifts.store"), data);
    };

    React.useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            const asArray1 = Object.entries(value.nonCompliances1);
            const asArray2 = Object.entries(value.nonCompliances2);
            const asArray3 = Object.entries(value.nonCompliances3);
            // -------------------------------
            const filtered1 = asArray1.filter(
                // only checked pass
                ([key, value]) => !!value === true
            );
            const notesArray1 = filtered1.filter((item) => item[0] === "notes");
            const notesValue1 = notesArray1[0]
                ? notesArray1[0][1].split("\n")
                : null;
            const filteredWithoutNotes1 = filtered1.filter(
                (item) => item[0] !== "notes"
            );
            const reduced1 = filteredWithoutNotes1.map((item) =>
                item[0].replace(/%%%/g, ".")
            );
            const reduced1withNotes = notesValue1
                ? reduced1.concat(notesValue1).sort()
                : reduced1.sort();

            // --------------------------
            // -------------------------------
            const filtered2 = asArray2.filter(
                // only checked pass
                ([key, value]) => !!value === true
            );
            const notesArray2 = filtered2.filter((item) => item[0] === "notes");
            const notesValue2 = notesArray2[0]
                ? notesArray2[0][1].split("\n")
                : null;
            const filteredWithoutNotes2 = filtered2.filter(
                (item) => item[0] !== "notes"
            );
            const reduced2 = filteredWithoutNotes2.map((item) =>
                item[0].replace(/%%%/g, ".")
            );
            const reduced2withNotes = notesValue2
                ? reduced2.concat(notesValue2).sort()
                : reduced2.sort();

            // --------------------------
            // -------------------------------
            const filtered3 = asArray3.filter(
                // only checked pass
                ([key, value]) => !!value === true
            );
            const notesArray3 = filtered3.filter((item) => item[0] === "notes");
            const notesValue3 = notesArray3[0]
                ? notesArray3[0][1].split("\n")
                : null;
            const filteredWithoutNotes3 = filtered3.filter(
                (item) => item[0] !== "notes"
            );
            const reduced3 = filteredWithoutNotes3.map((item) =>
                item[0].replace(/%%%/g, ".")
            );
            const reduced3withNotes = notesValue3
                ? reduced3.concat(notesValue3).sort()
                : reduced3.sort();

            // --------------------------

            setNonCompliances1(() => reduced1withNotes);
            setNonCompliances2(() => reduced2withNotes);
            setNonCompliances3(() => reduced3withNotes);
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
                        <CheckboxWithImage
                            className="ml-3.5"
                            rawName="3.9 STOP slēdzis šahtas bedrē neatbilst standartam."
                            nonCompliancesLevel="1"
                            // imageSource={brivkustiba}
                            control={control}
                            label={
                                <>
                                    <Typography
                                        component="span"
                                        // variant="h6"
                                        className="font-bold text-red-500"
                                    >
                                        STOP{" "}
                                    </Typography>
                                    <Typography component="span">
                                        (B2) bedrē nestandarts
                                    </Typography>
                                </>
                            }
                        />
                        <CheckboxWithImage
                            className="ml-3.5"
                            rawName="3.9 STOP slēdzis šahtas bedrē nedarbojas."
                            nonCompliancesLevel="3"
                            // imageSource={brivkustiba}
                            control={control}
                            label={
                                <>
                                    <Typography
                                        component="span"
                                        // variant="h6"
                                        className="font-bold text-red-500"
                                    >
                                        STOP{" "}
                                    </Typography>
                                    <Typography component="span">
                                        (B2) bedrē nedarbojas{" "}
                                    </Typography>
                                    <Typography
                                        component="span"
                                        // variant="h6"
                                        className="font-bold text-red-500"
                                    >
                                        (3)
                                    </Typography>
                                </>
                            }
                        />

                        <CheckboxWithImage
                            rawName="3.2 Ātruma ierobežotāja stiepšanas ierīce ir nolietota."
                            nonCompliancesLevel="1"
                            imageSource={nostiepejs}
                            control={control}
                            label={
                                <Typography component="span">
                                    Stiepšanas ierīce ir nolietota.
                                </Typography>
                            }
                        />
                        <CheckboxWithImage
                            className="ml-3.5"
                            rawName="2.1 Nedarbojas ātruma ierobežotāja nostiepēja kontroles slēdzis."
                            nonCompliancesLevel="3"
                            // imageSource={brivkustiba}
                            control={control}
                            label={
                                <>
                                    <Typography
                                        component="span"
                                        // variant="h6"
                                        className="font-bold text-red-500"
                                    >
                                        Nostiepēja slēdzis{" "}
                                    </Typography>
                                    <Typography component="span">
                                        (ВНУ) bedrē nedarbojas{" "}
                                    </Typography>
                                    <Typography
                                        component="span"
                                        // variant="h6"
                                        className="font-bold text-red-500"
                                    >
                                        (3)
                                    </Typography>
                                </>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <CheckboxWithImage
                            rawName="5.3 Palielināta lifta kabīnes brīvkustība vadotnēs."
                            nonCompliancesLevel="1"
                            imageSource={attalums}
                            control={control}
                            label={
                                <>
                                    <Typography component="span">
                                        Pretsvars - buferis{" "}
                                    </Typography>
                                    <Typography
                                        component="span"
                                        className="text-red-500 font-bold"
                                    >
                                        nepietiekams
                                    </Typography>
                                </>
                            }
                        />

                        <CheckboxWithImage
                            rawName="5.3 Palielināta lifta pretsvara brīvkustība vadotnēs."
                            nonCompliancesLevel="1"
                            imageSource={brivkustiba}
                            control={control}
                            label={
                                <>
                                    <Typography component="span">
                                        Lifta{" "}
                                    </Typography>
                                    <Typography
                                        component="span"
                                        className="text-red-500 font-bold"
                                    >
                                        pretsvara{" "}
                                    </Typography>
                                    <Typography component="span">
                                        brīvkustība
                                    </Typography>
                                </>
                            }
                        />
                        <CheckboxWithImage
                            rawName="5.3 Palielināta lifta kabīnes brīvkustība vadotnēs."
                            nonCompliancesLevel="1"
                            imageSource={brivkustiba}
                            control={control}
                            label={
                                <>
                                    <Typography component="span">
                                        Lifta{" "}
                                    </Typography>
                                    <Typography
                                        component="span"
                                        className="text-red-500 font-bold"
                                    >
                                        kabīnes{" "}
                                    </Typography>
                                    <Typography component="span">
                                        brīvkustība
                                    </Typography>
                                </>
                            }
                        />
                        {/* <CheckboxWithImage
                            rawName="1.4 Test."
                            nonCompliancesLevel="2"
                            // imageSource={brivkustiba}
                            control={control}
                            label="Test"
                        />
                        <CheckboxWithImage
                            rawName="1.4 Test2."
                            nonCompliancesLevel="2"
                            // imageSource={brivkustiba}
                            control={control}
                            label="Test"
                        /> */}
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <CheckboxWithImage
                            rawName="5.5 Pretsvara balstiekārtas atsperes ir nodilušas."
                            nonCompliancesLevel="1"
                            imageSource={atsperes}
                            control={control}
                            label={
                                <Typography component="span">
                                    Pretsvara atsperes nolietotas
                                </Typography>
                            }
                        />

                        <CheckboxWithImage
                            rawName="5.3 Palielināta lifta pretsvara brīvkustība vadotnēs (nolietoti vādkurpji)."
                            nonCompliancesLevel="1"
                            // imageSource={brivkustiba}
                            control={control}
                            label={
                                <Typography component="span">
                                    Pretsvara vādkurpes
                                </Typography>
                            }
                        />

                        <CheckboxWithImage
                            rawName="5.3 Palielināta lifta kabīnes brīvkustība vadotnēs (nolietoti vādkurpji)."
                            nonCompliancesLevel="1"
                            // imageSource={brivkustiba}
                            control={control}
                            label={
                                <Typography component="span">
                                    Kabīnes vādkurpes
                                </Typography>
                            }
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
                    <Grid item xs={12} sm={3}>
                        <CheckboxWithImage
                            className="ml-3.5"
                            rawName="3.7 Lifta kabīnē nedarbojas zvans."
                            nonCompliancesLevel="1"
                            // imageSource={brivkustiba}
                            control={control}
                            label={
                                <>
                                    <Typography
                                        component="span"
                                        // variant="h6"
                                        className="font-bold text-red-500"
                                    >
                                        ZVANS{" "}
                                    </Typography>
                                    <Typography component="span">
                                        nedarbojas.
                                    </Typography>
                                </>
                            }
                        />
                        {/* 
                        3.4 Lifta kabīnes vadības aparāts ir nolietots.
                        3.7 Lifta kabīnē nedarbojas zvans.
                        4.1 Lifta kabīnes apdare ir bojāta.
                        4.1 Lifta kabīnes apdare ir nolietota.
                        4.1 Lifta kabīnes griesti ir bojāti.
                        4.1 Lifta kabīnes griesti ir nolietoti.
                        4.1 Lifta kabīnē ir bojāts grīdas segums.
                        4.1 Lifta kabīnē nolietojies grīdas segums.
                        7.1 Lifta kabīnes durvis ir bojātas.
                        7.1 Lifta kabīnes durvis ir nolietotas.
                        7.1 Sprauga starp kabīnes durvīm un aiļu apmalēm ir lielāka par 10 mm.
                        7.2 Durvju reverse mehānisms nedarbojas.
                        8.0 Nepietiekams apgaismojums lifta kabīnē.
                        7.1 Lifta kabīnes durvis var atvert ar rokām, kabīnei neatrodoties pretīm šahtas durvīm vai atslēgšanas zonā.
                        */}
                    </Grid>
                </Grid>
                <div className="bg-slate-200 w-full pl-2 py-1">
                    <Typography className="font-bold  text-slate-600 tracking-wider">
                        MAŠĪNTELPA
                    </Typography>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        {/*
                        1.4 Lūkai mašīntelpā nav brīdinājuma zīmes par nokrišanas draudiem.
                        1.4 Mašīntelpas durvīm nav brīdinājuma uzraksta "Nepiederošiem ieeja aizliegta".
                        2.2 Nesošo trošu nodilums.
                        3.1 Mašīntelpā ir aprīkojums, kas nav saistīts ar liftu.
                        3.1 Mašīntelpā ir priekšmeti un aprīkojums, kas nav saistīti ar liftu. 
                        3.1 Mašīntelpā ir priekšmeti, kas nav saistīti ar lifta ekspluatāciju.
                        3.1 Mašīntelpā lūka ir bojāta.
                        3.1 Mašīntelpā nav 5 cm. apmaļu grīdā ap nesošām trosēm.
                        3.1 Mašīntelpā nav 5cm. apmaļu grīdā ap ātruma ierobežotāja trosēm.
                        3.1 Mašīntelpā nav 5cm. apmaļu grīdā ap ātruma ierobežotāja un nesošām trosēm.
                        3.1 Nav dielektrisko paklāju pie galvenā barošanas slēdža.
                        3.1 Nav dielektrisko paklāju pie vadības skapja un pie galvenā barošanas slēdža.
                        3.1 Nav dielektrisko paklāju pie vadības skapja.
                        3.2 Ātruma ierobežotāja trose ir nodilis.
                        3.2 Ātruma ierobežotājs ir nolietots.
                        3.2 Ātruma ierobežotājs un tā trose ir nolietoti.
                        3.6 Bremžu atsperes ir nodilušas.
                        3.6 Bremžu uzlikas ir nodilušas.
                        3.6 Eļļas noplūde no lifta mašīnas reduktora.
                        3.6 Lifta mašīnas reduktora nolietojums un eļļas noplūde.
                        3.6 Nevienmērīgs lifta mašīnas vadošā skriemeļa nodilums.
                        3.6 Vādskriemeļa nodilums.
                        8.0 Nepietiekams apgaismojums mašintelpā.
                        8.0 Nepietiekams mašīntelpas un šahtas apgaismojums.
                        8.0 Nepietiekams šahtas apgaismojums.
                            НКУ
                        '9.0 Aizsardzības aparāti VA1 un VA2 vadības skapī ir nolietoti.
                        9.0 Aizsardzības aparāti VA1 un VA3 vadības skapī ir nolietoti.
                        9.0 Aizsardzības aparāti VA2 un VA3 vadības skapī ir nolietoti.
                        9.0 Aizsardzības aparāti un elektriskie kontaktori vadības skapī ir nolietoti.
                        9.0 Aizsardzības aparāti vadības skapī ir nolietoti.
                        9.0 Aizsardzības aparāts VA1 vadības skapī ir nolietots.
                        9.0 Aizsardzības aparāts VA2 vadības skapī ir nolietots.
                        9.0 Aizsardzības aparāts VA3 vadības skapī ir nolietots.
                        9.0 Elektriskie kontaktori vadības skapī ir nolietoti.
                        9.0 Vadības stacijas elektriskais aprīkojums ir nolietojies.

                        
                        */}
                    </Grid>
                </Grid>
                <div className="bg-slate-200 w-full pl-2 py-1">
                    <Typography className="font-bold  text-slate-600 tracking-wider">
                        KABĪNES JUMTS
                    </Typography>
                </div>
                <Grid container spacing={2}>
                    {/*  
                    3.4 Izvērtēšanas vadības ierīce uz kabīnes jumta nedarbojas.
                    3.4 Izvērtēšanas vadības ierīcei uz kabīnes jumta nedarbojas STOP poga.
                        3.4 Nav izvērtēšanas vadības ierīces uz kabīnes jumta.
                        3.9 Stopslēdzis kabīnes jumtā nedarbojas.
                    */}
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
        </Layout>
    );
}
// dayjs(watchAllFields.StartDate).format("DD.MM.YYYY");
