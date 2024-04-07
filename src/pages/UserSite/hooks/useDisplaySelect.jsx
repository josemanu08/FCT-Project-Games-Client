import { useContext } from 'react'
import { filterContext } from '../../../Context/contexts'

export const useDisplaySelect = ({ displayRef }) => {
  const { filterState, setFilterState } = useContext(filterContext)

  const handleDisplayChange = () => {
    setFilterState((prev) => ({
      ...prev,
      display: findSelected(displayRef.current)
    }))
  }

  const findSelected = (parentElement) => {
    return (
      [...parentElement.children]
        .filter(element => element?.checked)
        .pop()
        ?.value
    )
  }

  return { filterState, handleDisplayChange }
}
