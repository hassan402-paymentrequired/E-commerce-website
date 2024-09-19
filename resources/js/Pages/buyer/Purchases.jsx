import React from 'react'
import BuyerDashboardLayout from "../Layout/BuyerDashboardLayout "


const Purchases = ({purchases}) => {
  return (
    <BuyerDashboardLayout>

        <div className="p-4">
            <h2 className="text-black text-xl font-semibold py-3">
                My purchases
            </h2>

            { purchases.length ? purchases.map(order => (
                <div className="h">jeek</div>
     
        )) : <h2 className='text-4xl text-center font-bold text-black mt-10'>No Fucking Order on your history men get your ass to the shop men</h2>}
    
        </div>


    </BuyerDashboardLayout>
  )
}

export default Purchases