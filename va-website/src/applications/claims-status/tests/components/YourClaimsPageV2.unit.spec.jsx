import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import _ from 'lodash/fp';

import { YourClaimsPageV2 } from '../../containers/YourClaimsPageV2';

describe('<YourClaimsPageV2>', () => {
  const defaultProps = {
    canAccessClaims: true,
    canAccessAppeals: true,
    claimsLoading: false,
    appealsLoading: false,
    loading: false,
    appealsAvailable: 'AVAILABLE',
    claimsAvailable: 'AVAILABLE',
    claimsAuthorized: true,
    list: [
      {
        type: 'claimSeries',
        id: '1122334455',
      },
      {
        type: 'appealSeries',
        id: '1122334455',
      }
    ],
    pages: 1,
    page: 1,
    show30DayNotice: false,
    hide30DayNotice: true,
    consolidatedModal: false,
    getClaimsV2: sinon.spy(),
    getAppealsV2: sinon.spy()
  };

  it('should render', () => {
    const wrapper = shallow(<YourClaimsPageV2/>);
    expect(wrapper.type()).to.equal('div');
  });

  it('should render a loading indicator if both requests loading', () => {
    const props = _.cloneDeep(defaultProps);
    props.appealsLoading = true;
    props.claimsLoading = true;
    const wrapper = shallow(<YourClaimsPageV2 {...props}/>);
    expect(wrapper.find('LoadingIndicator').length).to.equal(1);
  });

  it('should render a loading indicator if one list empty and other loading', () => {
    const props = _.cloneDeep(defaultProps);
    props.appealsLoading = true;
    props.list = [];
    const wrapper = shallow(<YourClaimsPageV2 {...props}/>);
    expect(wrapper.find('LoadingIndicator').length).to.equal(1);
  });

  it('should render a list of claims and appeals', () => {
    const wrapper = shallow(<YourClaimsPageV2 {...defaultProps}/>);
    expect(wrapper.find('AppealListItem').length).to.equal(1);
    expect(wrapper.find('ClaimsListItem').length).to.equal(1);
  });

  it('should render a closed claim message if show30DayNotice is true', () => {
    const props = _.set('show30DayNotice', true, defaultProps);
    const wrapper = shallow(<YourClaimsPageV2 {...props}/>);
    expect(wrapper.find('ClosedClaimMessage').length).to.equal(1);
  });

  it('should render Pagination', () => {
    const wrapper = shallow(<YourClaimsPageV2 {...defaultProps}/>);
    expect(wrapper.find('Pagination').length).to.equal(1);
  });

  it('should render a no claims message when no claims or appeals present', () => {
    const props = _.cloneDeep(defaultProps);
    props.canAccessClaims = false;
    props.list = [];
    const wrapper = shallow(<YourClaimsPageV2 {...props}/>);
    expect(wrapper.find('NoClaims').length).to.equal(1);
  });

  it('should not render error messages if appeals are loading', () => {
    const props = _.set('appealsLoading', true, defaultProps);
    const wrapper = shallow(<YourClaimsPageV2 {...props}/>);
    expect(wrapper.find('ClaimsAppealsUnavailable').length).to.equal(0);
    expect(wrapper.find('ClaimsUnavailable').length).to.equal(0);
    expect(wrapper.find('ClaimsUnauthorized').length).to.equal(0);
    expect(wrapper.find('AppealsUnavailable').length).to.equal(0);
  });

  it('should not render error messages if claims are loading', () => {
    const props = _.set('claimsLoading', true, defaultProps);
    const wrapper = shallow(<YourClaimsPageV2 {...props}/>);
    expect(wrapper.find('ClaimsAppealsUnavailable').length).to.equal(0);
    expect(wrapper.find('ClaimsUnavailable').length).to.equal(0);
    expect(wrapper.find('ClaimsUnauthorized').length).to.equal(0);
    expect(wrapper.find('AppealsUnavailable').length).to.equal(0);
  });

  it('should not render claims and appeals unavailable when neither is unavailable', () => {
    const wrapper = shallow(<YourClaimsPageV2 {...defaultProps}/>);
    expect(wrapper.find('ClaimsAppealsUnavailable').length).to.equal(0);
  });

  it('should render claims unavailable when claims are unavailable', () => {
    const props = _.set('claimsAvailable', false, defaultProps);
    const wrapper = shallow(<YourClaimsPageV2 {...props}/>);
    expect(wrapper.find('ClaimsUnavailable').length).to.equal(1);
  });

  it('should render appeals unavailable when appeals are unavailable', () => {
    const props = _.set('appealsAvailable', false, defaultProps);
    const wrapper = shallow(<YourClaimsPageV2 {...props}/>);
    expect(wrapper.find('AppealsUnavailable').length).to.equal(1);
  });

  // NOTE: We need to cover the actual opening and closing of the modal in an e2e test
  //  since the logic to show / hide the modal is in the parent component.
  it('should call `showConsolidatedMessage` when the relevant button is clicked', () => {
    const messageSpy = sinon.spy();
    const props = _.set('showConsolidatedMessage', messageSpy, defaultProps);
    const wrapper = shallow(<YourClaimsPageV2 {...props}/>);
    wrapper.find('.claims-combined').simulate('click', { preventDefault: () => {} });
    expect(messageSpy.callCount).to.equal(1);
  });

  it('should render a FeaturesWarning component', () => {
    const wrapper = shallow(<YourClaimsPageV2 {...defaultProps}/>);
    expect(wrapper.find('FeaturesWarning').length).to.equal(1);
  });

  it('should render an AskVAQuestions warning component', () => {
    const wrapper = shallow(<YourClaimsPageV2 {...defaultProps}/>);
    expect(wrapper.find('AskVAQuestions').length).to.equal(1);
  });

  it('should render 30 day notice', () => {
    const props = _.set('show30DayNotice', true, defaultProps);
    const wrapper = shallow(<YourClaimsPageV2 {...props}/>);
    expect(wrapper.find('ClosedClaimMessage').length).to.equal(1);
  });

  it('should not render 30 day notice', () => {
    const wrapper = shallow(<YourClaimsPageV2 {...defaultProps}/>);
    expect(wrapper.find('ClosedClaimMessage').length).to.equal(0);
  });
});

