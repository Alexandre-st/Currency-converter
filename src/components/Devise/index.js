import React from 'react';

// == Import du style
import './styles.scss';

// Ici plus besoin d'importer la BDD
// les valeurs nous sont transmises par currencies qui est lui passé en props.

const Devise = ({ currencies, showCurrency }) => {
  // Permet de créer l'évenement au clique et de récupérer l'id ainsi que
  // les données qui correspondent (name et rate)
  const handleClick = (event) => {
    // On cible l'id qui correspond à l'index au clique
    const findId = event.target.id;
    // On passe donc le résultat à showCurrency
    showCurrency(findId);
    // console.log(findId);
    // console.log(event.target);
  };

  // On veut récupérer les données, pour cela on fait .map
  const deviseJSX = currencies.map((currency, index) => (
    <li className="devise-currency" key={currency.name} data-value={currency.rate} onClick={handleClick} id={index}>
      {currency.name}
    </li>
  ));

  return (
    <ul className="devise">{deviseJSX}</ul>
  );
};

export default Devise;
