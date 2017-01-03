import React, { Component } from 'react'
// import { Link } from 'react-router'
// Components
import Loader from '../../components/Loader'
// API
import api from '../../api'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: 'juandc',
      loading: true,
      info: {},
    }
  }
  componentDidMount() { this.initialFetch() }
  async initialFetch() {
    const userProfile = await api.users.getProfile(this.state.user)

    return this.setState({
      loading: false,
      info: userProfile,
    })
  }
  render() {
    return (
      <section name="Home">
        <h2>Home</h2>

        <div className="SearchBox">
          <input type="text" placeholder={this.state.user} />
        </div>

        <div className="Repositories">
          {this.state.loading && (
            <Loader />
          )}
          <h2>{this.state.info.name}</h2>
          <img src={this.state.info.avatar_url} alt={this.state.info.login} />
        </div>
      </section>
    )
  }
}

export default Home
