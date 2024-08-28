import React from "react";
import ProductsLayout from "../Layout/ProductsLayout";
import AuthenticatedLayout from "../Layout/AuthenticatedLayout";
import NavBar from "../Components/NavBar";
import { Image } from "@nextui-org/react";
import { useState } from "react";

const Show = ({ product }) => {
    const [rate, setRate] = useState([]);
    const [currentImage, setCurrentImage] = useState(product.image_url)

    const getRatings = () => {
        let count = product.reviews.length;
        let a = [];

        count = (10 / 5) * 2;

        return count;
    };

    const handleImageChange = (image) => {
        setCurrentImage(image)
    }


    return (
        <AuthenticatedLayout>
            <div className="flex w-full flex-col">
                <NavBar />

                <div className="flex flex-col">
                    {/* main */}
                    <div className="flex h-full overflow-hidden p-5 gap-3">
                        {/* image */}
                        <div className="flex gap-3 flex-col flex-1">
                            <div className="bg-gray-500  flex-[3] border w-full flex items-center justify-center overflow-hidden">
                                <Image
                                    width={300}
                                    alt="NextUI hero Image"
                                    src={"/storage/" + currentImage}
                                    className="p-2"
                                />
                            </div>

                            {/* loop image */}
                            <div className="flex  w-full  space-x-4 flex-1">
                                {product.images?.map((img) => (
                                    <div className={`p-2 bg-gray-500  ${ currentImage === img.image_url && 'border-green-500 border-2' }`}>
                                        <Image
                                            onClick={() => setCurrentImage(img.image_url)}
                                            className="h-[200px] object-cover  w-[300px]"
                                            alt="NextUI hero Image"
                                            src={"/storage/" + img.image_url}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className=" flex-1">
                            <div className="flex flex-col gap-5 py-5">
                                <h2 className="text-2xl uppercase tracking-wide font-bold text-black">
                                    {product.name}
                                </h2>

                                {/* reviews */}
                                <div className="flex space-x-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-4 text-yellow-400"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>

                                <div className="flex flex-col gap-3">

                                    <div className="flex gap-2 text-xs font-semibold text-black">
                                        <span>{product.category.name}</span>
                                        <span>|</span>
                                        <span className="text-green-400">In store</span>
                                    </div>

                                <h3 className=" text-2xl font-bold text-black ">
                                    ${product.price}
                                </h3>

                                <p>{product.description}</p>
                                </div>

                                <div className="flex">
                                    <div className="flex flex-col">
                                    <label htmlFor="" className="font-bold">vendor: </label>
                                    <a href="#" className="ml-3 flex items-center gap-1">
                                        <img src={`/storage/` + product.vendor.thumbnail} className="w-10 h-10 rounded-full" alt="" />
                                        {product.vendor.name}
                                    </a>
                                    </div>
                                </div>
                            </div>

                            <hr className="mt-5" />

                            <div className="flex flex-col">
                                <button className="btn">Add to cart</button>
                            </div>
                        </div>
                    </div>

                    {/* addintional informal */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
