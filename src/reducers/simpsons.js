import { FETCH_QUOTES } from '../actions/simpsons';

const initialState = {
  quotes: '',
  character:'',
  image:' '
  
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_QUOTES:
      return { ...state, quote: payload[0].quote, characterName: payload[0].character, characterImg: payload[0].image  
      };
    default:
      return state;
  }
}
