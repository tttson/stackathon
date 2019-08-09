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
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
