import React from 'react';
import PropTypes from 'prop-types';

import componentParser from '../Utilities/componentParser.jsx';
import { getJsonObject, getJsonObjectWithID } from '../Utilities/getJsonObject.js';
import parseJsonObjectToComponentItem from '../Utilities/parseJsonObjectToComponentItem.jsx';

const ContentColumn = (props) => {
    const contentColumnSubcomponentHandler = function(potentialSubcomponent) {
        // switch(potentialSubcomponent.componentType) {
        //     case "card":
        //         return <Card cardData={  } />;
        //     case "carousel":
        //         return <Carousel carouselData={  }/>;
        //     case "ContentRow":    
        //         return <ContentRow contentRowData={ } />
        //     case "footer":
        //         return <Footer footerData={  }/>;
        //     case "jumbotron":
        //         return <Jumbotron jumbotronData={  }/>;
        //     case "navbar":
        //         return <Navbar navbarData={  }/>;
        //     case "table":
        //         return <Table tableData={  }/>;
        // }
        return null;
    }
    return componentParser(props.contentColumnData, contentColumnSubcomponentHandler);
};

ContentColumn.propTypes = {
    contentColumnData : PropTypes.object
};

export default ContentColumn;