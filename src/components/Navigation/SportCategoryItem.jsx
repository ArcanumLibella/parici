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
    // TODO: Use switch
    const handleIconsSports = (categoryName) => {
      if (categoryName === 'artistic') {
        return <Artistic/>
      } else if (categoryName === 'athletics') {
        return <Athletics/>
      } else if (categoryName === 'biking') {
        return <Biking/>
      }  else if (categoryName === 'fight') {
        return <Fight/>
      }  else if (categoryName === 'others') {
        return <Others/>
      }  else if (categoryName === 'racket') {
        return <Racket/>
      }  else if (categoryName === 'sailing') {
        return <Sailing/>
      }  else if (categoryName === 'shoot') {
        return <Shoot/>
      }  else if (categoryName === 'swimming') {
        return <Swimming/>
      }  else if (categoryName === 'team') {
        return <Team/>
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