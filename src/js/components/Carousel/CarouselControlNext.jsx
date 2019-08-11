import PropTypes from 'prop-types';

import componentParser from '../../Utilities/componentParser.jsx';

const CarouselControlNext = (props) => {
    return componentParser(props.carouselControlNextData);
}

CarouselControlNext.propTypes = {
    carouselControlNextData : PropTypes.object.isRequired
};

export default CarouselControlNext;