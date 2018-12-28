import fetch from 'cross-fetch';
import { Dispatch } from 'redux';
import * as Types from '../Types';

export const REQUEST_POSTS_NOW = 'REQUEST_POSTS_NOW';
const requestPosts = () => {
  return {
    type: REQUEST_POSTS_NOW
  };
};

export const REQUEST_POST_SUCCESS = 'REQUEST_POST_SUCCESS';
const requestPostSuccess = (posts: Array<Types.Post>) => {
  return {
    type: REQUEST_POST_SUCCESS,
    posts
  };
};

export const REQUEST_POST_ERROR = 'REQUEST_POST_ERROR';
export const requestPostError = () => {
  return {
    type: REQUEST_POST_ERROR
  };
};

export const fetchPosts: () => ((dispatch: Dispatch) => void) = () => {

  return async (dispatch: Dispatch) => {
    dispatch(requestPosts());

    console.log("fetch…");
    const response = await fetch('http://localhost:3001/posts');
    const responseJSON = await response.json();
    console.log(responseJSON);
    dispatch(requestPostSuccess(responseJSON));
  };
};