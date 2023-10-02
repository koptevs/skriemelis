import { Link, Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import Layout from "../AdminPanel/Layout";

const Create = () => {
    function submit(e) {
        e.preventDefault();
        // post('/login')
        console.log(e);
    }

    const {
        data,
        setData,
        post,
        processing,
        hasErrors,
        errors,
        clearErrors,
        isDirty,
        reset,
        wasSuccessful,
    } = useForm({
        regNumber: "",
        factoryNumber: "",
        type: "",
        category: "",
        model: "",
        speed: "",
        load: "",
        manufacturer: "",
        installer: "",
        year: "",
        floors: "",
        addressCountry: "",
        addressNovads: "",
        addressPagasts: "",
        addressCity: "",
        addressStreet: "",
        addressBuilding: "",
        addressEntrance: "",
        addressostal_code: "",
        email: "",
        password: "",
        remember: false,
    });
    return (
        <Layout>
            <Head title="Create new Lift" />
            <div>
                <h1 className="text-xl text-red-900 ">Create new Lift</h1>
                <form onSubmit={submit}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className={
                                        "block mb-1 font-bold text-xs text-gray-700"
                                    }
                                >
                                    Reg. Nr.
                                </label>
                                <input
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className={
                                        "border border-gray-400 p-2 w-full"
                                    }
                                    type="text"
                                    name="email"
                                    id="email"
                                    required
                                />
                                {errors.email && <div>{errors.email}</div>}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className={
                                        "block mb-2 uppercase font-bold text-xs text-gray-700"
                                    }
                                >
                                    Name
                                </label>
                                <input
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className={
                                        "border border-gray-400 p-2 w-full"
                                    }
                                    type="text"
                                    name="email"
                                    id="email"
                                    required
                                />
                                {errors.email && <div>{errors.email}</div>}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className={
                                        "block mb-2 uppercase font-bold text-xs text-gray-700"
                                    }
                                >
                                    Name
                                </label>
                                <input
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className={
                                        "border border-gray-400 p-2 w-full"
                                    }
                                    type="text"
                                    name="email"
                                    id="email"
                                    required
                                />
                                {errors.email && <div>{errors.email}</div>}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className={
                                        "block mb-2 uppercase font-bold text-xs text-gray-700"
                                    }
                                >
                                    Name
                                </label>
                                <input
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className={
                                        "border border-gray-400 p-2 w-full"
                                    }
                                    type="text"
                                    name="email"
                                    id="email"
                                    required
                                />
                                {errors.email && <div>{errors.email}</div>}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className={
                                        "block mb-2 uppercase font-bold text-xs text-gray-700"
                                    }
                                >
                                    Name
                                </label>
                                <input
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className={
                                        "border border-gray-400 p-2 w-full"
                                    }
                                    type="text"
                                    name="email"
                                    id="email"
                                    required
                                />
                                {errors.email && <div>{errors.email}</div>}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className={
                                        "block mb-2 uppercase font-bold text-xs text-gray-700"
                                    }
                                >
                                    Name
                                </label>
                                <input
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className={
                                        "border border-gray-400 p-2 w-full"
                                    }
                                    type="text"
                                    name="email"
                                    id="email"
                                    required
                                />
                                {errors.email && <div>{errors.email}</div>}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div>
                                <label
                                    htmlFor="password"
                                    className={
                                        "block mb-2 uppercase font-bold text-xs text-gray-700"
                                    }
                                >
                                    Name
                                </label>
                                <input
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    className={
                                        "border border-gray-400 p-2 w-full"
                                    }
                                    type="text"
                                    name="password"
                                    id="password"
                                    required
                                />
                                {errors.password && (
                                    <div>{errors.password}</div>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div>
                                <label
                                    htmlFor="remember"
                                    className={
                                        "block mb-2 uppercase font-bold text-xs text-gray-700"
                                    }
                                >
                                    Name
                                </label>
                                <input
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                    className={
                                        "border border-gray-400 p-2 w-full"
                                    }
                                    type="checkbox"
                                    name="remember"
                                    id="remember"
                                />
                            </div>
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        disabled={processing}
                        variant="contained"
                        className="mt-4"
                        size="small"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </Layout>
    );
};

export default Create;
