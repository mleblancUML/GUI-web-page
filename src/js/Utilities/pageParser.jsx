import React from 'react';

import componentContainerParser from './componentContainerParser.jsx';
import componentItemParser from './componentItemParser.jsx';
import ContentSection from '../src/ContentSection/ContentSection.jsx';
import { getRandomKeyValue } from '../Utilities/getRandomKeyValue.js';

const pageParser = function(pageConfigurations = null) {
    return (function(pageContainers, pageContents) {
        return pageContainers.map((container) => {
            return componentContainerParser(container, pageContents);
        });
    })(pageConfigurations.pageContainers, (function(pageContents) {
        return pageContents.map((content) => {
            if(content.componentType) {
                return <ContentSection contentSectionID={ content.componentID } contentSectionJsonUrl={ content.componentJsonUrl } key={ getRandomKeyValue() } />
            } else {
                return componentItemParser(content);
            }
        })
    })(pageConfigurations.pageContents));
};

export default pageParser;