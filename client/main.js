import React from 'react'
import {Router, Link, Route} from 'react-router-dom'
import Navbar from './navbar'
import Table from './table'


class Main extends React.Component {
  constructor () {
    super()
    this.state = {
      url: 'https://www.yelp.com/biz/hibino-brooklyn?osq=sushi'
    }
  }

  //this is to clear the form
  handleSubmit = event => {
    event.preventDefault()
    // const username = event.target.username.value
    console.log(this.state)
    this.setState({
      url: ''
    })
  }
  //this is to set the url
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render () {
    return (
      <div className="nav">
        <div id="header">
          <h1>Yelp Customer Review Sentiments</h1>
        </div>
          <Navbar />
      <div id="container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="url">Please enter <img className="yelp-image-size" src="https://storage.googleapis.com/kaggle-competitions/kaggle/4829/logos/front_page.png" /> restaurant link for analysis</label>
          <input type="text" name="url" value={this.state.url} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
        {
            this.state.url.length ? <Table url={this.state.url} /> : null
        }
      </div>
      </div>
    )
  }
}

export default Main
