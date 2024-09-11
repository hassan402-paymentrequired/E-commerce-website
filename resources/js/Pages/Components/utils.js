export const categories = {
    "Electronics": [
      "Mobile Phones & Accessories",
      "Computers & Laptops",
      "Audio & Headphones",
      "Cameras & Photography",
      "Wearable Technology",
      "Smart Home Devices"
    ],
    "Fashion": [
      "Men’s Clothing",
      "Women’s Clothing",
      "Kids’ Clothing",
      "Shoes",
      "Accessories",
      "Jewelry",
      "Bags & Wallets"
    ],
    "Home & Garden": [
      "Furniture",
      "Home Decor",
      "Kitchenware",
      "Bedding",
      "Outdoor Furniture",
      "Gardening Tools",
      "DIY & Tools"
    ],
    "Beauty & Personal Care": [
      "Skincare",
      "Haircare",
      "Makeup",
      "Fragrances",
      "Personal Hygiene",
      "Health & Wellness"
    ],
    "Health & Fitness": [
      "Exercise Equipment",
      "Supplements",
      "Fitness Apparel",
      "Yoga & Meditation",
      "Wellness Devices"
    ],
    "Sports & Outdoors": [
      "Sports Equipment",
      "Outdoor Gear",
      "Athletic Clothing",
      "Camping & Hiking",
      "Cycling"
    ],
    "Toys & Games": [
      "Action Figures",
      "Board Games",
      "Puzzles",
      "Educational Toys",
      "Outdoor Toys"
    ],
    "Automotive": [
      "Car Accessories",
      "Tools & Equipment",
      "Replacement Parts",
      "Car Care Products",
      "Motorcycle Gear"
    ],
    "Books & Media": [
      "Books",
      "eBooks",
      "Music",
      "Movies & TV Shows",
      "Magazines"
    ],
    "Office Supplies": [
      "Stationery",
      "Office Furniture",
      "Printer Supplies",
      "Organizational Tools"
    ],
    "Food & Beverages": [
      "Groceries",
      "Specialty Foods",
      "Alcoholic Beverages",
      "Health Foods",
      "Gourmet & Gift Baskets"
    ],
    "Pet Supplies": [
      "Pet Food",
      "Pet Toys",
      "Pet Health & Grooming",
      "Pet Beds & Accessories"
    ],
    "Arts & Crafts": [
      "Art Supplies",
      "Craft Kits",
      "DIY Materials",
      "Fabrics & Sewing Supplies"
    ],
    "Jewelry & Watches": [
      "Fine Jewelry",
      "Fashion Jewelry",
      "Watches",
      "Personalized Jewelry"
    ],
    "Baby & Kids": [
      "Baby Gear",
      "Baby Clothing",
      "Nursery Furniture",
      "Kids’ Furniture",
      "Parenting Essentials"
    ],
    "Travel & Luggage": [
      "Luggage",
      "Travel Accessories",
      "Travel Clothing",
      "Outdoor & Adventure Gear"
    ],
    "Specialty Stores": [
      "Vintage & Collectibles",
      "Handmade Goods",
      "Ethical & Sustainable Products"
    ]
  }
  

  export const brand = {
    "Electronics": [
      "Apple",
      "Samsung",
      "Sony",
      "Bose",
      "LG",
      "Dell",
      "Microsoft",
      "HP",
      "Nikon",
      "Panasonic"
    ],
    "Fashion": [
      "Nike",
      "Adidas",
      "Zara",
      "Gucci",
      "Prada",
      "H&M",
      "Uniqlo",
      "Levi's",
      "Chanel",
      "Burberry"
    ],
    "Home & Garden": [
      "IKEA",
      "Home Depot",
      "Lowe's",
      "Wayfair",
      "Pottery Barn",
      "Williams Sonoma",
      "Crate & Barrel",
      "West Elm",
      "Bed Bath & Beyond",
      "Kirkland's"
    ]
  };

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