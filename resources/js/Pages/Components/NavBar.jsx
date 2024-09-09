import { usePage, Link } from "@inertiajs/react";
import React, { useContext, useState } from "react";
import { FilterContext } from "../../context/FilterProductContext";
import {
    Dropdown,
    DropdownSection,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button,
    cn,
} from "@nextui-org/react";


const NavBar = () => {
    const { ci, wi , auth:user} = usePage().props;
    const { search, min, max, category, carts } = useContext(FilterContext);
    const [cartVisible, setCartVisible] = useState(false);

    let link = user.role === 'vendor' ? '/vendor/dashboard' : '/buyer/dashboard';



    const iconClasses =
        "text-xl text-default-500 pointer-events-none flex-shrink-0";

    return (
        <divb className="w-full h-14 border-b-[1px]  justify-center pr-32">
            <ul className="flex space-x-3 h-full w-full items-center justify-end">
                <li className="text-xs font-semibold text-gray-700">
                    <Link href="/products">Shop</Link>
                </li>
                <li className="text-xs font-semibold text-gray-700">
                    <Link href="/account">My account</Link>
                </li>
                <li className="text-xs font-semibold text-gray-700">
                    <Link href={link}>Dashboard</Link>
                </li>
                <Link href="/product/cart"
                    className="text-xs font-semibold flex  text-gray-700  "
                >
                    <span className="">{ci}</span>
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                        </svg>
            
                </Link>
                <li className="text-xs font-semibold text-gray-700 relative">
                    <span className="absolute top-1 -right-2">{wi}</span>
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
        </divb>
    );
};

export default NavBar;
