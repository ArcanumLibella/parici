import React from 'react'

// COMPONENTS
import Button from '../components/GLOBAL/Button'

// SVG
import { Logo } from '../assets/icons/all-icons'

// IMAGES
import Mockup from '../assets/images/mockup.png'
import France from '../assets/images/france.png'


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
        <div className='concept__wrapper content-wrapper'>
          <div className='concept__image'></div>
          <div className='concept__texts'>
            <h3 className='concept__text h3'>Choose the Olympic events you wish to attend</h3>
            <h3 className='concept__text h3'>We tell you which district of Paris allows you to get there the fastest</h3>
            <h3 className='concept__text h3'>Compare districts to see which one is most suitable for you</h3>
          </div>
        </div>
      </section>

      <section className='selection'>
        <div className='selection__wrapper content-wrapper'>
        <h2 className='selection__title h2'>Select your Olympic events</h2>
        <p className='selection__paragraph paragraph'>
          Scroll to zoom in on Paris
        </p>
        <img className='selection__image' src={ France } alt='map of France'/>
        </div>
      </section>
    </main>
  )
}

export default Landing