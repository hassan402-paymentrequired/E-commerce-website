import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import { Link, useForm, usePage } from '@inertiajs/react';
import Paystack from '@paystack/inline-js';
// import { Inertia } from '@inertiajs/inertia';


const CartIndex = ({carts}) => {

    const [product, setProduct] = useState([]);

    const {auth:user} = usePage().props;

    

    useEffect(() => {

        setProduct(carts[0]?.cart_item)
      
    }, [])
    let price = 0;
    const {post,get, data, setData, errors} = useForm(product)


    const handlecartTotal = e => {
        product?.forEach((p) => {
            price += parseInt(p.product.price);
            
        })
    }

    handlecartTotal()

  let tax = parseFloat(7 * price / 100)  
  let amount = tax +  price ;
  
  const handleCheckOut = e => {
    e.preventDefault();
    // post('/product/check-out', data);
    const popup = new Paystack()

    popup.checkout({
        key: 'pk_test_7e8ce2fc972866c6f90eaa73dce4a71c97fc6e4f',
        first_name: user.name,
        email: user.email,
        amount: parseInt(amount) * 100,
        onSuccess: (transaction) => {
          console.log(transaction);
          get(`/payment/callback${transaction.redirecturl}`);
        },
        onLoad: (response) => {
          console.log("onLoad: ", response);
        },
        onCancel: () => {
          console.log("onCancel");
        },
        onError: (error) => {
          console.log("Error: ", error.message);
        }
      })


    
  }

    console.log(errors)
  return (
    <div className='w-full flex flex-col gap-4' >
        <NavBar/>


        <div className="font-sans max-w-5xl max-md:max-w-xl mx-auto bg-white ">
            <h1 className="text-3xl font-bold text-gray-800 text-center p-4">Shopping Cart</h1>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
                <div className="md:col-span-2 space-y-4 overflow-hidden overflow-y-auto h-[80vh]">
                    { product?.length ? product?.map(cartItem => (
                        <>
                    <div className="grid grid-cols-3 items-start gap-4" key={cartItem.product.id}>
                        <div className="col-span-2 flex items-start gap-4">
                            <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                                <img src={`/storage/` + cartItem.product.image_url} className="w-full h-full object-contain" />
                            </div>

                            <div className="flex flex-col">
                                <h3 className="text-base font-bold text-gray-800">{cartItem.product.name}</h3>
                                <p className="text-xs font-semibold text-gray-500 mt-0.5">Size: MD</p>

                                <Link as='button' href={`/product/cart-destroy/${cartItem.product.id}`} preserveScroll method="delete" data={{ product_id: cartItem.product.id }}
                                 className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-current inline" viewBox="0 0 24 24">
                                        <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path>
                                        <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"></path>
                                    </svg>
                                    
                                    REMOVE

                                </Link>

                            </div>
                        </div>

                        <div className="ml-auto">
                            <h4 className="text-lg max-sm:text-base font-bold text-gray-800">${cartItem.product.price}</h4>

                            <span className='text-xs font-bold text-green-500 mt-6 flex items-center px-3 py-1.5'>
                                Quantity 1
                            </span>
                        </div>
                    </div>

                    <hr className="border-gray-300" />
                    </>
                    )) :
                    <>
                     <h1 className='text-4xl font-bold text-gray-500 text-center'>No Item In Your Cart </h1> 
                     <Link href='/products' className='text-sm text-blue-500 font-bold underline ml-[10rem] flex '>Go shopping</Link>
                     </>
                     }


                 

                </div>

                <div className="bg-gray-100 rounded-md p-4 h-max">
                    <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">Order Summary</h3>

                 

                    <ul className="text-gray-800 mt-6 space-y-3">
                        <li className="flex flex-wrap gap-4 text-sm">Subtotal <span className="ml-auto font-bold">${price}.00</span></li>
                        <li className="flex flex-wrap gap-4 text-sm">Shipping <span className="ml-auto font-bold">$2.00</span></li>
                        <li className="flex flex-wrap gap-4 text-sm">Tax <span className="ml-auto font-bold">${tax}</span></li>
                        <hr className="border-gray-300" />
                        <li className="flex flex-wrap gap-4 text-sm font-bold">Total <span className="ml-auto">${parseInt(amount + 2)}.00</span></li>
                    </ul>

                    <div className="mt-6 space-x-3  flex ">
                        <Link href='/products' className=" text-sm px-4 py-1.5  font-semibold  bg-transparent text-gray-800 border border-gray-300 rounded-md">Continue Shopping  </Link>
                        <form onSubmit={handleCheckOut}  className={`${product?.length ? 'flex' : 'hidden'}`}>
                           <button type='submit' className="text-sm px-4 py-1.5  font-semibold bg-gray-800 hover:bg-gray-900 text-white rounded-md">Checkout</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CartIndex