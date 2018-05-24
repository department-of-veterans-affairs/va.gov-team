import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

const eduForms = new Set(['22-1990', '22-1995', '22-5490', '22-5495', '22-1990E', '22-1990N']);

export default function createEducationApplicationStatus(store) {
  const root = document.getElementById('react-applicationStatus');
  if (root) {
    import(
      /* webpackChunkName: "education-application-status" */
      '../utils/educationStatus').then(module => {
      const { ApplicationStatus, EducationWizard } = module.default;
      ReactDOM.render((
        <Provider store={store}>
          <ApplicationStatus
            formIds={eduForms}
            formType="education"
            showApplyButton={root.getAttribute('data-hide-apply-button') === null}
            stayAfterDelete
            applyRender={() => (
              <div>
                <h3>Ready to apply?</h3>
                <EducationWizard/>
              </div>
            )}/>
        </Provider>
      ), root);
    });
  }
}
