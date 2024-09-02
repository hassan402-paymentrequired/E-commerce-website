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