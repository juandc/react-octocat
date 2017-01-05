import React, { Component } from 'react'
// import { Link } from 'react-router'
// Components
import Loader from '../Loader'
import Repo from './Repo'
// API
import api from '../../api'

class PopularRepositories extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      repos: [],
    }
  }
  componentDidMount() { this.initialFetch() }
  async initialFetch() {
    const popularRepos = await api.repos.getPopularRepos()

    return this.setState({
      loading: false,
      repos: popularRepos.items,
    })
  }
  render() {
    return (
      <article
        name="Popular Repositories"
        className="container FlexParent"
      >
        <h2 className="Title">
          Popular React Repositories
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dolorem ut incidunt voluptas, obcaecati officiis provident.
          </p>
        </h2>
        {this.state.repos.map(repo => <Repo key={repo.id} {...repo} />)}
        {this.state.loading && (
          <Loader />
        )}
      </article>
    )
  }
}

export default PopularRepositories
