import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { PostPreview, PostLoader, PostDetail } from './components';
import * as Types from './Types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AppRouter extends Component {

  renderPostPreviews() {
    return (
      <PostLoader renderPosts={(posts: Array<Types.Post>) =>
        posts.map((post) =>
          <div key={post.id.toString()}>
            <PostPreview post={post} />
          </div>
        )} />
    );
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Cluster Coding Challenge Blog</h1>
          </header>

          <Route path="/" exact component={this.renderPostPreviews} />
          <Route path="/posts/:postId" component={PostDetail} />

        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
