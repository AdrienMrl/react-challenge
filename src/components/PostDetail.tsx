import React, { Component, FormEvent } from 'react';
import * as Types from '../Types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts, fetchPostDetail, submitNewComment } from '../actions';
import { Dispatch, bindActionCreators } from 'redux';
import { Comments } from '.';
import * as Reducers from '../reducers';

interface PropsInterface {
    match: any
    postsPending: boolean
    postPending: boolean
    downloadPosts: any
    submitNewComment: any
    fetchPostDetail: any
    posts?: Array<Types.Post>
    post?: Types.PostWithComments
};

interface StateInterface {
    commentFormValue: string
    postId: number
};

const Post = ({post}: {post: Types.Post}) =>
    <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </div>;

class PostDetail extends Component<PropsInterface, StateInterface> {

    constructor(props: PropsInterface) {
        super(props);
        this.state = { commentFormValue: "", postId: parseInt(this.props.match.params.postId) };
    }
    componentDidMount() {
        this.props.downloadPosts();
        this.props.fetchPostDetail(this.state.postId);
    }

    handleCommentSubmit(event: FormEvent) {
        event.preventDefault();
        this.props.submitNewComment(this.state.postId, this.state.commentFormValue);
    }

    handleCommentChange(event: FormEvent) {
        if (event.target == null)
            return;
        this.setState({ commentFormValue: (event.target as any).value });
    }

    render() {
        return (
            <div>
                <Link to={'/'}>
                    {'<'} Home
                </Link>
                {!this.props.postsPending && this.props.posts &&
                    <Post post={this.props.posts[this.state.postId - 1]} /> || <p>Loading…</p>}
                <div>
                    <div className="Separator" />
                    <h3>Comments</h3>
                    <Comments pending={this.props.postPending} postWithComments={this.props.post} />
                    <div className="Separator" />
                    <form onSubmit={this.handleCommentSubmit.bind(this)}>
                        <br />
                        <textarea style={{width: '60em', height: '15em'}} placeholder='Comment this post' value={this.state.commentFormValue} onChange={this.handleCommentChange.bind(this)} />
                        <br />
                        <button type={'submit'}>Send</button>
                    </form>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state: Reducers.RootState) => ({
    postsPending: state.postsPending,
    postPending: state.postPending,
    posts: state.posts,
    post: state.postDisplay
});

const mapDispatchToProp = (dispatch: Dispatch<Types.RootAction>) => bindActionCreators({
    downloadPosts: fetchPosts,
    fetchPostDetail,
    submitNewComment
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProp)(PostDetail);