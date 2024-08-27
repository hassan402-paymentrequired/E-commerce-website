import { useForm } from "@inertiajs/react";
import React from "react";

const AddCategory = ({ show, setShow }) => {
    const { data, setData, post } = useForm({
        name: '',
        description: 'nice category'
    });

    const handleCategory = e => {
        e.preventDefault();
        setShow(false)
        post('/products/category', data)

        setData('name', '')
    }

    const close = e => {
        setShow(false)
    }

    return (
        <div className={`gap-3 border items-center justify-center p-4 relative -top-4 ${show ? 'flex' : 'hidden'}`}>
            <button onClick={() => close()} className="absolute right-2 w-10 h-10 rounded-full bg-red-300 font-bold">X</button>
        <input className="input bg-transparent text-black border-gray-600 border " placeholder="e.g tablet" value={data.name} onChange={e => setData('name', e.target.value)}/>
        <button onClick={handleCategory} className="btn bg-transparent border text-black ">Add category</button>
      </div>
      
    );
};

export default AddCategory;
