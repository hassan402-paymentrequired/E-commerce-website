import React from "react";
import AdminDashboardLayout from "../Layout/AdminDashboardLayout";

const OrderItems = ({ orders }) => {
    console.log(orders);
    return (
        <AdminDashboardLayout>
            <div class="font-sans  w-full mx-auto bg-white p-4">
                <div class="gap-12">
                    <div>
                        <div class="bg-gray-100 p-6 rounded-md">
                            <h2 class="text-2xl font-extrabold text-gray-800 flex justify-between">
                                <span>Order Id</span>
                                <span>{orders[0].order_number}</span>
                            </h2>
                            <div class="space-y-4 mt-8">
                                {orders.map((order) =>
                                   order.order_items.map((product) => (
                                        <>
                                            <div class="flex items-center gap-4">
                                                <div class="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                                                    <img
                                                        src={`/storage/${product.product.image_url}`}
                                                        class="w-full h-full object-contain"
                                                    />
                                                </div>

                                                <div class="w-full">
                                                    <h3 class="text-base font-semibold text-gray-800">
                                                    {product.product.name}
                                                    </h3>
                                                    <h6 class="text-sm text-gray-800 font-bold cursor-pointer mt-0.5">
                                                        ${product.product.price}
                                                    </h6>

                                                    <div class="flex gap-4 mt-4">
                                                        <div>
                                                            <button
                                                                type="button"
                                                                class="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
                                                            >
                                                                 Quantity 1
                                                            </button>
                                                        </div>

                                                        <div class="ml-auto font-bold text-emerald-500 text-sm">
                                                        {product.status}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr class="border-gray-300" />
                                        </>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminDashboardLayout>
    );
};

export default OrderItems;
