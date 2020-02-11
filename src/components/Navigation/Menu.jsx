import React from 'react'
import { Link } from "react-router-dom";

// COMPONENTS
import { MenuItem, MenuSelection, SportCategoryItems } from './'

// SVG
import { Logo } from '../../assets/icons/all-icons'


const Menu = (props) => {
  const { sportsList } = props

  return (
    <aside className='menu'>
      <Link to="/">
        <Logo />
      </Link>

      <Link to="/">
        <MenuItem label='home' />
      </Link>

      <MenuSelection />

      <SportCategoryItems sportsList={sportsList} />

    </aside>
  )
}

export default Menu