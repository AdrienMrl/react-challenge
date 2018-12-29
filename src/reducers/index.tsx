import { AnyAction, Reducer } from "redux";
import {
    REQUEST_POSTS_NOW,
    REQUEST_POST_SUCCESS,
    REQUEST_POST_DETAIL_NOW,
    REQUEST_POST_DETAIL_SUCCESS
} from '../actions';
import * as Types from '../Types';

export type RootState = {
    postsPending: boolean
    postPending: boolean
    posts?: Array<Types.Post>
    postDisplay?: Types.PostWithComments
};

const getInitialState: () => RootState = () => ({
    postsPending: true,
    postPending: true,
});

const root: Reducer<RootState, Types.RootAction> = (state = getInitialState(), action) => {
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

export default root;