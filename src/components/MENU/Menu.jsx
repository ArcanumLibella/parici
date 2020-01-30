import React from 'react'
import { Link } from "react-router-dom";

// COMPONENTS
import MenuItem from './MenuItem.jsx'
import SportCategoryItems from './SportCategoryItems.jsx'

// SVG
import { Logo } from '../../assets/icons/all-icons'


const Menu = (props) => {
  return (
    <aside className='menu'>
      <Link to="/">
        <Logo />
      </Link>

      <Link to="/">
        <MenuItem label='home' />
      </Link>

      {/* <MenuItem label='sports' /> */}
      <SportCategoryItems />
      {/* <MenuItem label='infos' /> */}
    </aside>
  )
}

export default Menu