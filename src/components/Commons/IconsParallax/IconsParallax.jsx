import React, { Fragment } from 'react'
import Parallax from 'react-rellax'

// SVG
import { Archery, Athletic, BMX, BMXFreestyle, Badminton, Basketball, Basketball3, Beachvolley, Boxing, Breakdance, Canoe, Climbing, Equestrian, Fencing, Football, Golf, Gymnastic, Handball, Hockey, Judo, MountainBike, OpenWaterSwimming, Pentathlon, RoadBike, Rowing, Rugby, Shooting, Skateboarding, IndoorSwimming, TableTennis, Taekwendo, Tennis, Track, Triathlon, Volleyball, Weightlifting, Wrestling } from '../../../assets/icons/all-icons'



const IconsParallax = () => {
  // Function to generate random icons
  const generateRandomIcons = () => {
    const iconsArray = [
      <Archery />,
      <Athletic />,
      <BMX />,
      <BMXFreestyle />,
      <Badminton />,
      <Basketball />,
      <Basketball3 />,
      <Beachvolley />,
      <Boxing />,
      <Breakdance />,
      <Canoe />,
      <Climbing />,
      <Equestrian />,
      <Fencing />,
      <Football />,
      <Golf />,
      <Gymnastic />,
      <Handball />,
      <Hockey />,
      <Judo />,
      <MountainBike />,
      <OpenWaterSwimming />,
      <Pentathlon />,
      <RoadBike />,
      <Rowing />,
      <Rugby />,
      <Shooting />,
      <Skateboarding />,
      <IndoorSwimming />,
      <TableTennis />,
      <Taekwendo />,
      <Tennis />,
      <Track />,
      <Triathlon />,
      <Volleyball />,
      <Weightlifting />,
      <Wrestling />
    ]
    return (
      iconsArray[Math.floor(Math.random() * iconsArray.length)]
    )
  }

  // Function to generate a random speed
  const generateRandomSpeed = () => {
    const speedArray = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
    return (
      speedArray[Math.floor(Math.random() * speedArray.length)]
    )
  }

  // Function to generate icons with parallax
  const handleIconsParallax = () => {
    const n = 20 // Number of icons in background (max 100)
    return ([...Array(n)].map
      (
        (icons, i) => (
          <Parallax
            key={i}
            speed={generateRandomSpeed()}
          >
            {generateRandomIcons()}
          </Parallax>
        )
      )
    )
  }

  return (
    <Fragment>
      {handleIconsParallax()}
    </Fragment>
  )
}

export default IconsParallax