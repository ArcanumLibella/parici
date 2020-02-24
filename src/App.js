import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Provider } from './Context'

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
  const host = 'http://localhost:8000'
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

  // // STATE
  // const [sportsSelection, setSportsSelection] = useState([])

  // // FUNCTIONS
  // // To handle sports selected
  // const handleSelectedSport = (sport) => {
  //   console.log(sport);
  //   setSportsSelection([...sportsSelection, sport])
  //   console.log(sportsSelection);
  // }

  return (
    // <Provider value={sportsList}>
    <Router>
      <div className="App">
        <Switch>
          <Route path="/selection">
            <Selection
              sportsList={sportsList}
            // updateSportSelection={sport => handleSelectedSport(sport)}
            />
          </Route>
          <Route path="/app">
            <Home sportsList={sportsList} />
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
    // </Provider>
  );
}

export default App;