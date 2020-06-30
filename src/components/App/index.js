/* eslint-disable import/no-unresolved */
// == Import npm
import React, { useState } from 'react';

// == Import
import './styles.scss';
import Converter from 'src/components/Converter';
import Devise from 'src/components/Devise';
import Result from 'src/components/Result';

// == Import BDD: Un seul import nécessaire
import data from 'src/data/currencies';

// == Composant
const App = () => {
  const [currencies, setCurrencies] = useState(data);
  const [converterName, setConverterName] = useState('Euro');
  const [converterResult, setConverterResult] = useState(1.00);

  const showCurrency = (id) => {
    // Permet de récupérer l'id de la cible cliquée
    const findDevise = currencies[id];
    // Permet de faire le calcul nécessaire pour l'affichage de la conversion
    const number = findDevise.rate * 1;
    setConverterName(findDevise.name);
    setConverterResult(number.toFixed(2));
    // console.log(number);
  };

  return (
    <div className="app">
      <Converter />
      <h3>Currencies</h3>
      <Devise
        currencies={currencies}
        showCurrency={showCurrency}
      />
      <Result
        converterName={converterName}
        converterResult={converterResult}
      />
    </div>
  );
};


// == Export
export default App;
