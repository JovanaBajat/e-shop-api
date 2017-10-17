import React, { Component } from 'react';

class List extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((item, e) => {
            return (
              <li key={e}>{item.name} {item.price} {item.description} <button><a href={`http://localhost:8080/shop/${item._id}/delete`}>x</a></button></li>
            );
          })}

        </ul>
      </div>
    );
  }

}

export default List;
