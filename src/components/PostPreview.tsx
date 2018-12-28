import React from 'react';
import { checkPropTypes } from 'prop-types';
import { Post } from '../Types';

const PostPreview = ({post}: {post: Post}) =>
    <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <hr/>
    </div>;

export default PostPreview;