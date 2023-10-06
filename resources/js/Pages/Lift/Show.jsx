import { Link, Head, router } from "@inertiajs/react";
import Button from "@mui/material/Button";

import Layout from "../AdminPanel/Layout";

const Show = ({ lift }) => {
    const { reg_number, address } = lift;

    return (
        <Layout>
            <h1 className="text-2xl text-red-900 ">{reg_number}</h1>
            <p>{address}</p>
            <pre style={{ fontSize: "13px" }}>{JSON.stringify(lift, 2, 2)}</pre>
            <Link
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
