import React, { useState } from "react";

// COMPONENTS
import { SportItems } from './'

// SVG
import { Artistic, Athletics, Biking, Fight, Others, Racket, Sailing, Shoot, Swimming, Team } from '../../assets/icons/all-icons'


const SportCategoryItem = ({ familySport /* sportCategoryItem */, handleSelectedSportCategory/* , setItemSelected,*/, selected }) => {
  // PROPS
  const { color, name } = familySport

  // STATES
  const [isHovered, setIsHovered] = useState(false)
  // const [isSelected, setIsSelected] = useState(selected)

  // FUNCTIONS
  // To handle hover on menu__item--sport
  const handleHover = () => {
    setIsHovered(!isHovered)
  }

  // Function to handle sports icons
  const handleIconsSports = (name) => {
    switch (name) {
      case 'artistic':
        return <Artistic />
      case 'athletics':
        return <Athletics />
      case 'cycling':
        return <Biking />
      case 'fight':
        return <Fight />
      case 'others':
        return <Others />
      case 'racket':
        return <Racket />
      case 'sailing':
        return <Sailing />
      case 'shoot':
        return <Shoot />
      case 'swimming':
        return <Swimming />
      case 'team':
        return <Team />
      default:
        return 'No icons'
    }
  }

  return (
    // FIXME: name visible only if hovered, why ? -> state
    <li
      className="menu__item menu__item--sport"
      style={
        isHovered
          ? { borderLeft: '5px solid ' + color }
          : { borderLeft: '5px solid transparent' }}
      // onClick={() => handleSportSelected() }
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleHover()}>
      <div
        className='menu__icon'
        style={{ backgroundColor: color }}>
        {handleIconsSports(name)}
      </div>
      <p className='menu__title menu-subtitle'>{name}</p>

      {/* <SportItems familySport={familySport} /> */}
    </li >
  )
}

export default SportCategoryItem