import React from "react";

import {
    Head,
    Link,
    router,
    usePage,
    useForm as inertiaUseForm,
} from "@inertiajs/react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import { useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import Layout from "../AdminPanel/Layout";

const Create = () => {
    const form = useForm({
        defaultValues: {
            name: "",
            regNumber: "",
            address: "",
            contractNumber: "izsaukums",
            contractDate: "",
            contactPerson: "",
            contactPersonPosition: "",
            contactPersonPhone: "",
            contactPersonPhoneBill: "",
            emailForDocs: "",
            bankName: "",
            bankCode: "",
            bankAccount: "",
            billPayDays: "15",
            protocolWithElectricMeasurments: false,
            notes: "",
        },
    });
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    const { errors: inertiaErrors } = usePage().props;

    const onSubmit = (data) => {
        console.log(data);
        router.post(route("lift-managers.store"), data);
    };

    return (
        <Layout>
            <Head title="Create new lift manager" />
            <h1>Create new lift manager</h1>
            <Box
                component="form"
                sx={{
                    py: 2,
                    "& .MuiTextField-root": {
                        // width: "25ch",
                    },
                }}
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                // autoComplete="off"
                className="space-y-4"
            >
                <Grid container spacing={2}>
                    {/* ----- name --------- */}
                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        <TextField
                            size="small"
                            label="Name"
                            fullWidth
                            // autoComplete
                            helperText={errors.name?.message}
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required.",
                                },
                            })}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    color: "red",
                                },
                            }}
                        />
                    </Grid>
                    {/* ----- regNumber --------- */}
                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        <TextField
                            size="small"
                            label="Reg Number"
                            fullWidth
                            // autoComplete
                            helperText={errors.regNumber?.message}
                            {...register("regNumber", {
                                required: {
                                    value: true,
                                    message: "Reg Number is required.",
                                },
                            })}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    color: "red",
                                },
                            }}
                        />
                    </Grid>
                    {/* ----- address --------- */}
                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        <TextField
                            size="small"
                            label="Address"
                            fullWidth
                            // autoComplete
                            helperText={errors.address?.message}
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: "Address is required.",
                                },
                            })}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    color: "red",
                                },
                            }}
                        />
                    </Grid>
                    {/* ----- contractNumber --------- */}
                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        <TextField
                            size="small"
                            label="contractNumber"
                            fullWidth
                            // autoComplete
                            helperText={errors.contractNumber?.message}
                            {...register("contractNumber")}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    color: "red",
                                },
                            }}
                        />
                    </Grid>
                    {/* ----- contractDate --------- */}
                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        <TextField
                            size="small"
                            label="contractDate"
                            fullWidth
                            // autoComplete
                            helperText={errors.contractDate?.message}
                            {...register("contractDate")}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    color: "red",
                                },
                            }}
                        />
                    </Grid>
                    {/* ----- contactPerson --------- */}
                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        <TextField
                            size="small"
                            label="contactPerson"
                            fullWidth
                            // autoComplete
                            helperText={errors.contactPerson?.message}
                            {...register("contactPerson")}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    color: "red",
                                },
                            }}
                        />
                    </Grid>
                    {/* ----- contactPersonPosition --------- */}
                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        <TextField
                            size="small"
                            label="contactPersonPosition"
                            fullWidth
                            // autoComplete
                            helperText={errors.contactPersonPosition?.message}
                            {...register("contactPersonPosition")}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    color: "red",
                                },
                            }}
                        />
                    </Grid>
                    {/* ----- contactPersonPhone --------- */}
                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        <TextField
                            size="small"
                            label="contactPersonPhone"
                            fullWidth
                            // autoComplete
                            helperText={errors.contactPersonPhone?.message}
                            {...register("contactPersonPhone")}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    color: "red",
                                },
                            }}
                        />
                    </Grid>
                    {/* ----- contactPersonPhoneBill --------- */}
                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        <TextField
                            size="small"
                            label="contactPersonPhoneBill"
                            fullWidth
                            // autoComplete
                            helperText={errors.contactPersonPhoneBill?.message}
                            {...register("contactPersonPhoneBill")}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    color: "red",
                                },
                            }}
                        />
                    </Grid>
                    {/* ----- emailForDocs --------- */}
                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        <TextField
                            size="small"
                            label="emailForDocs"
                            fullWidth
                            // autoComplete
                            helperText={errors.emailForDocs?.message}
                            {...register("emailForDocs")}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    color: "red",
                                },
                            }}
                        />
                    </Grid>
                    {/* ----- bankName --------- */}
                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        <TextField
                            size="small"
                            label="bankName"
                            fullWidth
                            // autoComplete
                            helperText={errors.bankName?.message}
                            {...register("bankName")}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    color: "red",
                                },
                            }}
                        />
                    </Grid>
                    {/* ----- bankCode --------- */}
                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        <TextField
                            size="small"
                            label="bankCode"
                            fullWidth
                            // autoComplete
                            helperText={errors.bankCode?.message}
                            {...register("bankCode")}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    color: "red",
                                },
                            }}
                        />
                    </Grid>
                    {/* ----- bankAccount --------- */}
                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        <TextField
                            size="small"
                            label="bankAccount"
                            fullWidth
                            // autoComplete
                            helperText={errors.bankAccount?.message}
                            {...register("bankAccount")}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    color: "red",
                                },
                            }}
                        />
                    </Grid>
                    {/* ----- billPayDays --------- */}
                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        <TextField
                            size="small"
                            label="billPayDays"
                            fullWidth
                            // autoComplete
                            helperText={errors.billPayDays?.message}
                            {...register("billPayDays")}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    color: "red",
                                },
                            }}
                        />
                    </Grid>
                    {/* ----- protocolWithElectricMeasurments --------- */}
                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        <FormControlLabel
                            control={
                                <Controller
                                    name="protocolWithElectricMeasurments"
                                    control={control}
                                    render={({ field: props }) => (
                                        <Checkbox
                                            {...props}
                                            checked={props.value}
                                            onChange={(e) =>
                                                props.onChange(e.target.checked)
                                            }
                                        />
                                    )}
                                />
                            }
                            label="Protokol with el. measurments"
                        />
                    </Grid>
                    {/* ----- notes --------- */}
                    <Grid item xs={12}>
                        <TextField
                            multiline
                            rows={4}
                            size="small"
                            label="Notes"
                            fullWidth
                            // autoComplete
                            helperText={errors.notes?.message}
                            {...register("notes")}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    color: "red",
                                },
                            }}
                        />
                    </Grid>
                </Grid>
                {inertiaErrors && (
                    <p className="text-sm text-red-600 dark:text-red-400">
                        {JSON.stringify(inertiaErrors)}
                    </p>
                )}
                <Button
                    type="submit"
                    size="small"
                    variant="contained"
                    color="success"
                    className="mt-4 ml-2"
                    disabled={!formState.isValid}
                >
                    Create
                </Button>
            </Box>
            <DevTool control={control} />
        </Layout>
    );
};

export default Create;
