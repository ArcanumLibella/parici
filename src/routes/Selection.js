import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import SportContext from '../SportContext'

// COMPONENTS
import CardSelection from '../components/CardSelection/CardSelection'
import Button from '../components/Commons/Button/Button'

// SVG
import { Logo } from '../assets/icons/all-icons'


const Selection = ({ sportsList, updateSportSelection, removeSportSelection }) => {
  // CONTEXT
  const sportsSelection = useContext(SportContext)
  // console.log(sportsSelection)

  // FUNCTIONS
  // To handle sports selected
  const handleSportSelection = (sport) => {
    updateSportSelection(sport)
  }

  // To remove sport from the list
  const removeSport = (sport) => {
    removeSportSelection(sport)
  }

  const displayFamilies = () => {
    return (
      sportsList && sportsList.map(
        (familySport, i) => (
          <CardSelection
            key={i}
            familySport={familySport}
            updateSportSelection={sport => handleSportSelection(sport)}
            removeSportSelection={sport => removeSport(sport)}
          />
        )
      )
    )
  }

  return (
    <main className='page-selection'>
      <div className='content-wrapper'>

        <Link to="/">
          <Logo />
        </Link>

        <div className='page-selection__head'>
          <h4 className='page-selection__title h4'>Select the <strong>Olympics events</strong> you wish to attend  </h4>
          <p className='page-selection__subtitle paragraph'>We will compare and tell you wich district of Paris allows you to get there the fastest</p>
        </div>

        <div className='sports-families'>
          {displayFamilies()}
        </div>

        <Button textCta='Validate choice' linkCta='/app' />

      </div>

    </main>
  )
}

export default Selection