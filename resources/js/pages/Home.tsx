import { PageProps } from "@/types";
import * as React from "react";
import { Head } from "@inertiajs/react";
import { TopNavbar } from "@/components/TopNavbar";

export default function Home({ auth }: PageProps) {
    console.log(auth);
    return (
        <>
            <Head title="Home" />
            <TopNavbar auth={auth} />
        </>
    );
}
