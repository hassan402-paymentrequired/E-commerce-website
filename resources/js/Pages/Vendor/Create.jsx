import React from "react";
import AuthenticatedLayout from "../Layout/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";

const Create = () => {
    const { data , setData, post , errors, processing} = useForm({
        name: "",
        description: "",
        thumbnail: null,
    });

    const handleSubmit = e => {
        e.preventDefault();
        post('/vendor/store/create');        
    }


    const change = e => {
        data.thumbnail = e.target.files[0]
        // e => setData('thumbnail', e.target.files[0])
    }


    return (
        <AuthenticatedLayout>
            <div className="flex flex-col items-center justify-center h-screen">
                <h2 className="text-3xl font-semibold text-center mb-4">
                    Almost Done setting up your store
                </h2>

                <form className="flex flex-col w-full max-w-xl md:max-w-4xl  p-2 space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Store name"
                        className="input bg-transparent input-bordered w-full "
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                    />
                    <textarea
                        className="textarea bg-transparent textarea-bordered"
                        placeholder="Store description"
                        value={data.description}
                        onChange={e => setData('description', e.target.value)}
                    ></textarea>
                    <div className="flex flex-col space-y-2">
                        <span className="text-sm font-semibold">
                            Store Logo
                        </span>
                        <input type="file" className="file-input input-bordered bg-transparent w-full" onChange={change} />
                    </div>

                    <button
                        type="submit"
                        className="px-4 py-1.5 font-semibold rounded-md bg-green-500"
                    >
                        Create
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
