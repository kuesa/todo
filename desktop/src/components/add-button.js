import React from 'react';
import AddCircle from '@material-ui/icons/AddCircle';

class AddButton extends React.Component {
  render() {
    return <AddCircle className="addButton" onClick={this.props.onClick} />;
  }
}

export default AddButton;
