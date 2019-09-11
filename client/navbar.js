import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
  // function refreshPage() {
  //   window.location.reload()
  // }
  return (
    <div id="navbar">
        <h1>ISSA RESTAURANT VIBE</h1>
        {/* <p onClick={refreshPage}> &#x21bb; reset search</p> */}
        {props.location.pathname == '/table' ?
        <Link to="/"><p>go back to search</p></Link>
        :
        null}
    </div>
  )
}

export default Navbar
