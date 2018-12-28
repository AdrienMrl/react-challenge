import React, { Component } from 'react';
import * as Types from '../Types';
import { Link } from 'react-router-dom';

type PropsTypes = {
    match: any;
};

class PostDetail extends Component<PropsTypes> {
    render() {
        return (
            <div>
                <Link to={'/'}>
                    {'<'} Home
                </Link>
                    <p>Rendering post #{this.props.match.params.postId}</p>
            </div>
        );
    };
}

export default PostDetail;