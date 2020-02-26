import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SportProvider } from './SportContext'

import axios from "axios";
import './assets/css/app.scss';
import {axiosQuery} from './Helpers'

// ROUTES
import { Landing, Home, Selection } from "./routes";

function App() {
  // STATE
  const [sportsList, setSportsList] = useState()

  let familyColors = [
    '#64E0B9',
    '#2C3950',
    '#219AAA',
    '#AF4751',
    '#E7904D',
    '#D29B85',
    '#95E1EC',
    '#F3A2A2',
    '#F7D55B',
    '#8D488B',
  ]

  // API CALL
  const retrieveSportList = async function() {
    let competitionsList = []
    // Retrieve all families
    let families = await axiosQuery('/api/families')
    families.forEach((family, i) => {
      competitionsList.push({ name: family.name, color: familyColors[i], sports : []})
    });
    // Retrieve all competitions and store them in competitionsList
    let competitions = await axiosQuery('/api/competitions')
    competitions.forEach(competition => {
      let index = competitionsList.indexOf(competitionsList.find(competitionsList => competitionsList.name === competition.family.name))
      competitionsList[index].sports.push({
        name: competition.name,
        id: competition.id
      })
    });
    setSportsList(competitionsList)
  }

  useEffect(() => {
    retrieveSportList()
  }, [])

  // STATE
  const [sportsSelection, setSportsSelection] = useState([])

  // FUNCTIONS
  // To handle sports selected
  const handleSportSelection = (sport) => {
    setSportsSelection([...sportsSelection, sport])
  }

  // To remove sport from the list
  const removeSport = (sport) => {
    let newSportsSelection = [...sportsSelection] // make a separate copy of the array
    let index = newSportsSelection.indexOf(sport)
    if (index !== -1) {
      newSportsSelection.splice(index, 1);
      setSportsSelection([...newSportsSelection])
    }
  }

  console.log(sportsSelection)

  return (
    <SportProvider value={sportsSelection}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/selection">
              <Selection
                sportsList={sportsList}
                updateSportSelection={sport => handleSportSelection(sport)}
                removeSportSelection={sport => removeSport(sport)}
              />
            </Route>
            <Route path="/app">
              <Home
                sportsList={sportsList}
                updateSportSelection={sport => handleSportSelection(sport)}
                removeSportSelection={sport => removeSport(sport)} />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
            <Route path='/*'>
              404 - Sorry no content
            </Route>
          </Switch>
        </div>
      </Router>
    </SportProvider>
  );
}

export default App;
