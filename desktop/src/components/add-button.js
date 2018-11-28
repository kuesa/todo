import React from 'react';

class AddButton extends React.Component {
  render() {
    return (
      <button
        class="addButton"
        className="addButton"
        onClick={this.props.onClick}
      >
        New Task
      </button>
    );
  }
}

export default AddButton;
