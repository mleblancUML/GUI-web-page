import PropTypes from 'prop-types';

import componentParser from '../../Utilities/componentParser.jsx';
import { getJsonObjectWithID, getJsonObject } from '../../Utilities/getJsonObject.js';

const Jumbotron = (props) => {
    if(props.jumbotronData) {
        return componentParser(props.jumbotronData, null);
    } else if(props.jumbotronID) {
        return componentParser(getJsonObjectWithID(props.jumbotronJsonUrl, props.jumbotronID), null); 
    } else {
        return componentParser(getJsonObject(props.jumbotronJsonUrl))
    }
}

Jumbotron.propTypes = {
    jumbotronData : PropTypes.object,
    jumbotronID : PropTypes.string,
    jumbotronJsonUrl : PropTypes.string
};

export default Jumbotron;