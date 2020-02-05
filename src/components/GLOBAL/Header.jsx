import React from 'react'

// COMPONENTS
import Button from './Button'

// SVG
import { Logo } from '../../assets/icons/all-icons'



const Header = () => {
  return (
    <div className='header__wrapper content-wrapper'>
      <Logo />
      <nav className='header__navigation'>
        <Button textCta='Credits' linkCta='/credits'/>
        <Button textCta='Go to map' linkCta='/webapp'/>
      </nav>
    </div>
  )
}

export default Header