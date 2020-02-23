import React, { useState } from 'react'

// SVG
import { Logo, Home, Burger } from '../../assets/icons/all-icons'



const MenuItem = (props) => {
  // PROPS
  const { label } = props

  // // STATE
  // const [isClosed, setIsClosed] = useState(true)

  // // FUNCTIONS
  // // to handle open/close menu
  // const handleBurgerMenu = (label) => {
  //   setIsClosed(!isClosed)
  // }

  const handleIconMenu = () => {
    switch (label) {
      case 'logo':
        return <Logo />
      case 'home':
        return <Home />
      case 'burger':
        return <Burger />
      default:
        return 'No icons'
    }
  }

  return (
    <div
      className=/* {isClosed ?  */'menu__item'/*  : 'menu__item is-clicked'} */
    /* onClick={() => handleBurgerMenu()} */
    >
      <div className='menu__icon'>
        {handleIconMenu()}
      </div>

      {/* {label === 'burger' ? <div className='submenu'></div> : ''} */}

    </div >
  )
}

export default MenuItem