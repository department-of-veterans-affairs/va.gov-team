/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import classNames from 'classnames';

import { appealStatusDescriptions } from '../utils/appeal-helpers';

export default class AppealEventItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { open: false };
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { event } = this.props;
    const { status } = appealStatusDescriptions(event);

    const expandIconClass = classNames({
      'fa claims-status-icon event-header-icon': true,
      'fa-minus': this.state.open,
      'fa-plus': !this.state.open
    });

    return (
      <li className="event-item" onClick={this.toggle}>
        <div className="event-header">
          <i className="fa fa-check-circle claims-status-icon event-header-icon"/>
          <strong className="event-date">
            {moment(event.date).format('MMM DD, YYYY')}
          </strong>
          <span className="event-title">
            {status.title}
          </span>
          <i className={expandIconClass}/>
        </div>
        {
          this.state.open &&
          (<div className="event-description">
            {status.description}
          </div>)
        }
      </li>
    );
  }
}

AppealEventItem.propTypes = {
  event: PropTypes.object
};
