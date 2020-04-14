import React from 'react';

const UserInput = (props) => {

    const style = {
      backgroundColor: 'lightgray',
      border: '2px solid green',
    };

    return <input type="text" defaultValue={props.defaultValue} onChange={props.change} style={style} />;
};

export default UserInput;
