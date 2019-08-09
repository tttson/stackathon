import React, {Component} from 'react'

const Row = (props) => {
  const eachReview = props.reviews
  const selectRestaurant = props.xyz
  // console.log('hihihi', props.xyz)
  return (
    <tr onClick = {() => selectRestaurant(eachReview.id)}>
      <td>{eachReview.score}</td>
      <td>{eachReview.stars}</td>
      <td>{eachReview.occasion}</td>
      <td>{eachReview.dress}</td>
    </tr>
    )
}
export default Row
