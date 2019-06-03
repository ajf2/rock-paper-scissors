import React from 'react';
import Player from './Player';
import { determineResult, pickAtRandom, ROCK, PAPER, SCISSORS, NO_GAME, IN_PROGRESS } from './rps';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: NO_GAME,
      selections: [null, null]
    }
    document.addEventListener('keypress', (e) => this.handleKeyPress(e));
  }

  /**
   * Respond to keys pressed on the keyboard.
   * @param {KeyboardEvent} event The key press event object.
   */
  handleKeyPress(event) {
    // Start a new game if there isn't one already running.
    if (this.state.result !== IN_PROGRESS) {
      this.startGame();
    }
    const key = event.key;
    const isP1Event = ['a', 's', 'd'].includes(key);
    const isP2Event = ['j', 'k', 'l'].includes(key);
    let newSelections = this.state.selections.slice();
    // Only update state if the key that was pressed is an actual game control key.
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
      this.updateState(newSelections);
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
      this.updateState(newSelections);
    }
  }

  /**
   * Fills in any null selections by picking a result at random.
   */
  resolveGameWithCpu() {
    let newSelections = this.state.selections.slice();
    if (newSelections[0] === null) {
      newSelections[0] = pickAtRandom();
    }
    if (newSelections[1] === null) {
      newSelections[1] = pickAtRandom();
    }
    this.updateState(newSelections);
  }

  /**
   * Starts a new game and automatically resolves it after three seconds.
   * This allows for play against the computer.
   */
  startGame() {
    this.updateState([null, null], IN_PROGRESS);
    setTimeout(() => {
      this.resolveGameWithCpu();
    }, 3000);
  }

  /**
   * Updates the game's state.
   * @param {Array<string?>} newSelections The new selections to update with.
   * @param {string?} newResult The optional new result to update with.
   */
  updateState(newSelections, newResult) {
    newResult = newResult ? newResult : this.state.result;
    if (!newSelections.includes(null)) {
      newResult = determineResult(newSelections[0], newSelections[1]);
    }
    this.setState({
      result: newResult,
      selections: newSelections
    });
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