import React from 'react';
import PropTypes from 'prop-types';

import componentParser from '../../Utilities/componentParser.jsx';
import { getJsonObject, getJsonObjectWithID } from '../../Utilities/getJsonObject.js';
import parseJsonObjectToComponentItem from '../../Utilities/parseJsonObjectToComponentItem.jsx';

const ContentRow = (props) => {
    const contentRowSubcomponentHandler = function(potentialSubcomponent) {
        switch(potentialSubcomponent.componentType) {
            case "ContentColumn":
                return <ContentColumn contentColumnData={ potentialSubcomponent } />;
        }
    }
    return componentParser(props.contentRowData, contentRowSubcomponentHandler);
};

ContentRow.propTypes = {
    contentRowData : PropTypes.object
};

export default ContentRow;