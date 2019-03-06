import { getQuotes } from '../services/simpsonsApi';

export const FETCH_QUOTES = 'FETCH_QUOTES';
export const fetchQuotes = count = dispatch => {
  return getQuotes(count)
    .then(quotes => {
      dispatch({
        type: FETCH_QUOTES,
        payload: quotes
      });
    });
}; 
