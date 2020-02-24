import React from 'react'
import { Link } from "react-router-dom";

// COMPONENTS
import { MenuItem, SportCategoryItems } from './'



const Menu = (props) => {
  // PROPS
  const { sportsList } = props

  return (
    <aside className='menu'>

      <Link to="/">
        <MenuItem label='logo' />
      </Link>

      <Link to="/">
        <MenuItem label='home' />
      </Link>

      <SportCategoryItems sportsList={sportsList} />

    </aside>
  )
}

export default Menu