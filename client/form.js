import React from 'react'
import {Router, Link, Route} from 'react-router-dom'
import Table from './table';
const axios = require('axios');

const Form = (props) => {
const {handleChange, handleSubmit, getbusinessId, url} = props
    return (
      <div>
        <div id="container">
        <form onSubmit={handleSubmit}>
            <div className="submit">
            <label htmlFor="url">Please enter <img className="yelp-image-size" src="https://storage.googleapis.com/kaggle-competitions/kaggle/4829/logos/front_page.png" /> restaurant link for customer review sentiments</label>
            </div>
            <input type="text" name="url" value={url} onChange={handleChange} />
            <div className="submit">
            <Link to="/table"><button id="submitbutton" type="submit">Submit</button></Link>
            </div>
        </form>
        </div>
        {/* {this.state.bizId.length > 0 ? <Table reviews={this.state.reviews} url={this.state.url} /> : null} */}
      </div>
    )
}

export default Form
