import React from 'react'

// COMPONENTS
import Button from '../components/GLOBAL/Button'

// SVG
import { Logo } from '../assets/icons/all-icons'

// IMAGES
import Mockup from '../assets/images/mockup.png'


const Landing = (props) => {
  return (
    <main className='landing'>
      <div className='content-wrapper'>
        <header className='header'>
          <Logo />
          <nav className='header__navigation'>
            <Button textCta='Credits' linkCta='/credits'/>
            <Button textCta='Go to map' linkCta='/webapp'/>
          </nav>
        </header>

        <section className='hero'>
          <h1 className='hero__title h1'>Olympic stay Optimized</h1>
          <img className='hero__image' src={ Mockup } alt='app mockup'/>
        </section>
      </div>

      <section className='concept'>

      </section>
    </main>
  )
}

export default Landing