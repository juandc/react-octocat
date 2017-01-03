import http from 'http'
import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { ServerRouter, createServerRenderContext } from 'react-router'
// Components
import Routes from './routes'
import Layout from './components/Layout'

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

  res.write(
    renderToStaticMarkup(
      <Layout
        title="React Octocat"
        content={html}
      />,
    ),
  )
  res.end()
}

const server = http.createServer(requestHandler)

server.on('listening', () => {
  console.log('\nListening %s PORT\n', PORT)
})

server.listen(PORT)
