import React from 'react';
import PropTypes from 'prop-types';

import componentParser from '../../Utilities/componentParser.jsx';
import { getRandomKeyValue } from '../../Utilities/getRandomKeyValue.js';
import NavbarItem from './NavbarItem.jsx';

const NavbarItems = (props) => {
    const navbarItemsSubcomponentHandler = function(potentialSubcomponent) {
        switch(potentialSubcomponent.componentType) {
            case "NavbarItem":
                return <NavbarItem key={ getRandomKeyValue() } navbarItemData={potentialSubcomponent}/>;
        }
    };
    return componentParser(props.navbarItemsData, navbarItemsSubcomponentHandler);
}

NavbarItems.propTypes = {
    navbarItemsData : PropTypes.object.isRequired
};

export default NavbarItems;

// class NavbarItems extends React.Component {
    
//     constructor(props) {
//         super(props);
        
//         this.resolveTags = this.resolveTags.bind(this);
//     }

//     resolveTags(index) {
//         var currentItem = this.props.navbarItems[index];
//         switch(currentItem.liClassName) {
//             case "nav-item active":
//                 return (
//                     <li className={ currentItem.liClassName }>
//                         <a className={ currentItem.aClassName } href={ currentItem.aHref }>
//                             { currentItem.aText }
//                             <span className={ currentItem.spanClassName }>(current)</span>
//                         </a>
//                     </li>
//                 );         
//             case "nav-item":
//                 return (
//                     <li className={currentItem.liClassName }>
//                         <a className={ currentItem.aClassName } href={ currentItem.aHref }>
//                             { currentItem.aText }
//                         </a>
//                     </li>
//                 );
//             case "nav-item dropdown":
//                 return <NavbarDropdown navbarDropdown={ currentItem } />;
//         }
//     }

//     render() {
//         var content = this.props.navbarItems.map((item, index) => {
//             return this.resolveTags(index);
//         });

//         return (
//             <ul className="navbar-nav mr-auto">
//                 {content}
//             </ul>
//         );
//     }
// }

// {
//     "navbarItems" : [
//         {
//             "liClassName" : "nav-item active",
//             "aClassName" : "nav-link",
//             "aHref" : "#",
//             "aText" : "Home",
//             "spanClassName" : "sr-only"
//         },
//         {
//             "liClassName" : "nav-item",
//             "aClassName" : "nav-link",
//             "aHref" : "#aboutUs",
//             "aText" : "About Us"
//         },
//         {
//             "liClassName" : "nav-item",
//             "aClassName" : "nav-link",
//             "aHref" : "#PriceTable",
//             "aText" : "Pricing"
//         },
//         {
//             "liClassName" : "nav-item dropdown",
//             "aClassName" : "nav-link dropdown-toggle",
//             "aHref" : "#",
//             "aId" : "navbarDropdown",
//             "aRole" : "button",
//             "aDataToggle":"dropdown",
//             "aAriaHasPopup": true,
//             "aAriaExpanded" : false,
//             "aValue" : "Portfolio",
//             "innerA" : [
//                 {
//                     "className" : "dropdown-item",
//                     "aHref" : "#",
//                     "aText" : "Under Construction"    
//                 },
//                 {
//                     "className" : "dropdown-item",
//                     "aHref" : "#",
//                     "aText" : "Also Under Construction" 
//                 },
//                 {
//                     "className" : "dropdown-item",
//                     "aHref" : "#",
//                     "aText" : "You get the idea" 
//                 },
//                 {
//                     "className" : "dropdown-divider"
//                 },
//                 {
//                     "className" : "dropdown-item",
//                     "aHref" : "#",
//                     "aText" : "Your Website?" 
//                 }
//             ]
//         },
//         {
//             "liClassName" : "nav-item",
//             "aClassName" : "nav-link",
//             "aHref" : "#contactUs",
//             "aText" : "Contact Us"
//         }
//     ]
// }

