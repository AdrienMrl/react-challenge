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

export const REQUEST_POST_DETAIL_NOW = 'REQUEST_POST_DETAIL_NOW';
export const requestPostDetail = (postId: Number) => {
  return {
    type: REQUEST_POST_DETAIL_NOW,
    postId
  };
}

export const REQUEST_POST_DETAIL_SUCCESS = 'REQUEST_POST_DETAIL_SUCCESS';
export const requestPostDetailSuccess = (postDetail: any) => {
  return {
    type: REQUEST_POST_DETAIL_SUCCESS,
    postDetail
  };
}

export const SUBMIT_NEW_COMMENT_NOW = 'SUBMIT_NEW_COMMENT_NOW';
export const submitNewCommentNow = () => {
  return {
    type: SUBMIT_NEW_COMMENT_NOW
  };
}

export const SUBMIT_NEW_COMMENT_SUCCESS = 'SUBMIT_NEW_COMMENT_SUCCESS';
export const submitNewCommentSuccess = () => { // TODO: optimistic UI
  return {
    type: SUBMIT_NEW_COMMENT_SUCCESS
  };
}

export const fetchPosts: () => ((dispatch: Dispatch) => void) = () => {

  return async (dispatch: Dispatch) => {
    dispatch(requestPosts());
    const response = await fetch('http://localhost:3001/posts');
    const responseJSON = await response.json();
    dispatch(requestPostSuccess(responseJSON));
  };
};

export const fetchPostDetail: (postId: Number) => ((dispatch: Dispatch) => void) = (postId) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestPostDetail(postId));
    const response = await fetch(`http://localhost:3001/posts/${postId}?_embed=comments`);
    const responseJSON = await response.json();
    dispatch(requestPostDetailSuccess(responseJSON));
  };
}

export const submitNewComment: (postId: Number, content: string) => ((dispatch: Dispatch) => void) = (postId, content) => {
  return async (dispatch: Dispatch) => {
    dispatch(submitNewCommentNow())
    const response = await fetch(`http://localhost:3001/comments`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        postId: postId,
        body: content
      })
    });
    dispatch(submitNewCommentSuccess());
    await fetchPostDetail(postId)(dispatch); // should update state with new comment instead
  };
}