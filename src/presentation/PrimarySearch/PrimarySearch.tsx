import React from 'react';
import background from './../../assets/color-splash-background.jpg';
import magnifyingGlass from './../../assets/magnifying-glass-icon.png';
import './PrimarySearch.style.scss';

function PrimarySearch() {
  return (
    <div className="primary-search">
        <div className="search-input" >
          <div className="initial-search">
            <input type="text" placeholder="What do you want to know?" />
            <img src={magnifyingGlass} alt="magnifying-glass" />
          </div>
          <div className="results-container" />
        </div>
        <img src={background} alt="background" />
    </div>
  );
}

export default PrimarySearch;
