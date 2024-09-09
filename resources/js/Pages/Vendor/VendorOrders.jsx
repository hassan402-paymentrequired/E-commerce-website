import {useState, useEffect} from 'react'
import VendorDashoardLayout from "../Layout/VendorDashboardLayout";
import Table from "../Components/Table";


const VendorOrders = ({orders}) => {
const [order, setOrders] = useState([]);

useEffect(() => {

  setOrders(orders)

}, []);
  

// console.log(orders);
  return (
    <VendorDashoardLayout>
    
    
    <div className='p-4'>
      <h2 className='text-3xl text-black font-semibold my-3'>My Orders</h2>

      <Table order={order}/>

    </div>
    </VendorDashoardLayout>
  )
}

export default VendorOrders