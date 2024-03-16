import { useState } from 'react'

export const useModal = () => {
  const [modalData, setModalData] = useState(null)
  return { modalData, setModalData }
}
