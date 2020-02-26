import React, { useState, useEffect } from 'react';
import { axiosQuery } from '../../Helpers'

// COMPONENTS
import Card from '../../components/Card/Card'
import { Podium } from '../CardFront'

// SVG
import { Tuto, Cross } from '../../assets/icons/all-icons'



const Dashboard = (props) => {
  const arrondi = 11

  const [isClosed, setIsClosed] = useState('true')
  const [podium, setPodium] = useState()
  const [nature, setNature] = useState()
  const [hotel, setHotel] = useState()
  const [culture, setCulture] = useState()

  // function to toggle dashboard display
  const handleDashboardDisplay = () => {
    setIsClosed(!isClosed)
  }

  // API CALL
  const retrieveDashboardData = async function () {
    let dashboardData = await axiosQuery('/api/districts')
    buildPodium(dashboardData)
    buildNature(dashboardData)
    buildHotel(dashboardData)
    buildCulture(dashboardData)
  }

  const buildPodium = function (data) {
    let podium = []
    data.forEach(district => {
      podium.push({
        natureRank: district.nature.rank,
        cultureRank: district.culture.rank,
        hotelRank: district.hotel.rank
      })
    });
    setPodium(podium)
  }

  const buildNature = function (data) {
    setNature(data[arrondi - 1].nature)
  }

  const buildHotel = function (data) {
    setHotel(data[arrondi - 1].hotel)
  }

  const buildCulture = function (data) {
    setCulture(data[arrondi - 1].culture)
  }

  useEffect(() => {
    retrieveDashboardData()
  }, [])

  return (
    <aside
      className={
        isClosed
          ? 'dashboard'
          : 'dashboard is-closed'
      }
    >
      <div
        className='cross'
        onClick={() => handleDashboardDisplay()}
      >
        <Cross />
      </div>
      <div className='dashboard__wrapper cards'>

        <Podium district={arrondi} data={podium} cardType='podium' />
        <Card data={nature} cardType='nature' dataType=' of Green Space' rankingType='surface' />
        <Card data={hotel} cardType='hotel' dataType='hotels' rankingType='count' />
        <Card data={culture} cardType='culture' dataType='points of interest' rankingType='count' />
        <Card data={arrondi} cardType='restaurant' dataType='restaurants' rankingType='count' />

      </div>
      <div className='tuto'>
        <Tuto />
      </div>
    </aside>
  )
}

export default Dashboard