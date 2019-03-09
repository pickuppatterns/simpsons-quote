import React from 'react';
import store from '../../store';
import { fetchQuotes } from '../../actions/simpsons';

export default function App() {
  store.dispatch(fetchQuotes(10));
  return <h1>SIMPSONS QUOTES</h1>;
}

