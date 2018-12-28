import React from 'react';
import { ArticleInterface } from '../models';
import { checkPropTypes } from 'prop-types';

const PostPreview = ({article}: {article: ArticleInterface}) =>
    <div>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <hr/>
    </div>;

export default PostPreview;