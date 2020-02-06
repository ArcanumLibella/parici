import React, { useState } from "react";

// SVG
import { Archery, Athletic, BMX, BMXFreestyle, Badminton, Basketball, Basketball3, Beachvolley, Boxing, Breakdance, Canoe, Climbing, Equestrian, Fencing, Football, Golf, Gymnastic, Handball, Hockey, Judo, MountainBike, OpenWaterSwimming, Pentathlon, RoadBike, Rowing, Rugby, Shooting, Skateboarding, IndoorSwimming, TableTennis, Taekwendo, Tennis, Track, Triathlon, Volleyball, Weightlifting, Wrestling } from '../../assets/icons/all-icons'

const SportItem = ({ sport, color }) => {
  const { sportId, sportName } = sport

  const [isClicked, setIsClicked] = useState(false)

  // Function to handle click on dropdown__label
  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  // Function to handle icons sports and color onClick
  const handleSportsIcon = (sportName, color) => {
    switch (sportName) {
      case 'Archery':
        return <Archery className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Athletic':
        return <Athletic className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'BMX':
        return <BMX className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'BMX Freestyle':
        return <BMXFreestyle className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Badminton':
        return <Badminton className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Basketball':
        return <Basketball className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Basketball3':
        return <Basketball3 className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Beachvolley':
        return <Beachvolley className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Boxing':
        return <Boxing className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Breakdance':
        return <Breakdance className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Canoe':
        return <Canoe className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Climbing':
        return <Climbing className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Equestrian':
        return <Equestrian className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Fencing':
        return <Fencing className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Football':
        return <Football className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Golf':
        return <Golf className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Gymnastic':
        return <Gymnastic className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Handball':
        return <Handball className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Hockey':
        return <Hockey className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Judo':
        return <Judo className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Mountain Bike':
        return <MountainBike className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Open Water Swimming':
        return <OpenWaterSwimming className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Pentathlon':
        return <Pentathlon className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Roadbike':
        return <RoadBike className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Rowing':
        return <Rowing className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Rugby':
        return <Rugby className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
        
      case 'Shooting':
        return <Shooting className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Skateboarding':
        return <Skateboarding className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Indoor Swimming':
        return <IndoorSwimming className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Table Tennis':
        return <TableTennis className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Taekwendo':
        return <Taekwendo className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Tennis':
        return <Tennis className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Track':
        return <Track className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Triathlon':
        return <Triathlon className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Volleyball':
        return <Volleyball className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Weightlifting':
        return <Weightlifting className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      case 'Wrestling':
        return <Wrestling className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>

      default:
        return 'No icons ! '
    }
  }

  return (
    <li 
      className='dropdown__item' 
      key={sportId}
      onClick={() => handleClick() }
      >
      {/* TODO: add an id for each sport and use it for id and htmlFor */}
      {/* <input className='dropdown__checkbox' type="checkbox" id={sportId} name={sportId}></input> */}
      <label className='dropdown__label dropdown-label' htmlFor={sportId}>
        { handleSportsIcon(sportName, color) }
        { sportName }
      </label>
    </li>
  )
}

export default SportItem