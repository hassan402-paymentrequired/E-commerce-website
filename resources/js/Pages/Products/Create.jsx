import React, { useRef, useState } from "react";
import ProfileLayout from "../Layout/ProfileLayout";
import { Link, router, useForm } from "@inertiajs/react";
import AddCategory from "./AddCategory";

const Create = ({ profile, categories, brands }) => {
    const [ShowAddCategoryBtn, setShowAddCategoryBtn] = useState(false)
    const showImage1 = useRef();
    const showImage2 = useRef();
    const showImage3 = useRef();
    const showImage4 = useRef();
    const showImage5 = useRef();
    const [images, setimages] = useState([]);

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        description: "",
        price: "",
        image: null,
        category: "",
        brand: "",
    });

    if (images.length > 0) {
        blah1.src = data.image ? URL.createObjectURL(data.image) : "";
        blah2.src = images[1] ? URL.createObjectURL(images[1]) : "";
        blah3.src = images[2] ? URL.createObjectURL(images[2]) : "";
        blah4.src = images[3] ? URL.createObjectURL(images[3]) : "";
        blah5.src = images[4] ? URL.createObjectURL(images[4]) : "";
    }

  

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post("/products/create",[ data, images]);
        // console.log([data, images])
    };

    const handleBtnState = () => {
        setShowAddCategoryBtn(true);
    }

    const focusInput1 = () => {
        showImage1.current.click();
    };
    const focusInput2 = () => {
        showImage2.current.click();
    };
    const focusInput3 = () => {
        showImage3.current.click();
    };
    const focusInput4 = () => {
        showImage4.current.click();
    };
    const focusInput5 = () => {
        showImage5.current.click();
    };

    return (
        <ProfileLayout profile={profile}>
            <AddCategory show={ShowAddCategoryBtn} setShow={setShowAddCategoryBtn}/>
            <h1 className="font-bold ">Add product</h1>

            <form
                className="p-3 w-full space-y-4 flex flex-col"
                onSubmit={handleSubmit}
            >
                <div className="flex w-full space-x-10">
                    {/* images upload */}

                    <div className="flex flex-col gap-3 w-28 h-28 rounded border-dashed border-2 overflow-hidden">
                        <input
                            type="file"
                            className="hidden"
                            ref={showImage1}
                            onChange={(e) =>
                                setData('image', e.target.files[0])
                            }
                        />
                        <img src="" id="blah1" alt="" className="rounded w-full h-full" />
                        <svg
                            onClick={focusInput1}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={` size-10 mt-5 self-center cursor-pointer flex   `}
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>

                    <div className="flex flex-col gap-3 w-28 h-28 rounded border-dashed border-2 overflow-hidden object-contain">
                        <input
                            type="file"
                            className="hidden"
                            ref={showImage2}
                            onChange={(e) =>
                                setimages([...images, e.target.files[0]])
                            }
                        />
                        <img
                            src=""
                            id="blah2"
                            alt=""
                            className="rounded h-full w-full"
                        />
                        <svg
                            onClick={focusInput2}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={` size-10 mt-5 self-center cursor-pointer flex  `}
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>

                    <div className="flex flex-col gap-3 w-28 h-28 rounded border-dashed border-2 overflow-hidden object-contain ">
                        <input
                            type="file"
                            className="hidden"
                            ref={showImage3}
                            onChange={(e) =>
                                setimages([...images, e.target.files[0]])
                            }
                        />
                        <img
                            src=""
                            id="blah3"
                            alt=""
                            className="rounded w-full h-full"
                        />
                        <svg
                            onClick={focusInput3}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={` size-10 mt-5 self-center cursor-pointer flex  `}
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>

                    <div className="flex flex-col gap-3 w-28 h-28 rounded border-dashed border-2 overflow-hidden object-contain">
                        <input
                            type="file"
                            className="hidden"
                            ref={showImage4}
                            onChange={(e) =>
                                setimages([...images, e.target.files[0]])
                            }
                        />
                        <img src="" id="blah4" alt="" className="rounded" />
                        <svg
                            onClick={focusInput4}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={` size-10 mt-5 self-center cursor-pointer flex `}
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>

                    <div className="flex flex-col gap-3 w-28 h-28 rounded border-dashed border-2 overflow-hidden object-contain">
                        <input
                            type="file"
                            className="hidden"
                            ref={showImage5}
                            onChange={(e) =>
                                setimages([...images, e.target.files[0]])
                            }
                        />
                        <img
                            src=""
                            id="blah5"
                            alt=""
                            className="rounded w-full h-full"
                        />
                        <svg
                            onClick={focusInput5}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={` size-10 mt-5 self-center cursor-pointer flex `}
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
        </ProfileLayout>
    );
};

export default Create;
