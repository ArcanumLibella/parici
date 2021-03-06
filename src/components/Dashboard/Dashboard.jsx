import React, { useState, useEffect } from 'react';
import { axiosQuery } from '../../Helpers'

// COMPONENTS
import Card from '../../components/Card/Card'
import { Podium } from '../CardFront'

// SVG
import { Tuto, Cross } from '../../assets/icons/all-icons'



const Dashboard = ({ district }) => {
  const arrondi = district ? district : null

  // STATES
  const [isClosed, setIsClosed] = useState('true')
  const [podium, setPodium] = useState()
  const [nature, setNature] = useState()
  const [hotel, setHotel] = useState()
  const [culture, setCulture] = useState()
  const [restaurant, setRestaurant] = useState()

  // API CALL
  const retrieveDashboardData = async function () {
    if (district) {
      let dashboardData = await axiosQuery('/api/districts')
      buildPodium(dashboardData)
      buildNature(dashboardData)
      buildHotel(dashboardData)
      buildCulture(dashboardData)
      buildRestaurant(dashboardData)
    }
  }

  // FUNCTIONS
  // To toggle dashboard display
  const handleDashboardDisplay = () => {
    district = null
    setIsClosed(!isClosed)
  }

  // To generate podium
  const buildPodium = function (data) {
    let podium = []
    data.forEach(district => {
      podium.push({
        natureRank: district.nature.rank,
        cultureRank: district.culture.rank,
        hotelRank: district.hotel.rank,
        restaurantRank: district.restaurant.rank
      })
    });
    setPodium(podium)
  }

  // To generate nature data card
  const buildNature = function (data) {
    setNature(data[arrondi - 1].nature)
  }

  // To generate hotel data card
  const buildHotel = function (data) {
    setHotel(data[arrondi - 1].hotel)
  }

  // To generate culture data card
  const buildCulture = function (data) {
    setCulture(data[arrondi - 1].culture)
  }

  // To generate restaurant data card
  const buildRestaurant = function (data) {
    setRestaurant(data[arrondi - 1].restaurant)
  }

  useEffect(() => {
    retrieveDashboardData()
    if (district) {
      setIsClosed()
    }
  }, [district])

  return (
    <aside className={isClosed ? 'dashboard is-closed' : 'dashboard'}>
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
        <Card data={restaurant} cardType='restaurant' dataType='restaurants' rankingType='count' />
      </div>

      <div className='tuto'>
        <Tuto />
      </div>
    </aside>
  )
}

export default Dashboard