import React from 'react';
import Player from './Player';
import { determineResult, ROCK, PAPER, SCISSORS } from './rps';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selections: [null, null]
    }
    document.addEventListener('keypress', (e) => this.handleKeyPress(e));
  }

  handleKeyPress(event) {
    const key = event.key;
    const isP1Event = key === 'a' || key === 's' || key === 'd';
    const isP2Event = key === 'j' || key === 'k' || key === 'l';
    let newSelections = this.state.selections.slice();
    if (isP1Event) {
      switch (key) {
        case 'a':
          newSelections[0] = ROCK;
          break;
        case 's':
          newSelections[0] = PAPER;
          break;
        case 'd':
          newSelections[0] = SCISSORS;
          break;
        default:
          return;
      }
      const result = determineResult(newSelections[0], newSelections[1]);
      this.setState({
        result: result,
        selections: newSelections
      });
    }
    if (isP2Event) {
      switch (key) {
        case 'j':
          newSelections[1] = ROCK;
          break;
        case 'k':
          newSelections[1] = PAPER;
          break;
        case 'l':
          newSelections[1] = SCISSORS;
          break;
        default:
          return;
      }
      const result = determineResult(newSelections[0], newSelections[1]);
      this.setState({
        result: result,
        selections: newSelections
      });
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.result}</p>
        <Player name="Player 1" selection={this.state.selections[0]} />
        <Player name="Player 2" selection={this.state.selections[1]} />
      </div>
    );
  }
}