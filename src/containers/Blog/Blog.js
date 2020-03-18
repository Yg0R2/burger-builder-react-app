import React, {Component} from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';

//import axios from 'axios';
import axiosInstance from '../../axios';

import './Blog.css';

class Blog extends Component {

  state = {
    posts: [],
    selectedPostId: null,
    error: false
  };

  componentDidMount() {
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
      .catch(error => {
        this.setState({error: true});
      });
  }

  postSelectedHandler = (id) => {
    this.setState({selectedPostId: id});
  };

  render() {
    let posts;
    if (this.state.error) {
      posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
    }
    else {
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
      <div className="blog">
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/new-post">New Post</a></li>
            </ul>
          </nav>
        </header>
        <section className="Posts">
          {posts}
        </section>
        <section>
          <FullPost id={this.state.selectedPostId}/>
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }

}

export default Blog;
