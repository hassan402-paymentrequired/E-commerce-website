import React from 'react';
import GuestLayout from '../Layout/GuestLayout';
import { Link, useForm } from "@inertiajs/react";
import InputError from "../Components/InputError";

const Login = () => {
    const { data, setData, post, hasErrors, errors, processing } = useForm({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post("/users/login", data);
    };

    

    return (
        <GuestLayout>
            <div className="w-full flex h-full">
                {/* hero-img */}
                <div className="md:flex-1 w-full h-full md:flex hidden">
                    <img
                        src="https://cdn.pixabay.com/photo/2015/12/07/14/09/shopping-cart-1080835_1280.jpg"
                        className="w-full h-full"
                        alt=""
                    />
                </div>


                {/* form */}
                <div className="flex-1 p-3 md:full flex items-center justify-center  w-full h-screen overflow-y-auto">
                  
                            <form
                                className="w-full max-w-lg"
                                onSubmit={handleSubmit}
                            >
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
                                    </div>
                                    <div className="flex justify-between mx-4 w-full">
                                        <Link href="/" className="text-xs font-semibold mt-1">Don't have an acc? <span className="underline">Sign up</span></Link>
                                        <Link href="/users/login" className="text-xs font-semibold mt-1 text-red-500">Forgot password</Link>
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center justify-end gap-x-6">
                                    <button
                                        type="submit"
                                        className="rounded-md bg-black px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>

            </div>
        </GuestLayout>
    );
};

export default Login