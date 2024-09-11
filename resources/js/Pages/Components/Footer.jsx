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
            <h2>Social Link</h2>
        </div>


    </div>
  )
}

export default Footer