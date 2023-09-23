import { useEffect } from "react";
import {
    Head,
    Link,
    router,
    usePage,
    useForm as inertiaUseForm,
} from "@inertiajs/react";

// import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export default function Login({ status, canResetPassword }) {
    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
            remember: false,
        },
    });

    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    const { errors: inertiaErrors } = usePage().props;

    const onSubmit = (data) => {
        router.post(route("login"), data);
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}erertertertert
                </div>
            )}

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
                <TextField
                    size="small"
                    label="Email"
                    fullWidth
                    autoComplete
                    helperText={errors.email?.message}
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Email is required.",
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Invalid EMail format",
                        },
                    })}
                    sx={{
                        "& .MuiFormHelperText-root": {
                            color: "red",
                        },
                    }}
                />

                <TextField
                    size="small"
                    label="Password"
                    fullWidth
                    type="password"
                    helperText={errors.password?.message}
                    autoComplete="current-password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: "Password is required.",
                        },
                    })}
                    sx={{
                        "& .MuiFormHelperText-root": {
                            color: "red",
                        },
                    }}
                />
                {inertiaErrors.email && (
                    <p className={"text-sm text-red-600 dark:text-red-400"}>
                        {inertiaErrors.email}
                    </p>
                )}

                <FormControlLabel
                    disableTypography
                    className="font-medium text-sm text-gray-700 dark:text-gray-300"
                    {...register("remember")}
                    control={
                        <Checkbox
                            {...{
                                inputProps: {
                                    "aria-label": "Checkbox remember me",
                                },
                            }}
                        />
                    }
                    label="Remember me"
                />

                <Stack direction="row" className="justify-between">
                    {canResetPassword && (
                        <div className="pt-4">
                            <Link
                                href={route("password.request")}
                                className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                            >
                                Forgot your password?
                            </Link>
                        </div>
                    )}
                    <Button
                        type="submit"
                        size="small"
                        variant="contained"
                        color="success"
                        className="mt-4 ml-2"
                        disabled={!formState.isValid}
                    >
                        Login
                    </Button>
                </Stack>
            </Box>
            {/* <DevTool control={control} /> */}
        </GuestLayout>
    );
}
