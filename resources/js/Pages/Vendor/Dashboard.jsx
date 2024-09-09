import {useState, useEffect} from 'react'
import VendorDashboardLayout from '../Layout/VendorDashboardLayout'
import Chart from '../Components/Chart'
import RecentActivity from '../Components/RecentActivity'

const Dashboard = ({latestOrders}) => {
    const [latestOrder, setLatestOrder] = useState([])

    useEffect(() => {
        setLatestOrder(latestOrders)
    })
  return (
    <VendorDashboardLayout>
 <div className='p-5 flex border items-center'>
        <div className="max-w-xl p-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex flex-col">
        <span className="text-xl py-2 text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">Order Statistics</span>
      
      <div className="flex flex-col">

        <div className="flex justify-evenly w-full items-center">
            <div className="p-5 w-32 border space-y-2">
                <span className='text-lg font-bold space-x-2'>
                    10
                <small className='p-1 rounded-md  font-normal text-sm bg-blue-200 ml-2'>$384</small>
                </span>
                <h2 className='flex  text-gray-400'>
                    Active
                </h2>
            </div>
            <div className="p-5 w-32 border space-y-2">
                <span className='text-lg font-bold space-x-2'>
                    10
                <small className='p-1 rounded-md  font-normal text-sm bg-green-200 ml-2'>+$384</small>
                </span>
                <h2 className='flex  text-gray-400'>
                    Completed
                </h2>
            </div>
            <div className="p-5 w-32 border space-y-2">
                <span className='text-lg font-bold space-x-2'>
                    10
                <small className='p-1 rounded-md font-normal text-sm bg-red-200 ml-2'>-$384</small>
                </span>
                <h2 className='flex  text-gray-400'>
                    cancel
                </h2>
            </div>
        </div>

            <Chart />
      </div>
   
   </div>
        </div>
<RecentActivity recent={latestOrder}/>
</div>
    </VendorDashboardLayout>
  )
}

export default Dashboard