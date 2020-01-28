import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { colors } from '../../../../data/colors'



const RestaurantChart = ( data ) => {
  return(
    <ResponsiveBar
      data={data}
      keys={[ 'total' ]}
      indexBy="price"
      margin={{ top: 0, right: 0, bottom: 0, left: 45 }}
      padding={0.3}
      layout="horizontal"
      colors={ colors }
      borderRadius={5}
      borderWidth={0}
      enableGridY={false}
      labelTextColor={colors[5]}
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
    />
  )
}

export default RestaurantChart