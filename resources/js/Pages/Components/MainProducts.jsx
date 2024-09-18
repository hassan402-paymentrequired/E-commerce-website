import {useState, useEffect, useContext} from "react";
import MainProductSidebar from "./MainProductSidebar";
import ProductCard from "./ProductCard";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import { FilterContext } from "../../context/FilterProductContext";

export const MainProducts = ({products}) => {
    const [product, setproduct] = useState([])
    // const [cartItem, setcartItem] = useState()

    const { auth:user} = usePage().props;
    const { search, min , max, category,setCategory,  setsearch, setCart:num, brand, setBrand, range, setRange} = useContext(FilterContext);
console.log(category);

    useEffect(() => {
        setproduct(products);
    }, [])

// console.log(product[0].category.name.toLowerCase());

    const getFilterProducts = () => {
        
        let filterProduct = product;

        if(search){
             filterProduct = filterProduct.filter((p) => {
                return p.name.toLowerCase().includes(search.toLowerCase())
             })
             
        }

        if(category){
             filterProduct = filterProduct.filter((p) => {
                return p.category.name.toLowerCase().includes(category)
             })
             
        }

        if(brand){
            filterProduct = filterProduct.filter((p) => {
                return p.brand.name.toLowerCase().includes(brand)
             })       
            
        }

        if(range){
            filterProduct = filterProduct.filter(p => p.price >= 0 && p.price <= range)
        }

        return filterProduct;

    }

    const clearFilter = () => {
        setCategory("");
        setsearch("");
        setBrand("");
        setRange("");
    }

    const filter = getFilterProducts();


        // Initialize state from localStorage or default to empty array
        const [cart, setCart] = useState(() => {
          const savedCart = localStorage.getItem('cart');
          return savedCart ? JSON.parse(savedCart) : [];
        });
      
        // Sync cart state with localStorage whenever it changes
        useEffect(() => {
          localStorage.setItem('cart', JSON.stringify(cart));
          const count = JSON.parse(localStorage.getItem('cart'));
          num(count.length)          
          
        }, [cart]);
      
        const addToCart = (product) => {
            setCart(prevCart => {
                // Check if the product already exists in the cart
                const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
                
                if (existingProductIndex !== -1) {
                  // Product exists, update its quantity
                  const updatedCart = [...prevCart];
                  updatedCart[existingProductIndex].quantity += product.quantity;
                  return updatedCart;
                } else {
                  // Product does not exist, add it to the cart
                  return [...prevCart, product];
                }
              });
        //   setCart(prevCart => [...prevCart, item]);
        };
      
        const removeFromCart = (itemId) => {
          setCart(prevCart => prevCart.filter(item => item.id !== itemId));
        };
      
    

    const { data, setData, post, errors, get } = useForm({
        product_id: "",
        quantity: "",
    });

    const handleCartItem = (product) => {
        if(!user){
            // console.log('local');
            
            addToCart({'product': product, 'vendor_id': product.vendor_id, 'quantity': 1 })
            return
        }else{
            // console.log('db');

            router.post("/product/cart", {
                product_id: product.id,
                price: product.price,
                quantity: 1,
            });
        }
    };
    return (
        <div className="grid gap-4 p-10 grid-cols-8 ">
            <MainProductSidebar />

            <div className="flex flex-col col-span-6">
                {/* header */}
                <div className="flex justify-between p-3 border-b border-black">
                    <div className="relative flex w-full max-w-xs flex-col gap-1 text-neutral-600 dark:text-neutral-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="absolute left-2.5 top-1/2 size-5 -translate-y-1/2 text-neutral-600/50 dark:text-neutral-300/50"
                        >
                            <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                        <input
                            type="search"
                            className="w-full rounded-md border border-neutral-300 bg-neutral-50 py-2 pl-10 pr-2 text-sm outline-none"
                            name="search"
                            value={search}
                            onChange={e => setsearch(e.target.value)}
                            placeholder="Search"
                            aria-label="search"
                        />
                    </div>

                    <div className="flex gap-3 items-center">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className=" p-1 border rounded-sm m-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu bg-white-100 rounded-box z-[1] w-52 p-2 shadow"
                            >
                                <li>
                                    <button >Newest Arrival</button>
                                </li>
                                <li>
                                    <button >Price: Low to High</button>
                                </li>
                                <li>
                                <button >Price: High to Low</button>
                                </li>
                                <li>
                                <button >Product rating</button>
                                </li>
                            </ul>
                        </div>
                        <button className="text-sm p-2 border rounded shadow" onClick={clearFilter}>
                            Clear filter
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-3 p-10">
                    {filter.map(product => (

                    <ProductCard key={product.id} product={product} handleCartClick={handleCartItem}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

