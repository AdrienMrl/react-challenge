import { AnyAction } from "redux";

const root = (state = {postsPending: true}, action: AnyAction) => {
    switch (action.type) {
        case 'REQUEST_POSTS_NOW':
            return {
                ...state,
                postsPending: true
            };
        case 'REQUEST_POST_SUCCESS':
            return {
                ...state,
                postsPending: false,
                posts: action.posts
            };
    }
    return state;
};

export default {
    root
};