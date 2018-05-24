import React from 'react';
import enzyme from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import moment from 'moment';

import { createServiceMap } from '../util/helpers';
import { services, serviceStatus } from '../index';
import { DowntimeNotification, mapStateToProps } from '../containers/DowntimeNotification';

let old;

const innerText = 'This is the inner text';
function getComponent(dependencies = [], getScheduledDowntime = () => {}, otherProps = {}) {
  return enzyme.shallow(
    <DowntimeNotification dependencies={dependencies} getScheduledDowntime={getScheduledDowntime} {...otherProps} shouldSendRequest>
      <span>{innerText}</span>
    </DowntimeNotification>
  );
}

describe('mapStateToProps', () => {

  it('should set shouldSendRequest to true when scheduled downtime is not ready and a request is not pending', () => {
    const scheduledDowntime = {
      isReady: false,
      isPending: false,
      dismissedDowntimeWarnings: []
    };

    const ownProps = {
      appTitle: 'test app',
      dependencies: ['Service A']
    };

    const props = mapStateToProps({ scheduledDowntime }, ownProps);
    expect(props.shouldSendRequest).to.be.true;
    expect(props.status).to.be.undefined;
  });

  it('should have properties of a downtime object if downtime is found', () => {
    const serviceMap = createServiceMap([
      {
        attributes: {
          externalService: 'myservice',
          startTime: moment().toISOString(),
          endTime: moment().add(1, 'day').toISOString()
        }
      }
    ]);

    const scheduledDowntime = {
      isReady: true,
      isPending: false,
      dismissedDowntimeWarnings: [],
      serviceMap
    };

    const ownProps = {
      appTitle: 'My app',
      dependencies: ['myservice']
    };

    const props = mapStateToProps({ scheduledDowntime }, ownProps);

    expect(props).to.include.all.keys([
      'externalService',
      'status',
      'startTime',
      'endTime'
    ]);

  });
});

describe('<DowntimeNotification/>', () => {

  beforeEach(() => {
    old = { sessionStorage: window.sessionStorage };
    window.sessionStorage = {};
  });

  afterEach(() => {
    window.sessionStorage = old.sessionStorage;
  });

  it('calls getScheduledDowntime when rendered', () => {
    const getScheduledDowntime = sinon.spy();
    getComponent([], getScheduledDowntime);
    expect(getScheduledDowntime.calledOnce).to.be.true;
  });

  describe('No impending downtime', () => {

    it('should render the children components when there are no dependencies', () => {
      const wrapper = getComponent();
      wrapper.setProps({ isReady: true });
      expect(wrapper.text()).to.contain(innerText, 'The message was rendered.');
    });

    it('should render the children components when dependencies have no downtime', () => {
      const wrapper = getComponent([services.mvi]);
      wrapper.setProps({ isReady: true });
      expect(wrapper.text()).to.contain(innerText, 'The message was rendered.');
    });
  });

  describe('Approaching downtime', () => {
    it('should render the children and a Modal when downtime is approaching', () => {
      const wrapper = getComponent([services.mhv]);
      wrapper.setProps({
        isReady: true,
        initializeDowntimeWarnings() {},
        startTime: moment(),
        endTime: moment(),
        status: serviceStatus.downtimeApproaching
      });

      const downtimeApproaching = wrapper.find('DowntimeApproaching').dive();
      const innerWrapper = downtimeApproaching.find('DowntimeNotificationWrapper').dive();

      expect(innerWrapper.text()).to.contain(innerText, 'The message was rendered');
      expect(innerWrapper.find(`[data-status="${serviceStatus.downtimeApproaching}"]`)).to.have.lengthOf(1, 'The correct status was rendered');
      expect(innerWrapper.find('Modal')).to.have.lengthOf(1, 'Authenticated users will see a modal');
    });
  });

  describe('In downtime', () => {
    it('should not render the children when we are in downtime and instead show an AlertBox', () => {
      const wrapper = getComponent([services.mhv]);
      wrapper.setProps({ isReady: true, status: serviceStatus.down });

      const down = wrapper.find('Down').dive();
      const innerWrapper = down.find('DowntimeNotificationWrapper').dive();

      expect(innerWrapper.text()).to.not.contain(innerText, 'The message was not rendered');
      expect(innerWrapper.find(`[data-status="${serviceStatus.down}"]`)).to.have.lengthOf(1, 'The correct status was rendered');
      expect(innerWrapper.find('h3')).to.have.lengthOf(1, 'Authenticated users will see a plain <h2>');
    });
  });

  describe('custom render', () => {
    it('allows a custom render property', () => {
      const render = (downtime, children) => {
        return (
          <div>
            <h1>Custom render for status {downtime.status}</h1>
            {children}
          </div>
        );
      };

      const wrapper = getComponent([services.mhv], () => {}, { render });
      wrapper.setProps({ isReady: true, status: serviceStatus.down });

      const text = wrapper.text();

      expect(text).to.contain(`Custom render for status ${serviceStatus.down}`, 'Custom render works');
      expect(text).to.contain(innerText, 'Custom render passes children nodes');
    });
  });
});
