import { getQuotes } from '../services/simpsonsApi';
import { applyMiddleware }  from 'redux';

export const FETCH_QUOTES = 'FETCH_QUOTES';

export const fetchQuotes = num => dispatch => {
  return getQuotes(num)
    .then(quotes => {
      dispatch({
        type: FETCH_QUOTES,
        payload: quotes
      });
    });
}; 
