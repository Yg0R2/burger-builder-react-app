import React from "react";
import {Route} from 'react-router-dom';

import FullPost from "../FullPost/FullPost";
import Post from "../../../components/Post/Post";

import axiosInstance from "../../../axios";

import './Posts.css';

class Posts extends React.Component {

  state = {
    posts: []
  };

  componentDidMount() {
    console.log(this.props);

    axiosInstance.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4)
          .map(post => {
            return {
              ...post,
              author: 'Anonymous'
            }
          });

        this.setState({posts: posts});
      })
      .catch(error => console.log(error));
  }

  postSelectedHandler = (id) => {
    this.props.history.push({pathname: '/' + id});
    // this.props.history.push('/' + id);
  };

  render() {
    let posts;
    if (this.state.error) {
      posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
    } else {
      posts = this.state.posts
        .map(post => {
          return <Post
            key={post.id}
            clickHandler={() => this.postSelectedHandler(post.id)}
            title={post.title}
            author={post.author}
          />
        });
    }

    return (
      <div>
        <section className="posts">
          {posts}
        </section>
        <Route path={this.props.match.url + ":id"} exact component={FullPost} />
      </div>
    );
  }

}

export default Posts;
