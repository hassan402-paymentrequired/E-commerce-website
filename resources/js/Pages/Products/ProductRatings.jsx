import { Link } from "@inertiajs/react";
import React from "react";

const ProductRatings = ({ rating }) => {
    console.log(rating);

    return (
        <div className="p-3 space-y-5">
            {rating.map((rate) => (
                <article className="w-full border-b-[1px]">
                    <div className="flex items-center mb-4">
                        <img
                            className="w-10 h-10 me-4 rounded-full"
                            src="/docs/images/people/profile-picture-5.jpg"
                            alt=""
                        />
                        <div className="font-medium dark:text-white">
                            <p>
                                {rate.user.name}
                                <span className="block text-sm text-gray-500 dark:text-gray-400">
                                    {rate.user.email}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                        {Array.from({ length: rate.review_count }).map(
                            (_, index) => (
                                <div key={index}>
                                    <svg
                                        className="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>{" "}
                                </div>
                            )
                        )}
                      

                      
                        {/* <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
                        Thinking to buy another one!
                    </h3> */}
                    </div>

                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        {rate.feedback}
                    </p>
                </article>
            ))}
        </div>
    );
};

export default ProductRatings;
