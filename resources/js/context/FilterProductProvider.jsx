import {useState} from 'react'
import { FilterContext } from './FilterProductContext'

const FilterProductProvider = ({children}) => {
    const [search, setsearch] = useState("")
    const [min, setMin] = useState("")
    const [max, setMax] = useState("")
    const [category, setCategory] = useState("")



  return (
    <FilterContext.Provider value={{ search, setsearch, category, min, max, setMin, setMax, category, setCategory }}>
            {children}
    </FilterContext.Provider>
  )
}

export default FilterProductProvider