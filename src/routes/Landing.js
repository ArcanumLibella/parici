import React, { useRef, useState } from 'react'

// COMPONENTS
import Header from '../components/Commons/Header/Header'
import Button from '../components/Commons/Button/Button'
import IconsBubble from '../components/Commons/IconsBubble/IconsBubble'

// SVG
import { Arrow } from '../assets/icons/all-icons'

// IMAGES
import Choose from '../assets/images/choose.png'
import Fast from '../assets/images/fast.png'
import Explore from '../assets/images/explore.png'
import Switch from '../assets/images/switch.png'


const Landing = (props) => {
  const ref = useRef();

  return (
    <main className='page-landing' ref={ref}>
      <header
        className={ 'header'}>
        <Header />
      </header>

      <div className='icons-jo'>
        <IconsBubble />
      </div>
      <div className='icons-jo icons-jo--right'>
        <IconsBubble />
      </div>

      <section className='hero'>
        <div className='content-wrapper'>
          <div className='hero__insert'>
            <h1 className='hero__title h1' >Let us <span className='highlight'>optimize</span> your stay in Paris</h1>
            <h3 className='hero__subtitle h3'>Paris 2024 Olympic <span className='highlight'>Games</span></h3>
          </div>
          <Arrow />
        </div>
      </section>

      <section className='how-it-works'>
        <div className='content-wrapper'>
          <h2 className='how-it-works__title h2'>How it <span className='highlight'>works</span> ?</h2>

          <div className='how-it-works__wrapper'>
            <div className='how-it-works__step'>
              <img src={Choose} alt='choose illustration' />
              <p className='how-it-works__text h4'>
                <span className='highlight'><strong>Choose</strong></span> the Olympic events you <strong>wish to attend</strong>
              </p>
            </div>

            <div className='how-it-works__step'>
              <img src={Fast} alt='fast illustration' />
              <p className='how-it-works__text h4'>
                We tell you which <strong>district</strong> of Paris allows you to get there the <span className='highlight'><strong>fastest</strong></span>
              </p>
            </div>

            <div className='how-it-works__step'>
              <img src={Explore} alt='explore illustration' />
              <p className='how-it-works__text h4'>
                <span className='highlight'><strong>Explore</strong></span> districts through data te see which one is most <strong>suitable</strong> for you
              </p>
            </div>

          </div>
          <Button textCta='Optimize your stay' linkCta='/selection' />
        </div>
      </section>

      <section className='switch'>
        <div className='content-wrapper'>
          <h2 className='switch__title h2'>Switch to <span className='highlight'>desktop</span> to see more !</h2>
          <p className='switch__subtitle paragraph'>Our website is not well suited for mobile... We will work on it !
          </p>
          <img src={Switch} alt='switch to desktop illustration' />
        </div>
      </section>

    </main>
  )
}

export default Landing