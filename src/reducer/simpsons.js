import { FETCH_FACTS } from '../actions/simpsons';

const initialState = {
  quotes: [],
  
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_FACTS:
      return { ...state, quotes: payload };
    default:
      return state;
  }
}
