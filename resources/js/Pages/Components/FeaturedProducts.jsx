import React from "react";

const FeaturedProducts = () => {
    return (
        <div className="w-full h-full mb-5">
            <div className="grid  md:grid-cols-2 grid-cols-1  items-center justify-between p-10">
                <h2 className="text-3xl text-black font-semibold mb-3 ">
                    Featured product
                </h2>
                <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus, dolorem officiis laboriosam mollitia provident
                    assumenda expedita iste totam nobis nesciunt nulla voluptas
                    obcaecati accusamus, architecto aliquid. Nemo dolorum nulla
                    cum.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-3  max-w-7xl mx-auto">
                <div className="flex h-[70%] relative">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                    <span className="text-sm font-bold text-white bg-slate-900 p-1 rounded absolute right-2 top-2">
                        $200
                    </span>
                </div>

                <div className="grid md:grid-cols-3 grid-cols-1 gap-2 grid-rows-1 md:grid-rows-2 h-[70%]">
                    <div className=" relative">
                        <img
                            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <span className="text-sm font-bold text-white bg-slate-900 p-1 rounded absolute right-2 top-2">
                            $299
                        </span>
                    </div>
                    <div className=" relative">
                        <img
                            src="https://cdn.pixabay.com/photo/2017/08/20/10/39/leather-shoes-2661249_640.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <span className="text-sm font-bold text-white bg-slate-900 p-1 rounded absolute right-2 top-2">
                            $50.00
                        </span>
                    </div>
                    <div className=" relative">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfbEQscCGMXDT0QJaH_BUQm0TgRdLIYAwbDw&s"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <span className="text-sm font-bold text-white bg-slate-900 p-1 rounded absolute right-2 top-2">
                            $35.32
                        </span>
                    </div>
                    <div className=" relative">
                        <img
                            src="https://www.pickfu.com/blog/wp-content/uploads/2019/09/e-commerce-product-images.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <span className="text-sm font-bold text-white bg-slate-900 p-1 rounded absolute right-2 top-2">
                            $50
                        </span>
                    </div>
                    <div className=" relative">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhgRzwYTa7wCJ8bK17xvSK1IjAyUpmF4HyA&s"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <span className="text-sm font-bold text-white bg-slate-900 p-1 rounded absolute right-2 top-2">
                            $70.99
                        </span>
                    </div>
                    <div className=" relative">
                        <img
                            src="/storage/gExA9P28LMgjRQLYJrLtKWOJc3iws1yMa5myzWoM.webp"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <span className="text-sm font-bold text-white bg-slate-900 p-1 rounded absolute right-2 top-2">
                            $10.43
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
