import React, { useState, useEffect } from 'react'

// COMPONENTS
import SportItems from '../Selection/SportItems'

// SVG
import { Shoot, Artistic, Athletics, Biking, Fight, Others, Racket, Sailing, Swimming, Team } from '../../assets/icons/all-icons'

const CardSelection = ({ familySport, updateSportSelection, removeSportSelection }) => {
  const [name, setName] = useState(false)
  const [color, setColor] = useState(false)

  // FUNCTIONS
  // To handle sports selected
  const handleSportSelection = (sport) => {
    updateSportSelection(sport)
  }

  const removeSport = (e) => {
    removeSportSelection(e)
  }

  // To update data
  const updateData = () => {
    setName(familySport.name)
    setColor(familySport.color)
  }

  useEffect(() => {
    updateData()
  })

  // To handle sports icons
  const handleIconsSports = (name) => {
    switch (name) {
      case 'artistics':
        return <Artistic />
      case 'athletics':
        return <Athletics />
      case 'cycling':
        return <Biking />
      case 'martial arts':
        return <Fight />
      case 'others':
        return <Others />
      case 'rackets':
        return <Racket />
      case 'sailing':
        return <Sailing />
      case 'precisions':
        return <Shoot />
      case 'aquatics':
        return <Swimming />
      case 'teams':
        return <Team />
      default:
        return 'No icons'
    }
  }

  return (
    <div className='sports-family'>

      <div className='sports-family__header'>
        <div
          className='sports-family__icon'
          style={{ backgroundColor: color }}>
          {handleIconsSports(name)}
        </div>
        <h5 className='sports-family__title family-title'>{name}</h5>
      </div>

      <SportItems
        familySport={familySport}
        updateSportSelection={sport => handleSportSelection(sport)}
        removeSportSelection={sport => removeSport(sport)}
      />

    </div>
  )
}

export default CardSelection