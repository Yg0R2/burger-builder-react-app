import React from "react";

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
      <section className="posts">
        {posts}
      </section>
    );
  }

}

export default Posts;
