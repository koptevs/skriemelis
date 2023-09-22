import { useEffect } from "react";
import {
    Head,
    Link,
    router,
    useForm as inertiaUseForm,
} from "@inertiajs/react";

// import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
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
    // const { data, setData, post, processing, errors, reset } = inertiaUseForm({
    //     email: "",
    //     password: "",
    //     remember: false,
    // });

    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
            remember: false,
        },
    });

    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = (data) => {
        console.log("Form submitted", data);
        router.post(route("login"), data);
    };

    // useEffect(() => {
    //     return () => {
    //         reset("password");
    //     };
    // }, []);

    // const submit = (e) => {
    //     e.preventDefault();

    //     post(route("login"));
    // };

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
                            message: "Invalid EMail",
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
                <FormControlLabel
                    disableTypography
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
                        color="primary"
                        className="mt-4 ml-2"
                        // disabled={errors}
                    >
                        Login
                    </Button>
                </Stack>
            </Box>

            {/* <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form> */}
        </GuestLayout>
    );
}
