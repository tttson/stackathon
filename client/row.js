import React, {Component} from 'react'

const Row = (props) => {
  const eachReview = props.reviews
  // console.log('hihihi', props.xyz)
  return (
    <tr>
      <td>{eachReview.score}</td>
      <td>{eachReview.stars}</td>
      <td>{eachReview.review}</td>
    </tr>
    )
}
export default Row
