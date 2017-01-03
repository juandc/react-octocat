import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router'
// Components
import Routes from './routes'

render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('app'),
)
