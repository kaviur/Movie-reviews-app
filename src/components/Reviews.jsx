import React from 'react'
import Review from './Review'

const Reviews = ({review}) => {
  return (
        
                <tr class="table-active">
                    <Review key={review.id} review={review}/>
                </tr>
  
  )
}

export default Reviews