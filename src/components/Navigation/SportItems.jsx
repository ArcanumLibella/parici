import React, { useState, useEffect } from 'react'

// COMPONENT
import { SportItem } from './';



const SportItems = ({ familySport }) => {
  // STATE
  const [sports, setSports] = useState()

  // FUNCTIONS
  // To display each family sport
  const displaySports = () => {
    return (
      sports && sports.map(
        (sport, id) => (
          <SportItem
            key={id}
            color={familySport.color}
            sport={sport}
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
    <ul className='menu__dropdown dropdown'>{displaySports()}</ul>
  )
}

export default SportItems