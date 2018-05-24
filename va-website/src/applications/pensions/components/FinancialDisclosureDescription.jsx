import React from 'react';
import Scroll from 'react-scroll';

const scroller = Scroll.scroller;

function scrollToPage(key) {
  scroller.scrollTo(`${key}ScrollElement`, {
    duration: 500,
    delay: 2,
    smooth: true
  });
}

export default function FinancialDisclosureDescription({ viewedPages, pageKeys }) {
  const unViewedPages = pageKeys.filter(key => !viewedPages.has(key));
  if (!unViewedPages.length) {
    return null;
  }

  const jumpToFirst = () => scrollToPage(unViewedPages[0]);
  let alertBody;
  if (unViewedPages.some(key => key.includes('spouse'))) {
    alertBody = (
      <div className="usa-alert-body">
        <div className="usa-alert-text">
          <p>Does your spouse have any net worth, income, or expenses?</p>
          <button className="va-button-link" onClick={jumpToFirst}>Yes, jump to spouse</button>
        </div>
      </div>
    );
  } else if (unViewedPages.some(key => key.includes('dependents'))) {
    alertBody = (
      <div className="usa-alert-body">
        <div className="usa-alert-text">
          <p>Do the dependents you added have any net worth, income, or expenses?</p>
          <button className="va-button-link" onClick={jumpToFirst}>Yes, jump to new dependents</button>
        </div>
      </div>
    );
  }

  return (
    <div className="usa-alert usa-alert-warning pensions-disclosure-warning">
      {alertBody}
    </div>
  );
}
