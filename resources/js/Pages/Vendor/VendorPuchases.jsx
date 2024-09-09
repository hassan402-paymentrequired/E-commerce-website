import {useState, useEffect} from 'react'
import VendorDashoardLayout from "../Layout/VendorDashboardLayout";
import Table from "../Components/Table";

const VendorPuchases = ({purchases}) => {
    const [purchase, setpurchases] = useState([]);
    
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

    useEffect(() => {
        setpurchases(purchases)
    }, [])
    console.log(purchases);
  return (
    <VendorDashoardLayout>
        <div className='p-4'>
      <h2 className='text-3xl text-black font-semibold my-3'>My Orders</h2>

      <div className="flex flex-col gap-5 p-5">
      {purchase.map(order => (
        <div  className="shadow border-gray-200 px-4 py-6 sm:px-6 lg:p-8" key={order.id}>
        <div class="space-y-4 p-6">
          {/* <div class="flex items-center gap-6">
            <a href="#" class="h-14 w-14 shrink-0">
              <img class="h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg" alt="phone image" />
              <img class="hidden h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg" alt="phone image" />
            </a>

            <a href="#" class="min-w-0 flex-1 font-medium text-gray-900 hover:underline dark:text-white"> Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case with Midnight Sport Band </a>
          </div> */}

          <div class="flex items-center justify-between gap-4">
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400"><span class="font-medium text-gray-900 dark:text-white">Product ID:</span> {order.order_number}</p>

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

        ))}
      </div>

    </div>

    </VendorDashoardLayout>
  )
}

export default VendorPuchases