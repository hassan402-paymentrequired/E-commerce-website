import React from "react";
import { usePage, Link } from "@inertiajs/react";
import BuyerDashboardLayout from "../Layout/BuyerDashboardLayout ";

const Dashboard = ({ recentPurchases }) => {
    console.log(recentPurchases);
    const { auth: user } = usePage().props;
    return (
        <BuyerDashboardLayout>
            <h2 class="text-4xl text-white mb-5 font-bold">
                welcome,
                {user.name}
            </h2>

            {/* appointment card */}
            <div className="md:flex flex-row items-center gap-5 justify-evenly w-full mt-5 p-5 ">
                <div className="p-5 flex flex-col py-9 space-y-3 shadow-md flex-1 rounded-md">
                    <h2 className="flex items-center space-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-9 text-[#FFD147] font-bold"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                                clip-rule="evenodd"
                            />
                        </svg>

                        <span className="text-black text-4xl font-bold">
                            10
                        </span>
                    </h2>

                    <p className="text-gray-500 text-sm ">
                        Total number of pending Order
                    </p>
                </div>

                <div className="p-5 flex flex-col py-9 space-y-3 shadow-md  flex-1 rounded-md">
                    <h2 className="flex items-center space-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-8 text-green-500"
                        >
                            <path d="M12 11.993a.75.75 0 0 0-.75.75v.006c0 .414.336.75.75.75h.006a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75H12ZM12 16.494a.75.75 0 0 0-.75.75v.005c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H12ZM8.999 17.244a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.006ZM7.499 16.494a.75.75 0 0 0-.75.75v.005c0 .414.336.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H7.5ZM13.499 14.997a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.005ZM14.25 16.494a.75.75 0 0 0-.75.75v.006c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75h-.005ZM15.75 14.995a.75.75 0 0 1 .75-.75h.005a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75H16.5a.75.75 0 0 1-.75-.75v-.006ZM13.498 12.743a.75.75 0 0 1 .75-.75h2.25a.75.75 0 1 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75ZM6.748 14.993a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" />
                            <path
                                fill-rule="evenodd"
                                d="M18 2.993a.75.75 0 0 0-1.5 0v1.5h-9V2.994a.75.75 0 1 0-1.5 0v1.497h-.752a3 3 0 0 0-3 3v11.252a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V7.492a3 3 0 0 0-3-3H18V2.993ZM3.748 18.743v-7.5a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-13.5a1.5 1.5 0 0 1-1.5-1.5Z"
                                clip-rule="evenodd"
                            />
                        </svg>

                        <span className="text-black text-4xl font-bold">
                            10
                        </span>
                    </h2>

                    <p className="text-gray-500 text-sm">
                        Total number of Completed appointments
                    </p>
                </div>

                <div className="p-5 flex flex-col py-9 space-y-3 shadow-md  flex-1 rounded-md">
                    <h2 className="flex items-center space-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-9 text-red-600"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                                clipRule="evenodd"
                            />
                        </svg>

                        <span className="text-black text-4xl font-bold">
                            10
                        </span>
                    </h2>

                    <p className="text-gray-500 text-sm">
                        Total number of canceled order
                    </p>
                </div>
            </div>

            <div className="flex gap-3 ">
                {/* recent purchase */}
                <div className="flex-1">
                    <h2 className="text-3xl font-semibold text-black p-3">
                        Recent purchases
                    </h2>
                    <section class="container px-4 mx-auto">
                        <div class="flex flex-col">
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
                                                            <input
                                                                type="checkbox"
                                                                class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                                                            />
                                                            <button class="flex items-center gap-x-2">
                                                                <span>
                                                                    Oder id
                                                                </span>

                                                                <svg
                                                                    class="h-3"
                                                                    viewBox="0 0 10 11"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                                                                        fill="currentColor"
                                                                        stroke="currentColor"
                                                                        stroke-width="0.1"
                                                                    />
                                                                    <path
                                                                        d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                                                                        fill="currentColor"
                                                                        stroke="currentColor"
                                                                        stroke-width="0.1"
                                                                    />
                                                                    <path
                                                                        d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                                                                        fill="currentColor"
                                                                        stroke="currentColor"
                                                                        stroke-width="0.3"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </th>

                                                    <th
                                                        scope="col"
                                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                    >
                                                        Date
                                                    </th>

                                                    <th
                                                        scope="col"
                                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                    >
                                                        Status
                                                    </th>

                                                    <th
                                                        scope="col"
                                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                    >
                                                        Product purchased
                                                        
                                                    </th>

                                                    <th
                                                        scope="col"
                                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                    >
                                                        Vendor
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                                {recentPurchases.map(recent => (
                                                <tr>
                                                    <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                                        <div class="inline-flex items-center gap-x-3">
                                                            <input
                                                                type="checkbox"
                                                                class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                                                            />

                                                            <span>#3066</span>
                                                        </div>
                                                    </td>
                                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        {recent.created_at}
                                                    </td>
                                                    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                                            <svg
                                                                width="12"
                                                                height="12"
                                                                viewBox="0 0 12 12"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M10 3L4.5 8.5L2 6"
                                                                    stroke="currentColor"
                                                                    stroke-width="1.5"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                />
                                                            </svg>

                                                            <h2 class="text-sm font-normal">
                                                                Paid
                                                            </h2>
                                                        </div>
                                                    </td>
                                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        <div class="flex items-center gap-x-2">
                                                            <img
                                                                class="object-cover w-8 h-8 rounded-full"
                                                                src={`/storage/${recent.product.image_url}`}
                                                                alt=""
                                                            />
                                                            <div>
                                                                <h2 class="text-sm font-medium text-gray-800 dark:text-white ">
                                                                    {recent.product.name}
                                                                </h2>
                                                                <p class="text-xs font-normal text-gray-600 dark:text-gray-400">
                                                                    ${recent.product.price}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        {recent.vendor.name}
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
            </div>
        </BuyerDashboardLayout>
    );
};

export default Dashboard;
