import React from 'react'

const Review = (review) => {
  return (
    <td key={review.id}>{review.comment}</td>
  )
}

export default Review