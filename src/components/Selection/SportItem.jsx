import React, { useState } from "react";

// SVG
import { Archery, Athletic, BMX, BMXFreestyle, Badminton, Basketball, Basketball3, Beachvolley, Boxing, Breakdance, Canoe, Climbing, Equestrian, Fencing, Football, Golf, Gymnastic, Handball, Hockey, Judo, MountainBike, OpenWaterSwimming, Pentathlon, RoadBike, Rowing, Rugby, Shooting, Skateboarding, IndoorSwimming, TableTennis, Taekwendo, Tennis, Track, Triathlon, Volleyball, Weightlifting, Wrestling, Waterpolo, Plunge, Synchronized } from '../../assets/icons/all-icons'



const SportItem = ({ sport, color, updateSportSelection, removeSportSelection }) => {
  // PROPS
  const { name, id } = sport

  // STATE
  const [isSelected, setIsSelected] = useState(false)

  // FUNCTIONS
  // To handle selected sport
  const handleSportSelection = () => {
    setIsSelected(!isSelected)
    if ({ isSelected }) {
      updateSportSelection(id)
      removeSportSelection(id)
    }
  }

  // To handle icons sports and color onClick
  const handleSportsIcon = (sport) => {
    switch (name) {
      case 'archery':
        return <Archery className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'athletics':
        return <Athletic className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'BMX racing':
        return <BMX className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'freestyle BMX':
        return <BMXFreestyle className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'badminton':
        return <Badminton className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'basketball':
        return <Basketball className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'basketball 3X3':
        return <Basketball3 className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'beach volley':
        return <Beachvolley className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'boxing':
        return <Boxing className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'breakdance':
        return <Breakdance className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'canoe kayak':
        return <Canoe className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'sport climbing':
        return <Climbing className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'equestrian':
        return <Equestrian className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'fencing':
        return <Fencing className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'football':
        return <Football className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'golf':
        return <Golf className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'gymnastic':
        return <Gymnastic className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'handball':
        return <Handball className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'hockey':
        return <Hockey className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'judo':
        return <Judo className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'mountain bike':
        return <MountainBike className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'open water swimming':
        return <OpenWaterSwimming className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'modern pentathlon':
        return <Pentathlon className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'road cycling':
        return <RoadBike className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'rowing':
        return <Rowing className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'rugby':
        return <Rugby className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'shooting':
        return <Shooting className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'skateboarding':
        return <Skateboarding className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: '#4452C5' }} />

      case 'swimming':
        return <IndoorSwimming className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'table tennis':
        return <TableTennis className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'taekwondo':
        return <Taekwendo className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'tennis':
        return <Tennis className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'track cycling':
        return <Track className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'triathlon':
        return <Triathlon className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'volleyball':
        return <Volleyball className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'weightlifting':
        return <Weightlifting className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'wrestling':
        return <Wrestling className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'water-polo':
        return <Waterpolo className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'plunge':
        return <Plunge className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'synchronized swimming':
        return <Synchronized className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      default:
        return 'No icons ! '
    }
  }

  return (
    <li
      className={isSelected ? 'sports-family__item is-selected' : 'sports-family__item'}
      key={id}
      onClick={sport => handleSportSelection(sport)}
    >
      <label className='sports-family__label sport-label' htmlFor={id} >
        {handleSportsIcon(sport)}
        {name}
      </label>
    </li>
  )
}

export default SportItem