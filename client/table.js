import React, {Component} from 'react'
import Row from './row'

export default class Table extends Component {
  constructor () {
    super()
    this.state = {
      reviews: [],
      url: this.props.url
    }
  }
    async componentDidMount () {
        try {
          let formattedData = []
          let response = await axios.get(this.state.url)
          let html = response.data;
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
      let sentiment = new Sentiment();
      console.log(this.state.reviews)
    }
    render () {
      return (
        <table>
          <tbody>
            <tr>
              <th>Sentiment Score</th>
              <th>Stars</th>
              <th>Review</th>
            </tr>
            {
              this.state.reviews.map((review, i)=> (
              <Row key={i} score={review.score} stars={review.stars} review={review.review} />
              ))
            }
          </tbody>
        </table>
        )
      }
  }
