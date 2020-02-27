import React, { useContext, useState } from 'react'
import SportContext from '../../SportContext'

// SVG
import { LittleArrow, Archery, Athletic, BMX, BMXFreestyle, Badminton, Basketball, Basketball3, Beachvolley, Boxing, Breakdance, Canoe, Climbing, Equestrian, Fencing, Football, Golf, Gymnastic, Handball, Hockey, Judo, MountainBike, OpenWaterSwimming, Pentathlon, RoadBike, Rowing, Rugby, Shooting, Skateboarding, IndoorSwimming, TableTennis, Taekwendo, Tennis, Track, Triathlon, Volleyball, Weightlifting, Wrestling, Waterpolo, Plunge, Synchronized } from '../../assets/icons/all-icons'



const MenuSelection = ({ sportsList, updateSportSelection, removeSportSelection }) => {

  // CONTEXT
  const sportsSelection = useContext(SportContext)
  // console.log(sportsSelection)

  // STATE
  const [isSelected, setIsSelected] = useState(false)

  // FUNCTIONS
  // To display sport icon selected
  const displaySportsIcon = (sportName) => {
    switch (sportName) {
      case 'archery':
        return <Archery />

      case 'athletics':
        return <Athletic />

      case 'BMX racing':
        return <BMX />

      case 'freestyle BMX':
        return <BMXFreestyle />

      case 'badminton':
        return <Badminton />

      case 'basketball':
        return <Basketball />

      case 'basketball 3X3':
        return <Basketball3 />

      case 'beach volley':
        return <Beachvolley />

      case 'boxing':
        return <Boxing />

      case 'breakdance':
        return <Breakdance />

      case 'canoe kayak':
        return <Canoe />

      case 'sport climbing':
        return <Climbing />

      case 'equestrian':
        return <Equestrian />

      case 'fencing':
        return <Fencing />

      case 'football':
        return <Football />

      case 'golf':
        return <Golf />

      case 'gymnastic':
        return <Gymnastic />

      case 'handball':
        return <Handball />

      case 'hockey':
        return <Hockey />

      case 'judo':
        return <Judo />

      case 'mountain bike':
        return <MountainBike />

      case 'open water swimming':
        return <OpenWaterSwimming />

      case 'modern pentathlon':
        return <Pentathlon />

      case 'road cycling':
        return <RoadBike />

      case 'rowing':
        return <Rowing />

      case 'rugby':
        return <Rugby />

      case 'shooting':
        return <Shooting />

      case 'skateboarding':
        return <Skateboarding />

      case 'swimming':
        return <IndoorSwimming />

      case 'table tennis':
        return <TableTennis />

      case 'taekwondo':
        return <Taekwendo />

      case 'tennis':
        return <Tennis />

      case 'track cycling':
        return <Track />

      case 'triathlon':
        return <Triathlon />

      case 'volleyball':
        return <Volleyball />

      case 'weightlifting':
        return <Weightlifting />

      case 'wrestling':
        return <Wrestling />

      case 'water-polo':
        return <Waterpolo />

      case 'plunge':
        return <Plunge />

      case 'synchronized swimming':
        return <Synchronized />

      default:
        return 'No icons ! '
    }
  }

  // To check number of sports
  const checkNumberSports = (sportsSelection) => {
    if (sportsSelection.length > 5) {
      return (
        <div className='menu-selection__more'>
          <LittleArrow />
        </div>
      )
    }
  }

  // To remove a sport selected
  const handleSportSelection = (sportSelected) => {
    setIsSelected(!isSelected)
    if ({ isSelected }) {
      updateSportSelection(sportSelected)
      removeSportSelection(sportSelected)
    }
  }

  // To display sports selected
  const displaySportsSelected = () => {
    return (
      sportsSelection && sportsSelection.map(
        (sportSelected, id) => {
          let sportName = 'no name'
          sportsList.forEach(family => {
            family.sports.forEach(sport => {
              if (sportSelected === sport.id) {
                sportName = sport.name
              }
            });
          });

          return (
            < li
              key={id}
              className='menu-selection__sport menu-selection-subtitle'
              onClick={sportSelected => handleSportSelection(sportSelected)} >
              <span className='menu-selection__icon'>{displaySportsIcon(sportName)}</span>
              {sportName}
            </li >
          )
        }
      )
    )
  }

  return (
    <div className='menu-selection'>
      <p className='menu-selection__title menu-selection-title'>Your selection</p>
      <ul className='menu-selection__sports'>
        {displaySportsSelected()}
      </ul>

      {checkNumberSports(sportsSelection)}

    </div>
  )
}

export default MenuSelection