import { Action } from "redux";

export type Post = {
    title: string,
    body: string,
    id: Number
};

export type RootState = {
    postsPending: Boolean;
    posts?: Array<Post>;
};

export interface RootAction extends Action<any> {
}