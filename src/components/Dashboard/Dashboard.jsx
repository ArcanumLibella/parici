import React, { useState } from 'react'

// COMPONENTS
import Card from '../../components/Card/Card'
import { Podium } from '../CardFront'

// SVG
import { Tuto, Cross } from '../../assets/icons/all-icons'



const Dashboard = (props) => {
  const [isClosed, setIsClosed] = useState('true')

  // function to toggle dashboard display
  const handleDashboardDisplay = () => {
    setIsClosed(!isClosed)
  }

  return (
    <aside
      className={
        isClosed
          ? 'dashboard'
          : 'dashboard is-closed'
      }
    >
      {/* <h2 className='dashboard__title dashboard-title'>Paris 8th district ranking</h2> */}
      <div
        className='cross'
        onClick={() => handleDashboardDisplay()}
      >
        <Cross />
      </div>
      <div className='dashboard__wrapper cards'>

        <Podium cardType='podium' />
        <Card cardType='nature' dataType=' of Green Space' rankingType='surface' />
        <Card cardType='hostel' dataType='hostels' rankingType='count' />
        <Card cardType='culture' dataType='points of interest' rankingType='count' />
        <Card cardType='restaurant' dataType='restaurants' rankingType='count' />

      </div>
      <div className='tuto'>
        <Tuto />
      </div>
    </aside>
  )
}

export default Dashboard