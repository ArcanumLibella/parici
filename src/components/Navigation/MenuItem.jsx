import React from 'react'

// SVG
import { Home } from '../../assets/icons/all-icons'



const MenuItem = (props) => {
  const { label } = props

  return (
    <div className='menu__item'>
      <div className='menu__icon'>
        <Home/>
      </div>
      <p className='menu__title menu-title'>{label}</p>
    </div >
  )
}

export default MenuItem