import React from 'react'
import BuyerDashboardLayout from "../Layout/BuyerDashboardLayout "
import { Link } from '@inertiajs/react';


const Order = ({orders}) => {
    console.log(orders);
    
    console.log(orders)
    let percent_count;
    const percent = status => {
        switch (status) {
            case 'pending':
                return 40
                break;
            case 'shipped':
                return 65
                break;
            case 'completed':
                return 100
                break;
        
            default:
                return 0;
                break;
        }
    }

  return (
    <BuyerDashboardLayout>
    <div className="p-5">
        <h2 className="text-black font-semibold py-3">
            My Order
        </h2>

        { orders.length ? orders.map(order => (
        <div  className="shadow border-gray-200 px-4 py-6 sm:px-6 lg:p-8" key={order.id}>
        <div class="space-y-4 p-6">
        
          <div class="flex items-center justify-between gap-4">
            <Link href={`/buyer/order/${order.id}`} class="text-sm font-normal text-gray-500 dark:text-gray-400"><span class="font-medium text-gray-900 dark:text-white">Product ID:</span> {order.order_number}</Link>

            <div class="flex items-center justify-end gap-4">
              <p class="text-base font-normal text-gray-900 dark:text-white">x2</p>

              <p class="text-xl font-bold leading-tight text-gray-900 dark:text-white">${order.total_amount}</p>
            </div>
          </div>
        </div>
            {/*  */}
                <div className="mt-6" aria-hidden="true">
                    <div className="overflow-hidden rounded-full bg-gray-200">
                        <div className="h-2 rounded-full bg-blue-600 transition-all transition-2s ease-in-out"
                            style={{ width: percent(order.status) + '%' }} ></div>
                    </div>
                    <div className='mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid'>
                    <div  className="text-blue-600">Order
                        placed
                    </div>
                    <div className="text-center">
                        Processing
                    </div>
                    <div className="text-center">
                        Shipped
                    </div>
                    <div  className="text-right">
                        Delivered
                    </div>
                </div> 
           </div>
            </div>

        )) : <h2 className='text-4xl text-center font-bold text-black'>No Pending Order At the moment</h2>}
    </div>
    </BuyerDashboardLayout>
  )
}

export default Order