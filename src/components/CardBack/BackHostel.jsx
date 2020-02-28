import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { colors } from '../../data/colors'



const BackHostel = (props) => {
  // PROPS
  const { cardType, data } = props

  // DATA
  const stars = [
    {
      "stars": "★",
      "total": data.oneStar
    },
    {
      "stars": "★★",
      "total": data.twoStars
    },
    {
      "stars": "★★★",
      "total": data.threeStars
    },
    {
      "stars": "★★★★",
      "total": data.fourStars
    },
    {
      "stars": "★★★★★",
      "total": data.fiveStars
    }
  ];

  const chart = (data) => {
    return (
      <ResponsiveBar
        data={stars}
        keys={['total', 'test']}
        indexBy="stars"
        margin={{ top: 10, right: 30, bottom: 30, left: 30 }}
        padding={0.1}
        colors='#FFFFFF'
        borderRadius={5}
        borderWidth={0}
        axisLeft={null}
        tickSize={0}
        labelSkipHeight={10}
        enableGridY={false}
        labelTextColor={colors[1]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        isInteractive={false}
      />
    )
  }

  return (
    <div className={'card-back card-back--' + cardType}>
      <h3 className='card-back__title card-title'>{cardType}</h3>
      <div className='card-back__graphic'>
        {chart()}
      </div>
    </div>
  )
}

export default BackHostel