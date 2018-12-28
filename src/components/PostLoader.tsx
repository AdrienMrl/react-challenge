import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch, AnyAction, bindActionCreators } from 'redux';
import { fetchPosts } from '../actions';
import * as Types from '../Types';
import { PostPreview } from '.';

interface PropsTypes {
    downloadPosts: any;
    postsPending: boolean;
    renderPosts: any;
    posts?: Array<Types.Post>;
};

class PostLoader extends Component<PropsTypes> {

    state = {};

    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
        this.props.downloadPosts();
    }

    render() {
        return this.props.postsPending && <p>Loading…</p> || <div>
            {this.props.renderPosts(this.props.posts)}
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