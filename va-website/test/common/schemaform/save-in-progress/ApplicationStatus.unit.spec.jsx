import React from 'react';
import moment from 'moment';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import { ApplicationStatus } from '../../../../src/applications/common/schemaform/save-in-progress/ApplicationStatus';

describe('schemaform <ApplicationStatus>', () => {
  it('should render loading', () => {
    const tree = SkinDeep.shallowRender(
      <ApplicationStatus
        formId="21P-527EZ"
        login={{}}
        profile={{
          loading: true
        }}/>
    );

    expect(tree.subTree('LoadingIndicator')).to.not.be.false;
  });
  it('should render apply button', () => {
    const tree = SkinDeep.shallowRender(
      <ApplicationStatus
        formId="21P-527EZ"
        login={{
          currentlyLoggedIn: false
        }}
        showApplyButton
        applyText="Apply for benefit"
        profile={{
          loading: false,
          savedForms: []
        }}/>
    );

    expect(tree.subTree('.usa-button-primary').text()).to.equal('Apply for benefit');
  });
  it('should render saved form', () => {
    const tree = SkinDeep.shallowRender(
      <ApplicationStatus
        formId="21P-527EZ"
        login={{
          currentlyLoggedIn: true
        }}
        showApplyButton
        applyText="Apply for benefit"
        profile={{
          loading: false,
          savedForms: [{
            form: '21P-527EZ',
            metadata: {
              // eslint-disable-next-line camelcase
              expires_at: moment().add(1, 'day').unix()
            }
          }]
        }}/>
    );

    expect(tree.subTree('.usa-alert-info')).to.not.be.false;
    expect(tree.subTree('.usa-button-primary').text()).to.equal('Continue Your Application');
    expect(tree.subTree('.form-title').text()).to.contain('application in progress');
  });
  it('should not render expired form', () => {
    const tree = SkinDeep.shallowRender(
      <ApplicationStatus
        formId="21P-527EZ"
        login={{
          currentlyLoggedIn: true
        }}
        showApplyButton
        applyText="Apply for benefit"
        profile={{
          loading: false,
          savedForms: [{
            form: '21P-527EZ',
            metadata: {
              // eslint-disable-next-line camelcase
              expires_at: moment().add(-1, 'day').unix()
            }
          }]
        }}/>
    );

    expect(tree.subTree('.usa-alert-info')).to.be.false;
    expect(tree.subTree('.usa-button-primary').text()).to.equal('Apply for benefit');
  });
  it('should render saved form from ids', () => {
    const tree = SkinDeep.shallowRender(
      <ApplicationStatus
        formIds={new Set(['22-1990'])}
        login={{
          currentlyLoggedIn: true
        }}
        showApplyButton
        applyText="Apply for benefit"
        profile={{
          loading: false,
          savedForms: [{
            form: '22-1990',
            metadata: {
              // eslint-disable-next-line camelcase
              expires_at: moment().add(1, 'day').unix()
            }
          }]
        }}/>
    );

    expect(tree.subTree('.usa-alert-info')).to.not.be.false;
    expect(tree.subTree('.usa-button-primary').text()).to.equal('Continue Your Application');
    expect(tree.subTree('.form-title').text()).to.contain('application in progress');
  });
  it('should render multiple forms message', () => {
    const tree = SkinDeep.shallowRender(
      <ApplicationStatus
        formIds={new Set(['22-1990', '22-1995'])}
        login={{
          currentlyLoggedIn: true
        }}
        showApplyButton
        applyText="Apply for benefit"
        profile={{
          loading: false,
          savedForms: [{
            form: '22-1990',
            metadata: {
              // eslint-disable-next-line camelcase
              expires_at: moment().add(1, 'day').unix()
            }
          }, {
            form: '22-1995',
            metadata: {
              // eslint-disable-next-line camelcase
              expires_at: moment().add(1, 'day').unix()
            }
          }]
        }}/>
    );

    expect(tree.subTree('.usa-alert-info')).to.not.be.false;
    expect(tree.subTree('.usa-alert-info').text()).to.contain('more than one in-progress form');
  });
});

