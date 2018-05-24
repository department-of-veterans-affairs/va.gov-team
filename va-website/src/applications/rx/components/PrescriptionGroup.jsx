import PropTypes from 'prop-types';
/* Creates segments of grouped prescriptions with a title
 * and a list of prescription cards.
 *
 * Properties:
 * - `title`: String containing the section heading for this group.
 * - `items`: Array of items.
*/

import React from 'react';

class PrescriptionGroup extends React.Component {
  render() {
    return (
      <section className="rx-prescription-group cf">
        <h3 className="va-h-ruled">{this.props.title}</h3>
        <div>{this.props.items}</div>
      </section>
    );
  }
}

PrescriptionGroup.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    attributes: PropTypes.object,
    id: PropTypes.string,
    type: PropTypes.func,
    links: PropTypes.object
  })).isRequired
};

export default PrescriptionGroup;
