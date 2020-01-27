import React from 'react'

// import SportItem from "./SportItem.jsx";



const SportItems = ({ sportCategoryItem }) => {

  const displaySportItems = () => {
    return sportCategoryItem.items.map
    (
      (sportItem, id) => (
        <li className='dropdown__item' key={id}>
          {/* TODO: add an id for each sport and use it for id and htmlFor */}
          <input className='dropdown__checkbox' type="checkbox" id={id} name={id}></input>
          <label className='dropdown__label dropdown-label' htmlFor={id}>
            <svg width="12px" height="12px" viewBox="0 0 18 18">
              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
              <polyline points="1 9 7 14 15 4"></polyline>
            </svg>
            { sportItem }
          </label>
        </li>
      )
    )
  }

  return (
    <ul className='menu__dropdown dropdown'>{displaySportItems()}</ul>
  )
}

export default SportItems