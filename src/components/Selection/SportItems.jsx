import React, { useState, useEffect } from 'react'

// COMPONENT
import SportItem from './SportItem';



const SportItems = ({ familySport }) => {
  // STATE
  const [isSelected, setIsSelected] = useState(false)
  const [sports, setSports] = useState()

  // FUNCTIONS
  // To handle selected sport
  // const handleSelect = () => {
  //   return (
  //     setIsSelected(!isSelected)
  //   )
  // }

  // To display each family sport
  const displaySports = () => {
    return (
      sports && sports.map(
        (sport, id) => (
          <SportItem
            key={id}
            color={familySport.color}
            sport={sport}
            // handleSelect={() => handleSelect()}
            // onClick={() => handleSelectedSport()}
            isSelected={isSelected}
          />
        )
      )
    )
  }

  // To update data
  const updateData = () => {
    setSports(familySport.sports)
    // setIsSelected()
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