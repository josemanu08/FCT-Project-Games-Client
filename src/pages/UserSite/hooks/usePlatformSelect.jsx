import { useContext } from 'react'
import { filterContext } from '../../../Context/contexts'

export const usePlatformSelect = ({ platformRef }) => {
  const { setFilterState, filterState } = useContext(filterContext)
  const platformHandler = () => {
    setFilterState((previous) => {
      return ({
        ...previous,
        platform: platformRef.current.value
      })
    })
  }
  return { platformHandler, filterState }
}
