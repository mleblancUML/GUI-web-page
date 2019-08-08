import PropTypes from 'prop-types';

import componentParser from '../Utilities/componentParser.jsx';
import { getJsonObject, getJsonObjectWithID } from '../Utilities/getJsonObject.js';

const Footer = (props) => {
    if(props.footerData) {
        return componentParser(props.footerData);
    } else if(props.footerID) {
        return componentParser(getJsonObjectWithID(props.footerJsonUrl, props.footerID));
    } else {
        return componentParser(getJsonObject(props.footerJsonUrl));
    }    
}

Footer.propTypes = {
    footerData : PropTypes.object,
    footerID : PropTypes.string,
    footerJsonUrl : PropTypes.string
};

export default Footer;

/* import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer style={{ bottom: "0", position: "absolute", width: "100%", display: "contents" }}>
                <div className="container">
                    <br />
                    <div id="contactUs">
                        <h2>Contact Us</h2>
                        <br />
                        Shoot me an email and let's get the ball rolling: <span><a href="mailto:george.le@conceptsio.com">George.Le@conceptsio.com</a></span>
                    </div>
                    <br />
                    <br />
                </div>
                <div style={{ textAlign:"center"}}>
                    <p className="text-muted">&copy; 2019, ConceptsIO Solutions LLC</p>
                    <p className="text-muted">For all your Website and Ecommerce Solutions</p>
                </div>
                <br />
                <br />
                <br />
            </footer>
        );
    }
}

export default Footer; */