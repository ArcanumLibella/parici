import React from 'react'

// COMPONENTS
import { SportCategoryItem } from './';



const SportCategoryItems = (props, { updateSportSelection, removeSportSelection }) => {
  // PROPS
  const { sportsList } = props

  // FUNCTIONS
  // To handle sports selected
  const handleSportSelection = (sport) => {
    updateSportSelection(sport)
  }

  // To remove sport from the list
  const removeSport = (sport) => {
    removeSportSelection(sport)
  }

  // To get each category sports of sportsList
  const displaySportCategories = () => {
    return (
      sportsList && sportsList.map(
        (familySport, id) => (
          <SportCategoryItem
            key={id}
            familySport={familySport}
            updateSportSelection={sport => handleSportSelection(sport)}
            removeSportSelection={sport => removeSport(sport)}
          />
        )
      )
    )
  }

  return (
    <ul className='sports'>
      {displaySportCategories()}
    </ul>
  )
}

export default SportCategoryItems