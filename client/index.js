import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Form from './form'
import Table from './table'
import Navbar from './navbar'
import {BrowserRouter, Link, Route} from 'react-router-dom'

class Main extends Component {
  render () {
    return (
      <div id="main">
        <BrowserRouter>
        <Navbar />
          <Route exact path="/" component={Form} />
          <Route exact path="/table" component={Table} />
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)
