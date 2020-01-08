import React from 'react';
import PropTypes from 'prop-types';

import CarouselControls from './CarouselControls.jsx';
import CarouselSlide from './CarouselSlide.jsx';
import componentParser from '../../Utilities/componentParser.jsx';
import { getJsonObject, getJsonObjectWithID } from '../../Utilities/getJsonObject.js';
import { getRandomKeyValue } from '../../Utilities/getRandomKeyValue.js';

const Carousel = (props) => {
    const carouselSubcomponentHandler = function(potentialSubcomponent) {
        switch(potentialSubcomponent.componentType) {
            case "CarouselControls":
                return <CarouselControls carouselControlsData={potentialSubcomponent} key={ getRandomKeyValue() }/>;
            case "CarouselSlide":
                return <CarouselSlide carouselSlideData={potentialSubcomponent} key={ getRandomKeyValue() }/>;
        }
    };
    if(props.carouselData) {
        return componentParser(props.carouselData, carouselSubcomponentHandler);
    } else if(props.carouselID) {
        return componentParser(getJsonObjectWithID(props.carouselJsonUrl, props.carouselID), carouselSubcomponentHandler);
    } else {
        return componentParser(getJsonObject(props.carouselJsonUrl), carouselSubcomponentHandler);
    }
};

Carousel.propTypes = {
    carouselData : PropTypes.object,
    carouselID : PropTypes.string,
    carouselJsonUrl : PropTypes.string
};

export default Carousel;

// class Carousel extends React.Component {

//     constructor(props) {
//         super(props);
//         var carouselData  = (function(jsonURL, carouselID) {
//             var json = null;
//             $.ajax({
//                 'url' : jsonURL,
//                 'datatype' : 'json',
//                 async : false,
//                 'success' : function(data) {
//                     json = data;
//                 }
//             });
//             return json.map((item) => {
//                 if (item.componentID === carouselID) {
//                     return item;
//                 }
//             });
//         })(props.carouselJsonUrl, props.carouselID);
//         this.state = {
//             carouselItems: carouselData
//         }
//     }

//     resolveTags(item) {
//         return <CarouselSlide carouselItem={ item }/>;
//     }

//     render() {
//         var content = this.state.carouselItems.map((item) => {
//             return this.resolveTags(item);
//         });

//         return (
//             <div style={{ alignItems: "center", backgroundColor: "lightgray", display: "flex", height: "900px", justifyContent: "center" }} >
//                 <div className="carousel slide" id="MainCarousel" data-ride="carousel" data-interval="7500">
//                     <div className="carousel-inner" style={{ margin: "auto" }}>
//                         { content }
//                         <CarouselControls link={ "#MainCarousel" } />
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }