import React from 'react';

const Validation = (props) => {
  const validationMessage = props.inputLength < 5 ? "Text too short!" : "Text long enough.";

  return <p>{validationMessage}</p>
};

export default Validation;
