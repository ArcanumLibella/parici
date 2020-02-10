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
    <section
      className={
        isClosed
          ? 'dashboard'
          : 'dashboard is-closed'
      }
    >
      <h2 className='dashboard__title dashboard-title'>8th district</h2>
      <div
        className='cross'
        onClick={() => handleDashboardDisplay()}
      >
        <Cross />
      </div>
      <div className='dashboard__wrapper cards'>

        <Podium cardType='podium' />
        <Card cardType='nature' dataType=' of green space' rankingType='largest green spaces' />
        <Card cardType='hostel' dataType='hostels' rankingType='most hotels' />
        <Card cardType='culture' dataType='points of interest' rankingType='most points of interest' />
        <Card cardType='restaurant' dataType='restaurants' rankingType='most restaurants' />

      </div>
      <div className='tuto'>
        <Tuto />
      </div>
    </section>
  )
}

export default Dashboard