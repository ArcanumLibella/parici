import React from 'react';
import './assets/css/app.scss';

// COMPONENTS
import { Menu, Dashboard, Map } from './components'

function App() {
  return (
    <div className="App">
      <main className='webapp'>
        <Menu />
        {/* <Map /> */}
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
