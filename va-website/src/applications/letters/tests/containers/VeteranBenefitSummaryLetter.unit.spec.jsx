import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import sinon from 'sinon';
import SkinDeep from 'skin-deep';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import _ from 'lodash/fp';

import { VeteranBenefitSummaryLetter } from '../../containers/VeteranBenefitSummaryLetter';

const defaultProps = {
  benefitSummaryOptions: {
    benefitInfo: {
      hasAdaptedHousing: true,
      hasChapter35Eligibility: false
    },
    serviceInfo: [
      {
        branch: 'ARMY',
        characterOfService: 'UNCHARACTERIZED',
        enteredDate: '1965-01-01T05:00:00.000+00:00',
        releasedDate: '1972-10-01T04:00:00.000+00:00'
      }
    ]
  },
  isVeteran: true,
  optionsAvailable: true,
  requestOptions: {},
  updateBenefitSummaryRequestOption: () => {}
};

describe('<VeteranBenefitSummaryLetter>', () => {
  it('renders', () => {
    const tree = SkinDeep.shallowRender(<VeteranBenefitSummaryLetter {...defaultProps}/>);
    expect(tree.type).to.equal('div');
  });

  it('should show benefit info options', () => {
    const tree = SkinDeep.shallowRender(<VeteranBenefitSummaryLetter {...defaultProps}/>);
    const rows = tree.dive(['div', '#benefitInfoTable', 'tbody']).everySubTree('tr');
    expect(rows[0].dive(['th', 'input'])).not.to.be.empty;
    expect(rows[0].dive(['td', '#hasAdaptedHousingLabel'])).not.to.be.empty;

    expect(rows[1].dive(['th', 'input'])).not.to.be.empty;
    expect(rows[1].dive(['td', '#hasChapter35EligibilityLabel'])).not.to.be.empty;
  });

  it('should show service info options', () => {
    const tree = SkinDeep.shallowRender(<VeteranBenefitSummaryLetter {...defaultProps}/>);
    expect(tree.subTree('#militaryService')).not.to.be.empty;
  });

  it('renders error and hides benefit table if options not available', () => {
    const props = _.set('optionsAvailable', false, defaultProps);
    const tree = SkinDeep.shallowRender(<VeteranBenefitSummaryLetter {...props}/>);
    const headerText = tree.dive(['.feature', 'h4']).text();
    expect(headerText).to.equal('Your VA Benefit Summary letter is currently unavailable');
    expect(tree.subTree('#benefitInfoTable')).to.be.false;
  });

  it('maps each service entry to its own table row', () => {
    const navyService = [{
      branch: 'NAVY',
      characterOfService: 'UNCHARACTERIZED',
      enteredDate: '1974-01-01T05:00:00.000+00:00',
      releasedDate: '1976-10-01T04:00:00.000+00:00'
    }];

    const doubleService = defaultProps.benefitSummaryOptions.serviceInfo.concat(navyService);
    const props = _.set('benefitSummaryOptions.serviceInfo', doubleService, defaultProps);
    const tree = SkinDeep.shallowRender(<VeteranBenefitSummaryLetter {...props}/>);
    const serviceRows = tree.dive(['#militaryServiceTable', 'tbody']).everySubTree('tr');

    expect(serviceRows.length).to.equal(doubleService.length);
  });

  it('handles check and uncheck events', () => {
    const oldWindow = _.cloneDeep(global.window);
    global.window = {
      dataLayer: [],
    };

    const updateOptionSpy = sinon.spy();
    const props = _.set('updateBenefitSummaryRequestOption', updateOptionSpy, defaultProps);
    const component = ReactTestUtils.renderIntoDocument(
      <VeteranBenefitSummaryLetter {...props}/>
    );

    // post-render sanity check
    expect(global.window.dataLayer.length).to.equal(0);

    const formDOM = findDOMNode(component);
    const inputs = formDOM.querySelectorAll('input');

    // one input for service info, two more for benefitInfo.*
    expect(inputs.length).to.equal(3);

    const DOMid = 'militaryService';
    const checkedValue = false;

    const mockDOMEvent = {
      target: {
        id: DOMid,
        checked: checkedValue,
      },
    };

    ReactTestUtils.Simulate.change(inputs[0], mockDOMEvent);

    const expectedDataLayer = {
      event: 'letter-benefit-option-clicked',
      'letter-benefit-option': DOMid,
      'letter-benefit-option-status': (checkedValue ? 'checked' : 'unchecked')
    };
    const firstCallArgs = updateOptionSpy.args[0];

    expect(global.window.dataLayer.length).to.equal(1);
    expect(global.window.dataLayer[0]).to.eql(expectedDataLayer);
    expect(updateOptionSpy.calledOnce).to.be.true;
    expect(firstCallArgs).to.have.members([DOMid, checkedValue]);

    // Reset window to pre-test state to be safe
    global.window = _.cloneDeep(oldWindow);
  });

  it('Does not render dependent options for veterans', () => {
    const tree = SkinDeep.shallowRender(<VeteranBenefitSummaryLetter {...defaultProps}/>);
    const benefitInfoRows = tree.dive(['div', '#benefitInfoTable', 'tbody']).everySubTree('tr');
    benefitInfoRows.forEach((row) => {
      expect(() => row.dive(['td', '#hasDeathResultOfDisability'])).to.throw();
    });
  });

  // All users considered veterans for now - please see vets.gov-team issue #6250
  // it('Does not render veteran options for dependents', () => {
  //   const props = _.set('isVeteran', false, defaultProps);
  //   const tree = SkinDeep.shallowRender(<VeteranBenefitSummaryLetter {...props}/>);
  //   const benefitInfoRows = tree.dive(['div', '#benefitInfoTable', 'tbody']).everySubTree('tr');
  //   benefitInfoRows.forEach((row) => {
  //     expect(() => row.dive(['td', '#hasServiceConnectedDisabilities'])).to.throw();
  //   });
  // });
});
