import React from 'react'
import {Router, Link, Route} from 'react-router-dom'
import Navbar from './navbar'
import Form from './form'
import Table from './table'


export default class Main extends React.Component {
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
          <Route exact path="./results" component = {Table} />
      </div>
    </Router>
    )
  }
}
