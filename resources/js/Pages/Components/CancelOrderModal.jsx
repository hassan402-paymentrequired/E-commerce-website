import { router, useForm } from '@inertiajs/react';
import React from 'react'

const Modal = ({orderId, route}) => {

    const {data, setData, delete:destroy , errors} = useForm({
        reason: ''
    });
  

    const  handleOrderCanceliation = e => {
        e.preventDefault();
        if(data.reason === "")
          {
            alert("A valid reason is required for the removal of user")
          return
          }
          // document.getElementById("my_modal_2")remov
        destroy(route)
    }
  
    console.log(errors)
  return (
    <>
    <button
        className=""
        onClick={() =>
            document.getElementById("my_modal_2").showModal()
        }
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
        </svg>
    </button>
    <dialog id="my_modal_2" className="modal">
        <form
            className="modal-box bg-white text-left"
            onSubmit={handleOrderCanceliation}
            method='POST'
        >
            <h3 className="font-bold text-lg">Cancel order</h3>
            <p className="py-3">
                Are you sure you want to cancel order with the id of  
                <span className="font-bold text-black"> {orderId}</span>{" "}
            </p>
            <p className="py-3">
                <span className="font-bold text-black">Note:</span>{" "}
                canceling the order will also clear all the items
                under the order
            </p>
            <p className="py-1">
                <span className="font-bold text-black">Note:</span>{" "}
                A notification will be sent to the buyer alongside with your reason 
            </p>
            <div className="flex flex-col">
                <label htmlFor="reason">Reason for cancellation</label>
                <textarea
                    value={data.reason}
                    rows={5}
                    onChange={(e) => setData("reason", e.target.value)}
                    class="resize-none rounded bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="ex:Tne order incharge of your order are unavailable at the moment"
                ></textarea>
            </div>
            <p className="text-xs text-red-500 py-1">{errors.reason}</p>
            <button
                type="submit"
                className="w-full p-2 bg-black text-white mt-5 rounded-sm"
            >
                Cancel
            </button>
        </form>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</>
  )
}

export default Modal