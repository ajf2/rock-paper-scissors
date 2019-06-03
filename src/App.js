import React from 'react';
import './App.css';
import Game from './Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rock Paper Scissors</h1>
        <h5>Built with <code>create-react-app</code> by Adrian Flood</h5>
        <p>
          This game supports two players and either player can be computer-controlled. Player one uses the keys A S D to select rock, paper, scissors respectively. Player two uses J, K and L.
        </p>
      </header>
      <Game />
    </div>
  );
}

export default App;
