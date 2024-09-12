import React, { useEffect, useState } from 'react'
import BuyerDashboardLayout from '../Layout/BuyerDashboardLayout '
import moment from "moment";
import { Link } from '@inertiajs/react';

const OrderItems = ({orders}) => {
    console.log(orders);

    const [order, setOrder] = useState([])

    useEffect(() => {

        setOrder(orders)
      
    }, [])

    const formatDate = (date) => {

        return  moment(date).format('MMM D, YYYY');
    }

    

    // <svg class="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    //         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
    //     </svg>
    //     In transit
//     <svg class="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"></path>
// </svg>
// Cancelled

    
  return (
    <>
<BuyerDashboardLayout>

          <div class="rounded-lg border  md:p-8">
              <h3 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Latest orders</h3>
          
          {order?.map(product => (
              <div class="flex flex-wrap items-center gap-y-4 border-b border-gray-200 py-4 pb-4 dark:border-gray-700 md:py-5">
                  <dl class="w-1/2 sm:w-48">
                      <dt class="text-base font-medium text-gray-500 dark:text-gray-400">Order ID:</dt>
                      <dd class="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                          <a href="#" class="hover:underline">#FWB12546846</a>
                      </dd>
                  </dl>

                  <dl class="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
                      <dt class="text-base font-medium text-gray-500 dark:text-gray-400">Date:</dt>
                      <dd class="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">{formatDate(product.created_at)}</dd>
                  </dl>

                  <dl class="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
                      <dt class="text-base font-medium text-gray-500 dark:text-gray-400">Product name:</dt>
                      <Link href={`/product/v1/${product.product.id}`} class="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">{product.product.name.slice(0, 10)}</Link>
                  </dl>

                  <dl class="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
                      <dt class="text-base font-medium text-gray-500 dark:text-gray-400">Price:</dt>
                      <dd class="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">${product.price}</dd>
                  </dl>

                  <dl class="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
                      <dt class="text-base font-medium text-gray-500 dark:text-gray-400">Status:</dt>
                      <dd class="mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                          <svg class="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"></path>
                          </svg>
                          {product.status}
                      </dd>
                  </dl>

                  <dl class="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
                      <dt class="text-base font-medium text-gray-500 dark:text-gray-400">Vendor:</dt>
                      <dd class="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">{product.vendor.name}</dd>
                  </dl>

                 
              </div>
          ))}

          </div>
                               
                    

          </BuyerDashboardLayout>
          </>
  )
}

export default OrderItems