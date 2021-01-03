import React from 'react';

import './OverlayGrid.less';

import { PortfolioItem } from './texts';

const OverlayGrid = ({ imageUrl, title, link, description } : PortfolioItem) => (
  <div className="text-center">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="OverlayGrid">
        <img src={imageUrl}
             alt="Failed to load"
             className="image" />
        <div className="overlay">
          <div className="vertical-align-middle">
            <h2 className="white-text">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </a>
    <h3>{title}</h3>
  </div>
);

export default OverlayGrid;
