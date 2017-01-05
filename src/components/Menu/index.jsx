import React from 'react'
import { Link } from 'react-router'

function Menu() {
  return (
    <nav className="Menu">
      <ul className="Menu-list">
        <Link to="/">
          <img
            src="//github.com/fluidicon.png"
            alt="React Octocat"
            width="100"
          />
        </Link>
        <Link to="/users/facebook">
          Facebook
        </Link>
      </ul>
    </nav>
  )
}

export default Menu
