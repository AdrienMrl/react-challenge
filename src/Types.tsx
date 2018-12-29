import { Action } from "redux";
import { StateType } from 'typesafe-actions';

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

export interface RootAction extends Action<any> {
    type: string
    posts?: Array<Post>
    postDetail?: PostWithComments
};