import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import PostPreview from './components/PostPreview';

const mockupArticle = {
  "title": "Dolorum ute in voluptas mollitia et saepe quo animi",
  "body": "Aut dicta possimus sint mollitia voluptas commodi quo doloremque iste corrupti reiciendis voluptatem eius rerum sit cumque quod eligendi laborum minima perferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
  "id": 1,
  "comments": [
      {
          "id": 1,
          "postId": 1,
          "body": "Odio adipisci rerum aut animi!"
      }
  ]
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>Cluster Coding Challenge Blog</h1>
        </header>
        <PostPreview article={mockupArticle} />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
};

const mapDispatchToProps = (dispatch: Dispatch) => {
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
