import React from 'react'

// COMPONENTS
import { Flower, Bench, Leaves } from '../../assets/icons/all-icons'



const BackNature = (props) => {
  // PROPS
  const { cardType, data } = props

  // DATA
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
  ]

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
    </div>
  )
}

export default BackNature