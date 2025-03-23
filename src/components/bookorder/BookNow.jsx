import React from 'react'
import { useParams } from 'react-router-dom'

function BookNow() {
    const { id } = useParams()
  return (
    <div>
      {id}
    </div>
  )
}

export default BookNow
