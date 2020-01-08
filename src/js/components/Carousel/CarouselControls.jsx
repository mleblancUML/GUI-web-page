import React from 'react';
import PropTypes from 'prop-types';

import CarouselControlPrev from './CarouselControlPrev.jsx';
import CarouselControlNext from './CarouselControlNext.jsx';
import componentParser from '../../Utilities/componentParser.jsx';
import { getRandomKeyValue } from '../../Utilities/getRandomKeyValue.js';

const CarouselControls = (props) => {
    const carouselControlsSubcomponentHandler = function(potentialSubcomponent) {
        switch(potentialSubcomponent.componentType) {
            case "Prev":
                return <CarouselControlPrev carouselControlPrevData={ potentialSubcomponent } key={ getRandomKeyValue() }/>;
            case "Next":
                return <CarouselControlNext carouselControlNextData={ potentialSubcomponent } key={ getRandomKeyValue() }/>;
        }
    }
    return componentParser(props.carouselControlsData, carouselControlsSubcomponentHandler);
}

CarouselControls.propTypes = {
    carouselControlsData : PropTypes.object.isRequired
}

export default CarouselControls;

// (
//     <div>
//         <a className="carousel-control-prev" href={ props.link } role="button" data-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="sr-only">Previous</span>
//         </a>
//         <a className="carousel-control-next" href={ props.link } role="button" data-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="sr-only">Next</span>
//         </a>
//     </div>
// )