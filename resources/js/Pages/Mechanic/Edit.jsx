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

const Edit = ({ mechanic }) => {
    // return <pre>{JSON.stringify(mechanic, 2, 2)}</pre>;

    const form = useForm({
        defaultValues: {
            name: mechanic.name,
            phone: mechanic.phone,
            company: mechanic.company,
            notes: mechanic.notes,
        },
    });

    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    const { errors: inertiaErrors } = usePage().props;

    const onSubmit = (data) => {
        // console.log(data);
        router.patch(route("mechanics.update", mechanic.id), data);
    };

    return (
        <Layout>
            <Head title="Edit mechanic" />
            <h1>Edit mechanic</h1>
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
                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        <TextField
                            size="small"
                            label="Phone"
                            fullWidth
                            // autoComplete
                            helperText={errors.phone?.message}
                            {...register("phone")}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    color: "red",
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        <TextField
                            size="small"
                            label="EMail"
                            fullWidth
                            // autoComplete
                            helperText={errors.email?.message}
                            {...register("email")}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    color: "red",
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={1}>
                        <TextField
                            size="small"
                            label="Company"
                            fullWidth
                            // autoComplete
                            helperText={errors.company?.message}
                            {...register("company", {
                                required: {
                                    value: true,
                                    message: "Company is required.",
                                },
                            })}
                            sx={{
                                "& .MuiFormHelperText-root": {
                                    color: "red",
                                },
                            }}
                        />
                    </Grid>
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
                    Update
                </Button>
            </Box>
        </Layout>
    );
};

export default Edit;
