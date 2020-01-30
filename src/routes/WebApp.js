import React from 'react'

// COMPONENTS
import { Menu, Dashboard, Map } from '../components'



const WebApp = (props) => {
  return (
    <main className='app'>
      <Menu />
      {/* <Map /> */}
      <Dashboard />
    </main>
  )
}

export default WebApp
