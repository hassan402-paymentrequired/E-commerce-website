export const categories = [
    "Electronics",
    "Fashion",
    "Books",
    "Jewelry & Watches",
    "Computers & Accessories",
    "Beverages",
    "Toys & Games",
    "Medical Supplies",
    "Automotive",
    "Sportswear",
    "Beauty & Personal Care",
    "Home & Kitchen",
    "Furniture",
    "Groceries",
    "Pet Supplies",
    "Office Supplies",
];

export const Brands = [
    "Apple",
    "hp",
    "Watch",
    "lenovo",
    "phones",
    "teckno",
    "Kelloggs"
]

export const MinPriceSort = (products) => {

    // for (let i = 0; i <= products.length; i++) {
    //     let temp = 0;
        
    //     for (let j = 1; j <= products.length - 1; j++) {
            
    //         if (products[i].price > products[j].price) {
    //             temp = products[i];
    //             products[i] = products[j];
    //             products[j] = temp;
    //         }

            
    //     }

        
    // }
    // products
     let minimum;
    minimum = products.sort((a,b) => b.price - a.price)
    return minimum

}





// <Dropdown
// showArrow
// classNames={{
//     base: "before:bg-default-200", // change arrow background
//     content:
//         "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
// }}
// >
// <DropdownTrigger>
//     <Button variant="bordered">
//        </Button>
// </DropdownTrigger>
// <DropdownMenu
//     variant="faded"
//     aria-label="Dropdown menu with description"
// >
//     <DropdownSection title="Cart">
//         {carts[0]?.cart_item?.map((product) => (
//                 <DropdownItem
//                     key={product.id}
//                     shortcut={`$${product.product.price}`}
//                     // startContent={<AddNoteIcon className={iconClasses} />}
//                 >
//                     {product.product.name}
//                 </DropdownItem>
//         ))}
       
//     </DropdownSection>
  
//     <DropdownItem href="" className="flex text-center text-sm font-bold border-2  text-black rounded border-black mb-2 w-full">Go to cart</DropdownItem>
//     <DropdownItem className="flex text-center text-sm font-bold bg-black text-white rounded border ">Check out</DropdownItem>
// </DropdownMenu>
// </Dropdown>