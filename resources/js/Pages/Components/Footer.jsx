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
  <aside className='p-2 flex flex-col gap-2 items-center justify-center'>
  <img src="/storage/logo.png" width={50} alt="" />
    <p className="font-bold">
      DEGG Industries Ltd.
     
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href='#'
  data-twe-ripple-init
  data-twe-ripple-color="light"
  className="mb-2 flex rounded bg-[#1da1f2] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
  <span className="me-2 [&>svg]:h-4 [&>svg]:w-4"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 512 512">
      <path
        d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
    </svg>
  </span>
  Twitter
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
        </div>


    </div>
  )
}

export default Footer