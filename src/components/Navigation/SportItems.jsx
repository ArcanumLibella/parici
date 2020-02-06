import React from 'react'

import { SportItem } from './';



const SportItems = ({ sportCategoryItem }) => {
  const displaySports = () => {
    return sportCategoryItem.sports.map
    (
      sport => (
        <SportItem 
          key={sport.sportId}
          color={sportCategoryItem.categoryColor}
          sport={sport}
        />
      )
    )
  }

  return (
    <ul className='menu__dropdown dropdown'>{displaySports()}</ul>
  )
}

export default SportItems