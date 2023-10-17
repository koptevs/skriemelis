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
import { ColorModeContext, colorTokens } from "@/theme";

const Index = ({ lifts, filters }) => {
    const theme = useTheme();
    log(theme);
    const colors = colorTokens(theme.palette.mode);
    const colorMode = React.useContext(ColorModeContext);
    console.log(theme.palette.mode);
    return (
        <Layout>
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
            <Link href="/lifts/create" className="ml-4">
                Add Lift
            </Link>
            <ul className="list-none flex">
                {lifts.links.map((link) => (
                    <li key={link.id}>
                        <Link
                            component={InertiaLink}
                            className={`relative block rounded bg-transparent px-2 py-1 text-sm  no-underline transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white  ${
                                link.active ? "text-red-500" : "text-slate-900"
                            }`}
                            href={link.url}
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
            {lifts.data.map((lift) => (
                <Box
                    key={lift.id}
                    sx={{
                        display: "inline-block",
                        maxWidth: "10vw",
                    }}
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
                                color:
                                    theme.palette.mode === "dark"
                                        ? "red"
                                        : "green",
                                // color: "#2d4d9d",
                                "&:hover": {
                                    // color: "#2d4dfd",
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
                </Box>
            ))}
            <br />
            <Stack spacing={2}>
                {/* <Pagination
                    page={lifts.current_page}
                    // count={5}
                    count={lifts_total_count}
                    variant="outlined"
                    shape="rounded"
                    onChange={(e, page) => {
                        router.visit(route("lift.index") + `?page=${page}`);
                        // console.log(e, page)
                    }}
                /> */}
            </Stack>
        </Layout>
    );
};

export default Index;
