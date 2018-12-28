import React, { Component } from 'react';
import * as Types from '../Types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts, fetchPostDetail } from '../actions';
import { Dispatch, bindActionCreators } from 'redux';
import { Comments } from '.';

type PropsTypes = {
    match: any
    postsPending: boolean
    postPending: boolean
    downloadPosts: any
    fetchPostDetail: any
    posts?: Array<Types.Post>
    post?: Types.PostWithComments
};

const Post = ({post}: {post: Types.Post}) =>
    <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </div>;

class PostDetail extends Component<PropsTypes> {

    componentDidMount() {
        this.props.downloadPosts();
        this.props.fetchPostDetail(this.props.match.params.postId);
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
                    <Comments pending={this.props.postPending} postWithComments={this.props.post} />
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
    postPending: state.postPending,
    posts: state.posts,
    post: state.postDisplay
});

const mapDispatchToProp = (dispatch: Dispatch<Types.RootAction>) => bindActionCreators({
    downloadPosts: fetchPosts,
    fetchPostDetail
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProp)(PostDetail);