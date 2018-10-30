import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from '../components/list-item';
import AddButton from '../components/add-button';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: Array()
    };
  }

  renderListItem(i) {
    return <ListItem value={this.state.items[i]} />;
  }

  addListItem(value) {
    const items = this.state.items.slice();
    items.push(value);
    this.setState({ items: items });
  }

  renderList() {
    let list = [];
    for (let i = 0; i < this.state.items.length; i++) {
      list.push(this.renderListItem(i));
    }

    return list;
  }

  render() {
    return (
      <div className="list">
        <ul className="items">{this.renderList()}</ul>
        <AddButton onClick={() => this.addListItem('test')} />
      </div>
    );
  }
}

export default List;
