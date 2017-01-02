import React from 'react'
import { Link } from 'react-router'

// class Home extends Component {
//   render() {
//     return (
//       <section>
//         <h2>Home</h2>
//         <Link to="ftgywhqjA/JAIJAIQJIAQ">NotFound</Link>
//       </section>
//     )
//   }
// }

function NotFound() {
  return (
    <section>
      <h2>NotFound</h2>
      <Link to="/">Go back to Home</Link>
    </section>
  )
}

export default NotFound
