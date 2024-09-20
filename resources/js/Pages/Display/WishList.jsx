import React, { useEffect, useState } from 'react'
import GuestNav from '../Components/GuestNav'
import Footer from '../Components/Footer'
import ProductCard from '../Components/ProductCard'

const WishList = ({wishlists}) => {
    const [Wishlist, setWishlist] = useState([])

    useEffect(() => {
     setWishlist(wishlists[0].wish_list_item)
    }, [])
    

    console.log(Wishlist);
    
  return (
    <div>
        <GuestNav/>

        <div className="flex justify-center items-center h-[30vh] bg-gray-300">
            <h2 className="text-3xl font-semibold text-black">WishList</h2>
        </div>


        <Footer/>
    </div>
  )
}

export default WishList