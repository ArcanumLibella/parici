import React, { useState } from 'react'

// COMPONENTS
import CardSelection from '../components/CardSelection/CardSelection'
import Button from '../components/Commons/Button/Button'

const Selection = (props, /* { updateSportSelection, removeSportSelection } */) => {
  // PROPS
  const { sportsList } = props

  // STATE
  const [sportsSelection, setSportsSelection] = useState([])

  // FUNCTIONS
  // TODO: Faire remonter les données jusque dans App.js
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

  // // FUNCTIONS
  // // To handle sports selected
  // const handleSportSelection = (sport) => {
  //   updateSportSelection(sport)
  // }

  // // To remove sport from the list
  // const removeSport = (sport) => {
  //   removeSportSelection(sport)
  // }

  const displayFamilies = () => {
    return (
      sportsList && sportsList.map(
        (familySport, i) => (
          <CardSelection
            key={i}
            familySport={familySport}
            updateSportSelection={sport => handleSportSelection(sport)}
            removeSportSelection={sport => removeSport(sport)}
          />
        )
      )
    )
  }

  return (
    <main className='page-selection'>
      <div className='content-wrapper'>
        <div className='page-selection__head'>
          <h4 className='page-selection__title h4'>Select the <strong>Olympics events</strong> you wish to attend  </h4>
          <p className='page-selection__subtitle paragraph'>We will compare and tell you wich district of Paris allows you to get there the fastest</p>
        </div>
        <div className='sports-families'>
          {displayFamilies()}
        </div>
        <Button textCta='Validate choice' linkCta='/app' />
      </div>
    </main>
  )
}

export default Selection