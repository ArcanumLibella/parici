import React, { useState } from "react";

// SVG
import { Archery, Athletic, BMX, BMXFreestyle, Badminton, Basketball, Basketball3, Beachvolley, Boxing, Breakdance, Canoe, Climbing, Equestrian, Fencing, Football, Golf, Gymnastic, Handball, Hockey, Judo, MountainBike, OpenWaterSwimming, Pentathlon, RoadBike, Rowing, Rugby, Shooting, Skateboarding, IndoorSwimming, TableTennis, Taekwendo, Tennis, Track, Triathlon, Volleyball, Weightlifting, Wrestling, Waterpolo, Plunge, Synchronized } from '../../assets/icons/all-icons'



const SportItem = ({ sport, color }) => {
  // PROPS
  const { name, id } = sport

  // STATE
  const [isSelected, setIsSelected] = useState(false)

  // FUNCTIONS
  // To handle Select on dropdown__label
  const handleSelect = () => {
    setIsSelected(!isSelected)
  }

  // To handle icons sports and color onClick
  const handleSportsIcon = (sport) => {
    switch (name) {
      case 'archery':
        return <Archery className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'athletics':
        return <Athletic className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'BMX racing':
        return <BMX className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'freestyle BMX':
        return <BMXFreestyle className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'badminton':
        return <Badminton className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'basketball':
        return <Basketball className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'basketball 3X3':
        return <Basketball3 className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'beach volley':
        return <Beachvolley className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'boxing':
        return <Boxing className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'breakdance':
        return <Breakdance className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'canoe kayak':
        return <Canoe className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'sport climbing':
        return <Climbing className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'equestrian':
        return <Equestrian className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'fencing':
        return <Fencing className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'football':
        return <Football className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'golf':
        return <Golf className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'gymnastic':
        return <Gymnastic className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'handball':
        return <Handball className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'hockey':
        return <Hockey className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'judo':
        return <Judo className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'mountain bike':
        return <MountainBike className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'open water swimming':
        return <OpenWaterSwimming className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'modern pentathlon':
        return <Pentathlon className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'road cycling':
        return <RoadBike className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'rowing':
        return <Rowing className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'rugby':
        return <Rugby className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'shooting':
        return <Shooting className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'skateboarding':
        return <Skateboarding className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'swimming':
        return <IndoorSwimming className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'table tennis':
        return <TableTennis className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'taekwondo':
        return <Taekwendo className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'tennis':
        return <Tennis className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'track cycling':
        return <Track className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'triathlon':
        return <Triathlon className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'volleyball':
        return <Volleyball className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'weightlifting':
        return <Weightlifting className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'wrestling':
        return <Wrestling className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'water-polo':
        return <Waterpolo className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'plunge':
        return <Plunge className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      case 'synchronized swimming':
        return <Synchronized className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#222222' }} />

      default:
        return 'No icons ! '
    }
  }

  return (
    <li
      className='dropdown__item'
      key={id}
      onClick={() => handleSelect()}
    >
      {/* TODO: add an id for each sport and use it for id and htmlFor */}
      {/* <input className='dropdown__checkbox' type="checkbox" id={sportId} name={sportId}></input> */}
      <label className='dropdown__label dropdown-label' htmlFor={id}>
        {handleSportsIcon(sport, color)}
        {name}
      </label>
    </li>
  )
}

export default SportItem