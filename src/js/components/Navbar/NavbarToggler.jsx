import PropTypes from 'prop-types';
import componentParser from '../Utilities/componentParser.jsx';

const NavbarToggler = (props) => {
    return componentParser(props.navbarTogglerData);
}

NavbarToggler.propTypes = {
    navbarTogglerData : PropTypes.object.isRequired
};

export default NavbarToggler;

{/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button> */}