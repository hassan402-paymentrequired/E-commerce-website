import React from "react";
import { brand, categories } from "./utils";
import Range from "./Range";

const MainProductSidebar = () => {
    return (
        <div className=" col-span-2">
            {/* category */}
            <div className="flex rounded-md flex-col border">
                <div className="w-full border-b-2 p-2 ">
                    <h2 className="text-xl font-bold py-2 ">Category</h2>
                </div>

                <div className="flex flex-col">
                    {Object.entries(categories).map(
                        ([category, subcategories]) => (
                            <div className="dropdown dropdown-hover" key={Math.random() + new Date().getTime()}>
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="text-sm text-gray-500 w-full text-left p-2"
                                >
                                    {category}
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu bg-white rounded-md z-[1] w-52 p-2 shadow"
                                >
                                    {subcategories.map((subcategory) => (
                                        <li key={subcategory} className="p-2">
                                            {subcategory}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    )}
                </div>
            </div>

            <Range/>

            {/* Brand */}
            <div className="flex rounded-md flex-col border mt-5">
                <div className="w-full border-b-2 p-2 ">
                    <h2 className="text-xl font-bold py-2 ">Brand</h2>
                </div>

                <div className="flex flex-col">

                    {Object.entries(brand).map(
                        ([category, categoryBrands]) => (
                            <div className="dropdown dropdown-hover" key={Math.random() + new Date().getTime()}>
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="text-sm text-gray-500 w-full text-left p-2"
                                >
                                    {category}
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu bg-white rounded-md z-[1] w-52 p-2 shadow"
                                >
                                    {categoryBrands.map((brands) => (
                                        <li key={brands} className="p-2">
                                            {brands}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default MainProductSidebar;
