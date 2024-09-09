import React, { useRef, useState } from "react";
import VendorDashboardLayout from "../Layout/VendorDashboardLayout";
import { Link, router, useForm } from "@inertiajs/react";
import AddCategory from "./AddCategory";

const Create = ({ profile, categories, brands }) => {
    const [ShowAddCategoryBtn, setShowAddCategoryBtn] = useState(false)
    const showImage1 = useRef();
    const [images, setimages] = useState([]);
    const [pic, setpic] = useState("");


    const handleBtnState = () => {
        setShowAddCategoryBtn(true);
    }

    const handleFileUpload = e => {
        if(images.length >= 5)
        {
            alert('You cannot choose more than five images')
            return;
        }

        if(images.includes(e.target.files[0]))
            {
               return alert('You cannot choose more than one copy of image')
                // return;
            }

        setimages([...images, e.target.files[0]])
    }

    const focusInput1 = () => {
        showImage1.current.click();
    };

    const removeImageFromUpload = imag => {
        let image = images
        image = image.filter(img => {
            return imag !== img
        })
        setimages(image)
    }

    const AddImageToFavourite = (image) => {
       let img = images.filter(img => {
            return img !== image
        })
        setimages([image, ...img])
        setpic(image)
    }

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        description: "",
        price: "",
        image: pic,
        category: "",
        brand: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        data.image = images[0];
        router.post("/products/create",[ data, images]);
        // console.log([data, images])
    };

    return (
        <VendorDashboardLayout >
            <div className="p-5">
            <AddCategory show={ShowAddCategoryBtn} setShow={setShowAddCategoryBtn}/>
            <h1 className="font-bold ">Add product</h1>

            <form
                className="p-3 w-full space-y-4 flex flex-col"
                onSubmit={handleSubmit}
            >
                <div className="flex w-full space-x-10">
                    {/* images upload */}


                  {images?.map(img => (
                    <div className="flex flex-col gap-3 w-28 h-28 rounded border-dashed border-2 overflow-hidden relative" key={Math.random() * new Date().getTime()}>
                       <div className="flex absolute justify-between px-3 top-1 left-0 w-full">
                       <span className="w-5 h-5 flex items-center cursor-pointer justify-center rounded-full bg-gray-300" onClick={() => AddImageToFavourite(img)}>@</span>
                       <span className="w-5 h-5 flex items-center cursor-pointer justify-center rounded-full bg-gray-300" onClick={() => removeImageFromUpload(img)}>x</span>
                       </div>
                        <img src={URL.createObjectURL(img)} className="rounded w-full h-full" />
                    </div>
                  )) }

                    <div className="flex flex-col gap-3 w-28 h-28 rounded border-dashed border-2 overflow-hidden">
                        <input
                            type="file"
                            className="hidden"
                            ref={showImage1}
                            onChange={handleFileUpload}
                        />
                        <svg
                            onClick={focusInput1}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={` size-12 mt-7 self-center cursor-pointer flex   `}
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>

                <div className="flex flex-col space-y-1">
                    <label htmlFor="email" className="text-xs font-bold">
                        Products name
                    </label>
                    <input
                        type="text"
                        name=""
                        id="email"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="bg-transparent p-2 border border-gray-400 rounded"
                    />
                </div>
                <div className="flex space-y-1 w-full items-center gap-3">
                    <div className="flex flex-col w-1/2">
                        <label htmlFor="name" className="text-xs font-bold">
                            Category
                        </label>
                        <div className="flex space-x-3 items-center">
                            <select
                                className="bg-transparent p-2 border flex-1 border-gray-400 rounded"
                                value={data.category}
                                onChange={(e) =>
                                    setData("category", e.target.value)
                                }
                            >
                                <option value="">e.g phone</option>
                                {categories.map((category) => (
                                    <option
                                        value={category.name}
                                        key={category.id}
                                    >
                                        {" "}
                                        {category.name}{" "}
                                    </option>
                                ))}
                            </select>
                            <button type="button" onClick={handleBtnState}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="size-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col w-1/2">
                        <label htmlFor="name" className="text-xs font-bold">
                            Brand
                        </label>
                        <div className="flex space-x-3 items-center w-full">
                            <select
                                value={data.brand}
                                onChange={(e) =>
                                    setData("brand", e.target.value)
                                }
                                className="bg-transparent p-2 flex-1 border border-gray-400 rounded"
                            >
                                <option value="">e.g amazon</option>

                                {categories.map((category) => (
                                    <option
                                        value={category.name}
                                        key={category.id}
                                    >
                                        {" "}
                                        {category.name}{" "}
                                    </option>
                                ))}
                            </select>
                            <button type="button">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="size-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-1">
                    <label htmlFor="name" className="text-xs font-bold">
                        Price
                    </label>
                    <input
                        type="number"
                        value={data.price}
                        onChange={(e) => setData("price", e.target.value)}
                        className="bg-transparent p-2 border border-gray-400 rounded"
                    />
                </div>

                <div className="flex flex-col space-y-1">
                    <label htmlFor="dec" className="text-xs font-bold">
                        Description
                    </label>
                    <textarea
                        rows={5}
                        id="dec"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        className="bg-transparent resize-none p-2 border border-gray-400 rounded"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="px-4 py-2 rounded text-sm font-bold bg-black text-white"
                >
                    Add Product
                </button>
            </form>
            </div>
        </VendorDashboardLayout>
    );
};

export default Create;
