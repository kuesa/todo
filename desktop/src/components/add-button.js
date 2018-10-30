import React from 'react';
import ReactDOM from 'react-dom';

class AddButton extends React.Component {
  render() {
    return (
      <button className="addButton" onClick={this.props.onClick}>
        +
      </button>
    );
  }
}

export default AddButton;
