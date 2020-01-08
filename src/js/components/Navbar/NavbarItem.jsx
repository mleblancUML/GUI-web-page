import React from 'react';
import PropTypes from 'prop-types';

import componentParser from '../../Utilities/componentParser.jsx';
import { getRandomKeyValue } from '../../Utilities/getRandomKeyValue.js';
import NavbarDropdown from './NavbarDropdown.jsx';

const NavbarItem = (props) => {
    const navbarSubcomponentHandler = function(potentialSubcomponent) {
        switch(potentialSubcomponent.componentType) {
            case "NavbarDropdown":
                return <NavbarDropdown key={ getRandomKeyValue() } navbarDropdownData={ potentialSubcomponent } />;
            default:
                break;
        }
    }
    return componentParser(props.navbarItemData, navbarSubcomponentHandler);
}

NavbarItem.propTypes = {
    navbarItemData : PropTypes.object.isRequired
}

export default NavbarItem;