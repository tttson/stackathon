import React from 'react'
const axios = require('axios');
const cheerio = require('cheerio');
const Sentiment = require('sentiment');
const yelp = require('yelp-fusion');
const client = yelp.client('RFjX6wL0YbJSDHpkizRDX-M7eH4eqQH8qr1PSyugkS1y4Fxw4CqJ3SvC5PnmT6RPGCYsryQmIZmamkVUE6BTaOFq2ZK7ftc2QQLlIyaDrJYf2ybeBjtvyTvSJGx3XXYx');

class Table extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      reviews: []
    }
  }
  componentDidMount () {
    client.reviews('los-mariscos-new-york').then(response => {
      this.setState({
        reviews: response.body.reviews
      })
    }).catch(err => {
      console.log(err);
    });
  }

  // getSentimentScore () {
  //   let sentiment = new Sentiment()
  // }

  render () {
    console.log(this.state.reviews)
    return (
        <div id='container'>
          <table>
            <tbody>
              <tr>
                <th>Sentiment Score</th>
                <th>Yelp Stars</th>
                <th>Review</th>
              </tr>
              {
                this.state.reviews.map((review, i) => {
                  return (
                  <tr key={i}>
                  <td>{review.score}</td>
                  <td>{review.stars}</td>
                  <td>{review.review}</td>
                  </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
    )
  }
}

export default Table
