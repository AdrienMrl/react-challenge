import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch, AnyAction, bindActionCreators } from 'redux';
import { fetchPosts } from '../actions';
import * as Types from '../Types';
import { PostPreview } from '.';

interface PropsTypes {
    downloadPosts: () => AnyAction;
};

class PostLoader extends Component<any> {

    state = {};

    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
        this.props.downloadPosts();
    }

    renderPosts(posts: Array<Types.Post>) {
       return posts.map((post) =>
            <div key={post.id.toString()}>
               <PostPreview post={post} />
            </div>
        );
    }

    render() {
        return this.props.postsPending && <p>Loading…</p> || <div>
            {this.renderPosts(this.props.posts)}
        </div>;
    }
}

const mapStateToProp = (state: any) => ({
    postsPending: state.postsPending,
    posts: state.posts
});

const mapDispatchToProp = (dispatch: Dispatch<Types.RootAction>) => bindActionCreators({
    downloadPosts: fetchPosts
}, dispatch);

export default connect(mapStateToProp, mapDispatchToProp)(PostLoader);