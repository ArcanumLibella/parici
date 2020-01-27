import React from 'react'

// COMPONENTS
import { Museum, Concert, Theater } from '../../../../assets/icons/all-icons'



const BackCulture = ( props ) => {
  const { cardType, text, cultureActivity } = props

  // const handleIconCulture = (cultureActivity) => {
  //   if (cultureActivity === 'museum') {
  //     return <Museum/>
  //   } else if (cultureActivity === 'concert') {
  //     return <Concert/>
  //   } else if (cultureActivity === 'theater') {
  //     return <Theater/>
  //   }
  // }

  return (
    <div className='card-back card-back--culture'>
      <h3 className='card-back__title card-title'>{ cardType }</h3>

      <div className='card-back__wrapper'>

        <div className='card-back__icon'>
          <div className='card-back__hexagon'>
            {/* {handleIconCulture()} */}
            <Museum/>
          </div>
          <p className='card-back__data card-data'>3 museum</p>
        </div>
        <div className='card-back__icon'>
          <div className='card-back__hexagon'>
            {/* {handleIconCulture()} */}
            <Theater/>
          </div>
          <p className='card-back__data card-data'>2 theaters</p>
        </div>
        <div className='card-back__icon'>
          <div className='card-back__hexagon'>
            {/* {handleIconCulture()} */}
            <Concert/>
          </div>
          <p className='card-back__data card-data'>8 concerts</p>
        </div>

      </div>
    </div>
  )
}

export default BackCulture