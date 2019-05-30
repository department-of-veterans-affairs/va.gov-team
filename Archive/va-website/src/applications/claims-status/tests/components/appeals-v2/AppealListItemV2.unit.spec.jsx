import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import _ from 'lodash/fp';

import AppealListItemV2 from '../../../components/appeals-v2/AppealListItemV2';
import { STATUS_TYPES, EVENT_TYPES } from '../../../utils/appeals-v2-helpers';

describe('<AppealListItemV2/>', () => {
  const defaultProps = {
    appeal: {
      id: 1234,
      attributes: {
        status: {
          type: STATUS_TYPES.pendingForm9,
          details: {}
        },
        events: [
          {
            type: EVENT_TYPES.claimDecision,
            date: '2016-05-01'
          },
          {
            type: EVENT_TYPES.merged,
            date: '2015-06-04'
          }
        ],
        // These should really be objects, but AppealListItemV2 doesn't really care
        issues: ["I'm an issue!", 'So am I!'],
        description: 'Description here.',
        programArea: 'compensation',
        active: true
      }
    }
  };

  it('should render', () => {
    const wrapper = shallow(<AppealListItemV2 {...defaultProps}/>);
    expect(wrapper.type()).to.equal('div');
  });

  it('should append open class to status-circle div when status active', () => {
    const wrapper = shallow(<AppealListItemV2 {...defaultProps}/>);
    expect(wrapper.find('div.open').length).to.equal(1);
    expect(wrapper.find('div.closed').length).to.equal(0);
  });

  it('should append closed class to status-circle div when status inactive', () => {
    const closedProps = _.set('appeal.attributes.active', false, defaultProps);
    const wrapper = shallow(<AppealListItemV2 {...closedProps}/>);
    expect(wrapper.find('div.closed').length).to.equal(1);
    expect(wrapper.find('div.open').length).to.equal(0);
  });

  it('should show the right date in the header', () => {
    const wrapper = shallow(<AppealListItemV2 {...defaultProps}/>);
    expect(wrapper.find('h3.claim-list-item-header-v2').render().text()).to.contain('May 1, 2016');
  });

  it('should say "issue" if there is only one issue on appeal', () => {
    const props = _.set('appeal.attributes.issues', ["I'm an issue!"], defaultProps);
    const wrapper = shallow(<AppealListItemV2 {...props}/>);
    const issuesText = wrapper.find('.card-status + p').first().text();
    expect(issuesText).to.contain('Issue');
    expect(issuesText).to.not.contain('Issues');
  });

  it('should say "issues" if there are multiple issues on appeal', () => {
    const wrapper = shallow(<AppealListItemV2 {...defaultProps}/>);
    const issuesText = wrapper.find('.card-status + p').first().text();
    expect(issuesText).to.contain('Issues');
  });

  it('should create a link to the appeal status page', () => {
    const wrapper = shallow(<AppealListItemV2 {...defaultProps}/>);
    expect(wrapper.find('Link').first().props().to)
      .to.equal(`appeals/${defaultProps.appeal.id}/status`);
  });

  it('should not show the issue text if no description is given', () => {
    const props = _.set('appeal.attributes.description', undefined, defaultProps);
    const wrapper = shallow(<AppealListItemV2 {...props}/>);
    expect(wrapper.find('.card-status + p').exists()).to.be.false;
  });

  it('should show the issue text if a description is given', () => {
    const wrapper = shallow(<AppealListItemV2 {...defaultProps}/>);
    expect(wrapper.find('.card-status + p').exists()).to.be.true;
  });
});
