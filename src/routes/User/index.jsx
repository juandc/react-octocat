import React, { Component } from 'react'
import { Link } from 'react-router'

class User extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: 'user',
    }
  }
  render() {
    return (
      <section name="User">
        <h2>User</h2>
        <Link to="/">Home</Link>
        <Link to="ftgywhqjA/JAIJAIQJIAQ">NotFound</Link>
      </section>
    )
  }
}

export default User
