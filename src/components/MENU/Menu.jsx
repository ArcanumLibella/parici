import React from 'react'

// COMPONENTS
import MenuItem from './MenuItem.jsx'
import SportCategoryItems from './SportCategoryItems.jsx'
import { Logo } from '../../assets/icons/all-icons'


const Menu = (props) => {
  return (
    <aside className='menu'>
      <Logo/>
      <MenuItem label='home' />

      {/* <MenuItem label='sports' /> */}
      <SportCategoryItems />
      {/* <MenuItem label='infos' /> */}
    </aside>
  )
}

export default Menu