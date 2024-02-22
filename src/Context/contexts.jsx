/* eslint-disable react/prop-types */
import { createContext, useState, React } from 'react'

const filterContext = createContext()

export const Filter = ({ children }) => {
  const [filterState, setFilterState] = useState({
    rarity: 'all'
  })

  return (
    <filterContext.Provider value={{
      filterState,
      setFilterState
    }}>
        {children}
    </filterContext.Provider>
  )
}
