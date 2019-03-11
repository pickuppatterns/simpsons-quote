import React from 'react';
import PropTypes from 'prop-types';

function Quotes({ quote, characterImg, characterName }) {
  return (
      <>
      <h2>{characterName}</h2>
      <p>{quote}</p>
      <img src={characterImg} />
      </>
  );
}

Quotes.propTypes = {
  quote: PropTypes.string.isRequired,
  characterImg: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired
};
export default Quotes;
