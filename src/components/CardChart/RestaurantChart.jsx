import React, {useState} from 'react'
import { ResponsiveBar } from '@nivo/bar'
// import { linearGradientDef } from '@nivo/core'


const RestaurantChart = (props) => {

  const { data } = props

  console.log(data)

  let restaurantPrices = [
    {
      "price": "?",
      "total": data.unknownPrices
    },
    {
      "price": "€",
      "total": data.lowPrices
    },
    {
      "price": "€€",
      "total": data.mediumPrices
    },
    {
      "price": "€€€",
      "total": data.highPrices
    }
  ]

  return(
    <ResponsiveBar
      data={restaurantPrices}
      keys={[ 'total' ]}
      indexBy="price"
      margin={{ top: 0, right: 0, bottom: 0, left: 45 }}
      padding={0.3}
      layout="horizontal"
      defs={[
        {
            id: 'gradient',
            type: 'linearGradient',
            colors: [
                { offset: 0, color: '#4452C5' },
                { offset: 100, color: '#64E0B9' },
            ],
        }
      ]}
      fill={[
        { match: '*', id: 'gradient' },
      ]}
      borderRadius={5}
      borderWidth={0}
      enableGridY={false}
      axisLeft={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0
      }}
      legends={[]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      isInteractive={false}
      labelSkipWidth={10}
    />
  )
}

export default RestaurantChart