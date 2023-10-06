import { Link, Head, router } from "@inertiajs/react";
import Button from "@mui/material/Button";

import Layout from "../AdminPanel/Layout";

const Show = ({ liftManager, lifts }) => {
    console.log(liftManager);
    const {
        name,
        reg_number,
        address,
        contract_number,
        contract_date,
        contact_person,
        contact_person_position,
        contact_person_phone,
        contact_person_phone_bill,
        email_for_docs,
        bank_name,
        bank_code,
        bank_account,
        bill_pay_days,
        protocol_with_electric_measurments,
        notes,
    } = liftManager;

    return (
        <Layout>
            <h1 className="text-2xl text-red-900 ">{name}</h1>
            <p>{address}</p>
            <pre style={{ fontSize: "13px" }}>
                {JSON.stringify(liftManager, 2, 2)}
            </pre>
            <p className="flex flex-wrap">
                {lifts.map((lift) => (
                    <div key={lift.id} className="w-48">
                        <span className="mr-4 font-bold">
                            {lift.reg_number}
                        </span>
                        <br />
                        <span className="mr-4">{lift.address}</span>
                    </div>
                ))}
            </p>
            <Link
                href={route("lift-managers.edit", liftManager.id)}
                className="no-underline font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >
                <h3 className="text-sm text-sky-800 m-0 ">Edit</h3>
            </Link>
            <Button
                variant="link"
                size="small"
                onClick={() =>
                    router.delete(`/lift-managers/${liftManager.id}`, {
                        onBefore: () => confirm("Точно удалить манагера?"),
                    })
                }
            >
                Delete
            </Button>
        </Layout>
    );
};

export default Show;
