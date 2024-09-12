import { usePage } from "@inertiajs/react";
import React, { useContext, useEffect } from "react";
import { FilterContext } from "../../context/FilterProductContext";
import Notification from "../Components/Notification";


const AuthenticatedLayout = ({ children }) => {

    const {auth:user} = usePage().props;
    const { search, min , max, category, setCart, carts} = useContext(FilterContext);

    
    useEffect(() => {

        Echo.private(`Products.${user.id}`)
        .listen('CartEvent', e => {
            // console.log(e);
            // setCart([...carts, e.product])
            // console.log(carts[0].cart_item.product);
            
        }).listen('WishListEvent', e => {
            console.log(e);
        }).listen('OrderPlaceEvent', e => {
            console.log(e)
        }).listen('OrderItemsStatusUpdate', e => {
            console.log(e)
    })
    }, [])
    

    return (
        <div>
            <Notification />
            <div className="w-full">{children}</div>
        </div>
    );
};

export default AuthenticatedLayout;
