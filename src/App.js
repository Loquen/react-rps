import React from 'react';
import Score from './Score';
import Rules from './Rules';
import Game from './Game';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Score />    
      <Game />
      <Rules />
    </div>
  );
}

export default App;
