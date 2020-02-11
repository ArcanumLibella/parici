
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import './assets/css/app.scss';

// ROUTES
import { Landing, Home } from "./routes";

// DATA
let sportsList2 = require('./data/sportsList2');



function App() {
  // STATE
  const [sportsList, setSportsList] = useState()

  // API
  let host = 'http://localhost:8000'
  const apiHeader = { headers: { accept: '*/json' } }
  const apiFamilies = '/api/families'
  const apiCompetitions = '/api/competitions'

  const requestFamilies = axios.get(host + apiFamilies, apiHeader)
  const requestCompetitions = axios.get(host + apiCompetitions, apiHeader)

  const fetchSportsList = () => {
    axios
      .all([requestFamilies, requestCompetitions])
      .then(
        axios.spread((...responses) => {
          const responseFamilies = responses[0];
          const responseCompetitions = responses[1];

          const dataFamilies = responseFamilies.data
          const dataCompetitions = responseCompetitions.data
          console.log(dataFamilies)
          
          sportsList2.sportsCategory.map(
            (sportCategory, indexCategory) => {
              dataFamilies.map(
                (family, indexFamily) => {
                  if (indexCategory === indexFamily) {
                    sportCategory.CategoryName = family.name
                  }
                  dataCompetitions.map(
                    (competition, indexCompetition) => {
                      // console.log('family', family.idFamily)
                      // console.log('competition',  parseInt(competition.idFamily.split('/')[3]))

                      if (family.idFamily === parseInt(competition.idFamily.split('/')[3])) {
                        // FIXME: pourvoir ajouter chaque sport au lieu de les écraser
                        sportCategory.sports = Object.assign(
                          {}, 
                          {
                            sportId: competition.idCompetition,
                            sportName: competition.name
                          }
                        )
                      }
                    }
                  )
                }
              )
              // console.log(sportsList2.sportsCategory)
            }
          )

          console.log(dataCompetitions)
          console.log(sportsList2.sportsCategory)

          setSportsList(sportsList2.sportsCategory)
        })
      )
      .catch(errors => {
        console.error(errors);
      });
  }

  useEffect(() => {
    fetchSportsList()
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
            {sportsList
              ? <Home sportsList={sportsList} />
              : <div className='loading'>LOADING...</div>
            }
            <Home />
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
  );
}

export default App;