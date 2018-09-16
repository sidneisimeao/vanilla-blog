import React from 'react';

import NavHeader from 'components/NavHeader';
import Navigation from 'components/Navigation';
import NavFooter from 'components/NavFooter';

const NavWrapper = () => (
    <div className="column 3 is-narrow">
        <NavHeader />
        <Navigation />
        <NavFooter />
    </div>
);

export default NavWrapper;