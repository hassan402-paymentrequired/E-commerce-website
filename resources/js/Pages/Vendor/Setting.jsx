import React from "react";
import VendorDashboardLayout from "../Layout/VendorDashboardLayout";
import { useForm, usePage } from "@inertiajs/react";

const Setting = ({ stores }) => {
    const { auth } = usePage().props;

    const { data, setData, errors, post } = useForm({
        email: auth.email,
        name: auth.name,
        address: auth.address,
    });

    const {
        data: store,
        setData: setStore,
        errors: error,
        patch: update,
    } = useForm({
        address: stores[0].address,
        name: stores[0].name,
        descrption: stores[0].descrption,
    });

    const {
        data: pass,
        setData: setPass,
        errors: err,
        patch,
    } = useForm({
        old_password: "",
        new_password: "",
    });

    const changeProfileInfo = (e) => {
        e.preventDefault();

        post("/buyer/profile");
    };

    const changePassword = (e) => {
        e.preventDefault();
        patch(`/buyer/password-update/${auth.id}`);
    };

    const updateStoreDesc = e => {
        e.preventDefault();
        update(`/vendor/store-update/${stores[0].id}`)
    }

    // console.log(stores);
    

    return (
        <VendorDashboardLayout>
            <div className="p-5 space-y-10">
                <div className="card p-4 card-bordered">
                    <h1 className="font-bold ">Personal Information</h1>
                    <form
                        className="p-3 w-full space-y-4 flex flex-col card-body"
                        onSubmit={changeProfileInfo}
                    >
                        <div className="flex flex-col space-y-1">
                            <label
                                htmlFor="email"
                                className="text-xs font-bold"
                            >
                                Email Address
                            </label>
                            <input
                                type="text"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                value={data.email}
                                className="bg-transparent p-2 border rounded"
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="name" className="text-xs font-bold">
                                Full name
                            </label>
                            <input
                                type="text"
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                value={data.name}
                                className="bg-transparent p-2 border rounded"
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="name" className="text-xs font-bold">
                                address
                            </label>
                            <input
                                type="text"
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                                value={data.address}
                                className="bg-transparent p-2 border rounded"
                            />
                            <p className="text-sm font-semibold my-1">
                                Change your account details, or{" "}
                                <a href="#" className="underline">
                                    click here
                                </a>{" "}
                                to change your password
                            </p>
                        </div>

                        <button
                            type="submit"
                            className="px-4 py-2 rounded text-sm font-bold bg-black text-white"
                        >
                            Update Account
                        </button>
                    </form>
                </div>

                <div className="card p-4 card-bordered">
                    <h1 className="font-bold ">Store Information</h1>
                    <form
                        className="p-3 w-full space-y-4 flex flex-col card-body"
                        onSubmit={updateStoreDesc}
                    >
                        <div className="flex flex-col space-y-1">
                            <label
                                htmlFor="email"
                                className="text-xs font-bold"
                            >
                                Store name
                            </label>
                            <input
                                type="text"
                                onChange={(e) =>
                                    setStore("name", e.target.value)
                                }
                                value={store.name}
                                className="bg-transparent p-2 border rounded"
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="name" className="text-xs font-bold">
                                Store address
                            </label>
                            <input
                                type="text"
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                                value={store.address}
                                className="bg-transparent p-2 border rounded"
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="name" className="text-xs font-bold">
                                Store description
                            </label>
                            <textarea
                                rows="3"
                                onChange={(e) =>
                                    setStore("descrption", e.target.value)
                                }
                                className="bg-transparent resize-none p-2 border rounded"
                            >
                                {store.descrption}
                            </textarea>
                        </div>

                        <button
                            type="submit"
                            className="px-4 py-2 rounded text-sm font-bold bg-black text-white"
                        >
                            Update Store
                        </button>
                    </form>
                </div>

                <div className="card p-4 card-bordered">
                    <h1 className="font-bold ">Password update</h1>
                    <form
                        className="p-3 w-full space-y-4 flex flex-col card-body"
                        onSubmit={changePassword}
                    >
                        <div className="flex flex-col space-y-1">
                            <label
                                htmlFor="email"
                                className="text-xs font-bold"
                            >
                                Old password
                            </label>
                            <input
                                type="text"
                                onChange={(e) =>
                                    setPass("old_password", e.target.value)
                                }
                                value={pass.old_password}
                                className="bg-transparent p-2 border rounded"
                                placeholder="123***"
                                required
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="name" className="text-xs font-bold">
                                New password
                            </label>
                            <input
                                type="text"
                                onChange={(e) =>
                                    setPass("new_password", e.target.value)
                                }
                                value={pass.new_password}
                                className="bg-transparent p-2 border rounded"
                                placeholder="123***"
                                required
                            />
                        </div>
                        {err.old_password && (
                            <InputError message={"password incorrect"} />
                        )}

                        <button
                            type="submit"
                            className="px-4 py-2 rounded text-sm font-bold bg-black text-white"
                        >
                            Update password
                        </button>
                    </form>
                </div>
            </div>
        </VendorDashboardLayout>
    );
};

export default Setting;
