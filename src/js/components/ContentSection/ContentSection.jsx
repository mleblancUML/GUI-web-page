import React from 'react';
import PropTypes from 'prop-types';

import { getJsonObjectWithID } from '../../Utilities/getJsonObject.js';
import componentParser from '../../Utilities/componentParser.jsx';
import Card from '../Card/Card.jsx';
import Carousel from '../Carousel/Carousel.jsx';
import Footer from '../Footer/Footer.jsx';
import Jumbotron from '../Jumbotron/Jumbotron.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import Table from '../Table/Table.jsx';

const ContentSection = (props) => {
    const contentSectionSubcomponentHandler = function(potentialSubcomponent) {
        // switch(potentialSubcomponent.componentType) {
            // case "card":
            //     return <Card cardData={ } />;
            // case "carousel":
            //     return <Carousel carouselData={  }/>;
            // case "ContentRow":    
            //     return <ContentRow contentRowData={ potentialSubcomponent } />
            // case "footer":
            //     return <Footer footerData={  }/>;
            // case "jumbotron":
            //     return <Jumbotron jumbotronData={  }/>;
            // case "navbar":
            //     return <Navbar navbarData={  }/>;
            // case "table":
            //     return <Table tableData={  }/>;
        // }
        return null;
    };
    return componentParser(getJsonObjectWithID(props.contentSectionJsonUrl, props.contentSectionID), contentSectionSubcomponentHandler);
};

ContentSection.propTypes = {
    contentSectionID : PropTypes.string.isRequired,
    contentSectionJsonUrl : PropTypes.string.isRequired
};

export default ContentSection;