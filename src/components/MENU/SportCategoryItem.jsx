import React from "react";

// COMPONENTS
import SportItems from './SportItems'
import { Artistic,  Athletics, Biking, Fight, Others, Racket, Sailing, Shoot, Swimming, Team } from '../../assets/icons/all-icons'


const SportCategoryItem = ({ sportCategoryItem, /* setItemSelected, */ selected }) => {
  // Déstructuration des props
  const { color, sportCategory } = sportCategoryItem 

  // Déclaration des states
  // const [isSelected, setIsSelected] = React.useState(selected)

  // Déclaration d'une fonction eventListener
  // const handleSportDisplay = () => {
  //   setIsSelected(!isSelected)
  //   // setItemSelected(sportItem.id)
  // }

    // Function to handle sports icons
    const handleIconsSports = (sportCategory) => {
      if (sportCategory === 'artistic') {
        return <Artistic/>
      } else if (sportCategory === 'athletics') {
        return <Athletics/>
      } else if (sportCategory === 'biking') {
        return <Biking/>
      }  else if (sportCategory === 'fight') {
        return <Fight/>
      }  else if (sportCategory === 'others') {
        return <Others/>
      }  else if (sportCategory === 'racket') {
        return <Racket/>
      }  else if (sportCategory === 'sailing') {
        return <Sailing/>
      }  else if (sportCategory === 'shoot') {
        return <Shoot/>
      }  else if (sportCategory === 'swimming') {
        return <Swimming/>
      }  else if (sportCategory === 'team') {
        return <Team/>
      }
    }
  

  return (
    <li className="menu__item menu__item--sport">
      <div
        className='menu__icon'
        style={{ backgroundColor: color }}>
          {handleIconsSports(sportCategory)}
      </div>
      <p className='menu__title menu-subtitle'>{ sportCategory }</p>
      
      <SportItems sportCategoryItem={ sportCategoryItem }/>
    </li >
  )
}

export default SportCategoryItem