import React, { useState, useEffect } from 'react'

// COMPONENT
import { SportItem } from '.';



const SportItems = ({ familySport, updateSportSelection, removeSportSelection }) => {
  // STATE
  const [sports, setSports] = useState()

  // FUNCTIONS
  // To handle sports selected
  const handleSportSelection = (sport) => {
    updateSportSelection(sport)
  }

  // To remove sport from the list
  const removeSport = (sport) => {
    removeSportSelection(sport)
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
            updateSportSelection={sport => handleSportSelection(sport)}
            removeSportSelection={sport => removeSport(sport)}
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
    <ul className='sports-family__items menu__dropdown dropdown'>
      <p
        className='dropdown__title dropdown-title'
        style={{ color: familySport.color }}
      >
        {familySport.name}
      </p>
      {displaySports()}
    </ul >
  )
}

export default SportItems