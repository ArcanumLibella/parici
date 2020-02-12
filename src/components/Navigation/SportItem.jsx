import React, { useState } from "react";

// SVG
import { Archery, Athletic, BMX, BMXFreestyle, Badminton, Basketball, Basketball3, Beachvolley, Boxing, Breakdance, Canoe, Climbing, Equestrian, Fencing, Football, Golf, Gymnastic, Handball, Hockey, Judo, MountainBike, OpenWaterSwimming, Pentathlon, RoadBike, Rowing, Rugby, Shooting, Skateboarding, IndoorSwimming, TableTennis, Taekwendo, Tennis, Track, Triathlon, Volleyball, Weightlifting, Wrestling } from '../../assets/icons/all-icons'



const SportItem = ({ sport, color }) => {
  // PROPS
  const { id } = sport

  // STATE
  const [isClicked, setIsClicked] = useState(false)

  // FUNCTIONS
  // To handle click on dropdown__label
  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  // To handle icons sports and color onClick
  const handleSportsIcon = (sport, color) => {
    switch (sport) {
      case 'Archery':
        return <Archery className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Athletics':
        return <Athletic className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'BMX':
        return <BMX className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Freestyle BMX':
        return <BMXFreestyle className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Badminton':
        return <Badminton className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Basket-ball':
        return <Basketball className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Basket-ball 3X3':
        return <Basketball3 className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Beach volley':
        return <Beachvolley className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Boxing':
        return <Boxing className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Breakdance':
        return <Breakdance className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Canoe Kayak':
        return <Canoe className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Climbing':
        return <Climbing className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Horse riding':
        return <Equestrian className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Fencing':
        return <Fencing className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Football':
        return <Football className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Golf':
        return <Golf className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Gymnastic':
        return <Gymnastic className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Handball':
        return <Handball className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Filed hockey':
        return <Hockey className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Judo':
        return <Judo className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'VTT':
        return <MountainBike className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Open water swimming':
        return <OpenWaterSwimming className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Modern pentathlon':
        return <Pentathlon className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Road cycling':
        return <RoadBike className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Rowing':
        return <Rowing className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Rugby':
        return <Rugby className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Shooting':
        return <Shooting className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Skateboard':
        return <Skateboarding className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Swimming':
        return <IndoorSwimming className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Table tennis':
        return <TableTennis className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Taekwondo':
        return <Taekwendo className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Tennis':
        return <Tennis className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Track cycling':
        return <Track className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Triathlon':
        return <Triathlon className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Volley-ball indoor':
        return <Volleyball className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Weightlifting':
        return <Weightlifting className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      case 'Wrestling':
        return <Wrestling className={isClicked ? 'is-selected' : ''} style={isClicked ? { fill: color } : { fill: 'white' }} />

      default:
        return 'No icons ! '
    }
  }

  return (
    <li
      className='dropdown__item'
      key={id}
      onClick={() => handleClick()}
    >
      {/* TODO: add an id for each sport and use it for id and htmlFor */}
      {/* <input className='dropdown__checkbox' type="checkbox" id={sportId} name={sportId}></input> */}
      <label className='dropdown__label dropdown-label' htmlFor={id}>
        {handleSportsIcon(sport, color)}
        {sport}
      </label>
    </li>
  )
}

export default SportItem