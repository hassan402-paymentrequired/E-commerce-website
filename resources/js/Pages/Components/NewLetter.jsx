import React from 'react'

const NewLetter = () => {
  return (
    <div className='w-full items-center justify-center h-[50vh]'>
        
        <div className="flex max-w-5xl mx-auto flex-col">

            <h2 className='text-3xl font-semibold text-center py-2'>Want to get updated on our newly uploaded product</h2>

            <p className='text-gray-500 text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempore, non iste incidunt vitae obcaecati sequi eligendi, explicabo voluptatum iure cum ex eum aut necessitatibus magnam maxime possimus deleniti officiis?</p>

        <div className="md:flex-row flex sm:flex-col  gap-4 items-center w-full justify-center mt-5">
            <input type="text" name="subscribe" id="" placeholder='example@gmail.com' className='p-2 bg-transparent border-black border w-1/3 outline-none'/>
            <button className='w-1/6 bg-black text-sm text-white hover:text-gray-400 h-10'>Subcribe for new letter</button>
        </div>

        </div>

    </div>
  )
}

export default NewLetter