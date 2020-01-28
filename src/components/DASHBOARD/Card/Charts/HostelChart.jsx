import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

// DATA
import { colors } from '../../../../data/colors'



const HostelChart = ( data ) => {
  return(
    <ResponsiveBar
      data={data}
      keys={[ 'total' ]}
      indexBy="stars"
      margin={{ top: 0, right: 0, bottom: 30, left: 0 }}
      padding={0.3}
      colors={ colors[5] }
      borderRadius={5}
      borderWidth={0}
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