import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { DownloadPage } from '../../containers/DownloadPage';

const props = () => {
  return {
    refresh: {
      statuses: {
        failed: [],
        incomplete: [],
        successful: [],
      }
    },
    form: {
      requestDate: new Date().toISOString(),
      ready: true,
    }
  };
};

describe('<DownloadPage>', () => {
  it('should render success state correctly', () => {
    const wrapper = shallow(<DownloadPage {...props()}/>);
    const alertBox = wrapper.find('AlertBox');
    expect(alertBox.exists()).to.be.true;
    expect(alertBox.prop('status')).to.equal('success');
  });

  it('should render refresh error correctly', () => {
    const errorProps = Object.assign({}, props());
    errorProps.refresh.statuses.failed.push({ id: 0 });
    const wrapper = shallow(<DownloadPage {...errorProps}/>);
    const alertBox = wrapper.find('AlertBox');
    expect(alertBox.exists()).to.be.true;
    expect(alertBox.prop('status')).to.equal('warning');
  });

  it('should render report generation error correctly', () => {
    const errorProps = Object.assign({}, props());
    errorProps.form.ready = false;
    const wrapper = shallow(<DownloadPage {...errorProps}/>);
    const alertBox = wrapper.find('AlertBox');
    expect(alertBox.exists()).to.be.true;
    expect(alertBox.prop('status')).to.equal('error');
  });

  it('should render generic skipped update warning correctly', () => {
    const errorProps = Object.assign({}, props());
    errorProps.refresh.statuses.incomplete.push({ id: 0 });
    const wrapper = shallow(<DownloadPage {...errorProps}/>);
    const alertBox = wrapper.find('AlertBox');
    expect(alertBox.exists()).to.be.true;
    expect(alertBox.prop('status')).to.equal('warning');
    expect(alertBox.prop('headline')).to.equal('Parts of your health record may not be current.');
  });

  it('should render skipped update warning for specific categories', () => {
    const extractTypes = [
      'ImagingStudy',
      'ChemistryHematology',
      'VPR',
      'DodMilitaryService'
    ];

    const expectedHeadlines = [
      'Your radiology reports may not be current.',
      'Your labs and tests information may not be current.',
      'Your VA electronic health record history may not be current.',
      'Your Department of Defense information may not be current.'
    ];

    extractTypes.forEach((extractType, index) => {
      const errorProps = Object.assign({}, props());
      errorProps.refresh.statuses.incomplete.push({ extractType });
      const wrapper = shallow(<DownloadPage {...errorProps}/>);
      const alertBox = wrapper.find('AlertBox');
      expect(alertBox.exists()).to.be.true;
      expect(alertBox.prop('status')).to.equal('warning');
      expect(alertBox.prop('headline')).to.equal(expectedHeadlines[index]);
    });
  });
});
