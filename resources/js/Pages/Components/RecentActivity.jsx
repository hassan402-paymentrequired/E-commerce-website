import React from "react";

const RecentActivity = ({ recent }) => {
  console.log(recent);
    return (
        <div class="w-10/12 xl:w-2/5 md:w-3/5 sm:w-9/12 mx-auto relative shadow-md pl-8 pr-4 sm:pl-8 lg:pr-8 py-4 my-8 rounded-lg bg-white dark:bg-gray-800">
            <div class="flex flex-wrap items-center justify-between">
                <h1 class="text-xl sm:text-3xl font-bold text-gray-800 dark:text-gray-50">
                    Recent Order
                </h1>
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4 sm:h-6 sm:w-6 sm:-ml-8 text-gray-700 dark:text-gray-300 cursor-pointer hover:text-gray-800 dark:hover:text-gray-200"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                </span>
            </div>
            <div class="border-l-2 mt-10">
              {  !recent.lenght ? recent.map(order => (

                <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center pl-12 pr-2 sm:pl-0 sm:pr-0 sm:px-3 py-2 text-white rounded mb-5 flex-col md:flex-row space-y-5 md:space-y-0">
                    <div class="w-8 h-8 bg-blue-200 dark:bg-gray-100 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 mx-auto mt-1.5 text-purple-600 dark:text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                    <div class="flex-auto -ml-12 sm:-ml-16 md:-ml-0">
                        <h3 class="text-lg font-bold -mt-5 md:-mt-0 text-gray-700 dark:text-gray-200">
                            {order.user.name}
                            <span class="font-medium text-purple-600 dark:text-gray-100">
                            {order.product.name}
                            </span>
                        </h3>
                        <small class="text-gray-500 dark:text-gray-300">
                        {order.created_at}
                        </small>
                    </div>
                </div>
              )) : <h2 className="text-3xl font-bold text-center">No recent order on your store at the moment</h2>}
             
            </div>
        </div>
    );
};

export default RecentActivity;
