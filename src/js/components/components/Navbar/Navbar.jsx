import React from 'react';
import PropTypes from 'prop-types';

import { getJsonObject, getJsonObjectWithID } from '../Utilities/getJsonObject.js';
import { getRandomKeyValue } from '../Utilities/getRandomKeyValue.js';
import NavbarBrand from './NavbarBrand.jsx';
import NavbarCollapse from './NavbarCollapse.jsx';
import NavbarToggler from './NavbarToggler.jsx';
import componentParser from '../Utilities/componentParser.jsx';

const Navbar = (props) => {
    const navbarSubcomponentHandler = function(potentialSubcomponent) {
        switch(potentialSubcomponent.componentType) {
            case "NavbarBrand":
                return <NavbarBrand key={ getRandomKeyValue() } navbarBrandData={ potentialSubcomponent } />;
            case "NavbarCollapse":
                return <NavbarCollapse key={ getRandomKeyValue() } navbarCollapseData={ potentialSubcomponent } />;
            case "NavbarToggler":
                return <NavbarToggler key={ getRandomKeyValue() } navbarTogglerData={ potentialSubcomponent } />;
        }
    };
    if(props.navbarData) {
        return componentParser(props.navbarData, navbarSubcomponentHandler);
    } else if(props.navbarID) {
        return componentParser(getJsonObjectWithID(props.navbarJsonUrl, props.navbarID), navbarSubcomponentHandler);
    } else {
        return componentParser(getJsonObject(props.navbarJsonUrl));
    }
}

Navbar.propTypes = {
    navbarData : PropTypes.object,
    navbarID : PropTypes.string,
    navbarJsonUrl : PropTypes.string
}

export default Navbar;

// class Navbar extends React.Component {
    
//     constructor(props) {
//         super(props);
//         var navbarItems  = (function(jsonURL) {
//             var json = null;
//             $.ajax({
//                 'url' : jsonURL,
//                 'datatype' : 'json',
//                 async : false,
//                 'success' : function(data) {
//                     json = data;
//                 }
//             });
//             return json;
//         })(this.props.navBarJSONURL);

//         this.state = {
//             navbarItems : navbarItems.navbarItems
//         };
//     };
    
//     render() {
//         return (
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <NavbarBrand />
//                 <NavbarToggler />
//                 <NavbarCollapse navbarCollapseItems={ this.state.navbarItems } />
//             </nav>
//         );
//     }
// }