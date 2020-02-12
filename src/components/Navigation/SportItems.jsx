import React from 'react'

// COMPONENT
import { SportItem } from './';



const SportItems = ({ familySport }) => {
  // PROPS
  const { color, name, id } = familySport

  const displaySports = () => {
    console.log(familySport);
    return (
      familySport && familySport.sports.map(
        sport => (
          <SportItem
            key={sport.id}
            color={familySport.color}
            sport={sport}
          />
        )
      )
    )
  }

  return (
    <ul className='menu__dropdown dropdown'>{displaySports()}</ul>
  )
}

export default SportItems