import React, { useState, useContext } from "react";
import SportContext from '../../SportContext'

// SVG
import { Archery, Athletic, BMX, BMXFreestyle, Badminton, Basketball, Basketball3, Beachvolley, Boxing, Breakdance, Canoe, Climbing, Equestrian, Fencing, Football, Golf, Gymnastic, Handball, Hockey, Judo, MountainBike, OpenWaterSwimming, Pentathlon, RoadBike, Rowing, Rugby, Shooting, Skateboarding, IndoorSwimming, TableTennis, Taekwendo, Tennis, Track, Triathlon, Volleyball, Weightlifting, Wrestling, Waterpolo, Plunge, Synchronized } from '../../assets/icons/all-icons'



const SportItem = ({ sport, color, updateSportSelection, removeSportSelection }) => {
  // PROPS
  const { name, id } = sport

  // CONTEXT
  const sportsSelection = useContext(SportContext)

  // STATE
  const [isSelected, setIsSelected] = useState(false)
  let checkSelection = sportsSelection.includes(id)

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
        return <Archery className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'athletics':
        return <Athletic className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'BMX racing':
        return <BMX className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'freestyle BMX':
        return <BMXFreestyle className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'badminton':
        return <Badminton className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'basketball':
        return <Basketball className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'basketball 3X3':
        return <Basketball3 className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'beach volley':
        return <Beachvolley className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'boxing':
        return <Boxing className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'breakdance':
        return <Breakdance className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'canoe kayak':
        return <Canoe className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'sport climbing':
        return <Climbing className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'equestrian':
        return <Equestrian className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'fencing':
        return <Fencing className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'football':
        return <Football className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'golf':
        return <Golf className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'gymnastic':
        return <Gymnastic className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'handball':
        return <Handball className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'hockey':
        return <Hockey className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'judo':
        return <Judo className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'mountain bike':
        return <MountainBike className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'open water swimming':
        return <OpenWaterSwimming className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'modern pentathlon':
        return <Pentathlon className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'road cycling':
        return <RoadBike className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'rowing':
        return <Rowing className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'rugby':
        return <Rugby className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'shooting':
        return <Shooting className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'skateboarding':
        return <Skateboarding className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: '#4452C5' }} />

      case 'swimming':
        return <IndoorSwimming className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: 'white' }} />

      case 'table tennis':
        return <TableTennis className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: 'white' }} />

      case 'taekwondo':
        return <Taekwendo className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: 'white' }} />

      case 'tennis':
        return <Tennis className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: 'white' }} />

      case 'track cycling':
        return <Track className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: 'white' }} />

      case 'triathlon':
        return <Triathlon className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: 'white' }} />

      case 'volleyball':
        return <Volleyball className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: 'white' }} />

      case 'weightlifting':
        return <Weightlifting className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: 'white' }} />

      case 'wrestling':
        return <Wrestling className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: 'white' }} />

      case 'water-polo':
        return <Waterpolo className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: 'white' }} />

      case 'plunge':
        return <Plunge className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: 'white' }} />

      case 'synchronized swimming':
        return <Synchronized className={checkSelection ? 'is-selected' : ''} style={checkSelection ? { fill: color } : { fill: 'white' }} />

      default:
        return 'No icons ! '
    }
  }

  return (
    <li
      className={checkSelection ? 'sports-family__item dropdown__item is-selected' : 'sports-family__item dropdown__item'}
      key={id}
      onClick={sport => handleSportSelection(sport)}
    >
      <label className='sports-family__label dropdown__label sport-label' htmlFor={id}>
        {handleSportsIcon(sport)}
        {name}
      </label>
    </li>
  )
}

export default SportItem