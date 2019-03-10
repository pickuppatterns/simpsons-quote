import { getQuotes, getCharacterName, getCharacterImg } from '../services/simpsonsApi';


export const FETCH_QUOTES = 'FETCH_QUOTES';
export const FETCH_CHARACTER = 'FETCH_CHARACTER';
export const FETCH_IMG = 'FETCH_IMG';

export const fetchQuotesWithPromise = () => ({
  type: FETCH_QUOTES,
  payload: getQuotes()
});


export const fetchCharacterWithPromise = () => ({
  type: FETCH_CHARACTER,
  payload: getCharacterName()
});


export const fetchImgWithPromise = () => ({
  type: FETCH_IMG,
  payload: getCharacterImg()
});
