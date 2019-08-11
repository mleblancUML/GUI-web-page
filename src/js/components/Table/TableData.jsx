import PropTypes from 'prop-types';

import componentParser from "../../Utilities/componentParser.jsx";

const TableData = (props) => {
    if(props.tableDataData) {
        return componentParser(props.tableDataData);
    }
}

TableData.propTypes = {
    tableDataData : PropTypes.object.isRequired
}

export default TableData;