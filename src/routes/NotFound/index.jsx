import React from 'react'
import { Link } from 'react-router'

function NotFound() {
  return (
    <section name="NotFound">
      <h2>NotFound</h2>
      <Link to="/">Go back to Home</Link>
    </section>
  )
}

export default NotFound
