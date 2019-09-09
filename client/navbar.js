import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="navbar">
        <h1>ISSA TERESTAURANT VIBE</h1>
        <Link to="/"><p>go back to search page</p></Link>
    </div>
  )
}

export default Navbar
