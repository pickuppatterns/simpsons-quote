import React from 'react';
import store from '../../store';
import { fetchQuotesWithPromise } from '../../actions/simpsons';

export default function App() {
  store.dispatch(fetchQuotesWithPromise(10));
  return <h1>SIMPSONS QUOTES</h1>;
}

