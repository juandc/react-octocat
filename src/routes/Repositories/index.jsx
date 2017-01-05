import React, { Component } from 'react'
// import { Link } from 'react-router'
// Components
import PopularRepositories from '../../components/Repos/PopularRepositories'

class Repositories extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
    }
  }
  render() {
    return (
      <section name="Repositories">
        <div className="container"><h2>Repositories</h2></div>

        <PopularRepositories />
      </section>
    )
  }
}

export default Repositories
