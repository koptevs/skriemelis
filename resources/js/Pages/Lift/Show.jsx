import { Link as InertiaLink, Head, router } from "@inertiajs/react";
import Link from "@mui/material/Link";

import Button from "@mui/material/Button";

import Layout from "../AdminPanel/Layout";
import { Typography } from "@mui/material";

import dayjs from "dayjs";

const Show = ({ lift }) => {
    const {
        reg_number,
        address,
        installation_year,
        factory_number,
        load,
        speed,
        inspections,
    } = lift;

    const recentInspection = inspections.sort((a, b) => {
        return dayjs(b.date_start).unix() - dayjs(a.date_start).unix();
    })[0];

    return (
        <Layout>
            {/* <pre>{JSON.stringify(lift, 2, 2)}</pre> */}
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
                {reg_number}
            </Typography>
            <Typography>
                Address:{" "}
                <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                    {address}
                </span>
            </Typography>
            <Typography>
                Year:{" "}
                <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                    {installation_year} g.
                </span>
            </Typography>
            <Typography>
                Factory number:{" "}
                <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                    {factory_number}
                </span>
            </Typography>
            <Typography>
                Load:{" "}
                <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                    {load} kg.
                </span>
            </Typography>
            <Typography>
                Speed:{" "}
                <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                    {speed} m/s
                </span>
            </Typography>
            {recentInspection && (
                <>
                    <Typography sx={{ mt: 2, fontWeight: 600 }} variant="h5">
                        Last Inspection Results
                    </Typography>

                    <Link
                        component={InertiaLink}
                        href={route("inspections.show", recentInspection.id)}
                        sx={{
                            textDecoration: "none",
                        }}
                    >
                        <Typography
                            sx={{
                                my: 1,
                                fontWeight: 600,
                                color: "tomato",
                            }}
                            variant="h6"
                        >
                            {recentInspection.protocol_number}
                        </Typography>
                    </Link>

                    <Typography>
                        Insp. start -{" "}
                        <span style={{ fontWeight: 600 }}>
                            {dayjs(recentInspection.date_start).format(
                                "DD.MM.YYYY"
                            )}
                        </span>
                    </Typography>
                    <Typography>
                        Insp. Next -{" "}
                        <span style={{ fontWeight: 600 }}>
                            {dayjs(recentInspection.date_next).format(
                                "DD.MM.YYYY"
                            )}
                        </span>
                    </Typography>
                    <Typography>
                        Insp. Next Type -{" "}
                        <span style={{ fontWeight: 600 }}>
                            {recentInspection.inspection_next_type}
                        </span>{" "}
                    </Typography>

                    {recentInspection.non_compliances_1.length > 4 && (
                        <>
                            <Typography style={{ fontWeight: 600 }}>
                                Neatbilsības 1:{" "}
                            </Typography>
                            <div style={{ fontSize: "11px", width: "100%" }}>
                                {/* {recentInspection.non_compliances_1.replace(
                        /(\r\n|\r|\n)/g,
                        "<br>"
                    )} */}
                                {Object.entries(
                                    JSON.parse(
                                        recentInspection.non_compliances_1
                                    )
                                ).map(([index, value]) => (
                                    <Typography key={index}>{value}</Typography>
                                ))}
                            </div>
                        </>
                    )}

                    {recentInspection.non_compliances_2.length > 4 && (
                        <>
                            <Typography style={{ fontWeight: 600 }}>
                                Neatbilsības 2:{" "}
                            </Typography>
                            <div style={{ fontSize: "11px", width: "100%" }}>
                                {/* {recentInspection.non_compliances_1.replace(
                        /(\r\n|\r|\n)/g,
                        "<br>"
                    )} */}
                                {Object.entries(
                                    JSON.parse(
                                        recentInspection.non_compliances_2
                                    )
                                ).map(([index, value]) => (
                                    <Typography key={index}>{value}</Typography>
                                ))}
                            </div>
                        </>
                    )}

                    {recentInspection.non_compliances_3.length > 4 && (
                        <>
                            <Typography style={{ fontWeight: 600 }}>
                                Neatbilsības 3:{" "}
                            </Typography>
                            <div style={{ fontSize: "11px", width: "100%" }}>
                                {/* {recentInspection.non_compliances_1.replace(
                        /(\r\n|\r|\n)/g,
                        "<br>"
                    )} */}
                                {Object.entries(
                                    JSON.parse(
                                        recentInspection.non_compliances_3
                                    )
                                ).map(([index, value]) => (
                                    <Typography key={index}>{value}</Typography>
                                ))}
                            </div>
                        </>
                    )}
                </>
            )}
            {/* {dayjs(inspection.date_start).format(
                                    "DD.MM.YYYY"
                                )} */}
            <Link
                component={InertiaLink}
                href={route("lifts.edit", lift.id)}
                className="no-underline font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >
                <h3 className="text-sm text-sky-800 m-0 ">Edit</h3>
            </Link>
            <Button
                variant="link"
                size="small"
                onClick={() =>
                    router.delete(`/lifts/${lift.id}`, {
                        onBefore: () =>
                            confirm("Чем лифт тебе мешает? Точно удалить?"),
                    })
                }
            >
                Delete
            </Button>
        </Layout>
    );
};

export default Show;
