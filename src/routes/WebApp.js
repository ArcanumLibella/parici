import React from 'react'

// COMPONENTS
import { Menu, Dashboard, /* Map,*/ Alert } from '../components'



const WebApp = (props) => {
  return (
    <main className='app'>
      <Alert/>
      <Menu />
      {/* <Map /> */}
      <Dashboard />
    </main>
  )
}

export default WebApp
