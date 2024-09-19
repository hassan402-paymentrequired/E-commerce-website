import React, { useRef } from "react";
import AuthenticatedLayout from "../Layout/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import toast from 'react-hot-toast';


const Create = () => {

    const profileClick  = useRef();
    const { data, setData, post, errors, processing } = useForm({
        name: "",
        description: "",
        address: "",
        thumbnail: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(data);
        
        post("/vendor/store/create");
    };

    const handleProfileImageUploadClick = () => {
        profileClick.current.click();
    };

    // if(errors.thumbnail ){
            
    //         toast.error(errors.thumbnail)
    //         console.log(errors);
            
    // }

    // console.log(errors);
    
    
    
    const uri = data.thumbnail ? URL.createObjectURL(data.thumbnail) : "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg"
    return (
        <AuthenticatedLayout>
            <div className="grid grid-cols-2">

            <div className="flex flex-col items-center  h-screen p-10 overflow-auto">
                <div className="flex w-full flex-col p-2">
                <h2 className="text-3xl font-bold  mb-1" >
                    Hi, There 👋
                </h2>
                <p className="text-sm font-bold text-gray-500">
                {/* Almost Done setting up your store */}
                Let's get your store up and running in a minute
                </p>

                </div>
                <form
                    className="flex flex-col w-full max-w-xl md:max-w-4xl  p-2 space-y-4"
                    onSubmit={handleSubmit}
                >
                {/* strt */}
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3 hidden">
                        <input
                            ref={profileClick}
                            type="file"
                            className="file-input input-bordered bg-transparent w-full"
                            onChange={(e) => setData('thumbnail', e.target.files[0])}
                        />
                        
                    </div>
                    <div className="flex w-full items-center justify-center">
                        <div className="w-40 mb-2 h-40 rounded-full border relative overflow-hidden  shadow">
                            <img
                                src={uri}
                                id="uri"
                                alt="profile image"
                                className={`w-full h-full rounded-full`}
                            />

                            <span onClick={handleProfileImageUploadClick}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-10 absolute bottom-5 right-3 p-2 rounded-full bg-gray-300"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                {/* end img */}

               
                    <input
                        type="text"
                        placeholder="Store name"
                        className="input bg-transparent input-bordered w-full "
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Store address"
                        className="input bg-transparent input-bordered w-full "
                        value={data.address}
                        onChange={(e) => setData("address", e.target.value)}
                        required
                    />
                    <textarea
                        className="textarea bg-transparent resize-none textarea-bordered"
                        placeholder="Store description"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        rows={5}
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="px-4 py-1.5 font-semibold rounded-md bg-green-500"
                    >
                        Create
                    </button>
                </form>
            </div>

            <div className="md:flex-1 w-full h-full relative md:flex hidden">
                    <img
                        src="https://carmellamarketing.com/wp-content/uploads/2023/05/Screen-Shot-2023-05-09-at-9.50.02-AM-1024x650.png"
                        className="w-full h-full"
                        alt=""
                    />
                    <div className="absolute w-20 h-20 right-20 top-5 p-2 bg-gray-20 rounded backdrop-blur-md ">

                    <img
                        src="/storage/logo.png"
                        className="right-20"
                        alt=""
                    />
                    </div>
                </div>

            </div>

        </AuthenticatedLayout>
    );
};

export default Create;
