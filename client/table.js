import React from 'react'
const axios = require('axios');
const cheerio = require('cheerio');
const yelp = require('yelp-fusion');
const Sentiment = require('sentiment');
require('../secrets');


class Table extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      url: this.props.url,
      reviews: [],
      loading: true
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
    //proxy server allows response header to have a 'Access-Control-Allow-Origin' header to address the CORS block. otherwise it wont send out the request 403 error
    //alternative plan, you can set server side request to yelp api
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${id}/reviews`, {
        //required authorization format from API
        headers: {
          //need to hide key in a secrets file
            Authorization: process.env.YELP_API_KEY
        }
        })
        .then((res) => {
            console.log(res.data)
            //set local state to for reviews
            //prob need to call sentiment here and map through reviews before setting to state
            let formatted = this.parse(res.data)
            this.setState({
              reviews: formatted,
              loading: false
            })
        })
        .catch((err) => {
            //send error if there is no info returned from the API
            console.log('Something went wrong', err)
        })
    }

  render () {
    console.log('whats my staet', this.state)
    return (
        <div id='container'>
        { this.state.loading ? (<div className="lds-ring"><div></div><div></div><div></div><div></div></div>) :
          (<table>
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
           </table>)
        }
        </div>
    )
  }
}

export default Table
