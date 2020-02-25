import React from 'react'

// COMPONENTS
import { LittleArrow } from '../../assets/icons/all-icons'

const MenuSelection = () => {
  return (
    <div className='menu-selection'>
      <p className='menu-selection__title menu-selection-title'>Your selection</p>
      <ul className='menu-selection__sports'>
        <li className='menu-selection__sport menu-selection-subtitle'>
          <span className='menu-selection__icon'></span>
          Open Water Swimming
        </li>
        <li className='menu-selection__sport menu-selection-subtitle'>
          <span className='menu-selection__icon'></span>
          Weightlifting
        </li>
        <li className='menu-selection__sport menu-selection-subtitle'>
          <span className='menu-selection__icon'></span>
          Indoor Swimming
        </li>
        <li className='menu-selection__sport menu-selection-subtitle'>
          <span className='menu-selection__icon'></span>
          Skateboarding
        </li>
        <li className='menu-selection__sport menu-selection-subtitle'>
          <span className='menu-selection__icon'></span>
          Mountain Bike
        </li>
      </ul>
      {/* TODO: if less than 5 sports selected -> display: none */}
      <div className='menu-selection__more'>
        <LittleArrow />
      </div>
    </div>
  )
}

export default MenuSelection