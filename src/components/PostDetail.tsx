import React, { Component } from 'react';
import * as Types from '../Types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Dispatch, bindActionCreators } from 'redux';

type PropsTypes = {
    match: any;
    postsPending: any;
    downloadPosts: any;
    posts?: Array<Types.Post>;
};

const Post = ({post}: {post: Types.Post}) =>
    <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </div>;

class PostDetail extends Component<PropsTypes> {

    componentDidMount() {
        this.props.downloadPosts();
    }

    render() {
        return (
            <div>
                <Link to={'/'}>
                    {'<'} Home
                </Link>
                {!this.props.postsPending && this.props.posts &&
                    <Post post={this.props.posts[parseInt(this.props.match.params.postId) - 1]} /> || <p>Loading…</p>}
                <div>
                    <hr />
                    <hr />
                    <textarea placeholder='Comment this post' />
                    <br />
                    <button type={'submit'}>Send</button>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state: Types.RootState) => ({
    postsPending: state.postsPending,
    posts: state.posts
});

const mapDispatchToProp = (dispatch: Dispatch<Types.RootAction>) => bindActionCreators({
    downloadPosts: fetchPosts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProp)(PostDetail);