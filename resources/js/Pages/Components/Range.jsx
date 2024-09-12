import React, { useState } from "react";

const Range = () => {
    const [priceFilter, setPriceFilter] = useState(0)
    return (
        <div className="my-3 p-5 border rounded-md">
          <div className="flex w-full flex-col text-neutral-600 dark:text-neutral-300">
    <label htmlFor="rangeSlider" className="w-fit pl-0.5 text-sm">Price</label>
    <input id="rangeSlider" type="range" className="z-10 mb-1 mt-4 h-2 w-full appearance-none bg-neutral-50 focus:outline-black dark:bg-neutral-900 dark:focus:outline-white [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:bg-black active:[&::-moz-range-thumb]:scale-110 [&::-moz-range-thumb]:dark:bg-white [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:border-none [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:active:scale-110 [&::-webkit-slider-thumb]:dark:bg-white [&::-moz-range-thumb]:rounded-full [&::-webkit-slider-thumb]:rounded-full rounded-full" min="0" value={priceFilter} onChange={e => setPriceFilter(e.target.value)} max="1000" step="2" />
    <div className="flex items-center space-x-1 justify-between px-2 text-center text-neutral-600 dark:text-neutral-300">
        <span className="w-0 -translate-x-1 mr-4 text-xs even:hidden md:even:inline-block" aria-hidden="true">${priceFilter}</span> 
        <span className="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block" aria-hidden="true">|</span> 
        <span className="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block" aria-hidden="true">|</span> 
        <span className="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block" aria-hidden="true">|</span> 
        <span className="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block" aria-hidden="true">|</span> 
        <span className="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block" aria-hidden="true">|</span> 
        <span className="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block" aria-hidden="true">|</span> 
        <span className="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block" aria-hidden="true">|</span> 
        <span className="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block" aria-hidden="true">|</span> 
        <span className="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block" aria-hidden="true">|</span> 
        <span className="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block" aria-hidden="true">|</span> 
        <span className="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block" aria-hidden="true">|</span> 
        <span className="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block" aria-hidden="true">|</span> 
        <span className="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block" aria-hidden="true">|</span> 
        <span className="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block" aria-hidden="true">|</span> 
        <span className="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block" aria-hidden="true">|</span> 
        <span className="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block" aria-hidden="true">|</span> 
        <span className="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block" aria-hidden="true">|</span> 
        <span className="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block" aria-hidden="true">|</span> 
        <span className="text-[6px] font-bold opacity-50 even:hidden md:even:inline-block" aria-hidden="true">|</span>    
        <span className="w-0 -translate-x-2 text-xs even:hidden md:even:inline-block" aria-hidden="true">$1000</span>
    </div>
</div>
        </div>
    );
};

export default Range;
