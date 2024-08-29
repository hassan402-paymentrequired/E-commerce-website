import { useContext } from "react";
import ProductsLayout from "../Layout/ProductsLayout";
import { Link, router, useForm } from "@inertiajs/react";
import { Image } from "@nextui-org/image";
import { FilterContext } from "../../context/FilterProductContext";
import {useState, useEffect} from 'react'

const Index = ({ products, w, c, ac }) => {
    const [producte, setproducte] = useState([])
    const { search, min , max, category, setCart} = useContext(FilterContext);

    useEffect(() => {
        setproducte(products.data);
        setCart(ac)
    }, [])


    const getFilterProducts = () => {
        
        let filterProduct = producte;

        if(search){
             filterProduct = filterProduct.filter((p) => {
                return p.name.toLowerCase().includes(search.toLowerCase())
             })
             
        }

        // if(min){
        //     filterProduct = filterProduct.sort((a, b) => parseInt(a.price) - parseInt(b.price))
        // }

        return filterProduct;

    }

    const filter = getFilterProducts();

    


    const { data, setData, post, errors } = useForm({
        product_id: "",
        quantity: "",
    });

    const handleCartItem = (product) => {
        router.post("/product/cart", {
            product_id: product.id,
            quantity: 1,
        });
    };

    const handleWishListItem = (product) => {
        router.post("/product/wishlist", {
            product_id: product.id,
            quantity: 1,
        });
    };
    return (
        <ProductsLayout>
            <h1 className="text-lg font-semibold">Products</h1>
            {/* {product.name} */}

            <div className="flex w-full space-x-10">
                {filter.map((product) => (
                    <div
                        key={products.id}
                        className="p-2 group overflow-hidden flex w-52 h-60 flex-col relative rounded bg-gray-50"
                    >
                        <div className="flex w-full  rounded h-1/2 items-center justify-center overflow-hidden">
                            <Image
                                className="w-full h-32 object-cover"
                                alt="product image"
                                loading="lazy"
                                src={`/storage/${product.image_url}`}
                            />
                        </div>

                        <div className="flex flex-col mt-3">
                            <h2>{product.name}</h2>
                            <p className="text-sm font-bold">
                                ${product.price}
                            </p>
                        </div>

                        <div className="flex space-x-2 items-center mt-5">
                            <button
                                onClick={() => handleCartItem(product)}
                                className="px-6 py-2 w-[80%] rounded bg-black text-white text-sm font-bold"
                            >
                                Add to cart
                            </button>
                            <button onClick={() => handleWishListItem(product)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                    />
                                </svg>
                            </button>
                        </div>

                        <Link href={`/product/v1/${product.id}`} className="absolute top-2 -right-10 transition-all animation group-hover:right-4 p-2 rounded-full bg-gray-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                            </svg>
                        </Link>
                    </div>
                ))}
            </div>
        </ProductsLayout>
    );
};

export default Index;
