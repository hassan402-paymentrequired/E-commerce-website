import {useState} from 'react'
import { FilterContext } from './FilterProductContext'

const FilterProductProvider = ({children}) => {
    const [search, setsearch] = useState("")
    const [min, setMin] = useState("")
    const [carts, setCart] = useState(0)
    const [range, setRange] = useState(0)
    const [brand, setBrand] = useState("")
    const [wishList, setWishList] = useState([])
    const [max, setMax] = useState("")
    const [category, setCategory] = useState("")



  return (
    <FilterContext.Provider value={{brand, setBrand, search, setsearch, category, min, max, setMin, setMax, category, setCategory, carts, setCart, wishList, setWishList, range, setRange }}>
            {children}
    </FilterContext.Provider>
  )
}

export default FilterProductProvider