import React from 'react';

import './UserOutput.css';

const UserOutput = (props) => {

    return (
      <div className="userOutput">
        <p>User name: {props.username}</p>
        <p>p2</p>
      </div>
    );

};

export default UserOutput;
