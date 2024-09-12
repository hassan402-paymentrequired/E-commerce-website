import React from 'react'
import GuestNav from '../Components/GuestNav'
import SingleProductCart from '../Components/SingleProductCart'

const Show = ({name, products}) => {
    
  return (
    <div>
        
        <GuestNav/>

<div className="flex justify-center items-center h-[30vh] bg-gray-300">
    <h2 className="text-3xl font-semibold text-black">{name}</h2>
</div>

    <SingleProductCart product={products}/>
    </div>
  )
}

export default Show