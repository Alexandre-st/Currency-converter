import React from 'react';

// == Import du style
import './styles.scss';

const Result = ({ converterName, converterResult }) => (
  <div className="container">
    <p className="container-paragraph">{converterResult}</p>
    <h4 className="container-title">{converterName}</h4>
  </div>
);

export default Result;
