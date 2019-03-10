import { FETCH_QUOTES, FETCH_CHARACTER, FETCH_IMG  } from '../actions/simpsons';

const initialState = {
  quotes: '',
  character:'',
  image:' '
  
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_QUOTES:
      return { ...state, quote: payload };
    case FETCH_CHARACTER:
      return { ...state, character: payload };
    case FETCH_IMG:
      return { ...state, quimageotes: payload };
    default:
      return state;
  }
}
