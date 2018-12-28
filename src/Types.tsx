import { Action } from "redux";

export type Post = {
    title: string,
    body: string,
    id: Number
};

export interface RootAction extends Action<any> {
}