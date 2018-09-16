import React, { Fragment } from 'react';

import NavWrapper from 'components/nav/NavWrapper';
import PostsWrapper from 'components/posts/PostsWrapper';

const HomePage = () => (
    <Fragment>
        <NavWrapper />
        <PostsWrapper />
    </Fragment>
);

export default HomePage;