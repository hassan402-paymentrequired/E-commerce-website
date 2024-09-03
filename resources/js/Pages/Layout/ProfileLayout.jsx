import { Link, useForm, usePage } from "@inertiajs/react";
import React from "react";

const ProfileLayout = ({ children, profile }) => {
    const { auth: user } = usePage().props


    const { data, setData, post } = useForm({
        id: user?.id,
    });

    const handleLogOut = (e) => {
        e.preventDefault();
        post("/users/logout", data);
    };

    return (
        <div className="w-full flex p-16">
            {/* sidebar */}
            <div className="flex w-72 p-5 h-screen overflow-hidden flex-col  border-r-[1px]">
                <div className="flex">
                    <h2 className="text-xl font-bold mb-4 ">My Profile</h2>
                </div>

                <div className="flex p-3 flex-col space-y-2">
                    <div className="flex items-center mb-5">
                        <img
                            src={profile}
                            alt=""
                            className="rounded-full w-10 h-10 mr-1"
                        />
                        <div className="flex flex-col">
                            <h2 className="text-sm font-bold">{user.name}</h2>
                            <p className="text-xs font-semibold">
                                {user.email}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col ">
                        <ul className="space-y-7">
                            <li className="text-xs text-gray-700 font-bold">
                                <Link href="/account" className="flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-4 mr-1 font-boldsize-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                        />
                                    </svg>
                                    Personal information
                                </Link>
                            </li>
                            <li className="text-xs text-gray-700 font-bold">
                                <Link href="#" className="flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-4 mr-1 font-bold"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                                        />
                                    </svg>
                                    My purchase
                                </Link>
                            </li>
                            <li className="text-xs text-gray-700 font-bold">
                                <Link href="/order" className="flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-4 mr-1 font-bold"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                                        />
                                    </svg>
                                    My Order
                                </Link>
                            </li>

                            {user.role === "vendor" && (
                                <li className="text-xs text-gray-700 font-bold">
                                    <Link href="/products/create" className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="size-4 mr-1"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                         Add products
                                    </Link>
                                </li>
                            )}

                            <li className="text-xs text-gray-700 font-bold">
                                <form onSubmit={handleLogOut}>
                                    <button className="flex" type="submit">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="size-4 mr-1"
                                        >
                                            <path d="M4.75 2A2.75 2.75 0 0 0 2 4.75v6.5A2.75 2.75 0 0 0 4.75 14h3a2.75 2.75 0 0 0 2.75-2.75v-.5a.75.75 0 0 0-1.5 0v.5c0 .69-.56 1.25-1.25 1.25h-3c-.69 0-1.25-.56-1.25-1.25v-6.5c0-.69.56-1.25 1.25-1.25h3C8.44 3.5 9 4.06 9 4.75v.5a.75.75 0 0 0 1.5 0v-.5A2.75 2.75 0 0 0 7.75 2h-3Z" />
                                            <path d="M8.03 6.28a.75.75 0 0 0-1.06-1.06L4.72 7.47a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06l-.97-.97h7.19a.75.75 0 0 0 0-1.5H7.06l.97-.97Z" />
                                        </svg>
                                        Logout
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* nav */}
            <div className="flex w-full flex-col">
                <div className="w-full h-14 border-b-[1px]  justify-center pr-32">
                    <ul className="flex space-x-3 h-full w-full items-center justify-end">
                        <li className="text-xs font-semibold text-gray-700">
                            <a href="/products">Shop</a>
                        </li>
                        <li className="text-xs font-semibold text-gray-700">
                            <a href="/account">My account</a>
                        </li>
                        <li className="text-xs font-semibold text-gray-700">
                            <a href="#">Wishlist</a>
                        </li>
                    </ul>
                </div>

                <div className="p-5">{children}</div>
            </div>
        </div>
    );
};

export default ProfileLayout;
