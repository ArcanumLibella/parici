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
  // console.log(sportsSelection)

  const [selectedDistrict, setSelectedDistrict] = useState(false)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)

  const handleValues = function (minimum, maximum) {
    setMin(Math.round(minimum- 30))
    setMax(Math.round(maximum- 30))
  }

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
      <MenuSelection
        sportsList={sportsList}
        updateSportSelection={sport => handleSportSelection(sport)}
        removeSportSelection={sport => removeSport(sport)}
      />
      <Map onDistrictClick={handleClick} minAndMax={handleValues}/>
      <div className="scale">
        <p className="scale__value">{min}mins</p>
        <div className="scale__container"></div>
        <p className="scale__value">{max}mins</p>
      </div>
      <Dashboard district={selectedDistrict}/>
    </main>
  )
}

export default Home