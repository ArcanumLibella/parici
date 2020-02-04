import React from "react";

// SVG
import { Archery, Athletic, BMX, BMXFreestyle, Badminton, Basketball, Basketball3, Beachvolley, Boxing, Breakdance, Canoe, Climbing, Equestrian, Fencing, Football, Golf, Gymnastic, Handball, Hockey, Judo, MountainBike, OpenWaterSwiming, Pentathlon, RoadBike, Rowing, Rugby, Shooting, Skateboarding, IndoorSwimming, TableTennis, Taekwendo, Tennis, Track, Triathlon, Volleyball, Weightlifting, Wrestling } from '../../assets/icons/all-icons'

const SportItem = ({ sport, categoryColor }) => {
  const { sportId, sportName } = sport

  const displaySportsIcon = (categoryColor) => {
    console.log(categoryColor)
    if (sportName === 'Archery') {
      return <Archery style={{ fill: categoryColor }}/>
    } else if (sportName === 'Athletic') {
      return <Athletic/>
    } else if (sportName === 'BMX') {
      return <BMX/>
    } else if (sportName === 'BMXFreestyle') {
      return <BMXFreestyle/>
    } else if (sportName === 'Badminton') {
      return <Badminton/>
    } else if (sportName === 'Basketball') {
      return <Basketball/>
    } else if (sportName === 'Basketball3') {
      return <Basketball3/>
    } else if (sportName === 'Beachvolley') {
      return <Beachvolley/>
    } else if (sportName === 'Boxing') {
      return <Boxing/>
    } else if (sportName === 'Breakdance') {
      return <Breakdance/>
    } else if (sportName === 'Canoe') {
      return <Canoe/>
    } else if (sportName === 'Climbing') {
      return <Climbing/>
    } else if (sportName === 'Equestrian') {
      return <Equestrian/>
    } else if (sportName === 'Fencing') {
      return <Fencing/>
    } else if (sportName === 'Football') {
      return <Football/>
    } else if (sportName === 'Golf') {
      return <Golf/>
    } else if (sportName === 'Gymnastic') {
      return <Gymnastic/>
    } else if (sportName === 'Handball') {
      return <Handball/>
    } else if (sportName === 'Hockey') {
      return <Hockey/>
    } else if (sportName === 'Judo') {
      return <Judo/>
    } else if (sportName === 'MountainBike') {
      return <MountainBike/>
    } else if (sportName === 'OpenWaterSwiming') {
      return <OpenWaterSwiming/>
    } else if (sportName === 'Pentathlon') {
      return <Pentathlon/>
    } else if (sportName === 'RoadBike') {
      return <RoadBike/>
    } else if (sportName === 'Rowing') {
      return <Rowing/>
    } else if (sportName === 'Rugby') {
      return <Rugby/>
    } else if (sportName === 'Shooting') {
      return <Shooting/>
    } else if (sportName === 'Skateboarding') {
      return <Skateboarding/>
    } else if (sportName === 'IndoorSwimming') {
      return <IndoorSwimming/>
    } else if (sportName === 'Table Tennis') {
      return <TableTennis/>
    } else if (sportName === 'Taekwendo') {
      return <Taekwendo/>
    } else if (sportName === 'Tennis') {
      return <Tennis/>
    } else if (sportName === 'Track') {
      return <Track/>
    } else if (sportName === 'Triathlon') {
      return <Triathlon/>
    } else if (sportName === 'Volleyball') {
      return <Volleyball/>
    } else if (sportName === 'Weightlifting') {
      return <Weightlifting/>
    } else if (sportName === 'Wrestling') {
      return <Wrestling/>
    }
  }

  return (
    <li className='dropdown__item' key={sportId}>
      {/* TODO: add an id for each sport and use it for id and htmlFor */}
      {/* <input className='dropdown__checkbox' type="checkbox" id={sportId} name={sportId}></input> */}
      <label className='dropdown__label dropdown-label' htmlFor={sportId}>
        {/* TODO: A remplacer par les icônes de chaque sport */}
        {/* <svg width="12px" height="12px" viewBox="0 0 18 18">
          <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
          <polyline points="1 9 7 14 15 4"></polyline>
        </svg> */}
        { displaySportsIcon() }
        { sportName }
      </label>
    </li>
    
  )
}

export default SportItem