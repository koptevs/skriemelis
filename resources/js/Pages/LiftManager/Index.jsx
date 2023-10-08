import { Link, Head } from "@inertiajs/react";
import Stack from "@mui/material/Stack";
import Layout from "../AdminPanel/Layout";

const Index = ({ liftManagers }) => {
    return (
        <Layout>
            <Head title="Lift managers" />

            <div>
                <Link href="/lift-managers/create" className="ml-4">
                    Add Lift Manager
                </Link>
            </div>

            {liftManagers.map((liftManager) => (
                <div key={liftManager.id} className="inline-block m-2 w-60">
                    <Link
                        href={route("lift-managers.show", liftManager.id)}
                        className="no-underline font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        <h2 className="text-sm text-sky-800 mb-0 ">
                            {liftManager.id} - {liftManager.name} <br />
                            {liftManager.reg_number}
                        </h2>
                    </Link>

                    <p className="text-xs py-0">
                        {liftManager.address},
                        {/* {liftManager.address_postal_code},{" "}
                        {liftManager.address_country} */}
                    </p>
                </div>
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
