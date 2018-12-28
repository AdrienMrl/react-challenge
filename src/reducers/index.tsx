import { AnyAction } from "redux";
import {
    REQUEST_POSTS_NOW,
    REQUEST_POST_SUCCESS,
    REQUEST_POST_DETAIL_NOW,
    REQUEST_POST_DETAIL_SUCCESS
} from '../actions';

const root = (state = {postsPending: true}, action: AnyAction) => {
    switch (action.type) {
        case REQUEST_POSTS_NOW:
            return {
                ...state,
                postsPending: true
            };
        case REQUEST_POST_SUCCESS:
            return {
                ...state,
                postsPending: false,
                posts: action.posts
            };

        case REQUEST_POST_DETAIL_NOW:
            return {
                ...state,
                postPending: true
            };
        case REQUEST_POST_DETAIL_SUCCESS:
            return {
                ...state,
                postPending: false,
                postDisplay: action.postDetail
            };
    }
    return state;
};

export default {
    root
};