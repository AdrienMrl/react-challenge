import React from 'react';
import * as Types from '../Types';

export default ({pending, postWithComments}: {pending: Boolean, postWithComments?: Types.PostWithComments}) =>
    <div>
        {!pending && postWithComments && postWithComments.comments.map(comment =>
            <p key={comment.id.toString()}>{comment.body}</p>
        )}
        {!pending && postWithComments && postWithComments.comments.length == 0 && <p>Be the first to comment</p>}
        {pending && <p>Loading…</p>}
    </div>
