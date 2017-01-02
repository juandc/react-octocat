import http from 'http'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerRouter, createServerRenderContext } from 'react-router'
// Components
import Routes from './routes'

const PORT = process.env.PORT || 3000

function requestHandler(req, res) {
  const context = createServerRenderContext()
  const result = context.getResult()
  let html = renderToString(
    <ServerRouter location={req.url} context={context}>
      <Routes />
    </ServerRouter>,
  )

  // HTML (browsers could not understand this is HTML)
  res.setHeader('Content-Type', 'text/html')

  // Check if needs redirect
  if (result.redirect) {
    res.writeHead(301, { Location: result.redirect.pathname })
    res.end()
  }
  // Check if not found
  if (result.missed) {
    res.writeHead(404)
    html = renderToString(
      <ServerRouter location={req.url} context={context}>
        <Routes />
      </ServerRouter>,
    )
    res.end()
  }

  res.write(html)
  res.end()
}

const server = http.createServer(requestHandler)

server.listen(PORT)

console.log('\nListening %s\n', PORT)
