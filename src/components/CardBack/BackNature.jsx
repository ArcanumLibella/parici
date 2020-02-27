import React from 'react'
// import { ResponsivePie } from '@nivo/pie'

// COMPONENTS
import { Flower, Bench, Leaves } from '../../assets/icons/all-icons'
// import { colors } from '../../data/colors'

const BackNature = (props) => {
  const { cardType, data } = props

  let natureSpaces = [
    {
      "id": "Garden",
      "label": "Garden",
      "value": Math.round((data.garden / data.total) * 100)
    },
    {
      "id": "Park",
      "label": "Park",
      "value": Math.round((data.park / data.total) * 100)
    },
    {
      "id": "Green Space",
      "label": "Green Space",
      "value": Math.round((data.greenSpace / data.total) * 100)
    }
  ];

  // const handleChart = () => {
  //   return (         
  //     <ResponsivePie
  //       data={natureSpaces}
  //       margin={{ top: 40, right: 40, bottom: 20, left: 0 }}
  //       innerRadius={0.6}
  //       startAngle={180}
  //       endAngle={0}
  //       padAngle={1}
  //       cornerRadius={5}
  //       sortByValue={true}
  //       colors={colors}
  //       borderWidth={0}
  //       radialLabelsSkipAngle={10}
  //       radialLabelsTextXOffset={3}
  //       radialLabelsLinkOffset={0}
  //       radialLabelsLinkDiagonalLength={12}
  //       radialLabelsLinkHorizontalLength={15}
  //       radialLabelsLinkStrokeWidth={2}
  //       radialLabelsLinkColor='#FFFFFF'
  //       sliceLabel={natureSpaces => `${natureSpaces.value} %`}
  //       slicesLabelsSkipAngle={10}
  //       slicesLabelsTextColor={colors[0]}
  //       animate={true}
  //       motionStiffness={90}
  //       motionDamping={15}
  //       isInteractive={false}
  //     />
  //   )
  // }

  return (
    <div className={'card-back card-back--' + cardType}>
      <h3 className='card-back__title card-title'>{cardType}</h3>

      <div className='card-back__wrapper'>

        <div className='card-back__icon'>
          <div className='card-back__hexagon'>
            <Bench />
          </div>
          <p className='card-back__data card-data'>
            <span>{natureSpaces[1].value} %</span>
            Parks
            </p>
        </div>
        <div className='card-back__icon'>
          <div className='card-back__hexagon'>
            <Flower />
          </div>
          <p className='card-back__data card-data'>
            <span>{natureSpaces[2].value} %</span>
            Green spaces
            </p>
        </div>
        <div className='card-back__icon'>
          <div className='card-back__hexagon'>
            <Leaves />
          </div>
          <p className='card-back__data card-data'>
            <span>{natureSpaces[0].value} %</span>
            Gardens
            </p>
        </div>

      </div>
      {/* <div className='card-back__graphic'>
        {handleChart()}
      </div> */}
    </div>
  )
}

export default BackNature