import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import sinon from 'sinon';
import _ from 'lodash';

import { Main } from '../../containers/Main';
import { AVAILABILITY_STATUSES } from '../../utils/constants';

/**
 * Define a simple child element for our component to render in tests. This
 * gets passed in on props.children per defaultProps below. We'll use the
 * testText to assert against as needed
 */
const testText = 'test child element';
const childElement = (<span>{testText}</span>);

// Destructure AVAILABILITY_STATUSES object for easier access
const {
  awaitingResponse,
  available,
  backendServiceError,
  backendAuthenticationError,
  invalidAddressProperty,
  unavailable,
  letterEligibilityError
} = AVAILABILITY_STATUSES;

const defaultProps = {
  letters: { },
  destination: { },
  addressAvailability: awaitingResponse,
  lettersAvailability: awaitingResponse,
  benefitSummaryOptions: {
    benefitInfo: '',
    serviceInfo: '',
  },
  optionsAvailable: {},
  getMailingAddress: () => {},
  getLetterListAndBSLOptions: () => {},
  getAddressCountries: () => {},
  getAddressStates: () => {},
  children: childElement,
};

describe('<Main>', () => {
  it('renders', () => {
    const tree = SkinDeep.shallowRender(<Main {...defaultProps}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });

  it('shows a loading spinner when awaiting response', () => {
    const tree = SkinDeep.shallowRender(<Main {...defaultProps}/>);
    expect(tree.subTree('LoadingIndicator')).to.not.be.false;
  });

  it('shows a loading spinner when letters is available, but address is awaiting response', () => {
    const props = _.merge({}, defaultProps, { lettersAvailability: available });
    const tree = SkinDeep.shallowRender(<Main {...props}/>);
    expect(tree.subTree('LoadingIndicator')).to.not.be.false;
  });

  it('shows a loading spinner when letters is awaiting response, but address is available', () => {
    const props = _.merge({}, defaultProps, { addressAvailability: available });
    const tree = SkinDeep.shallowRender(<Main {...props}/>);
    expect(tree.subTree('LoadingIndicator')).to.not.be.false;
  });

  it('renders its children when letters and address are available', () => {
    const props = _.merge({}, defaultProps, { lettersAvailability: available, addressAvailability: available });
    const tree = SkinDeep.shallowRender(<Main {...props}/>);
    const childText = tree.subTree('span').text();
    expect(childText).to.equal(testText);
  });

  it('renders a system down message when letters is available but address is unavailable', () => {
    const props = _.merge({}, defaultProps, { lettersAvailability: available, addressAvailability: unavailable });
    const tree = SkinDeep.shallowRender(<Main {...props}/>);
    expect(tree.subTree('#systemDownMessage')).to.not.be.false;
  });

  it('shows a system down message for backend service error', () => {
    const props = _.merge({}, defaultProps, { lettersAvailability: backendServiceError, addressAvailability: available });
    const tree = SkinDeep.shallowRender(<Main {...props}/>);
    expect(tree.subTree('#systemDownMessage')).to.not.be.false;
  });

  it('should show backend authentication error', () => {
    const props = _.merge({}, defaultProps, { lettersAvailability: backendAuthenticationError, addressAvailability: available });
    const tree = SkinDeep.shallowRender(<Main {...props}/>);
    expect(tree.subTree('#records-not-found')).to.not.be.false;
  });

  it('should show system down message for invalid address error', () => {
    const props = _.merge({}, defaultProps, { lettersAvailability: invalidAddressProperty, addressAvailability: available });
    const tree = SkinDeep.shallowRender(<Main {...props}/>);
    expect(tree.subTree('#systemDownMessage')).to.not.be.false;
  });

  it('renders children for letter eligibility errors', () => {
    const props = _.merge({}, defaultProps, { lettersAvailability: letterEligibilityError, addressAvailability: available });
    const tree = SkinDeep.shallowRender(<Main {...props}/>);
    const childText = tree.subTree('span').text();
    expect(childText).to.equal(testText);
  });

  it('should show system down message when service is unavailable', () => {
    const props = _.merge({}, defaultProps, { lettersAvailability: unavailable, addressAvailability: available });
    const tree = SkinDeep.shallowRender(<Main {...props}/>);
    expect(tree.subTree('#systemDownMessage')).to.not.be.false;
  });

  it('renders system down message for all unspecified errors', () => {
    const props = _.merge({}, defaultProps, { lettersAvailability: 'bogusError', addressAvailability: available });
    const tree = SkinDeep.shallowRender(<Main {...props}/>);
    expect(tree.subTree('#systemDownMessage')).to.not.be.false;
  });

  it('fetches all necessary data after mounting', () => {
    const spies = {
      getMailingAddress: sinon.spy(),
      getLetterListAndBSLOptions: sinon.spy(),
      getAddressCountries: sinon.spy(),
      getAddressStates: sinon.spy(),
    };

    const props = _.merge({}, defaultProps, spies);
    const tree = SkinDeep.shallowRender(<Main {...props}/>);
    const instance = tree.getMountedInstance();
    // mounted instance doesn't call lifecycle methods automatically so...
    instance.componentDidMount();
    expect(props.getLetterListAndBSLOptions.callCount).to.equal(1);
    expect(props.getAddressCountries.callCount).to.equal(1);
    expect(props.getAddressStates.callCount).to.equal(1);
  });
});
