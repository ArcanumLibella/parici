import React, { useState, useContext } from 'react'
// import SportContext from '../SportContext'

// COMPONENTS
import Alert from '../components/Commons/Alert/Alert.jsx'
import { Menu } from '../components/Menu'
import Dashboard from '../components/Dashboard/Dashboard'
import Map from '../components/Map/Map'
import MenuSelection from '../components/Menu/MenuSelection'



const Home = (props, /* { updateSportSelection, removeSportSelection } */) => {
  // PROPS
  const { sportsList } = props

  // CONTEXT
  // const sportsSelection = useContext(SportContext)
  // console.log(sportsSelection)

  // STATE
  const [sportsSelection, setSportsSelection] = useState([])

  // FUNCTIONS
  // To handle sports selected
  const handleSportSelection = (sport) => {
    setSportsSelection([...sportsSelection, sport])
  }

  // To remove sport from the list
  const removeSport = (sport) => {
    let newSportsSelection = [...sportsSelection] // make a separate copy of the array
    let index = newSportsSelection.indexOf(sport)
    if (index !== -1) {
      newSportsSelection.splice(index, 1);
      setSportsSelection([...newSportsSelection])
    }
  }

  console.log(sportsSelection)

  return (
    <main className='page-app'>
      <Alert />
      <Menu
        sportsList={sportsList}
        updateSportSelection={sport => handleSportSelection(sport)}
        removeSportSelection={sport => removeSport(sport)}
      />
      <MenuSelection />
      <Map />
      <Dashboard />
    </main>
  )
}

export default Home