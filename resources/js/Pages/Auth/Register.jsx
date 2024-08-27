import React from "react";
import GuestLayout from "../Layout/GuestLayout";
import { Link, router, useForm } from "@inertiajs/react";
import InputError from "../Components/InputError";

const Register = () => {
    const { data, setData, post, hasErrors, errors, processing } = useForm({
        name: "",
        email: "",
        address: "",
        role: "",
        profile: null,
        phone_number: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        post("/users/register", data);
    };

    

    return (
        <GuestLayout>
            <div className="w-full flex h-full">
                {/* form */}
                <div className="flex-1 p-3 md:full flex items-center justify-center  w-full h-screen overflow-y-auto">
                  
                            <form
                                className="w-full max-w-lg"
                                onSubmit={handleSubmit}
                            >
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                                            htmlFor="grid-first-name"
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded text-sm font-semibold py-2.5 px-2 leading-tight focus:outline-none focus:bg-white"
                                            id="grid-first-name"
                                            type="text"
                                            placeholder="Jane"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                        />
                                        {errors.name && (
                                            <InputError message={errors.name} />
                                        )}
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-last-name"
                                        >
                                            Role
                                        </label>
                                        <div className="relative">
                                            <select
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded text-sm font-semibold py-2.5 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                onChange={(e) =>
                                                    setData(
                                                        "role",
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="customer">
                                                    Customer
                                                </option>
                                                <option value="vendor" >
                                                    Vendor
                                                </option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg
                                                    className="fill-current h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </div>
                                            {errors.role && (
                                            <InputError message={errors.role} />
                                        )}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-3">
                                    <div className="w-full px-3">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                                            htmlFor="grid-email"
                                        >
                                            Email
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700  border border-gray-200 rounded  text-sm font-semibold py-2.5 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
                                            id="grid-email"
                                            type="email"
                                            placeholder="example@gmail.com"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                        />
                                        {errors.email && (
                                            <InputError
                                                message={errors.email}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-2">
                                    <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="phone-city"
                                        >
                                            Telephone
                                        </label>
                                        <input
                                            className="appearance-none focus:shadow-sm block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded text-sm font-semibold py-2.5 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
                                            id="phone-city"
                                            type="number"
                                            placeholder="+234******"
                                            value={data.phone_number}
                                            onChange={(e) =>
                                                setData(
                                                    "phone_number",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.phone_number && (
                                            <InputError
                                                message={errors.phone_number}
                                            />
                                        )}
                                    </div>
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="address-city"
                                        >
                                            Address
                                        </label>
                                        <input
                                            className="appearance-none focus:shadow-sm block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded text-sm font-semibold py-2.5 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
                                            id="address-city"
                                            type="text"
                                            placeholder="Albuquerque"
                                            value={data.address}
                                            onChange={(e) =>
                                                setData(
                                                    "address",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.name && (
                                            <InputError
                                                message={errors.address}
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-wrap -mx-3 mb-2">
                                    <div className="w-full px-3">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Password
                                        </label>
                                        <input
                                            className="appearance-none focus:shadow-sm block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded text-sm font-semibold py-2.5 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
                                            id="grid-password"
                                            type="password"
                                            placeholder="******************"
                                            value={data.password}
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.password && (
                                            <InputError
                                                message={errors.password}
                                            />
                                        )}
                                        <p className="text-gray-600 text-xs italic">
                                            Make it as long and as crazy as
                                            you'd like
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap -mx-3 mb-2">
                                    <div className="w-full px-3">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Confirm Password
                                        </label>
                                        <input
                                            className="appearance-none focus:shadow-sm block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded text-sm font-semibold py-2.5 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
                                            id="grid-password-confirm"
                                            type="password"
                                            placeholder="******************"
                                            value={data.password_confirmation}
                                            onChange={(e) =>
                                                setData(
                                                    "password_confirmation",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.password && (
                                            <InputError
                                                message={
                                                    errors.password_confirmation
                                                }
                                            />
                                        )}
                                    </div>
                                    <div className="flex">
                                        <Link href="/users/login" className="text-xs font-semibold mt-1 ml-2">Already have an acc? <span className="underline">Login</span></Link>
                                    </div>
                                </div>

                                <div className="flex flex-wrap -mx-3 mb-2">
                                    <div className="w-full px-3">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Profile picture
                                        </label>
                                        <input
                                            className="appearance-none focus:shadow-sm block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded text-sm font-semibold py-2.5 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
                                            type="file"
                                            onChange={(e) =>
                                                setData(
                                                    "profile",
                                                    e.target.files[0]
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="flex">
                                        <Link href="/users/login" className="text-xs font-semibold mt-1 ml-2">Already have an acc? <span className="underline">Login</span></Link>
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center justify-end gap-x-6">
                                    <button
                                        type="submit"
                                        className="rounded-md bg-black px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>

                     
                      

                {/* hero-img */}
                <div className="md:flex-1 w-full h-full md:flex hidden">
                    <img
                        src="https://cdn.pixabay.com/photo/2018/02/21/10/46/stock-3170020_1280.jpg"
                        className="w-full h-full"
                        alt=""
                    />
                </div>
            </div>
        </GuestLayout>
    );
};

export default Register;
