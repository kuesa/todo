import React from 'react';
import ReactDOM from 'react-dom';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li class="listItem" onClick={this.props.onClick}>
        {this.props.value}
      </li>
    );
  }
}

export default ListItem;
