import React from 'react';
import PropTypes from 'prop-types';

import componentParser from '../Utilities/componentParser.jsx';
import { getRandomKeyValue } from '../Utilities/getRandomKeyValue.js';
import TableRow from "./TableRow.jsx";

const TableHead = (props) => {
    const tableHeadSubcomponentHandler = function(potentialSubcomponent) {
        switch(potentialSubcomponent.componentType) {
            case "TableRow":
                return <TableRow key={ getRandomKeyValue() } tableRowData={ potentialSubcomponent } />;
        }
    }
    return componentParser(props.tableHeadData, tableHeadSubcomponentHandler);
}

TableHead.propTypes = {
    tableHeadData : PropTypes.object.isRequired
}

export default TableHead;