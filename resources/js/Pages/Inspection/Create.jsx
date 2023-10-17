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

import apdare from "@/img/apdare.png";
import atsperes from "@/img/atsperes.png";
import attalums from "@/img/attalums.png";
import bremzes from "@/img/bremzes.png";
import brivkustiba from "@/img/brivkustiba.png";
import durvis from "@/img/durvis.png";
import evakuacija from "@/img/evakuacija.png";
import grida from "@/img/grida.png";
import griesti from "@/img/griesti.png";
import kovriki from "@/img/kovriki.png";
import lamp from "@/img/lamp.png";
import manjetsi from "@/img/manjetsi.png";
import mitrums from "@/img/mitrums.png";
import nostiepejs from "@/img/nostiepejs.png";
import os from "@/img/os.png";
import paveles from "@/img/paveles.png";
import rules from "@/img/rules.png";
import skriemelis from "@/img/skriemelis.png";
import skriemelis_nevienmerigs from "@/img/skriemelis_nevienmerigs.png";
import zeme from "@/img/zeme.png";
import zvans from "@/img/zvans.png";

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
        // console.log(data);
        console.log(
            "1 ",
            nonCompliances1,
            "2 ",
            nonCompliances2,
            "3 ",
            nonCompliances3
        );
        // router.post(route("lifts.store"), data);
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
                    <Grid item xs={12} sm={2}>
                        <CheckboxWithImage
                            // className="ml-3.5"
                            rawName="3.7 Lifta kabīnē nedarbojas zvans."
                            nonCompliancesLevel="1"
                            imageSource={zvans}
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
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <CheckboxWithImage
                            // className="ml-3.5"
                            rawName="3.4 Lifta kabīnes vadības aparāts ir nolietots."
                            nonCompliancesLevel="1"
                            imageSource={paveles}
                            control={control}
                            label={
                                <>
                                    <Typography component="span">
                                        VA nol
                                    </Typography>
                                </>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <CheckboxWithImage // apdare bojata
                            // className="ml-3.5"
                            rawName="4.1 Lifta kabīnes apdare ir bojāta."
                            nonCompliancesLevel="1"
                            imageSource={apdare}
                            control={control}
                            label={
                                <>
                                    <Typography component="span">
                                        Apdare ir bojāta.
                                    </Typography>
                                </>
                            }
                        />
                        <CheckboxWithImage
                            className="ml-3.5 inline-block"
                            rawName="4.1 Lifta kabīnes apdare ir nolietota."
                            nonCompliancesLevel="1"
                            // imageSource={apdare}
                            control={control}
                            label={
                                <>
                                    <Typography component="span">
                                        nolietota.
                                    </Typography>
                                </>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <CheckboxWithImage
                            // className="ml-3.5"
                            rawName="4.1 Lifta kabīnes grīdas segums ir bojāts."
                            nonCompliancesLevel="1"
                            imageSource={grida}
                            control={control}
                            label={
                                <>
                                    <Typography component="span">
                                        Grīda ir bojāta.
                                    </Typography>
                                </>
                            }
                        />
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="4.1 Lifta kabīnes grīdas segums ir nolietots."
                            nonCompliancesLevel="1"
                            // imageSource={apdare}
                            control={control}
                            label={
                                <>
                                    <Typography component="span">
                                        nolietota.
                                    </Typography>
                                </>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="4.1 Lifta kabīnes griesti ir bojāti."
                            nonCompliancesLevel="1"
                            imageSource={griesti}
                            control={control}
                            label={
                                <>
                                    <Typography component="span">
                                        Griesti ir bojāti.
                                    </Typography>
                                </>
                            }
                        />
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="4.1 Lifta kabīnes griesti ir nolietoti."
                            nonCompliancesLevel="1"
                            // imageSource={apdare}
                            control={control}
                            label={
                                <>
                                    <Typography component="span">
                                        nolietoti.
                                    </Typography>
                                </>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="7.1 Lifta kabīnes durvis ir bojātas."
                            nonCompliancesLevel="1"
                            imageSource={durvis}
                            control={control}
                            label={
                                <>
                                    <Typography component="span">
                                        Kabīnes durvis ir bojātas.
                                    </Typography>
                                </>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="7.1 Sprauga starp kabīnes durvīm un aiļu apmalēm ir lielāka par 10 mm."
                            nonCompliancesLevel="1"
                            // imageSource={apdare}
                            control={control}
                            label={
                                <>
                                    <Typography
                                        component="span"
                                        // variant="h6"
                                        className="font-bold text-red-500"
                                    >
                                        DAS
                                    </Typography>
                                    <Typography component="span">
                                        prauga.
                                    </Typography>
                                </>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="7.2 Durvju reverse mehānisms nedarbojas."
                            nonCompliancesLevel="1"
                            // imageSource={apdare}
                            control={control}
                            label={
                                <>
                                    <Typography
                                        component="span"
                                        // variant="h6"
                                        className="font-bold text-green-600"
                                    >
                                        &laquo;&laquo;REVERSE&raquo;&raquo;
                                    </Typography>
                                    <Typography component="span">
                                        nedarbojas
                                    </Typography>
                                </>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <CheckboxWithImage
                            className="ml-3.5 inline-block"
                            rawName="8.0 Nepietiekams apgaismojums lifta kabīnē."
                            nonCompliancesLevel="1"
                            imageSource={lamp}
                            control={control}
                            label={
                                <>
                                    <Typography component="span">
                                        Apgaismojums{" "}
                                    </Typography>
                                    <Typography
                                        component="span"
                                        // variant="h6"
                                        className="font-bold text-red-500"
                                    >
                                        nepietiek.
                                    </Typography>
                                </>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="7.1 Lifta kabīnes durvis var atvert ar rokām kabīnei neatrodoties pretīm šahtas durvīm vai atslēgšanas zonā."
                            nonCompliancesLevel="1"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Kabīnes durvis var atvert ar rokām.
                                </Typography>
                            }
                        />
                    </Grid>
                </Grid>
                <div className="bg-slate-200 w-full pl-2 py-1">
                    <Typography className="font-bold  text-slate-600 tracking-wider">
                        MAŠĪNTELPA
                    </Typography>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="1.4 Lūkai mašīntelpā nav brīdinājuma zīmes par nokrišanas draudiem."
                            nonCompliancesLevel="1"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    1.4 Lūkai mašīntelpā nav brīdinājuma zīmes
                                    par nokrišanas draudiem.
                                </Typography>
                            }
                        />
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="1.4 Lūkai mašīntelpā nav brīdinājuma zīmes par nokrišanas draudiem."
                            nonCompliancesLevel="1"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    Lūkai mašīntelpā nav brīdinājuma zīmes par
                                    nokrišanas draudiem.
                                </Typography>
                            }
                        />
                        <CheckboxWithImage
                            // className="ml-3.5 inline-block"
                            rawName="1.4 Mašīntelpas durvīm nav brīdinājuma uzraksta 'Nepiederošiem ieeja aizliegta'."
                            nonCompliancesLevel="1"
                            // imageSource={lamp}
                            control={control}
                            label={
                                <Typography component="span">
                                    1.4 Mašīntelpas durvīm nav brīdinājuma
                                    uzraksta 'Nepiederošiem ieeja aizliegta'.
                                </Typography>
                            }
                        />

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
                        {/* ---------------------------------------------------------- */}
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
