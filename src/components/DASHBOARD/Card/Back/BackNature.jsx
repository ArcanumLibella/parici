import React from 'react'



const BackNature = ( props ) => {
  const { cardType } = props

  return (
    <div className={'card-back card-back--' + cardType}>
      <p>BackNature !</p>
    </div>
  )
}

export default BackNature