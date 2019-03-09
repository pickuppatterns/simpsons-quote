import React from 'react';
import PropTypes from 'prop-types';

const Quotes = ({ quotes }) => {
  const listOfQuotes = quotes.map(quote => {
    return (
      <li key={quote}>{quote}</li>
    );
  });
  return (
    <ul>{listOfQuotes}</ul>
  );
};
Quotes.propTypes = {
  quotes: PropTypes.array
};
export default Quotes;
