import React from "react";
import dayjs from "dayjs";
import { Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";

const Show = ({ lift }: { lift: any }) => {
    const {
        reg_number,
        address,
        installation_year,
        factory_number,
        load,
        speed,
        inspections,
        entry_code,
        bir_url,
    } = lift;

    const inspectionsSortedByDate = inspections.sort((a: any, b: any) => {
        return dayjs(b.date_start).unix() - dayjs(a.date_start).unix();
    });

    const recentInspection = inspectionsSortedByDate[0];

    // console.log(inspectionsSortedByDate);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl leading-tight font-semibold text-gray-800 dark:text-gray-200">
                    Lifts - {address}{" "}
                    {entry_code ? "( " + entry_code + " )" : null}
                </h2>
            }
        >
            <div className="mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">
                {reg_number}
                <br />
                Address:{" "}
                <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                    {address}
                </span>
                <br />
                Year:{" "}
                <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                    {installation_year} g.
                </span>
                <br />
                Factory number:{" "}
                <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                    {factory_number}
                </span>
                <br />
                Load:{" "}
                <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                    {load} kg.
                </span>
                <br />
                Speed:{" "}
                <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                    {speed} m/s
                </span>
                <br />
                Code:{" "}
                <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                    {entry_code}
                </span>
                <br />
                {/*#################################################*/}
                {recentInspection && (
                    <>
                        <h5>Last Inspection Results</h5>

                        <Link
                            href={route(
                                "inspections.show",
                                recentInspection.id
                            )}
                        >
                            <h6>{recentInspection.protocol_number}</h6>
                        </Link>

                        <p>
                            Insp. start -{" "}
                            <span style={{ fontWeight: 600 }}>
                                {dayjs(recentInspection.date_start).format(
                                    "DD.MM.YYYY"
                                )}
                            </span>
                        </p>
                        <p>
                            Insp. Next -{" "}
                            <span style={{ fontWeight: 600 }}>
                                {dayjs(recentInspection.date_next).format(
                                    "DD.MM.YYYY"
                                )}
                            </span>
                        </p>
                        <p>
                            Insp. Next Type -{" "}
                            <span style={{ fontWeight: 600 }}>
                                {recentInspection.inspection_next_type}
                            </span>{" "}
                        </p>
                        <a
                            className="mt-2 inline-block rounded bg-purple-600 px-2 py-1 font-semibold text-white"
                            href={bir_url}
                            target="_blank"
                        >
                            BIR
                        </a>

                        {/*{recentInspection.non_compliances_1.length > 4 && (*/}
                        {/*    <>*/}
                        {/*        <p style={{ fontWeight: 600 }}>*/}
                        {/*            Neatbilsības 1:{" "}*/}
                        {/*        </p>*/}
                        {/*        <div style={{ fontSize: "11px", width: "100%" }}>*/}
                        {/*            /!* {recentInspection.non_compliances_1.replace(*/}
                        {/*        /(\r\n|\r|\n)/g,*/}
                        {/*        "<br>"*/}
                        {/*    )} *!/*/}
                        {/*            {Object.entries(*/}
                        {/*                JSON.parse(*/}
                        {/*                    recentInspection.non_compliances_1*/}
                        {/*                )*/}
                        {/*            ).map(([index, value]) => (*/}
                        {/*                <p key={index}>{value}</p>*/}
                        {/*            ))}*/}
                        {/*        </div>*/}
                        {/*    </>*/}
                        {/*)}*/}

                        {/*{recentInspection.non_compliances_2.length > 4 && (*/}
                        {/*    <>*/}
                        {/*        <p style={{ fontWeight: 600 }}>*/}
                        {/*            Neatbilsības 2:{" "}*/}
                        {/*        </p>*/}
                        {/*        <div style={{ fontSize: "11px", width: "100%" }}>*/}
                        {/*            /!* {recentInspection.non_compliances_1.replace(*/}
                        {/*        /(\r\n|\r|\n)/g,*/}
                        {/*        "<br>"*/}
                        {/*    )} *!/*/}
                        {/*            {Object.entries(*/}
                        {/*                JSON.parse(*/}
                        {/*                    recentInspection.non_compliances_2*/}
                        {/*                )*/}
                        {/*            ).map(([index, value]) => (*/}
                        {/*                <p key={index}>{value}</p>*/}
                        {/*            ))}*/}
                        {/*        </div>*/}
                        {/*    </>*/}
                        {/*)}*/}

                        {/*{recentInspection.non_compliances_3.length > 4 && (*/}
                        {/*    <>*/}
                        {/*        <p style={{ fontWeight: 600 }}>*/}
                        {/*            Neatbilsības 3:{" "}*/}
                        {/*        </p>*/}
                        {/*        <div style={{ fontSize: "11px", width: "100%" }}>*/}
                        {/*            /!* {recentInspection.non_compliances_1.replace(*/}
                        {/*        /(\r\n|\r|\n)/g,*/}
                        {/*        "<br>"*/}
                        {/*    )} *!/*/}
                        {/*            {Object.entries(*/}
                        {/*                JSON.parse(*/}
                        {/*                    recentInspection.non_compliances_3*/}
                        {/*                )*/}
                        {/*            ).map(([index, value]) => (*/}
                        {/*                <p key={index}>{value}</p>*/}
                        {/*            ))}*/}
                        {/*        </div>*/}
                        {/*    </>*/}
                        {/*)}*/}
                    </>
                )}
                {/*    ########################################*/}
                <Link
                    href={route("lifts.edit", lift.id)}
                    className="mr-2 inline-block rounded-sm bg-emerald-800 px-2 py-0.5 font-semibold text-gray-200 no-underline hover:text-gray-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-red-500 dark:text-gray-400 dark:hover:text-white"
                >
                    Edit
                </Link>
                <Link
                    href={route("lifts.checklist", lift.id)}
                    className="mr-2 inline-block rounded-sm bg-fuchsia-800 px-2 py-0.5 font-semibold text-gray-200 no-underline hover:text-gray-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-red-500 dark:text-gray-400 dark:hover:text-white"
                >
                    PL
                </Link>
                {/*<Button*/}
                {/*    variant="link"*/}
                {/*    size="small"*/}
                {/*    onClick={() =>*/}
                {/*        router.delete(`/lifts/${lift.id}`, {*/}
                {/*            onBefore: () =>*/}
                {/*                confirm("Чем лифт тебе мешает? Точно удалить?"),*/}
                {/*        })*/}
                {/*    }*/}
                {/*>*/}
                {/*    Delete*/}
                {/*</Button>*/}
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
