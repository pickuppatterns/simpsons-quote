import React from 'react';
import PropTypes from 'prop-types';

function Quotes({ quote, characterImage, characterName }) {
  return (
      <>
      <h2>{characterName}</h2>
      <p>{quote}</p>
      <img src={characterImage}></img>
      </>
  );
}

Quotes.propTypes = {
  quote: PropTypes.array,
  characterImage: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired
};
export default Quotes;
