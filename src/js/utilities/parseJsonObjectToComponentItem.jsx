import React from 'react';
import { getRandomKeyValue } from '../Utilities/getRandomKeyValue.js';

function parseJsonObjectToComponentItem(componentItems) {
    var contents = null;
    if(typeof(componentItems.itemContents) === "object") {
        contents = componentItems.itemContents.map((item) => {
            return parseJsonObjectToComponentItem(item);
        });
    }
    // checks the passed in item type to various HTML tags
    switch(componentItems.itemType) {
        // cases to evaluate the passed in item type and returns the component item's contents
        case "a":
            return <a { ...componentItems.itemAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentItems.itemContents }</a>;
        case "br":
            return <br key={ getRandomKeyValue() }/>;
        case "button":
            return <button { ...componentItems.itemAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentItems.itemContents }</button>;
        case "div":
            return <div { ...componentItems.itemAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentItems.itemContents }</div>;
        
        case "h1":
            return <h1 { ...componentItems.itemAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentItems.itemContents }</h1>;
        case "h2":
            return <h2 { ...componentItems.itemAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentItems.itemContents }</h2>;
        case "h3":
            return <h3 { ...componentItems.itemAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentItems.itemContents }</h3>;
        case "h4":
            return <h4 { ...componentItems.itemAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentItems.itemContents }</h4>;
        case "h5":
            return <h5 { ...componentItems.itemAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentItems.itemContents }</h5>;
        case "h6":
            return <h6 { ...componentItems.itemAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentItems.itemContents }</h6>;
        case "img":
            return <img { ...componentItems.itemAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentItems.itemContents }</img>;
        case "li":
            return <li { ...componentItems.itemAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentItems.itemContents }</li>;
        case "nav":
            return <nav { ...componentItems.itemAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentItems.itemContents }</nav>;
        case "p":
            return <p { ...componentItems.itemAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentItems.itemContents }</p>;

        case "span":
            return <span { ...componentItems.itemAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentItems.itemContents }</span>;
        case "td":
            return <td { ...componentItems.itemAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentItems.itemContents }</td>;
        case "th":
            return <th { ...componentItems.itemAttributes } key={ getRandomKeyValue() }>{ contents ? contents : componentItems.itemContents }</th>;
        default: 
            return componentItems;
    }
}

export default parseJsonObjectToComponentItem;