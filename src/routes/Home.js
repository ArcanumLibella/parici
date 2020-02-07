import React from 'react'

// COMPONENTS
import Alert from '../components/Commons/Alert/Alert'
import Menu from '../components/Navigation/Menu'
// import Map from '../components/Map/Map'
import Dashboard from '../components/Dashboard/Dashboard'



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