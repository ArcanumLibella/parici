import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

// DATA
import { colors } from '../../../../data/colors'



const HostelChart = (data) => {
  return (
    <ResponsiveBar
      data={data}
      keys={['total']}
      indexBy="stars"
      margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
      padding={0.1}
      colors={colors[5]}
      borderRadius={5}
      borderWidth={0}
      axisLeft={null}
      tickSize={0}
      enableGridY={false}
      labelTextColor={colors[1]}
      // legends={[]} 
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      isInteractive={false}
    />
  )
}

export default HostelChart