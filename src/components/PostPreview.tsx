import React from 'react';
import { checkPropTypes } from 'prop-types';
import { Post } from '../Types';
import { Link } from 'react-router-dom';

const MAX_PREVIEW_LENGTH = 120;

const PostPreview = ({post}: {post: Post}) =>
    <div>
        <h2>{post.title}</h2>
        <p>{post.body.substr(0, MAX_PREVIEW_LENGTH) + (post.body.length > MAX_PREVIEW_LENGTH && "…")}</p>
        <Link to={`/posts/${post.id}`}>Read more</Link>
        <div className="Separator" />
    </div>;

export default PostPreview;