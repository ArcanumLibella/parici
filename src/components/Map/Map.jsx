import React, { useState, useEffect, useContext, foo } from 'react'
import SportContext from '../../SportContext'

import District from './District'
import axios from 'axios';

const Map = ({onDistrictClick}) => {
  // CONTEXT
  const sportsSelection = useContext(SportContext)

  // STATES
  const [pierre, setColors] = useState([])

  // API
  const host = 'https://jo-server.herokuapp.com'
  const apiHeader = { headers: { accept: '*/json' } }
  const apiTravel = '/api/travels'

  const handleClick = function (number) {
    onDistrictClick(number)
  }

  let travels = []
  let colors = []
  const foo = () => {
    sportsSelection.forEach(competition => {
      let url = host + apiTravel + '/?idCompetition=' + competition
      axios
        .get(url, apiHeader)
        .then(res => {
          travels.push(res)
          if (travels.length === sportsSelection.length) {
            computeColors()
          }
        })
    })
  }

  const rgbBuilder = function (r, g, b) {
    return "rgb(" + Math.round(r) + "," + Math.round(g) + "," + Math.round(b) + ")"
  }

  const green = {
    r: 39,
    g: 251,
    b: 107
  }
  const blue = {
    r: 68,
    g: 82,
    b: 197
  }
  const computeColors = function () {
    let times = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    travels.forEach(travel => {
      travel.data.forEach(row => {
        times[row.area - 1] += row.time
      })
    })
    for (let i = 0; i < times.length; i++) {
      times[i] = times[i] / travels.length
    }
    let min = Math.min.apply(null, times)
    let max = Math.max.apply(null, times)
    let diff = max - min
    // console.log("hello")

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

  useEffect(() => {
    foo()
  }, [sportsSelection])

  const districts = [
    "606.46 469.65 521.07 429.17 552.31 361.85 567.81 357.74 586.88 379.8 736.77 433.22 730.18 451.68 692.9 527.45 606.46 469.65",
    "736.77 433.22 760.91 365.61 715.65 352.26 655.4 334.5 567.81 357.74 586.88 379.8 736.77 433.22",
    "833.38 387.19 760.91 365.61 736.77 433.22 730.18 451.68 776.8 469.44 801.9 496 865.79 518.87 833.38 387.19",
    "730.18 451.68 692.9 527.45 793.47 577.48 842.65 623.44 850.93 618.62 870.42 549.3 865.79 518.87 801.9 496 776.8 469.44 730.18 451.68",
    "816.45 693.49 743.32 730.39 669.5 712.62 630.55 700.32 685.38 543.81 783.13 592.44 828.23 634.26 841.43 649.92 816.45 693.49",
    "540.56 656.14 630.55 700.32 685.38 543.81 599.04 486.34 572.88 564.37 485.73 620.33 540.56 656.14",
    "572.88 564.37 485.73 620.33 458.32 628.16 415.24 613.62 295.11 498.51 337.5 448.67 375.27 437.91 492.55 435.46 513.32 445.42 599.04 486.34 572.88 564.37",
    "563.41 205.42 466.74 234.64 386.37 254.32 347.59 268.37 325.67 315.58 353.28 364.24 371.18 420.36 496.46 417.38 521.07 429.17 552.31 361.85 563.41 205.42",
    "552.31 361.85 563.41 205.42 599.26 201.04 655.62 224.24 726.88 205.42 715.65 352.26 655.4 334.5 567.81 357.74 552.31 361.85",
    "715.65 352.26 726.88 205.42 841.25 199.38 874.78 205.42 882.04 274.33 929.2 340.44 833.38 387.19 760.91 365.61 715.65 352.26",
    "870.42 549.3 1092.37 611 1076.94 549.3 1024.36 497.42 1006.84 442.74 929.2 340.44 833.38 387.19 865.79 518.87 870.42 549.3",
    "1181.96 762.6 1212.96 624.32 1092.37 611 870.42 549.3 850.93 618.62 842.65 623.44 854.38 637.36 1033.16 849.54 1181.96 762.6",
    "743.32 945.01 683.17 964.14 687.96 921.09 665.4 878.03 669.5 712.62 743.32 730.39 816.45 693.49 841.43 649.92 1020.77 862.77 904.62 929.29 828.75 964.14 743.32 945.01",
    "683.17 964.14 364.32 862.03 540.56 656.14 630.55 700.32 669.5 712.62 665.4 878.03 687.96 921.09 683.17 964.14",
    "415.24 613.62 295.11 498.51 179.6 633.11 89.96 767.77 134.94 771.39 115.92 792.65 117.03 832.93 155.64 832.93 202.63 780.9 364.32 862.03 540.56 656.14 485.73 620.33 458.32 628.16 415.24 613.62",
    "212.19 258.89 325.67 315.58 353.28 364.24 371.18 420.36 327.32 432.86 281.42 486.82 165.59 621.81 72.38 760.5 27.68 749.32 2.07 690.67 10.83 634.72 212.19 258.89",
    "212.19 258.89 219.24 210.89 292.51 145.28 332.98 127.86 429.08 58.73 518.45 10.39 584.21 10.39 551.05 162.14 563.41 205.42 466.74 234.64 386.37 254.32 347.59 268.37 325.67 315.58 212.19 258.89",
    "563.41 205.42 551.05 162.14 584.21 10.39 882.62 2.06 882.62 64.03 893.73 78.39 841.25 199.38 726.88 205.42 655.62 224.24 599.26 201.04 563.41 205.42",
    "990.79 2.06 882.62 2.06 882.62 64.03 893.73 78.39 841.25 199.38 874.78 205.42 882.04 274.33 929.2 340.44 1020.88 302.54 1105.07 299.45 1176.47 271.24 1166.34 252.29 1094.93 198.07 1077.74 69.81 1053.94 27.06 990.79 2.06",
    "1006.84 442.74 929.2 340.44 1020.88 302.54 1105.07 299.45 1176.47 271.24 1201.04 347.51 1212.96 624.32 1092.37 611 1076.94 549.3 1024.36 497.42 1006.84 442.74"
  ]

  const displayDistricts = () => {
    return (districts.map((district, index) => {
      return <District key={index} number={index + 1} points={districts[index]} color={pierre[index]} onDistrictClick={handleClick} />
    }))
  }

  return (
    <svg className="map" viewBox="0 0 1215.4 966.98">
      {displayDistricts()}
      <polyline className="cls-1" points="1026.96 856.15 834.75 628.04 788.3 584.96 688.37 535.25 602 477.5 517.18 437.29 494.51 426.42 373.92 428.93 332.41 440.76 288.25 492.68 172.41 627.67 82.33 762.99" />
    </svg>
  )
}

export default Map
