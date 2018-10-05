import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';

import store from './components/store';
import { makeGuess, generateAuralUpdate, restartGame } from './components/actions';

console.log(store.getState());
store.dispatch(makeGuess(5));
console.log(store.getState());
store.dispatch(makeGuess(90));
console.log(store.getState());

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
