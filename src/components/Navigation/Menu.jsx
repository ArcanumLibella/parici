import React, { useState } from 'react'
import { Link } from "react-router-dom";

// COMPONENTS
import { MenuItem, MenuSelection, SportCategoryItems } from './'



const Menu = (props) => {
  // PROPS
  const { sportsList } = props

  // STATE
  const [isClosed, setIsClosed] = useState(false)

  // FUNCTIONS
  // to handle open/close menu
  const handleBurgerMenu = (label) => {
    setIsClosed(!isClosed)
  }

  return (
    <aside
      className={isClosed ? 'menu' : 'menu is-clicked'}
      onClick={() => handleBurgerMenu()}
    >

      <Link to="/">
        <MenuItem label='logo' />
      </Link>

      <MenuItem
        label='burger'
      // handleBurgerMenu={handleBurgerMenu}
      />

      <Link to="/">
        <MenuItem label='home' />
      </Link>

      <SportCategoryItems sportsList={sportsList} />
      <div className='submenu'>
        <MenuSelection />
      </div>
    </aside>
  )
}

export default Menu