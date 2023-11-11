import React from "react";
import dayjs from "dayjs";
import { Grid, Typography, useTheme } from "@mui/material";
import Link from "@mui/material/Link";
import { Link as InertiaLink, Head } from "@inertiajs/react";

import Layout from "../AdminPanel/Layout";
import { colorTokens } from "@/theme";

const Show = ({ inspection, lift }) => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    const nonCompliances0Array = JSON.parse(inspection.non_compliances_0);
    const nonCompliances1Array = JSON.parse(inspection.non_compliances_1);
    const nonCompliances2Array = JSON.parse(inspection.non_compliances_2);
    const nonCompliances3Array = JSON.parse(inspection.non_compliances_3);
    return (
        <Layout>
            <Head title="Inspection" />
            <Grid container spacing={3}>
                <Grid item>
                    {/*<pre>{JSON.stringify(inspection, 2, 2)}</pre>*/}
                    <h1>{inspection.protocol_number}</h1>
                    <a
                        href={route("inspections.protocol", inspection.id)}
                        target="_blank"
                    >
                        <h3>Protocol</h3>
                    </a>
                    <p>
                        {dayjs(inspection.date_start).format("DD.MM.YYYY") +
                            " - " +
                            dayjs(inspection.date_end).format("DD.MM.YYYY")}
                    </p>
                    {nonCompliances1Array && (
                        <h2>Neatbilsības ar vertējumu 1</h2>
                    )}
                    {nonCompliances1Array
                        ? nonCompliances1Array.map((string, index) => (
                              <div key={index}>{string}</div>
                          ))
                        : null}
                    {nonCompliances2Array && (
                        <h2>Neatbilsības ar vertējumu 2</h2>
                    )}
                    {nonCompliances2Array
                        ? nonCompliances2Array.map((string, index) => (
                              <div key={index}>{string}</div>
                          ))
                        : null}
                    {nonCompliances3Array && (
                        <h2>Neatbilsības ar vertējumu 3</h2>
                    )}
                    {nonCompliances3Array
                        ? nonCompliances3Array.map((string, index) => (
                              <div key={index}>{string}</div>
                          ))
                        : null}
                    {/* <pre>{JSON.stringify(inspection, 2, 2)}</pre> */}
                    {/* <pre>{JSON.stringify(lift, 2, 2)}</pre> */}
                </Grid>
            </Grid>
        </Layout>
    );
};

export default Show;

// {dayjs(inspection.date_start).format("DD.MM.YYYY") +
//                             " - " +
//                             dayjs(inspection.date_end).format("DD.MM.YYYY")}
