import { Link } from '@inertiajs/react'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full grid grid-cols-6 gap-3 p-5'>

        <div className="border border-black col-span-1 p-5 rounded-md">
            <h2 className='text-xl py-2 font-semibold'>Pages</h2>
            <div className="flex flex-col space-y-3">
                <Link href='#' className='text-sm underline'>New Arrival</Link>
                <Link href='#' className='text-sm underline'>Shop</Link>
                <Link href='#' className='text-sm underline'>Vendor</Link>
                <Link href='#' className='text-sm underline'>About us</Link>
                <Link href='#' className='text-sm underline'>Contact us</Link>
            </div>
        </div>

        <div className="border border-black col-span-3 p-5 rounded-md">
        
        <img src="/storage/logo.png" alt="" className='w-16'/>

        <div className="flex flex-col space-y-3 text-center text-gray-500 text-sm py-3">
            <p >Welcome to <span className='font-bold'>digg</span>, Your go-to for timeless elegance and modern style. Explore out carefully curated collections. featuring pieces crafted with meticulous attention to detail. Elevate your wardrope with Digg</p>

            <p>Address: lagos Nigeria</p>
            <p>Phone: (+234) 7049137994</p>
        </div>

        </div>

        <div className="border border-black col-span-2 p-5 rounded-md">
            <h2 className='font-semibold text-black'>Social Link</h2>
  <aside className='p-2 flex flex-col gap-2 items-center justify-center'>
  <img src="/storage/logo.png" width={50} alt="" />
    <p className="font-bold">
      DIGG Industries Ltd.
     
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
    <p className='mt-5 font-xs text-gray-600'>In collaboration with laramic studio</p>
  </aside>
  </div>


    </div>
  )
}

export default Footer