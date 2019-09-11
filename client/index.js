import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Form from './form'
import Table from './table'
import Navbar from './navbar'
import {BrowserRouter, Link, Route} from 'react-router-dom'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      url: ''
    })
  }

  render () {
    return (
      <div id="main">
        <BrowserRouter>
        <Route path="/" render={(routeProps) => <Navbar {...routeProps} />} />
          {/* <Route exact path="/" component={Form} /> */}
          {/* <Route exact path="/table" component={Table} /> */}
          <Route exact path="/" render={() => <Form url={this.state.url}  handleSubmit={this.handleSubmit} handleChange={this.handleChange} />} />
          <Route exact path="/table" render={(routeProps) => <Table {...routeProps} url={this.state.url} />} />
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)
