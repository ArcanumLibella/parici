import React from 'react'

// COMPONENTS
import Alert from '../components/Commons/Alert/Alert.jsx'
import Menu from '../components/Navigation/Menu.jsx'
// import Map from '../components/Map/Map'
import Dashboard from '../components/Dashboard/Dashboard.jsx'



const Home = (props) => {
  const { sportsList } = props
  return (
    <main className='home'>
      <Alert />
      <Menu sportsList={sportsList} />
      {/* <Map /> */}
      <Dashboard />
    </main>
  )
}

export default Home