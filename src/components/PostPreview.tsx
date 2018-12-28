import React from 'react';
import { checkPropTypes } from 'prop-types';
import { Post } from '../Types';
import { Link } from 'react-router-dom';

const PostPreview = ({post}: {post: Post}) =>
    <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link to={`/posts/${post.id}`}>Read more</Link>
        <hr/>
    </div>;

export default PostPreview;