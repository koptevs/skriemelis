import { Link, Head } from "@inertiajs/react";
import Stack from "@mui/material/Stack";
import Layout from "../AdminPanel/Layout";

const Index = ({ mechanics }) => {
    return (
        <Layout>
            <Head title="Mechanics" />

            <div>
                <Link href="/mechanics/create" className="ml-4">
                    Add Mechanic
                </Link>
                {/* <pre>{JSON.stringify(mechanics, 2, 2)}</pre> */}
            </div>
            {mechanics.map((mechanic) => (
                <div key={mechanic.id} className="inline-block m-2 w-60">
                    <Link
                        href={route("mechanics.show", mechanic.id)}
                        className="no-underline font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        <h2 className="text-sm text-sky-800 mb-0 ">
                            {mechanic.id} - {mechanic.name}
                            <br />
                            {mechanic.phone}
                            <br />
                            {mechanic.company}
                        </h2>
                    </Link>
                </div>
            ))}
        </Layout>
    );
};

export default Index;
