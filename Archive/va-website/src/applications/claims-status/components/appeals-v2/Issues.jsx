import React from 'react';
import PropTypes from 'prop-types';
import CollapsiblePanel from '@department-of-veterans-affairs/formation/CollapsiblePanel';

const Issues = ({ issues }) => {
  const open = issues.filter(i => i.status === 'open');
  const remand = issues.filter(i => i.status === 'remand');
  const granted = issues.filter(i => i.status === 'granted');
  const denied = issues.filter(i => i.status === 'denied');
  const withdrawn = issues.filter(i => i.status === 'withdrawn');

  const getListItems = (item, i) => {
    return (
      <li key={`${item.status}-${i}`}>
        {item.description}
      </li>
    );
  };

  const openListItems = open.map(getListItems);
  const remandListItems = remand.map(getListItems);
  const grantedListItems = granted.map(getListItems);
  const deniedListItems = denied.map(getListItems);
  const withdrawnListItems = withdrawn.map(getListItems);

  const openSection = (openListItems.length) ? <ul>{openListItems}</ul> : null;

  let remandSection = null;
  if (remandListItems.length) {
    remandSection = (
      <div>
        <h5>Remand</h5>
        <ul>{remandListItems}</ul>
      </div>
    );
  }

  let grantedSection = null;
  if (grantedListItems.length) {
    grantedSection = (
      <div className="granted-section">
        <h5>Granted</h5>
        <ul>{grantedListItems}</ul>
      </div>
    );
  }

  let deniedSection = null;
  if (deniedListItems.length) {
    deniedSection = (
      <div className="denied-section">
        <h5>Denied</h5>
        <ul>{deniedListItems}</ul>
      </div>
    );
  }

  let withdrawnSection = null;
  if (withdrawnListItems.length) {
    withdrawnSection = (
      <div>
        <h5 className="withdrawn-section">Withdrawn</h5>
        <ul>{withdrawnListItems}</ul>
      </div>
    );
  }

  let activeItems = null;
  if (openListItems.length || remandListItems.length) {
    // Active panel should always render as expanded by default (when items present)
    activeItems = (
      <CollapsiblePanel panelName={'Currently on appeal'} startOpen>
        {openSection}
        {remandSection}
      </CollapsiblePanel>
    );
  }

  let closedItems = null;
  if (grantedListItems.length || deniedListItems.length || withdrawnListItems.length) {
    // Closed panel should render as expanded by default only if no active panel present
    closedItems = (
      <CollapsiblePanel panelName={'Closed'} startOpen={!activeItems}>
        {grantedSection}
        {deniedSection}
        {withdrawnSection}
      </CollapsiblePanel>
    );
  }

  return (
    <div className="issues-container">
      <h2>Issues</h2>
      {activeItems}
      {closedItems}
    </div>
  );
};

Issues.propTypes = {
  issues: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.oneOf(
        ['open', 'remand', 'granted', 'denied', 'withdrawn']
      ).isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Issues;
