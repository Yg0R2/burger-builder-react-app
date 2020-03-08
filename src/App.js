import React, { Component } from 'react';

import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

import './App.css';

class App extends Component{

  state = {
    userName: 'Dynamic User Name'
  };

  changeUserNameHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  };

  render() {
    return (
      <div className="App">
        <div>
          <UserInput change={this.changeUserNameHandler} defaultValue={this.state.userName} />
          <UserOutput username="Static User Name" />
          <UserOutput username={this.state.userName} />
        </div>
      </div>
    );
  }

}

export default App;
