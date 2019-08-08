import PropTypes from 'prop-types';

import componentParser from '../Utilities/componentParser.jsx';
import { getJsonObject, getJsonObjectWithID } from '../Utilities/getJsonObject';

const Card = (props) => {
    if(props.cardData) {
        return componentParser(props.cardData);
    } else if(props.cardID) {
        return componentParser(getJsonObjectWithID(props.cardJsonUrl, props.cardID));
    } else {
        return componentParser(getJsonObject(props.cardJsonUrl));
    }
};

Card.propTypes = {
    cardData : PropTypes.object,
    cardID : PropTypes.string,
    cardJsonUrl : PropTypes.string,
};

export default Card;

/*
    Expected props is an object with the following format,

    Ex:
        {
            "componentType": "card active",
            "componentContainers": [
                {
                    "containerType": "div",
                    "containerProperties": {
                        "className": "card",
                        "style": {
                            "backgroundColor": "lightseagreen",
                            "display": "block",
                            "height": "auto",
                            "margin": "auto",
                            "width": "50%"
                        }
                    }
                }
            ]
            "componentContents": {
                "cardHeader": "Card title",
                "cardBody": {
                    "cardImg": "../../../src/url.js",
                    "cardText": "Blah Blah Blah"
                },
                "cardFooter": "My email is blah@gmail.com"
            }
        }
*/