import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

export default function createApplicationStatus(store, form) {
  const root = document.getElementById('react-applicationStatus');
  if (root) {
    import(
      /* webpackChunkName: "application-status" */
      '../common/schemaform/save-in-progress/ApplicationStatus').then(module => {
      const ApplicationStatus = module.default;
      ReactDOM.render((
        <Provider store={store}>
          <ApplicationStatus
            formId={form.formId}
            showApplyButton={root.getAttribute('data-hide-apply-button') === null}
            additionalText={form.additionalText}
            applyLink={form.applyLink}
            applyText={form.applyText}/>
        </Provider>
      ), root);
    });
  }
}
