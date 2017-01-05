import React from 'react'
import {
  Match,
  Miss,
  Redirect,
} from 'react-router'
// Components
import Repositories from './Repositories'
import User from './User'
import Menu from '../components/Menu'
import NotFound from './NotFound'

function Routes() {
  return (
    <mail role="application">
      <Menu />
      <Match
        pattern="/"
        render={() => <Redirect to="/repositories" />}
        exactly
      />
      <Match
        pattern="/repositories"
        component={Repositories}
        exactly
      />
      <Match
        pattern="/user/:user"
        component={User}
      />
      <Miss component={NotFound} />
    </mail>
  )
}

export default Routes
