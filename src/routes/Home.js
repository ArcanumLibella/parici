import React from 'react'

// COMPONENTS
import Alert from '../components/Commons/Alert/Alert.jsx'
import Menu from '../components/Navigation/Menu.jsx'
// import Map from '../components/Map/Map'
import Dashboard from '../components/Dashboard/Dashboard'
import Map from '../components/Map/Map'


const Home = (props) => {
  // PROPS
  const { sportsList } = props

  return (
    <main className='page-home'>
      <Alert />
      <Menu sportsList={sportsList} />
      <Map />
      {/* <Dashboard /> */}
    </main>
  )
}

export default Home