import React from 'react';

import { getRandomKeyValue } from './getRandomKeyValue.js';
import componentItemParser from './componentItemParser.jsx';

function componentContainerParser(componentContainer, componentContents) {
    var contents = null;
    if(componentContainer.containerContents) {
        contents = componentContainer.containerContents.map((container) => {
            return componentContainerParser(container, componentContents);
        });
    }
    
    switch(componentContainer.containerType) {
        case "a":
            return <a { ...componentContainer.containerAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentContents }</a>;
        case "button":
            return <button { ...componentContainer.containerAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentContents }</button>;
        case "div":
            return <div { ...componentContainer.containerAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentContents }</div>;
        case "footer":
            return <footer { ...componentContainer.containerAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentContents }</footer>;
        case "li":
            return <li { ...componentContainer.containerAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentContents }</li>;  
        case "nav":
            return <nav { ...componentContainer.containerAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentContents }</nav>;
        case "span":
            return <span { ...componentContainer.containerAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentContents }</span>;
            
        case "table": 
            return <table { ...componentContainer.containerAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentContents }</table>;
        case "tbody":
            return <tbody { ...componentContainer.containerAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentContents }</tbody>;
        case "td":
            return <td { ...componentContainer.containerAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentContents }</td>;
        case "thead":
            return <thead { ...componentContainer.containerAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentContents }</thead>;
        case "tr":
            return <tr { ...componentContainer.containerAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentContents }</tr>;
        case "ul":
            return <ul { ...componentContainer.containerAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentContents }</ul>;
        default:
            return componentItemParser(componentContainer);
    }
}

export default componentContainerParser;