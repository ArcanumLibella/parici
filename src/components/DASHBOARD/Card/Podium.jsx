import React from 'react'



const Podium = (props) => {
  const { cardType } = props
  return(
    <div className={ 'card card--' + cardType }>
      {/* CARD-FRONT */}
      <div className='card__front podium'>
        <h3 className='podium__title card-title'>{ cardType }</h3>
        
        <div className='podium__wrapper'>
          
        </div>
      </div>

      {/* CARD-BACK */}
      <div className='card__back'>{'BACK ' + cardType }</div>
    </div>
  )
}

export default Podium