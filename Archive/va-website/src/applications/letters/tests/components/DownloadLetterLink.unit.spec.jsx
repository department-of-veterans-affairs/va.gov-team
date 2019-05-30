import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import sinon from 'sinon';
import { expect } from 'chai';
import _ from 'lodash/fp';

import { getFormDOM } from '../../../../platform/testing/unit/schemaform-utils';
import { DownloadLetterLink } from '../../components/DownloadLetterLink.jsx';
import { DOWNLOAD_STATUSES } from '../../utils/constants';

const defaultProps = {
  letterName: 'Commissary Letter',
  letterType: 'commissary'
};

describe('<DownloadLetterLink>', () => {
  it('should render', () => {
    const component = ReactTestUtils.renderIntoDocument(<DownloadLetterLink {...defaultProps}/>);
    const tree = getFormDOM(component);
    expect(tree.getElement('div')).to.not.be.null;
  });

  it('should show download button', () => {
    const component = ReactTestUtils.renderIntoDocument(<DownloadLetterLink {...defaultProps}/>);
    const tree = getFormDOM(component);
    expect(tree.getElement('button').textContent).to.equal('Download Letter');
  });

  it('should call getLetterPdf when clicked', () => {
    const oldWindow = global.window;
    global.window = {
      dataLayer: [],
    };
    const getLetterPdf = sinon.spy();
    const props = _.set('getLetterPdf', getLetterPdf, defaultProps);
    const component = ReactTestUtils.renderIntoDocument(<DownloadLetterLink {...props}/>);
    const button = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'button');

    ReactTestUtils.Simulate.click(button);

    expect(getLetterPdf.args[0]).to.eql([defaultProps.letterType, defaultProps.letterName, undefined]);
    expect(global.window.dataLayer[0]).to.eql({
      event: 'letter-download',
      'letter-type': defaultProps.letterType
    });

    // Cleanup on aisle 3
    global.window = oldWindow;
  });

  it('should update button when status is downloading', () => {
    const props = Object.assign({}, defaultProps, { downloadStatus: DOWNLOAD_STATUSES.downloading });
    const component = ReactTestUtils.renderIntoDocument(<DownloadLetterLink {...props}/>);
    const tree = getFormDOM(component);
    const button = tree.getElement('button');

    expect(button.textContent).to.equal('Downloading...');
    expect(button.disabled).to.be.true;
  });

  it('should show success message', () => {
    const props = Object.assign({}, defaultProps, { downloadStatus: DOWNLOAD_STATUSES.success });
    const component = ReactTestUtils.renderIntoDocument(<DownloadLetterLink {...props}/>);
    const tree = getFormDOM(component);
    const heading = tree.getElement('.usa-alert-heading');

    expect(heading.textContent).to.equal('Your letter has successfully downloaded.');
  });

  it('should show failure message', () => {
    const props = Object.assign({}, defaultProps, { downloadStatus: DOWNLOAD_STATUSES.failure });
    const component = ReactTestUtils.renderIntoDocument(<DownloadLetterLink {...props}/>);
    const tree = getFormDOM(component);
    const heading = tree.getElement('.usa-alert-heading');
    const button = tree.getElement('button');

    expect(button.textContent).to.equal('Retry Download');
    expect(heading.textContent).to.equal('Your letter didn’t download.');
  });
});
