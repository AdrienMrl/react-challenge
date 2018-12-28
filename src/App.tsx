import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { PostPreview, PostLoader } from './components';
import * as Types from './Types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>Cluster Coding Challenge Blog</h1>
        </header>
        <PostLoader renderPosts={(posts: Array<Types.Post>) =>
            <PostPreview post={posts[0]} />
        } />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
