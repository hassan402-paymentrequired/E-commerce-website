import { Link } from '@inertiajs/react'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="gap-3 grid grid-cols-1 md:grid-cols-2 p-2 bg-gray-200 h-full w-full">

    <div className="flex w-full justify-center flex-col p-3 space-y-2">
    
        <h2 className="text-7xl text-center uppercase font-bold py-2 text-black">
            only the <br/>
            <span className='font-normal'>best thing</span> <br/>
            <span className='font-semibold'>100% online</span>
            </h2>

            <p className='text-sm text-gray-500 mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio molestias sunt possimus adipisci qui officia. Repellendus, reprehenderit, ad rem aliquid ex ea veritatis, quos mollitia incidunt fuga accusantium nobis odit?</p>

            <Link href='/products' className='bg-black text-white h-10 flex items-center justify-center rounded text-sm btn-outline w-1/3 mt-5'>Shop now</Link>
    </div>

    <div className=' flex h-full object-fill'>
        <img src={`/storage/hero.png`} alt="hello" className='w-full h-full' />
    </div>

</div>
  )
}

export default HeroSection