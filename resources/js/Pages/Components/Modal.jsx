import { router, useForm } from '@inertiajs/react';
import React from 'react'

const Modal = () => {

    const {data, setData, post , errors} = useForm({
        otp: ''
    });
  

    const  handleOtpVerification = e => {
        e.preventDefault();
        post('/admin/login', data)
    }
  
    console.log(errors)
  return (
<>
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className=" text-sm text-gray-600 hover:underline hover:text-gray-900" onClick={()=>document.getElementById('my_modal_2').showModal()}>Admin</button>
<dialog id="my_modal_2" className="modal">
  <form className="modal-box bg-white" onSubmit={handleOtpVerification} method='POST'>
    <h3 className="font-bold text-lg">Access Verification</h3>
    <p className="py-4">To access the admin page, please enter the 4 digit passkey.....</p>
    <input type="text" value={data.otp} onChange={e => setData('otp', e.target.value)} class="rounded bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="39202"/>
    <p className="text-xs text-red-500 py-1">{errors.otp}</p>
    <button type='submit' className='w-full p-2 bg-black text-white mt-5 rounded-sm'>Continue</button>
  </form>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
</>
  )
}

export default Modal