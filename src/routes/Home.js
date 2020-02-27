import React, { useContext, useState } from 'react'
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
  console.log(sportsSelection)

  const [selectedDistrict, setSelectedDistrict] = useState(false)

  // To handle sports selected
  const handleSportSelection = (sport) => {
    updateSportSelection(sport)
  }

  const handleClick = function (number) {
    setSelectedDistrict(number)
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
      <MenuSelection />
      <Map onDistrictClick={handleClick} />
      <Dashboard district={selectedDistrict}/>
    </main>
  )
}

export default Home