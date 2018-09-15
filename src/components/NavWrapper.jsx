import React from 'react';

import Columns from 'react-bulma-components/lib/components/columns';
import NavHeader from 'components/NavHeader';
import Navigation from 'components/Navigation';
import NavFooter from 'components/NavFooter';

const NavWrapper = () => (
    <Columns.Column size={3} className='is-narrow'>
        <NavHeader />
        <Navigation />
        <NavFooter />
    </Columns.Column>
);

export default NavWrapper;