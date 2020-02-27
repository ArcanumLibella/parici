import React, { useState, useEffect, useContext } from 'react'
import SportContext from '../../SportContext'

import District from './District'
import Pin from './Pin'
import { axiosQuery, rgbBuilder } from '../../Helpers'
const districts = require('../../data/districtPoints')

const Map = ({onDistrictClick, minAndMax}) => {
  // CONTEXT
  const sportsSelection = useContext(SportContext)

  // STATES
  const [pierre, setColors] = useState([])

  // API CALL
  let travels = []
  let colors = []
  const travelTimes = () => {
    sportsSelection.forEach(competition => {
      axiosQuery('/api/travels/?idCompetition=' + competition)
        .then(res => {
          travels.push(res)
          if (travels.length === sportsSelection.length) {
            computeColors()
          }
        })
    })
  }

  // GRADIENT COLORS
  const green = {r: 39, g: 251, b: 107}
  const blue = {r: 68, g: 82, b: 197}

  // COLORS LOGIC
  const computeColors = function () {
    let times = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    travels.forEach(travel => {
      travel.forEach(row => {
        times[row.area - 1] += row.time
      })
    })
    for (let i = 0; i < times.length; i++) {
      times[i] = times[i] / travels.length
    }
    let min = Math.min.apply(null, times)
    let max = Math.max.apply(null, times)
    minAndMax(min, max)
    let diff = max - min

    for (let i = 0; i < times.length; i++) {
      let factorRB = (times[i] - min) / diff;
      let factorG = ((min - times[i]) / diff) + 1;
      let diffRed = blue.r - green.r
      let diffGreen = green.g - blue.g
      let diffBlue = blue.b - green.b
      colors[i] = rgbBuilder((diffRed * factorRB) + green.r, (diffGreen * factorG) + blue.g, (diffBlue * factorRB) + green.b)
    }
    setColors(colors)
  }

  const handleClick = function (number) {
    onDistrictClick(number)
  }

  useEffect(() => {
    travelTimes()
  }, [sportsSelection])
  
  const displayTags = () => {
    return (sportsSelection.map((district) => {
      return (
        <Pin id={district} />
      )
    }))
  }

  const displayDistricts = () => {
    return (districts.points.map((district, index) => {
      return <District key={index} number={index + 1} points={districts.points[index]} color={pierre[index]} onDistrictClick={handleClick} />
    }))
  }

  return (
    <div className='map'>
      <svg className="map__wrapper" viewBox="0 0 761 593">
        <path id="seine" d="M327.16 279.258C326.949 279.157 326.716 279.106 326.481 279.111L264.945 280.392C264.817 280.394 264.689 280.414 264.566 280.449L242.301 286.792C242.016 286.873 241.762 287.036 241.57 287.262L218.822 314.003L218.82 314.006L218.813 314.013L218.811 314.016L160.883 381.489C160.844 381.535 160.807 381.584 160.773 381.635L115.701 449.31C115.48 449.641 115.4 450.046 115.479 450.437C115.557 450.827 115.787 451.17 116.118 451.39L122.347 455.536C123.037 455.995 123.968 455.808 124.427 455.119L169.195 387.899L226.785 320.82L226.789 320.815L247.792 296.125L266.323 290.846L324.561 289.634L334.752 294.514L334.758 294.517L376.738 314.409L419.706 343.128C419.728 343.143 419.751 343.157 419.773 343.17C419.806 343.189 419.838 343.207 419.872 343.224L469.265 367.785L491.649 388.537L587.334 502.056C587.868 502.689 588.814 502.77 589.447 502.236L595.17 497.416C595.474 497.16 595.664 496.793 595.698 496.396C595.732 496 595.607 495.606 595.351 495.302L499.309 381.361C499.27 381.314 499.227 381.269 499.182 381.228L475.444 359.22C475.339 359.123 475.221 359.041 475.093 358.977L425.055 334.096L382.016 305.329C381.955 305.288 381.891 305.252 381.824 305.22L339.271 285.058L339.268 285.056L339.26 285.052L339.257 285.051L327.16 279.258Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinejoin="round" fill="white" />
        {displayDistricts()}
        <g className="pins">
          {displayTags()}
        </g>
      </svg>
    </div>
  )
}

export default Map
