import React from 'react';

export default class Player extends React.Component {
  render() {
    return (
      <div>
        <div>My name is {this.props.name}</div>
        <div>Currently selected: {this.props.selection}</div>
      </div>
    );
  }
}