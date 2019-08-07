import PropTypes from 'prop-types';

import componentParser from '../Utilities/componentParser.jsx';

const NavbarBrand = (props) => {
    return componentParser(props.navbarBrandData);
}

NavbarBrand.propTypes = {
    navbarBrandData : PropTypes.object.isRequired
};

export default NavbarBrand;

{/* <a className="navbar-brand" href="#">
    <span>
        <img src="../../../../../src/assets/64x64profile.png" alt="Foxicon"></img>
    </span>
</a> */}