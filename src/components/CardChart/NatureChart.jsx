import React from 'react'
import { ResponsivePie } from '@nivo/pie'

// SVG
// import { Bench, Flower, Leaves } from '../../../../assets/icons/all-icons'

// DATA
import { colors } from '../../data/colors'



const NatureChart = ( data ) => {
  return(
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 40, bottom: 20, left: 0 }}
        innerRadius={0.6}
        startAngle={180}
        endAngle={0}
        padAngle={1}
        cornerRadius={5}
        sortByValue={true}
        colors='#FFFFFF'
        borderWidth={0}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={3}
        radialLabelsTextColor="#FFFFFF"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={12}
        radialLabelsLinkHorizontalLength={15}
        radialLabelsLinkStrokeWidth={2}
        radialLabelsLinkColor='#FFFFFF'
        sliceLabel={data => `${data.value} %`}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor={colors[0]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        isInteractive={false}
    />
  )
}

export default NatureChart