import React from "react";
import AdminDashboardLayout from "../Layout/AdminDashboardLayout";
import { Link } from "@inertiajs/react";

const Products = ({ products }) => {
    console.log(products);
    return (
        <AdminDashboardLayout>
            <div className="flex flex-col p-5">
                <section class="container px-4 mx-auto">
                    <div class="flex items-center gap-x-3">
                        <h2 class="text-lg font-medium text-gray-800 dark:text-white">
                            All products
                        </h2>

                        <span class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
                            {products.length} products
                        </span>
                    </div>

                    <div class="flex flex-col mt-6">
                        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead class="bg-gray-50 dark:bg-gray-800">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                >
                                                    <div class="flex items-center gap-x-3">
                                                        <span>Vendor</span>
                                                    </div>
                                                </th>

                                                <th
                                                    scope="col"
                                                    class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                >
                                                    <button class="flex items-center gap-x-2">
                                                        <span>Price</span>
                                                    </button>
                                                </th>

                                                <th
                                                    scope="col"
                                                    class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                >
                                                    <button class="flex items-center gap-x-2">
                                                        <span>
                                                            Product name
                                                        </span>
                                                    </button>
                                                </th>

                                                <th
                                                    scope="col"
                                                    class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                >
                                                    Product category
                                                </th>

                                                <th
                                                    scope="col"
                                                    class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                >
                                                    Product brand
                                                </th>

                                                <th
                                                    scope="col"
                                                    class="relative py-3.5 px-4"
                                                >
                                                    <span class="sr-only">
                                                        Edit
                                                    </span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                            {products.map((product) => (
                                                <tr>
                                                    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        <div class="inline-flex items-center gap-x-3">
                                                            <div class="flex items-center gap-x-2">
                                                                <img
                                                                    class="object-cover w-10 h-10 rounded-full"
                                                                    src={`/storage/${product.vendor.thumnail}`}
                                                                    alt=""
                                                                />
                                                                <div>
                                                                    <h2 class="font-medium text-gray-800 dark:text-white ">
                                                                        {
                                                                            product
                                                                                .vendor
                                                                                .namr
                                                                        }
                                                                    </h2>
                                                                    <p class="text-sm font-normal text-gray-600 dark:text-gray-400">
                                                                        @authurmelo
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        <div class="inline-flex items-center px-3 py-1 rounded-full  bg-emerald-100/60 dark:bg-gray-800">
                                                            <span class="  text-emerald-500">
                                                                $
                                                            </span>

                                                            <h2 class="text-sm font-normal text-emerald-500">
                                                                {product.price}
                                                            </h2>
                                                        </div>
                                                    </td>
                                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        {product.name}
                                                    </td>
                                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        {product.category.name}
                                                    </td>
                                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                        <div class="flex items-center gap-x-2">
                                                            <p class="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                                                {
                                                                    product
                                                                        .brand
                                                                        .name
                                                                }
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                        <div class="flex items-center gap-x-6">
                                                            <Link
                                                                href={`/product/v1/${product.id}`}
                                                                class=" text-emerald-400 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
                                                            >
                                                                more...
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </AdminDashboardLayout>
    );
};

export default Products;
