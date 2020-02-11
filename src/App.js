
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
  const host = 'http://localhost:8000'
  const apiHeader = { headers: { accept: '*/json' } }
  const apiFamilies = '/api/families'
  const apiCompetitions = '/api/competitions'
  const requestFamilies = axios.get(host + apiFamilies, apiHeader)
  const requestCompetitions = axios.get(host + apiCompetitions, apiHeader)

  axios
    .all([requestFamilies, requestCompetitions])
    .then(axios.spread((...res) => {
      // Responses arrays
      const families = res[0].data
      const sports = res[1].data

      families.forEach((family, i) => {
        // Set category name key/value
        sportsList2.sportsCategory[i].name = family.name

        let sportsInFamily = []
        sports.forEach((sport) => {
          // The api response with route instead of id
          // Fix later
          const familyId = sport.idFamily.replace("/api/families/", "")
          if (familyId == sportsList2.sportsCategory[i].categoryId) {
            sportsInFamily.push(sport.name)
            // We attribute that sport to a family so no need to keep it in sports array
            sports.slice(sport, 1)
          }
        })
        // Set sports for a family
        sportsList2.sportsCategory[i].sports = sportsInFamily
      });
    }))


  // const fetchSportsList = () => {
  //   axios
  //     .all([requestFamilies, requestCompetitions])
  //     .then(
  //       axios.spread((...responses) => {
  //         const responseFamilies = responses[0];
  //         const responseCompetitions = responses[1];

  //         const dataFamilies = responseFamilies.data
  //         const dataCompetitions = responseCompetitions.data
  //         //console.log(dataFamilies)
          
  //         sportsList2.sportsCategory.map(
  //           (sportCategory, indexCategory) => {
  //             dataFamilies.map(
  //               (family, indexFamily) => {
  //                 if (indexCategory === indexFamily) {
  //                   sportCategory.CategoryName = family.name
  //                 }
  //                 dataCompetitions.map(
  //                   (competition, indexCompetition) => {
  //                     // //console.log('family', family.idFamily)
  //                     // //console.log('competition',  parseInt(competition.idFamily.split('/')[3]))

  //                     if (family.idFamily === parseInt(competition.idFamily.split('/')[3])) {
  //                       // FIXME: pourvoir ajouter chaque sport au lieu de les écraser
  //                       sportCategory.sports = Object.assign(
  //                         {}, 
  //                         {
  //                           sportId: competition.idCompetition,
  //                           sportName: competition.name
  //                         }
  //                       )
  //                     }
  //                   }
  //                 )
  //               }
  //             )
  //             // //console.log(sportsList2.sportsCategory)
  //           }
  //         )

  //         //console.log(dataCompetitions)
  //         //console.log(sportsList2.sportsCategory)

  //         setSportsList(sportsList2.sportsCategory)
  //       })
  //     )
  //     .catch(errors => {
  //       console.error(errors);
  //     });
  // }

  // useEffect(() => {
  //   fetchSportsList()
  // }, [])

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