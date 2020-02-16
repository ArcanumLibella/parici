import React, { useState, useEffect } from 'react'

// COMPONENT
import SportItem from './SportItem';



const SportItems = ({ familySport, updateSportSelection }) => {
  // STATE
  const [sports, setSports] = useState()

  // FUNCTIONS
  // To handle sports selected
  const handleSelectedSport = (sport) => {
    updateSportSelection(sport)
  }

  // To display each family sport
  const displaySports = () => {
    return (
      sports && sports.map(
        (sport, id) => (
          <SportItem
            key={id}
            color={familySport.color}
            sport={sport}
            updateSportSelection={sport => handleSelectedSport(sport)}
          />
        )
      )
    )
  }

  // To update data
  const updateData = () => {
    setSports(familySport.sports)
  }

  useEffect(() => {
    updateData()
  })

  return (
    <ul className='sports-family__items'>
      {displaySports()}
    </ul>
  )
}

export default SportItems