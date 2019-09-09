import React from 'react'
import {Router, Link, Route} from 'react-router-dom'

class Form extends React.Component {
  constructor () {
    super()
    this.state = {
      url: ''
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
      <div>
        <div id="container">
        <form onSubmit={this.handleSubmit}>
        <div className="submit">
            <label htmlFor="url">Please enter <img className="yelp-image-size" src="https://storage.googleapis.com/kaggle-competitions/kaggle/4829/logos/front_page.png" /> restaurant link for customer review sentiments</label>
        </div>
            <input type="text" name="url" value={this.state.url} onChange={this.handleChange} />
            <div className="submit">
              <Link to="/table"><button id="submitbutton" type="submit">Submit</button></Link>
            </div>
        </form>
        </div>
      </div>
    )
  }
}

export default Form
