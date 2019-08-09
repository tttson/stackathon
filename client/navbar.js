import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="navbar" className="row">
      <Link to="/">Go back to search page</Link>
      <Link to="/results">Go to results</Link>
    </div>
  )
}

export default Navbar
