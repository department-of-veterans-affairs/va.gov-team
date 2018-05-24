import PropTypes from 'prop-types';
/*
Table with rows that have a header as the first cell.
Used on Rx detail page.
*/
import React from 'react';
import _ from 'lodash';

import TableRowVerticalHeader from './TableRowVerticalHeader';

class TableVerticalHeader extends React.Component {
  render() {
    const makeRows = (inputData) => {
      const rows = [];
      let rowKey = 1;

      _.forEach(inputData, (value, key) => {
        rows.push(<TableRowVerticalHeader
          key={rowKey++}
          cellText={value}
          headerText={key}/>);
      });

      return rows;
    };

    // Adds an iterator key property
    return (
      <table className={this.props.className}>
        {makeRows(this.props.data)}
      </table>
    );
  }
}

TableVerticalHeader.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired
};

export default TableVerticalHeader;
