import React, { useState } from 'react'

// COMPONENTS
import SportCategoryItem from './SportCategoryItem';

// DATA
const sportsList = require('../../data/sportsList');


// TODO: A TESTER AVEC CONTEXT API
const SportCategoryItems = (props) => {
  sportsList.sportsCategory.map(
    sport => Object.assign(
      sport, 
      { selected: false }
    )
  )

  // To add selected props into sportsList
  const [sports, setSports] = useState(sportsList.sportsCategory);

  const handleSelectedSportCategory = id => () =>
  {      
    const sportsSettings 
        = sports.map
        (
            s => 
                id === s.categoryId 
                ? Object.assign( s, { selected : true } )
                : Object.assign( s, { selected : false } )
        );
    console.log( sportsSettings );    
    setSports( sportsSettings );
  }

  // const handleSelectedSportCategory = () => {
  //   setSports(!sports)
  //   console.log(sports)
  // }

  // const setItemSelected = (selected_id) => {
  //   const selectedSports = sports.map(
  //     s => {
  //       if (s.categoryId === selected_id) {
  //         console.log(Object.assign(s, { selected: true }));
  //         return Object.assign(s, { selected: true })
  //       } else {
  //         return Object.assign(s, { selected: false })
  //       }
  //     }
  //   )

  //   console.log(selected_id, selectedSports);

  //   setSports(selectedSports);
  // }

  // Déclaration d'une fontion qui map sur chaque sport de sportsList
  const displaySportCategories = () => {
    return sportsList.sportsCategory.map
      (
        sportCategoryItem => (
          <SportCategoryItem
            key={sportCategoryItem.categoryId}
            selected={sportCategoryItem.selected}
            color={sportCategoryItem.categoryColor}
            sportCategoryItem={sportCategoryItem}
            handleSelectedSportCategory={handleSelectedSportCategory}
          />

          // sportCategoryItem => (
          //   <SportCategoryItem
          //     key={sportCategoryItem.categoryId}
          //     selected={sportCategoryItem.selected}
          //     sportCategoryItem={sportCategoryItem}
          //     setItemSelected={setItemSelected} // <-- FIXME from child to parent
          //   />
        )
      )
  }

  return (
    <ul className='sports'>{displaySportCategories()}</ul>
  )
}

export default SportCategoryItems