import React, {Component} from 'react';

import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

  state = {
    loadedPost: null
  };

  // Without the if condition, it would enter an infinite loop.
  // Do not fetch data from server if the required data is already there.
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.id && (!this.state.loadedPost || (this.state.loadedPost && (this.state.loadedPost.id !== this.props.id)))) {
      axios.get('/posts/' + this.props.id)
        .then(response => {
          this.setState({loadedPost: response.data})
        });
    }
  }

  deletePostHandler = () => {
    axios.delete('/posts/' + this.props.id)
      .then(response => {
        console.log(response);
      });
  };

  render() {
    let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
    if (this.props.id) {
      post = <p style={{textAlign: 'center'}}>Loading...</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
          </div>
        </div>
      );
    }

    return post;
  }

}

export default FullPost;
