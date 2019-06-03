import React from 'react';
import { P1WIN, P2WIN, DRAW } from './rps';

export default class Player extends React.Component {
  render() {
    return [P1WIN, P2WIN, DRAW].includes(this.props.result) ? (
      <div className="player">
        <div>{this.props.name}</div>
        {<div>Selected: {this.props.selection}</div>}
      </div>
    ) : (
        <div></div>
      );
  }
}