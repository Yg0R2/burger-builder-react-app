import React from 'react';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class Exercise1 extends React.Component{

  state = {
    userName: 'Dynamic User Name'
  };

  changeUserNameHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  };

  render() {
    return(
      <div>
        <h2>Exercise #1</h2>
        <UserInput change={this.changeUserNameHandler} defaultValue={this.state.userName} />
        <UserOutput username="Static User Name" />
        <UserOutput username={this.state.userName} />
      </div>
    );
  }

}

export default Exercise1;
