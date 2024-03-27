import React, { useEffect, useState } from 'react'
import { dataSubject } from '../../../../services/subject-implementation'

export const AdditionalModal = ({ cosa }) => {
  const [data, setData] = useState(null)
  let subject = null

  useEffect(() => {
    subject = dataSubject.getSubject()
    subject.subscribe((datita) => {
      console.log(datita)
    })
  }, [])

  return (
    data &&
    <>
        {alert('soy un modal')}
    </>
  )
}
