import React from 'react'

// COMPONENTS
import CardSelection from '../components/CardSelection/CardSelection'


const Selection = (props) => {
  // PROPS
  const { sportsList } = props

  // FUNCTIONS
  const displayFamilies = () => {
    return (
      // console.log(sportsList)
      sportsList && sportsList.map(
        (familySport, i) => (
          <CardSelection
            key={i}
            familySport={familySport}
          />
        )
      )
    )
  }

  return (
    <main className='page-selection'>
      <div className='content-wrapper'>
        <div className='page-selection__head'>
          <h4 className='page-selection__title h4'>Select up to five Olympic events</h4>
          <p className='page-selection__subtitle paragraph'>We will compare and tell you wich district of Paris allows you to get there the fastest</p>
        </div>
        <div className='sports-families'>
          {displayFamilies()}
        </div>
      </div>
    </main>
  )
}

export default Selection