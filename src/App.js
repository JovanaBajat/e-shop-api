import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'request';
import List from './components/list';
import Form from './components/form';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items : []
    };
  }

  componentDidMount(){
    request("http://localhost:8080/shop", (err, res, body) => {
      if(err){
        console.log(err);
      }
      console.log(body);
      this.setState({
        items : JSON.parse(body)
      });
      console.log(this.state.items);
    });
  }
  render() {
    return (
      <div className="App">
        <h1>E-Shop</h1>
        <List items={this.state.items}/>
        <Form />
      </div>
    );
  }
}

export default App;
