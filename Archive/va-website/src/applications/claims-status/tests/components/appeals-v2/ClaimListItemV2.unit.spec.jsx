import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ClaimsListItemV2 from '../../../components/appeals-v2/ClaimsListItemV2';


describe('<ClaimsListItemV2>', () => {
  it('should not show any flags', () => {
    const claim = {
      id: 1,
      attributes: {
        phase: 2,
        decisionLetterSent: false,
        developmentLetterSent: false,
        documentsNeeded: false
      }
    };
    const tree = shallow(<ClaimsListItemV2 claim={claim}/>);
    expect(tree.find('.communications').text()).to.equal('');
  });

  it('should show closed status', () => {
    const claim = {
      id: 1,
      attributes: {
        phase: 8
      }
    };
    const tree = shallow(<ClaimsListItemV2 claim={claim}/>);
    expect(tree.find('.status-circle + p').first().text()).to.equal('Status: Closed');
  });

  it('should show the status', () => {
    const claim = {
      id: 1,
      attributes: {
        phase: 2
      }
    };
    const tree = shallow(<ClaimsListItemV2 claim={claim}/>);
    expect(tree.find('.status-circle + p').first().text()).to.equal('Status: Initial review');
  });

  it('should show development letter flag', () => {
    const claim = {
      id: 1,
      attributes: {
        phase: 2,
        decisionLetterSent: false,
        developmentLetterSent: true,
        documentsNeeded: false
      }
    };
    const tree = shallow(<ClaimsListItemV2 claim={claim}/>);
    expect(tree.find('.communications').text()).to.contain('We sent you a development letter');
  });

  it('should show decision letter flag', () => {
    const claim = {
      id: 1,
      attributes: {
        phase: 2,
        decisionLetterSent: true,
        developmentLetterSent: true,
        documentsNeeded: false
      }
    };
    const tree = shallow(<ClaimsListItemV2 claim={claim}/>);
    expect(tree.find('.communications').text()).to.contain('We sent you a decision letter');
  });

  it('should show items needed flag', () => {
    const claim = {
      id: 1,
      attributes: {
        phase: 2,
        decisionLetterSent: false,
        developmentLetterSent: false,
        documentsNeeded: true
      }
    };
    const tree = shallow(<ClaimsListItemV2 claim={claim}/>);
    expect(tree.find('.communications').text()).to.contain('Items need attention');
  });

  it('should hide flags when complete', () => {
    const claim = {
      id: 1,
      attributes: {
        phase: 8,
        decisionLetterSent: false,
        developmentLetterSent: true,
        documentsNeeded: true
      }
    };
    const tree = shallow(<ClaimsListItemV2 claim={claim}/>);
    expect(tree.find('.communications').text()).to.equal('');
  });

  it('should render a status circle with the `open` class', () => {
    const claim = {
      id: 1,
      attributes: {
        phase: 2,
        open: true
      }
    };
    const tree = shallow(<ClaimsListItemV2 claim={claim}/>);
    const circle = tree.find('.status-circle').first();
    expect(circle.hasClass('open')).to.be.true;
    expect(circle.hasClass('closed')).to.be.false;
  });

  it('should render a status circle with the `closed` class', () => {
    const claim = {
      id: 1,
      attributes: {
        phase: 8,
        open: false
      }
    };
    const tree = shallow(<ClaimsListItemV2 claim={claim}/>);
    const circle = tree.find('.status-circle').first();
    expect(circle.hasClass('open')).to.be.false;
    expect(circle.hasClass('closed')).to.be.true;
  });

  it('should render a link to the claim status page', () => {
    const claim = {
      id: 1,
      attributes: {
        phase: 8,
        open: false
      }
    };
    const tree = shallow(<ClaimsListItemV2 claim={claim}/>);
    expect(tree.find('Link').first().props().to).to.equal(`your-claims/${claim.id}/status`);
  });
});
