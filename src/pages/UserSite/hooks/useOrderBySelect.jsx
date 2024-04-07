import { useContext } from 'react'
import { filterContext } from '../../../Context/contexts'

export const useOrderBySelect = ({ orderRef }) => {
  const { setFilterState, filterState } = useContext(filterContext)
  const handleOrderChange = () => {
    setFilterState((prev) => ({
      ...prev,
      order: orderRef.current.value
    }))
  }

  return { handleOrderChange, filterState }
}
