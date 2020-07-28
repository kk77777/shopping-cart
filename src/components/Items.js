import React, { Component } from 'react';
import Item from './Item';
import Navbar from './Navbar';

class Items extends Component {
  state = {
    items: [
      {
        id: 1,
        qty: 0,
      },
      {
        id: 2,
        qty: 0,
      },
      {
        id: 3,
        qty: 0,
      },
      {
        id: 4,
        qty: 0,
      },
    ],
    total: 0,
  };

  addItem = (id) => {
    const items = [...this.state.items];
    const add = items.map((item) =>
      item.id !== id
        ? item
        : {
            ...item,
            qty: item.qty + 1,
          }
    );
    let sum = this.state.total + 1;
    this.setState({ items: add, total: sum });
  };

  removeItem(id) {
    const items = [...this.state.items];
    const remove = items.filter((item) => item.id !== id);
    let sum = 0;
    for (let i = 0; i < remove.length; i++) {
      sum += remove[i].qty;
    }
    this.setState({ items: remove, total: sum });
  }

  render() {
    return (
      <div className='content'>
        <Navbar count={this.state.total} />
        {this.state.items.map((item) => (
          <Item
            key={item.id}
            item={item}
            add={this.addItem.bind(this, item.id)}
            remove={this.removeItem.bind(this, item.id)}
          />
        ))}
      </div>
    );
  }
}

export default Items;
