import React from 'react'
import { Link } from "react-router-dom";



const Landing = (props) => {
  return (
    <main className='landing'>
      <section>
        <h1>JE SUIS SUR LA LANDING</h1>
      </section>
      <Link to="/webapp">WEBAPP</Link>
    </main>
  )
}

export default Landing