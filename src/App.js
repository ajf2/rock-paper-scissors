import React from 'react';
import './App.css';
import Game from './Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rock Paper Scissors</h1>
        <h5>Built with <code>create-react-app</code> by Adrian Flood</h5>
        <p>This game supports two players and either player can be computer-controlled if no input is received for three seconds.</p>
        <p>To select rock, paper or scissors, player one uses the keys <code>A S D</code> and player two uses the keys <code>J K L</code>.</p>
        <Game />
      </header>
    </div>
  );
}

export default App;
