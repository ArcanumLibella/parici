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

  // TODO: Mettre le path à l'intérieur en white
  const displaySportsIcon = (color) => {
    if (sportName === 'Archery') {
      return <Archery className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Athletic') {
      return <Athletic className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'BMX') {
      return <BMX className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'BMX Freestyle') {
      return <BMXFreestyle className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Badminton') {
      return <Badminton className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Basketball') {
      return <Basketball className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Basketball3') {
      return <Basketball3 className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Beachvolley') {
      return <Beachvolley className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Boxing') {
      return <Boxing className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Breakdance') {
      return <Breakdance className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Canoe') {
      return <Canoe className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Climbing') {
      return <Climbing className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Equestrian') {
      return <Equestrian className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Fencing') {
      return <Fencing className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Football') {
      return <Football className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Golf') {
      return <Golf className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Gymnastic') {
      return <Gymnastic className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Handball') {
      return <Handball className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Hockey') {
      return <Hockey className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Judo') {
      return <Judo className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Mountain Bike') {
      return <MountainBike className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Open Water Swimming') {
      return <OpenWaterSwimming className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Pentathlon') {
      return <Pentathlon className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'RoadBike') {
      return <RoadBike className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Rowing') {
      return <Rowing className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Rugby') {
      return <Rugby className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Shooting') {
      return <Shooting className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Skateboarding') {
      return <Skateboarding className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Indoor Swimming') {
      return <IndoorSwimming className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Table Tennis') {
      return <TableTennis className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Taekwendo') {
      return <Taekwendo className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Tennis') {
      return <Tennis className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Track') {
      return <Track className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Triathlon') {
      return <Triathlon className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Volleyball') {
      return <Volleyball className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Weightlifting') {
      return <Weightlifting className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
    } else if (sportName === 'Wrestling') {
      return <Wrestling className={ isClicked ? 'is-selected' : '' } style={ isClicked ? {fill: color} : {fill: 'white'} }/>
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
        { displaySportsIcon(color) }
        { sportName }
      </label>
    </li>
  )
}

export default SportItem