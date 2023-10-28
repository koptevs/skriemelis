import { Link as InertiaLink, Head } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import Pagination from "@mui/material/Pagination";
import Link from "@mui/material/Link";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Layout from "../AdminPanel/Layout";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";

import { colorTokens } from "@/theme";
import Topbar from "@/Layouts/Topbar";

const Index = ({ lifts, filters }) => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    return (
        <Layout>
            <Head title="Lifti" />
            {/* <Topbar user="Igor" /> */}
            {/* <pre>{JSON.stringify(theme, 2, 2)}</pre> */}
            {/* {theme.palette.mode} */}
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <label htmlFor="search-reg" className="text-sm">
                        Поиск по Reg. Nr.{"  "}
                    </label>
                    <input
                        id="search-reg"
                        type="text"
                        placeholder={filters.search}
                        className="border px-4 py-2 rounded-lg"
                        onChange={(e) =>
                            router.get(
                                "/lifts",
                                { search: e.target.value },
                                {
                                    preserveState: true,
                                    replace: true,
                                }
                            )
                        }
                    />{" "}
                </Grid>
                <Grid item xs={12} md={4}>
                    <label htmlFor="search-street" className="text-sm">
                        Поиск по улице {"  "}
                    </label>
                    <input
                        id="search-street"
                        type="text"
                        placeholder={filters.street}
                        className="border px-4 py-2 rounded-lg"
                        onChange={(e) =>
                            router.get(
                                "/lifts",
                                { street: e.target.value },
                                {
                                    preserveState: true,
                                    replace: true,
                                }
                            )
                        }
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Link
                        component={InertiaLink}
                        href="/lifts/create"
                        className="ml-4"
                    >
                        Add Lift
                    </Link>
                </Grid>
            </Grid>
            <ul className="list-none flex">
                {/* <pre>{JSON.stringify(lifts.links, 2, 2)}</pre> */}
                {lifts.links.map((link) => (
                    <li key={link.id}>
                        <Link
                            component={InertiaLink}
                            // className={`relative block rounded bg-transparent px-2 py-1 text-sm  no-underline transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white  ${
                            //     link.active ? "text-red-500" : "text-slate-900"
                            // }`}
                            href={link.url}
                            sx={{
                                textDecoration: "none",
                                fontWeight: "600",
                                fontSize: "1rem",
                                marginRight: "1em",
                                color: link.active
                                    ? colors.redAccent[500]
                                    : colors.blueAccent[300],
                            }}
                        >
                            {link.label === "&laquo; Previous"
                                ? "<<"
                                : link.label === "Next &raquo;"
                                ? ">>"
                                : link.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <Grid
                id="findme"
                container
                spacing={3}
                // sx={{ marginLeft: mediaSmUp ? "25px" : "5px" }}
                // sx={{
                //     marginLeft: "5px",
                //     ...(mediaSmUp && {
                //         marginLeft: "15px",
                //     }),
                // }}
            >
                {lifts.data.map((lift) => (
                    <Grid
                        item
                        key={lift.id}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        xl={2}
                    >
                        <Link
                            component={InertiaLink}
                            href={route("lifts.show", lift.id)}
                            sx={{
                                textDecoration: "none",
                                display: "inline-block",
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    color: theme.palette.primary[200],
                                    "&:hover": {
                                        color: theme.palette.primary[400],
                                    },
                                }}
                            >
                                {lift.reg_number}
                            </Typography>
                        </Link>

                        <Typography component="p" sx={{}}>
                            {lift.address}, {lift.address_postal_code},{" "}
                            {lift.address_country}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
            <br />
            <Stack spacing={2}>
                {/* <Pagination
                    page={lifts.current_page}
                    // count={5}
                    count={lifts_total_count}
                    variant="outlined"
                    shape="rounded"
                    onChange={(e, page) => {
                        router.visit(route("lifts.index") + `?page=${page}`);
                        // console.log(e, page)
                    }}
                /> */}
            </Stack>
        </Layout>
    );
};

export default Index;
