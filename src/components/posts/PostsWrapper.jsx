import React from 'react';

import Post from 'components/posts/Post';

const PostsWrapper = () => (
    <div className="column is-8 is-offset-1 is-centered">
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
);

export default PostsWrapper;