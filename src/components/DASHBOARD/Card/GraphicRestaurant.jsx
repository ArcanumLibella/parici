import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { colors } from '../../../data/colors'

const GraphicRestaurant = ( data ) => {
  return(
    <ResponsiveBar
      data={data}
      keys={[ 'total' ]}
      indexBy="price"
      margin={{ top: 0, right: 0, bottom: 0, left: 40 }}
      padding={0.3}
      layout="horizontal"
      colors={ colors }
      borderRadius={5}
      borderWidth={0}
      enableGridY={false}
      labelTextColor={colors[5]}
      axisTop={null}
      // axisRight={null}
      axisBottom={null}
      axisLeft={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0
      }}
      legends={[]}
      // legends={[
      //     {
      //         dataFrom: 'keys',
      //         anchor: 'bottom-right',
      //         direction: 'column',
      //         justify: true,
      //         translateX: 120,
      //         translateY: 10,
      //         itemsSpacing: 2,
      //         itemWidth: 100,
      //         itemHeight: 20,
      //         itemDirection: 'left-to-right',
      //         itemOpacity: 0.85,
      //         symbolSize: 20,
      //         effects: [
      //             {
      //                 on: 'hover',
      //                 style: {
      //                     itemOpacity: 1
      //                 }
      //             }
      //         ]
      //     }
      // ]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  )
}

export default GraphicRestaurant