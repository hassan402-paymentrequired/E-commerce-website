import React from "react";
import { categories, Brands } from "../Components/utils.js";
import { Link, useForm, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "./AuthenticatedLayout.jsx";

const ProductsLayout = ({ children, }) => {

        const {cart, wishlist} = usePage().props;    

    return (
        <AuthenticatedLayout>
        <div className="w-full flex">
            {/* sidebar */}
            <div className="flex w-72 p-5 h-screen overflow-hidden flex-col  border-r-[1px]">
                <div className="flex">
                    <h2 className="text-xl font-bold mb-4">My Store</h2>
                </div>

                {/* search */}
                <div className="flex mb-4 w-full flex-col">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        className="p-2 outline-none bg-transparent border mb-2"
                        placeholder="search..."
                    />
                    <div className="flex gap-2">
                        <input
                            type="text"
                            name=""
                            id=""
                            className="p-2 outline-none bg-transparent border w-1/2"
                            placeholder="search..."
                        />
                        <input
                            type="text"
                            name=""
                            id=""
                            className="p-2 outline-none bg-transparent border w-1/2"
                            placeholder="search..."
                        />
                    </div>
                </div>

                {/* category */}
                <div className="flex flex-col space-y-2 ">
                    <div className="flex mb-3">
                        <h2 className="text-sm font-bold">Categories</h2>
                    </div>
                    <div
                        className="flex flex-col space-y-2  overflow-y-auto h-[60vh]"
                        style={{ scrollbarWidth: "none" }}
                    >
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className="text-left border-b-[1px] p-1 text-sm font-semibold "
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex w-full flex-col">
                <div className="w-full h-14 border-b-[1px]  justify-center pr-32">
                    <ul className="flex space-x-3 h-full w-full items-center justify-end">
                        <li className="text-xs font-semibold text-gray-700">
                            <Link href="#">Shop</Link>
                        </li>
                        <li className="text-xs font-semibold text-gray-700">
                            <Link href="/account">My account</Link>
                        </li>
                        <li className="text-xs font-semibold text-gray-700 relative">
                            <span className="absolute -top-3 right-0">{cart}</span>
                            <Link href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                    />
                                </svg>
                            </Link>
                        </li>
                        <li className="text-xs font-semibold text-gray-700 relative">
                        <span className="absolute top-1 -right-2">{wishlist}</span>
                            <Link href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                    />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="p-5">{children}</div>
            </div>
        </div>
        </AuthenticatedLayout>
    );
};

export default ProductsLayout;
