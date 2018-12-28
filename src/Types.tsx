import { Action } from "redux";

export type Post = {
    title: string
    body: string
    id: Number
};

export type Comment = {
    id: number
    body: string
};

export type PostWithComments = {
    comments: Array<Comment>
} & Post;

export type RootState = {
    postsPending: boolean
    postPending: boolean
    posts?: Array<Post>
    postDisplay?: PostWithComments
};

export interface RootAction extends Action<any> {
};