import React from 'react'
import {
  Match,
  Miss,
} from 'react-router'
// Components
import Home from './Home'
import User from './User'
import NotFound from './NotFound'

function Routes() {
  return (
    <mail role="application">
      <Match
        pattern="/"
        component={Home}
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
