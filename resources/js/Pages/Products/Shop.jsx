import React from 'react'
import GuestNav from '../Components/GuestNav'
import MainProducts from '../Components/MainProducts'

const Shop = ({products}) => {
    // console.log(products)
  return (
    <div>
        <GuestNav/>

        <div className="flex justify-center items-center h-[30vh] bg-gray-300">
            <h2 className="text-3xl font-semibold text-black">Shop</h2>
        </div>

        <MainProducts products={products}/>
    </div>
  )
}

export default Shop