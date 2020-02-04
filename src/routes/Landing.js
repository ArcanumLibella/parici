import React from 'react'

// COMPONENTS
import Header from '../components/GLOBAL/Header'

// IMAGES
import Mockup from '../assets/images/mockup.png'
import France from '../assets/images/france.png'

// SVG
import { Archery, Athletic, BMX, BMXFreestyle, Badminton, Basketball, Basketball3, Beachvolley, Boxing, Breakdance, Canoe, Climbing, Equestrian, Fencing, Football, Golf, Gymnastic, Handball, Hockey, Judo, MountainBike, OpenWaterSwimming, Pentathlon, RoadBike, Rowing, Rugby, Shooting, Skateboarding, IndoorSwimming, TableTennis, Taekwendo, Tennis, Track, Triathlon, Volleyball, Weightlifting, Wrestling } from '../assets/icons/all-icons'

const Landing = (props) => {  
  return (
    <main className='landing'>
      <Header/>

      <div className='icons-jo'>
        <Archery/>
        <Badminton/>
        <Canoe/>
        <Athletic/>
        <Archery/>
        <Archery/>
        <Archery/>
        <Archery/>
        <Badminton/>
        <Canoe/>
        <Athletic/>
        <BMX/>
        <BMXFreestyle/>
        <Badminton/>
        <Basketball/>
        <Basketball3/>
        <Beachvolley/>
        <Boxing/>
        <Breakdance/>
        <Climbing/>
        <Equestrian/>
        <Fencing/>
        <Football/>
        <Golf/>
        <Gymnastic/>
        <Handball/>
        <Hockey/>
        <Judo/>
        <MountainBike/>
        <OpenWaterSwimming/>
        <Pentathlon/>
        <RoadBike/>
        <Rowing/>
        <Rugby/>
        <Shooting/>
        <Skateboarding/>
        <IndoorSwimming/>
        <TableTennis/>
        <Taekwendo/>
        <Tennis/>
        <Track/>
        <Triathlon/>
        <Volleyball/>
        <Weightlifting/>
        <Wrestling/>
      </div> 

      <section className='hero'>
        <div className='content-wrapper'>
          <h1 className='hero__title h1'>Olympic stay Optimized</h1>
          <img className='hero__image' src={ Mockup } alt='app mockup'/>
        </div>
      </section>

      <section className='concept'>
        <div className='concept__wrapper content-wrapper'>
          <div className='concept__image'></div>
          <div className='concept__texts'>
            <h3 id="test" className='concept__text h3' data-text='Choose the Olympic events you wish to attend'>Choose the Olympic events you wish to attend</h3>
            <h3 id="test" className='concept__text h3' data-text='We tell you which district of Paris allows you to get there the fastest'>We tell you which district of Paris allows you to get there the fastest</h3>
            <h3 id="test" className='concept__text h3' data-text='Compare districts to see which one is most suitable for you'>Compare districts to see which one is most suitable for you</h3>
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