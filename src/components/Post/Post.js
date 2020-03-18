import React from 'react';
import {withRouter} from 'react-router-dom';

import './Post.css';

const post = (props) => {
  // Cannot access the same routing props here, except all props had been passed to this component.
  console.log(props);

  return (
    <article className="Post" onClick={props.clickHandler}>
      <h1>{props.title}</h1>
      <div className="Info">
        <div className="Author">{props.author}</div>
      </div>
    </article>
  );
};

// This will help to populate parent component props to this props.
export default withRouter(post);
