import React from "react";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import Layout from "./Layout";
const Main = () => {
    const form = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        // tutorial lesson 12
        // defaultValues: async () => {
        //     const response = await fetch(
        //         "https://jsonplaceholder.typicode.com/users/2"
        //     );
        //     const data = await response.json();

        //     return {
        //         username: "Batman",
        //         email: data.email,
        //         password: "",
        //     };
        // },
    });
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = (data) => {
        console.log("Form submitted", data);
    };

    return (
        <>
            <Layout>
                <Typography variant="h3">Main</Typography>

                <Box
                    component="form"
                    sx={{
                        "& .MuiTextField-root": {
                            m: 1,
                            // width: "25ch",
                        },
                    }}
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete="off"
                >
                    <TextField
                        size="small"
                        label="Username"
                        type="text"
                        {...register("username", {
                            required: {
                                value: true,
                                message: "Username is required.",
                            },
                        })}
                    />
                    <p style={{ color: "red" }}>{errors.username?.message}</p>
                    <TextField
                        size="small"
                        label="Email"
                        // defaultValue="4CL"
                        // helperText="Helper text"
                        // fullWidth
                        // multiline
                        // rows={5}
                        {...register("email", {
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: "Invalid EMail",
                            },
                            validate: {
                                notAdmin: (fieldValue) => {
                                    return (
                                        fieldValue !== "admin@example.com" ||
                                        `${fieldValue} is reserved for inernal usage!`
                                    );
                                },
                                notBlackListed: (fieldValue) => {
                                    return (
                                        !fieldValue.endsWith("baddomain.com") ||
                                        `Sorry, but ${fieldValue} is in our blacklist.`
                                    );
                                },
                            },
                        })}
                    />
                    <p style={{ color: "red" }}>{errors.email?.message}</p>
                    <TextField
                        size="small"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        {...register("password")}
                    />
                    <div>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className="mt-4 ml-2"
                        >
                            Login
                        </Button>
                    </div>
                    {/* <TextField
                            required
                            id="outlined-required"
                            // label="Required"
                            defaultValue="Hello World"
                            sx={{
                                width: "30%",
                                "& .MuiInputBase-input": {
                                    padding: "5px 17px",
                                },
                                "& .MuiOutlinedInput-root": {
                                    color: "white",
                                    backgroundColor: "tomato",
                                    // padding: "1px",
                                },
                                "& .MuiInputLabel-root": {
                                    color: "navy",
                                },
                            }}
                        /> */}
                    <DevTool control={control} />
                </Box>
            </Layout>
            {/* <div>AdminPanel</div>; */}
        </>
    );
};

export default Main;
