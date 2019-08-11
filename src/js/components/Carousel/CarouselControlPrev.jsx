import PropTypes from 'prop-types';

import componentParser from '../../Utilities/componentParser.jsx';

const CarouselControlPrev = (props) => {
    return componentParser(props.carouselControlPrevData);
}

CarouselControlPrev.propTypes = {
    carouselControlPrevData : PropTypes.object.isRequired
};

export default CarouselControlPrev;