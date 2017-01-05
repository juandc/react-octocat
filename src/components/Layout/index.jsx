import React from 'react'
// Global Styles
import '../../styles/style.css'

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
        />
        <title>{props.title}</title>
        <link
          rel="stylesheet"
          href="https://gist.githubusercontent.com/evanyeung/f19385df99acb944f923/raw/6a04e21a6e09b40a978f559a7b6f18e9a734af68/normalize.min.css"
        />
        <link
          rel="stylesheet"
          href="//localhost:3001/app.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Open+Sans|Lato"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body>
        <div
          id="app"
          dangerouslySetInnerHTML={{
            __html: props.content,
          }}
        />
        <script src="//localhost:3001/app.js" />
      </body>
    </html>
  )
}

Layout.propTypes = {
  title: React.PropTypes.string,
  content: React.PropTypes.string,
}

export default Layout
