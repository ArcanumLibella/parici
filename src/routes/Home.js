import React from 'react'

// COMPONENTS
import Alert from '../components/Commons/Alert/Alert.jsx'
import Menu from '../components/Navigation/Menu.jsx'
import Map from '../components/MAP/Map.jsx'
import Dashboard from '../components/DASHBOARD/Dashboard.jsx'



const Home = (props) => {
  return (
    <main className='home'>
      <Alert/>
      <Menu />
      <Map />
      <Dashboard />
    </main>
  )
}

export default Home