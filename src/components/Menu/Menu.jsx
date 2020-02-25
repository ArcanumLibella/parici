import React from 'react'
import { Link } from "react-router-dom";

// COMPONENTS
import { MenuItem } from '../Menu'
import { SportCategoryItems } from '../Sports'



const Menu = (props, { updateSportSelection, removeSportSelection }) => {
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

  return (
    <nav className='menu'>

      <Link to="/">
        <MenuItem label='logo' />
      </Link>

      <Link to="/">
        <MenuItem label='home' />
      </Link>

      <SportCategoryItems
        sportsList={sportsList}
        updateSportSelection={sport => handleSportSelection(sport)}
        removeSportSelection={sport => removeSport(sport)}
      />

    </nav>
  )
}

export default Menu