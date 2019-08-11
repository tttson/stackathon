import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Navbar from './navbar'
import {Router, Link, Route} from 'react-router-dom'

class Main extends Component {
  constructor(){
    super()
    this.state = {
      url: '',
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
      <div id="main">
        {/* we need a way to pass down url to table component via Navbar component */}
        <div id="navbar">
          <h1>ISSA TERESTAURANT VIBE</h1>
          <p>go back to search page</p>
          <p>go to results</p>
        </div>
          <div id ="container">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="url">Please enter <img className="yelp-image-size" src="https://storage.googleapis.com/kaggle-competitions/kaggle/4829/logos/front_page.png" /> restaurant link for analysis </label>
              <input type="text" name="url" value={this.state.url} onChange={this.handleChange} />
              {/* <Link to="/table"> */}
              <button type="submit">Submit</button>
              {/* </Link> */}
            </form>
          </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)
