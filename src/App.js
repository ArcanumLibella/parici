import React from 'react';
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './assets/css/app.scss';

// ROUTES
import { Landing, WebApp } from "./routes";

function App() {
  // const [currentPath, setCurrentPath] = useState("/popular");
  // const [greenSpaces, setGreenSpaces] = useState();

  // const fetchGreenSpaces = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://opendata.paris.fr/api/records/1.0/search/?dataset=espaces_verts&facet=type_ev&facet=categorie&facet=adresse_codepostal&facet=presence_cloture&facet=ouvert_ferme&refine.type_ev=Promenades+ouvertes" + currentPath
  //     );
  //     setMovies(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchMovies();
  // }, [currentPath]);


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/webapp">
            <WebApp />
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
