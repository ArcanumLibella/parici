import React, { useContext } from 'react'
import SportContext from '../SportContext'

// COMPONENTS
import Alert from '../components/Commons/Alert/Alert.jsx'
import { Menu } from '../components/Menu'
import Dashboard from '../components/Dashboard/Dashboard'
import Map from '../components/Map/Map'
import MenuSelection from '../components/Menu/MenuSelection'



const Home = ({ sportsList, updateSportSelection, removeSportSelection }) => {
  // CONTEXT
  const sportsSelection = useContext(SportContext)
  // console.log(sportsSelection)

  // To handle sports selected
  const handleSportSelection = (sport) => {
    updateSportSelection(sport)
  }

  // To remove sport from the list
  const removeSport = (sport) => {
    removeSportSelection(sport)
  }

  return (
    <main className='page-app'>
      <Alert />
      <Menu
        sportsList={sportsList}
        updateSportSelection={sport => handleSportSelection(sport)}
        removeSportSelection={sport => removeSport(sport)}
      />
      <MenuSelection
        sportsList={sportsList}
      // updateSportSelection={sport => handleSportSelection(sport)}
      // removeSportSelection={sport => removeSport(sport)}
      />
      <Map />
      <Dashboard />
    </main>
  )
}

export default Home