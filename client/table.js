import React from 'react'
const axios = require('axios');
const cheerio = require('cheerio');
const Sentiment = require('sentiment');
const yelp = require('yelp-fusion');

class Table extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      url: this.props.url,
      reviews: []
    }
  }
  componentDidMount () {
    this.getRestaurantReviews(this.bizId)
  }

  getbusinessId = (url) => {
    let startIdx = url.indexOf('biz/') + 4
    let endIdx = url.indexOf('?')
    if (endIdx === -1){
      endIdx = url.length
    }
    let bizId = url.split('').slice(startIdx, endIdx).join('')
    return bizId
  }

  parse = (response) => {
    let sentiment = new Sentiment()
    let parsed = response.reviews.map(eaReview => {
      return {review: eaReview.text, rating: eaReview.rating, score: sentiment.analyze(eaReview.text).score}
    })

    return parsed
  }

    getSentimentScore (reviews) {
    let result = this.sentiment.analyze(reviews)
    return result.score
  }

  getRestaurantReviews () {
    let id = this.getbusinessId(this.props.url)
    // axios.get(`https://api.yelp.com/v3/businesses/${id}/reviews`, {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${id}/reviews`, {
        //required authorization format from API
        headers: {
          //need to hide key in a secrets file
            Authorization: 'Bearer RFjX6wL0YbJSDHpkizRDX-M7eH4eqQH8qr1PSyugkS1y4Fxw4CqJ3SvC5PnmT6RPGCYsryQmIZmamkVUE6BTaOFq2ZK7ftc2QQLlIyaDrJYf2ybeBjtvyTvSJGx3XXYx'
        }
        })
        .then((res) => {
            console.log(res.data)
            //set local state to for reviews
            //prob need to call sentiment here and map through reviews before setting to state
            let formatted = this.parse(res.data)
            this.setState({ reviews: formatted})
        })
        .catch((err) => {
            //send error if there is no info returned from the API
            console.log('Something went wrong', err)
        })
    }

  render () {
    console.log(this.state)
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
                  <td>{review.rating}</td>
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
