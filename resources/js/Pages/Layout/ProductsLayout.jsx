import {useContext} from "react";
import { categories, brand } from "../Components/utils.js";
import { Link, useForm, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "./AuthenticatedLayout.jsx";
import { FilterContext } from "../../context/FilterProductContext.js";
import {useState} from 'react'
import NavBar from "../Components/NavBar.jsx";

const ProductsLayout = ({ children, }) => {        
        const {setsearch, search, min, max, category, setCategory, setMin, setMax} = useContext(FilterContext);
        
     
    return (
        <AuthenticatedLayout>
        <div className="w-full flex">
            {/* sidebar */}
            <div className={`flex w-72 p-5 h-screen overflow-hidden flex-col  border-r-[1px]`}>
                <div className="flex">
                    <h2 className="text-xl font-bold mb-4">My Store</h2>
                </div>

                {/* search */}
                <div className="flex mb-4 w-full flex-col">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        value={search}
                        onChange={e => setsearch(e.target.value)}
                        className="p-2 outline-none bg-transparent border mb-2"
                        placeholder="search..."
                    />
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={max}
                        onChange={e => setMax(e.target.value)}
                            className="p-2 outline-none bg-transparent border w-1/2"
                            placeholder="max price"
                        />
                        <input
                            type="text"
                            onChange={e => setMin(e.target.value)}
                            placeholder="min price"
                            value={min}
                            className="p-2 outline-none bg-transparent border w-1/2"
                        />
                    </div>
                </div>

                {/* category */}
                <div className="flex flex-col space-y-2 ">
                    <div className="flex mb-3">
                        <h2 className="text-sm font-bold">Categories</h2>
                    </div>
                    <div key={Math.random() * 2001}
                        className="flex flex-col space-y-2  overflow-y-auto h-[60vh]"
                        style={{ scrollbarWidth: "none" }}
                    >
                        {categories.map((category) => (
                            <button
                            onClick={() => setCategory(category)}
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
                <NavBar/>

                <div className="p-5">{children}</div>
            </div>
        </div>
        </AuthenticatedLayout>
    );
};

export default ProductsLayout;
