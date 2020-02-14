import React, { useState } from "react";

// SVG
import { Archery, Athletic, BMX, BMXFreestyle, Badminton, Basketball, Basketball3, Beachvolley, Boxing, Breakdance, Canoe, Climbing, Equestrian, Fencing, Football, Golf, Gymnastic, Handball, Hockey, Judo, MountainBike, OpenWaterSwimming, Pentathlon, RoadBike, Rowing, Rugby, Shooting, Skateboarding, IndoorSwimming, TableTennis, Taekwendo, Tennis, Track, Triathlon, Volleyball, Weightlifting, Wrestling } from '../../assets/icons/all-icons'



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
  const handleSportsIcon = (sport, color) => {
    switch (sport.name) {
      case 'Archery':
        return <Archery className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Athletics':
        return <Athletic className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'BMX':
        return <BMX className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Freestyle BMX':
        return <BMXFreestyle className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Badminton':
        return <Badminton className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Basket-ball':
        return <Basketball className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Basket-ball 3X3':
        return <Basketball3 className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Beach volley':
        return <Beachvolley className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Boxing':
        return <Boxing className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Breakdance':
        return <Breakdance className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Canoe Kayak':
        return <Canoe className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Climbing':
        return <Climbing className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Horse riding':
        return <Equestrian className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Fencing':
        return <Fencing className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Football':
        return <Football className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Golf':
        return <Golf className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Gymnastic':
        return <Gymnastic className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Handball':
        return <Handball className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Filed hockey':
        return <Hockey className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Judo':
        return <Judo className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'VTT':
        return <MountainBike className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Open water swimming':
        return <OpenWaterSwimming className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Modern pentathlon':
        return <Pentathlon className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Road cycling':
        return <RoadBike className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Rowing':
        return <Rowing className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Rugby':
        return <Rugby className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Shooting':
        return <Shooting className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Skateboard':
        return <Skateboarding className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Swimming':
        return <IndoorSwimming className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Table tennis':
        return <TableTennis className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Taekwondo':
        return <Taekwendo className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Tennis':
        return <Tennis className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Track cycling':
        return <Track className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Triathlon':
        return <Triathlon className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Volley-ball indoor':
        return <Volleyball className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Weightlifting':
        return <Weightlifting className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

      case 'Wrestling':
        return <Wrestling className={isSelected ? 'is-selected' : ''} style={isSelected ? { fill: color } : { fill: 'white' }} />

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