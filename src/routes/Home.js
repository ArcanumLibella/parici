import React, { useContext } from 'react'
import SportContext from '../SportContext'

// COMPONENTS
import Alert from '../components/Commons/Alert/Alert.jsx'
import Menu from '../components/Navigation/Menu.jsx'
import Dashboard from '../components/Dashboard/Dashboard'
import Map from '../components/Map/Map'
import MenuSelection from '../components/Navigation/MenuSelection'



const Home = (props) => {
  // PROPS
  const { sportsList } = props

  // CONTEXT
  const sportsSelection = useContext(SportContext)
  console.log(sportsSelection)

  return (
    <main className='page-home'>
      <Alert />
      <Menu sportsList={sportsList} />
      <MenuSelection />
      <Map />
      <Dashboard />
    </main>
  )
}

export default Home