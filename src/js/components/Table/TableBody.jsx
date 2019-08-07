import React from 'react';
import PropTypes from 'prop-types';

import componentParser from '../Utilities/componentParser.jsx';
import { getRandomKeyValue } from '../Utilities/getRandomKeyValue.js';
import TableRow from './TableRow.jsx';


const TableBody = (props) => {
    const tableBodySubcomponentHandler = function(potentialSubcomponent) {
        switch(potentialSubcomponent.componentType) {
            case "TableRow":
                return <TableRow key={ getRandomKeyValue() } tableRowData={ potentialSubcomponent } />;
            default:
                break;
        }
    }
    if(props.tableBodyData) {
        return componentParser(props.tableBodyData, tableBodySubcomponentHandler);
    }
}

TableBody.propTypes = {
    tableBodyData : PropTypes.object.isRequired
}

export default TableBody;