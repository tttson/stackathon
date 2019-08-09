import React, {Component} from 'react'
import Row from './row'

const Table = (props) => {
  const reviews = props.placeholder1
  const selectReview = props.placeholder2
  // console.log('testinggg', props)
  return (
  <table className="table is-fullwidth">
    <tbody>
    <thead>
      <tr>
        <th>Sentiment Score</th>
        <th>Yelp Stars</th>
        <th>Good Option For</th>
        <th>Dress Attire Suggestions</th>
      </tr>
    </thead>
      {
        reviews.map(eareview => (
        <Row key={eareview.id} placeholder3= {eareview} placeholder4= {selectReview} />
        ))
      }
    </tbody>
  </table>
  )
}

export default Table
