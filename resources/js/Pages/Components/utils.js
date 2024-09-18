import moment from 'moment'

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





export const navigation = {
  pages: [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/product/shop" },
],
  categories: [
      {
          id: "Category",
          name: "Category",
          sections: [
              {
                  id: "clothing",
                  name: "Clothing",
                  items: [
                      { name: "Tops", href: "#" },
                      { name: "Pants", href: "#" },
                      { name: "Sweaters", href: "#" },
                      { name: "T-Shirts", href: "#" },
                      { name: "Jackets", href: "#" },
                      { name: "Activewear", href: "#" },
                      { name: "Browse All", href: "#" },
                  ],
              },
              {
                  id: "accessories",
                  name: "Accessories",
                  items: [
                      { name: "Watches", href: "#" },
                      { name: "Wallets", href: "#" },
                      { name: "Bags", href: "#" },
                      { name: "Sunglasses", href: "#" },
                      { name: "Hats", href: "#" },
                      { name: "Belts", href: "#" },
                  ],
              },

              {
                id: "accessories",
                name: "Accessories",
                items: [
                    { name: "Watches", href: "#" },
                    { name: "Wallets", href: "#" },
                    { name: "Bags", href: "#" },
                    { name: "Sunglasses", href: "#" },
                    { name: "Hats", href: "#" },
                    { name: "Belts", href: "#" },
                ],
            },
          ],
      },
  ],
 
};

export const format = date => {
  return moment(date).format("MMM Do YY")
}