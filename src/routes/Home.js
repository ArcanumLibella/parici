import React from 'react'

// COMPONENTS
// import Dashboard from '../components/Dashboard/Dashboard'
import { Dashboard, /* Map,*/ Alert } from '../components'
import { Menu } from '../components/Navigation'



const Home = (props) => {
  return (
    <main className='home'>
      <Alert/>
      <Menu />
      {/* <Map /> */}
      <Dashboard />
    </main>
  )
}

export default Home
