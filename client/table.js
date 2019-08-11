import React from 'react'
const axios = require('axios');
const cheerio = require('cheerio');
var Sentiment = require('sentiment');

// const reviews = [
//   {"Sentiment Score": 5, "Yelp Stars": "3-star rating", Review: "This is good food for the value" },
//   {"sentiment score": 8, "Yelp Stars": "5-star rating", Review: "Highly recommend this anyone who is hungry"},
//   {"sentiment score": -3, "Yelp Stars", "1-star rating", Review: "Terrible service, gross food, never coming back again"}
// ]

class Table extends React.Component {
  constructor () {
    super()
    this.state = {
      reviews: []
    }
  }
  async componentDidMount () {
    try {
      let formattedData = []
      let response = await axios.get(this.state.url)
      let html = response.data
      const $ = await cheerio.load(html)
     $('.review.review--with-sidebar').each((i, elem) => {
        formattedData.push({
          stars: $(elem).find('img.offscreen').attr('alt'),
          review: $(elem).find('.review-content p').html()
        })
      })
      this.setState({
        reviews: formattedData
      })
    } catch (err) {
      console.log(err);
    }
  }

  getSentimentScore () {
    let sentiment = new Sentiment()
  }

  render () {
    console.log(this.state.reviews)
    return (
      <div id='main'>
        <div id='navbar'>
          <div>ISSA TERESTAURANT VIBE</div>
        </div>
        <div id='container'>
          <table>
            <tbody>
              <tr>
                <th>Score</th>
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
      </div>
    )
  }
}

export default Table
