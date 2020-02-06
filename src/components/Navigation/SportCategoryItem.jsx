import React, { useState } from "react";

// COMPONENTS
import { SportItems } from './'

// SVG
import { Artistic,  Athletics, Biking, Fight, Others, Racket, Sailing, Shoot, Swimming, Team } from '../../assets/icons/all-icons'


const SportCategoryItem = ({ sportCategoryItem, handleSelectedSportCategory/* , setItemSelected,*/, selected, color  }) => {
  const { categoryColor, categoryName, categoryId } = sportCategoryItem 

  const [isHovered, setIsHovered] = useState(false)
  // const [isSelected, setIsSelected] = useState(selected)

  // Function to handle hover on menu__item--sport
  const handleHover = () => {
    setIsHovered(!isHovered)
  }

  // Déclaration d'une fonction eventListener
  // const handleSportSelected = () => {
  //   setIsSelected(!isSelected)
  //   handleSelectedSportCategory(categoryId)
  // }

    // Function to handle sports icons
    const handleIconsSports = (categoryName) => {
      switch (categoryName) {
        case 'artistic':
          return <Artistic/>
        case 'athletics':
          return <Athletics/>
        case 'biking':
          return <Biking/>
        case 'fight':
          return <Fight/>
        case 'others':
          return <Others/>
        case 'racket':
          return <Racket/>
        case 'sailing':
          return <Sailing/>
        case 'shoot':
          return <Shoot/>
        case 'swimming':
          return <Swimming/>
        case 'team':
          return <Team/>
        default:
          return 'No icons'
      }
    }

  return (
    <li 
      className="menu__item menu__item--sport"
      style={ 
        isHovered 
        ? {borderLeft: '5px solid ' + categoryColor} 
        : {borderLeft: '5px solid transparent' }}
      // onClick={() => handleSportSelected() }
      onMouseEnter={() => handleHover() } 
      onMouseLeave={() => handleHover() }>
      <div
        className='menu__icon'
        style={{ backgroundColor: categoryColor }}>
          {handleIconsSports(categoryName)}
      </div>
      <p className='menu__title menu-subtitle'>{ categoryName }</p>
      
      <SportItems sportCategoryItem={ sportCategoryItem }/>
    </li >
  )
}

export default SportCategoryItem