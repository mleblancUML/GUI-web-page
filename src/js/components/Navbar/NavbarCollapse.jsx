import React from 'react';
import PropTypes from 'prop-types';

import componentParser from '../Utilities/componentParser.jsx';
import { getRandomKeyValue } from '../Utilities/getRandomKeyValue.js';
import NavbarItems from './NavbarItems.jsx';

const NavbarCollapse = (props) => {
    const navbarCollapseSubcomponentHandler = function(potentialSubcomponent) {
        switch(potentialSubcomponent.componentType) {
            case "NavbarItems":
                return <NavbarItems key={ getRandomKeyValue() } navbarItemsData={ potentialSubcomponent } />;
        }
    };
    return componentParser(props.navbarCollapseData, navbarCollapseSubcomponentHandler);
}

NavbarCollapse.propTypes = {
    navbarCollapseData : PropTypes.object.isRequired
}

export default NavbarCollapse;