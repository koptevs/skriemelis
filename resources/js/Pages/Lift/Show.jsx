import { Link, Head } from "@inertiajs/react";
import Layout from "../AdminPanel/Layout";

const Show = ({ lift }) => {
    const { reg_number, address } = lift;

    return (
        <Layout>
            <div>
                <h1 className="text-2xl text-red-900 ">{reg_number}</h1>
                <p>{address}</p>
                <div>Index - {JSON.stringify(lift)}</div>
            </div>
        </Layout>
    );
};

export default Show;
