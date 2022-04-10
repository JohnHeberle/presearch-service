import React from 'react';
import './App.css';
import CurrentCallQueue from './presentation/CurrentCallQueue/CurrentCallQueue';
import PopulatedTreeDisplay from './presentation/PopulatedTreeDisplay/PopulatedTreeDisplay';
import PrimarySearch from './presentation/PrimarySearch/PrimarySearch';

function App() {
  return (
    <div className="App">
      <PrimarySearch />
      <div className="details-container">
        <CurrentCallQueue />
        <PopulatedTreeDisplay />
      </div>
    </div>
  );
}

export default App;
