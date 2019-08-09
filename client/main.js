import React from 'react'
import {Router, Link, Route} from 'react-router-dom'
import Navbar from './navbar'
import Form from './form'
import Table from './table'


export default class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      reviews: [],
      selectedReview: {}
    }
    this.selectReview = this.selectReview.bind(this)
  }
  async componentDidMount () {
    try {
      // need to call firebase database to see if information exists. if not, run web scraper
      // const response = await axios.get('/api/reviews')
      // const allreviews = response.data
      // this.setState({
      //   reviews: allreviews
      // })
    } catch (err) {
      console.log('There was a problem getting pups!')
    }
  }
  // async selectReview (reviewId) {
  //   try {
  //     const response = how to get data back from firebase?
  //     const chosen = response.data
  //     this.setState({
  //       selectedReview: chosen
  //     })
  //   } catch (err) {
  //     console.log('Something went wrong!', err)
  //   }
  // }
  render () {
    return (
    <Router>
      <div id="main">
        <div className="column container">
            <div id="header">
                <h1>Yelp Customer Review Sentiments</h1>
            </div>
          <Navbar />
        </div>
          <Route exact path="/" component={Form} />
          <Route exact path="/results" component={Table} />
      </div>
    </Router>
    )
  }
}
