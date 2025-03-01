import { Link, router } from "@inertiajs/react";
import React from "react";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Index = ({
    lifts,
    filters,
}: {
    lifts: any;
    filters: any;
}): JSX.Element => {
    console.log(lifts);
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl leading-tight font-semibold text-gray-800 dark:text-gray-200">
                    Lifti
                </h2>
            }
        >
            <Head title="Lifti" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mt-4 flex justify-center space-x-4 text-xl">
                    {lifts.links.map((link: any) => (
                        <Link
                            key={link.id}
                            // component={InertiaLink}
                            // className={`relative block rounded bg-transparent px-2 py-1 text-sm  no-underline transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white  ${
                            //     link.active ? "text-red-500" : "text-slate-900"
                            // }`}
                            href={link.url}
                            // sx={{
                            //     textDecoration: "none",
                            //     fontWeight: "600",
                            //     fontSize: "1rem",
                            //     marginRight: "1em",
                            //     color: link.active
                            //         ? colors.redAccent[500]
                            //         : colors.blueAccent[300],
                            // }}
                        >
                            {link.label === "&laquo; Previous"
                                ? "<<"
                                : link.label === "Next &raquo;"
                                  ? ">>"
                                  : link.label}
                        </Link>
                    ))}

                    {/* <pre>{JSON.stringify(lifts, null, 2)}</pre> */}
                </div>
                <div className="mt-4 md:flex md:space-x-4">
                    <div>
                        <label htmlFor="search-reg" className="mr-3 text-sm">
                            Поиск по Reg. Nr.{"  "}
                        </label>
                        <input
                            id="search-reg"
                            type="text"
                            value={filters.search}
                            // placeholder={filters.search}
                            className="rounded-lg border px-4 py-2 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                            onChange={(e) => {
                                router.get(
                                    "/lifts",
                                    { search: e.target.value },
                                    {
                                        preserveState: true,
                                        replace: true,
                                    }
                                );
                            }}
                        />
                    </div>
                    <div className="mt-2 md:mt-0">
                        <label
                            htmlFor="search-street"
                            className="mr-3 text-sm md:ml-4"
                        >
                            Поиск по улице {"  "}
                        </label>
                        <input
                            id="search-street"
                            type="text"
                            placeholder={filters.street}
                            className="rounded-lg border px-4 py-2 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
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
                    </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {lifts.data.map((lift: any) => {
                        let statusMarkColor = null;
                        const status = lift.inspection_status;

                        if (status === "0") {
                            statusMarkColor = "bg-green-300";
                        } else if (status === "1") {
                            statusMarkColor = "bg-yellow-200";
                        } else if (status === "2") {
                            statusMarkColor = "bg-orange-400";
                        } else if (status === "3") {
                            statusMarkColor = "bg-red-600";
                        }

                        return (
                            <div
                                key={lift.id}
                                className="rounded-md bg-gray-100 p-2 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                            >
                                <Link href={route("lifts.show", lift.id)}>
                                    <h3 className="font-bold">
                                        {lift.reg_number}{" "}
                                        <span
                                            className={
                                                "bg-re ml-2 inline-block h-[10px] w-[10px] rounded-full " +
                                                statusMarkColor
                                            }
                                        ></span>
                                    </h3>
                                    <p>{lift.address}</p>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
