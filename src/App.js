import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SportProvider } from './SportContext'

import axios from "axios";
import './assets/css/app.scss';

// ROUTES
import { Landing, Home, Selection } from "./routes";

// DATA
let olympicsList = require('./data/olympicsList');

function App() {
  // STATE
  const [sportsList, setSportsList] = useState()

  // API
  const host = 'https://jo-server.herokuapp.com'
  const apiHeader = { headers: { accept: '*/json' } }
  const apiFamilies = '/api/families'
  const apiCompetitions = '/api/competitions'
  const requestFamilies = axios.get(host + apiFamilies, apiHeader)
  const requestCompetitions = axios.get(host + apiCompetitions, apiHeader)

  const fetchSportsList = () => {
    axios
      .all([requestFamilies, requestCompetitions])
      .then(axios.spread((...res) => {
        // Responses arrays
        const families = res[0].data
        const sports = res[1].data

        families.forEach((family, i) => {
          // Set category name key/value
          olympicsList.sportsCategory[i].name = family.name

          let sportsInFamily = []
          sports.forEach((sport) => {
            // The api response with route instead of id
            const familyId = sport.idFamily.replace("/api/families/", "")
            if (familyId == olympicsList.sportsCategory[i].id) {
              sportsInFamily.push({ id: sport.idCompetition, name: sport.name })
              // We attribute that sport to a family so no need to keep it in sports array
              sports.slice(sport, 1)
            }
          })
          // Set sports for a family
          olympicsList.sportsCategory[i].sports = sportsInFamily
          setSportsList(olympicsList.sportsCategory)
        });
      }))
  }

  useEffect(() => {
    fetchSportsList()
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
