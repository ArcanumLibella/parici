import React, { useState, useEffect } from "react";

// COMPONENTS
import { SportItems } from './'

// SVG
import { Artistic, Athletics, Biking, Fight, Others, Racket, Sailing, Shoot, Swimming, Team } from '../../assets/icons/all-icons'



const SportCategoryItem = ({ familySport, updateSportSelection, removeSportSelection }) => {
  // STATES
  const [isHovered, setIsHovered] = useState(false)
  const [name, setName] = useState(false)
  const [color, setColor] = useState(false)

  // FUNCTIONS
  // To handle sports selected
  const handleSportSelection = (sport) => {
    updateSportSelection(sport)
  }

  // To remove sport from the list
  const removeSport = (sport) => {
    removeSportSelection(sport)
  }

  // To handle hover on menu__item--sport
  const handleHover = () => {
    setIsHovered(!isHovered)
  }

  // To update data
  const updateData = () => {
    setName(familySport.name)
    setColor(familySport.color)
  }

  useEffect(() => {
    updateData()
  })

  // Function to handle sports icons
  const handleIconsSports = (name) => {
    switch (name) {
      case 'artistics':
        return <Artistic />
      case 'athletics':
        return <Athletics />
      case 'cycling':
        return <Biking />
      case 'martial arts':
        return <Fight />
      case 'others':
        return <Others />
      case 'rackets':
        return <Racket />
      case 'sailing':
        return <Sailing />
      case 'precisions':
        return <Shoot />
      case 'aquatics':
        return <Swimming />
      case 'teams':
        return <Team />
      default:
        return 'No icons'
    }
  }

  return (
    <li
      className="menu__item menu__item--sport sports-family"
      style={
        isHovered
          ? { borderRight: '5px solid ' + color }
          : { borderRight: '5px solid transparent' }}
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleHover()}>
      <div
        className='menu__icon'
        style={{ backgroundColor: color }}>
        {handleIconsSports(name)}
      </div>
      <p className='menu__title menu-title'>{name}</p>

      <SportItems
        familySport={familySport}
        updateSportSelection={sport => handleSportSelection(sport)}
        removeSportSelection={sport => removeSport(sport)}
      />
    </li >
  )
}

export default SportCategoryItem