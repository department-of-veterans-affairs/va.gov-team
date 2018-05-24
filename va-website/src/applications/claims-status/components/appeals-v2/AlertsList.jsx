import React from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';
import { getAlertContent } from '../../utils/appeals-v2-helpers';

const AlertsList = ({ alerts, appealIsActive }) => {
  if (typeof alerts === 'undefined' || alerts.length === 0) {
    return null;
  }

  const allAlertsContent = alerts.map((alert) => getAlertContent(alert, appealIsActive));

  const takeActionAlertsPresent = allAlertsContent.some((alert) => (alert.displayType === 'take_action'));

  const takeActionHeader = takeActionAlertsPresent
    ? (<h3>Take Action</h3>)
    : null;

  const alertsList = allAlertsContent
    .map((alert, index) => {
      const key = `${alert.type}-${index}`;
      return (<Alert
        key={key}
        title={alert.title}
        description={alert.description}
        displayType={alert.displayType}/>);
    });

  return (
    <div className="alerts-list-container">
      {takeActionHeader}
      <ul className="alerts-list">
        {alertsList}
      </ul>
    </div>
  );
};

AlertsList.propTypes = {
  alerts: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    details: PropTypes.object
  }))
};

export default AlertsList;
