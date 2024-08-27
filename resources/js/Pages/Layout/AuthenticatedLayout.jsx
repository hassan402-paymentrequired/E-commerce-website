import { usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

const AuthenticatedLayout = ({ children }) => {

    const {auth:user} = usePage().props;
    
    useEffect(() => {

        Echo.private(`Products.${user.id}`)
        .listen('CartEvent', e => {
            console.log(e);
            
        }).listen('WishListEvent', e => {
            console.log(e);
        })
    
    }, [])
    

    return (
        <div>
            <div className="w-full">{children}</div>
        </div>
    );
};

export default AuthenticatedLayout;
