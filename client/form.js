import React from 'react'

class Form extends React.Component {
  constructor () {
    super()
    this.state = {
      url: ''
    }
  }
  handleSubmit = event => {
    event.preventDefault()
    // const username = event.target.username.value
    console.log(this.state)
    this.setState({
      url: ''
    })
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render () {
    return (
      <div id="container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="url">Please enter <img className="yelp-image-size" src="https://storage.googleapis.com/kaggle-competitions/kaggle/4829/logos/front_page.png" /> restaurant link for analysis</label>
          <input type="text" name="url" value={this.state.url} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
        {
            this.state.url ? <Table reviewData = {this.state.url} /> :
        }
      </div>
    )
  }
}

export default Form
