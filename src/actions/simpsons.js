import { getQuotes } from '../services/simpsonsApi';


export const FETCH_QUOTES = 'FETCH_QUOTES';

export const fetchQuotesWithPromise = num => ({
  type: FETCH_QUOTES,
  payload: getQuotes(num)
});
