import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <div>
        <form action="http://localhost:8080/shop/add" method="POST">
          <input name="name" placeholder="name"/>
          <input name="price" placeholder="price"/>
          <input name="description"placeholder="description"/>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default Form;
