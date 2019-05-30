import PropTypes from 'prop-types';
import React from 'react';

import { getModalTerm } from '../utils/helpers';

class GlossaryLink extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const term = event.target.dataset.term;
    const content = getModalTerm(term);
    this.props.onClick(content);
  }

  render() {
    return (
      <button
        className="rx-trigger"
        data-term={this.props.term}
        onClick={this.handleClick}
        type="button">{this.props.term}</button>
    );
  }
}

GlossaryLink.propTypes = {
  onClick: PropTypes.func,
  term: PropTypes.string.isRequired
};

export default GlossaryLink;
