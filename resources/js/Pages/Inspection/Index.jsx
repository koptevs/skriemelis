import React from "react";
import dayjs from "dayjs";
import { Grid, Typography, useTheme } from "@mui/material";
import Link from "@mui/material/Link";
import { Link as InertiaLink, Head } from "@inertiajs/react";

import Layout from "../AdminPanel/Layout";
import { colorTokens } from "@/theme";

const Index = ({ inspections }) => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    return (
        <Layout>
            {/*<pre>{JSON.stringify(inspections, 2, 2)}</pre>*/}

            <Head title="Lifti" />
            <Grid container spacing={3}>
                {/* <pre>{JSON.stringify(inspections, 2, 2)}</pre> */}
                {inspections.map((inspection) => (
                    <Grid
                        item
                        key={inspection.id}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        xl={2}
                    >
                        <Link
                            component={InertiaLink}
                            href={route("inspections.show", inspection.id)}
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
                                {inspection.protocol_number}
                            </Typography>
                            <Typography>
                                {dayjs(inspection.date_start).format(
                                    "DD.MM.YYYY"
                                ) +
                                    " - " +
                                    dayjs(inspection.date_end).format(
                                        "DD.MM.YYYY"
                                    )}
                            </Typography>
                            <Link
                                component={InertiaLink}
                                href={route("lifts.show", inspection.lift.id)}
                                sx={{
                                    textDecoration: "none",
                                    display: "inline-block",
                                }}
                            >

                            <Typography sx={{ fontWeight: 600}}>
                                {inspection.lift.reg_number}
                            </Typography>

                            </Link>
                            <Typography sx={{ fontWeight: 600}}>
                                {inspection.lift.address}
                            </Typography>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Layout>
    );
};

export default Index;
