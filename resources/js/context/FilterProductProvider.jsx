import {useState} from 'react'
import { FilterContext } from './FilterProductContext'

const FilterProductProvider = ({children}) => {
    const [search, setsearch] = useState("")
    const [min, setMin] = useState("")
    const [carts, setCart] = useState(0)

    const [wishList, setWishList] = useState([])
    const [max, setMax] = useState("")
    const [category, setCategory] = useState("")



  return (
    <FilterContext.Provider value={{ search, setsearch, category, min, max, setMin, setMax, category, setCategory, carts, setCart, wishList, setWishList }}>
            {children}
    </FilterContext.Provider>
  )
}

export default FilterProductProvider