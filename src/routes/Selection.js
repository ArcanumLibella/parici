import React, { useState } from 'react'

// COMPONENTS
import CardSelection from '../components/CardSelection/CardSelection'


const Selection = (props) => {
  // PROPS
  const { sportsList } = props

  // STATE
  const [sportsSelection, setSportsSelection] = useState([])

  // FUNCTIONS
  // To handle sports selected
  const handleSelectedSport = (sport) => {
    setSportsSelection([...sportsSelection, sport])
    console.log(sportsSelection)
  }

  const displayFamilies = () => {
    return (
      sportsList && sportsList.map(
        (familySport, i) => (
          <CardSelection
            key={i}
            familySport={familySport}
            updateSportSelection={handleSelectedSport}
          />
        )
      )
    )
  }

  return (
    <main className='page-selection'>
      <div className='content-wrapper'>
        <div className='page-selection__head'>
          <h4 className='page-selection__title h4'>Select the Olympics events you wish to attend  </h4>
          <p className='page-selection__subtitle paragraph'>We will compare and tell you wich district of Paris allows you to get there the fastest</p>
        </div>
        <div className='sports-families'>
          {displayFamilies()}
        </div>
      </div>
    </main>
  )
}

export default Selection