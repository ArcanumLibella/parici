import React from 'react'



const BackRestaurant = (props) => {
  const { cardType } = props

  return (
    <div className={'card-back card-back--' + cardType}>
      <p>BackRestaurant !</p>
    </div>
  )
}

export default BackRestaurant