import React from 'react'

// SVG
import { Logo, Home } from '../../assets/icons/all-icons'



const MenuItem = (props) => {
  // PROPS
  const { label } = props

  const handleIconMenu = () => {
    switch (label) {
      case 'logo':
        return <Logo />
      case 'home':
        return <Home />
      default:
        return 'No icons'
    }
  }

  return (
    <div className={label !== 'logo' ? 'menu__item' : 'menu__item menu__item--logo'}>
      <div className='menu__icon'>
        {handleIconMenu()}
      </div>
    </div >
  )
}

export default MenuItem