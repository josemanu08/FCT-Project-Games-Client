import { useContext } from 'react'
import { filterContext } from '../../../Context/contexts'

export const useSearchBar = ({ searchRef }) => {
  const { setFilterState, filterState } = useContext(filterContext)
  const searchHandler = () => {
    setFilterState((previous) => {
      return ({
        ...previous,
        search: searchRef.current.value
      })
    })
  }
  return { searchHandler, filterState }
}
