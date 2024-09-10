import React from 'react'

const FeaturedProducts = () => {
  return (
    <div className='w-full'>
        
        <div className="grid md:grid-cols-2 grid-cols-1  items-center justify-between p-10">
            <h2 className='text-3xl text-black font-semibold mb-3 '>Featured product</h2>
            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dolorem officiis laboriosam mollitia provident assumenda expedita iste totam nobis nesciunt nulla voluptas obcaecati accusamus, architecto aliquid. Nemo dolorum nulla cum.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex">
            <img src="/storage/gExA9P28LMgjRQLYJrLtKWOJc3iws1yMa5myzWoM.webp" alt="" />
        </div>

        <div className="grid grid-cols-3 gap-2 grid-rows-2">
            <div className="border-black border"></div>
            <div className="border-black border"></div>
            <div className="border-black border"></div>
        </div>

        </div>


    </div>
  )
}

export default FeaturedProducts