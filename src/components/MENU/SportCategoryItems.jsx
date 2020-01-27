import React from 'react'

// COMPONENTS
import SportCategoryItem from "./SportCategoryItem.jsx";

// DATA
const sportsList = require('../../data/sportsList');



const SportCategoryItems = (props) => {
  // const [sports, setSports] = useState(sportsList.sports.map(sport => Object.assign(sport, { selected: false })));


  // const setItemSelected = selected_id => {

  //   const selectedSports = sports.map(
  //     s => {
  //       if (s.id === selected_id) {
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
            key={sportCategoryItem.id}
            selected={sportCategoryItem.selected}
            sportCategoryItem={sportCategoryItem}
          />
          // sportCategoryItem => (
          //   <SportItem
          //     key={sportCategoryItem.id}
          //     selected={sportCategoryItem.selected}
          //     sportCategoryItem={sportCategoryItem}
          //     setItemSelected={setItemSelected}<-- FIXME from child to parent
          //   />
        )
      )
  }

  return (
    <ul className='sports'>{displaySportCategories()}</ul>
  )
}

export default SportCategoryItems