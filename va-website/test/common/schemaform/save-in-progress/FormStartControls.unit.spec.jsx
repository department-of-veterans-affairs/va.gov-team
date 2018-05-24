import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { getFormDOM } from '../../../../src/platform/testing/unit/schemaform-utils';
import { FormStartControls } from '../../../../src/applications/common/schemaform/save-in-progress/FormStartControls';

describe('Schemaform <FormStartControls>', () => {
  const startPage = 'testing';

  it('should render 1 button when not logged in', () => {
    const routerSpy = {
      push: sinon.spy()
    };
    const fetchSpy = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <FormStartControls
        formId="1010ez"
        migrations={[]}
        formSaved={false}
        startPage={startPage}
        router={routerSpy}
        fetchInProgressForm={fetchSpy}/>
    );

    expect(tree.everySubTree('ProgressButton').length).to.equal(1);
  });
  it('should render 1 button when logged in with no saved form', () => {
    const routerSpy = {
      push: sinon.spy()
    };
    const fetchSpy = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <FormStartControls
        formId="1010ez"
        migrations={[]}
        formSaved={false}
        startPage={startPage}
        router={routerSpy}
        fetchInProgressForm={fetchSpy}/>
    );

    expect(tree.everySubTree('ProgressButton').length).to.equal(1);
  });
  it('should render 4 buttons when logged in with a saved form', () => {
    const routerSpy = {
      push: sinon.spy()
    };
    const fetchSpy = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <FormStartControls
        formId="1010ez"
        migrations={[]}
        formSaved
        startPage={startPage}
        router={routerSpy}
        fetchInProgressForm={fetchSpy}/>
    );

    expect(tree.everySubTree('ProgressButton').length).to.equal(4);
    expect(tree.subTree('Modal').everySubTree('ProgressButton').length).to.equal(2);
  });
  it('should go to the first page when "Continue" is clicked', () => {
    const routerSpy = {
      push: sinon.spy()
    };
    const fetchSpy = sinon.spy();
    const tree = ReactTestUtils.renderIntoDocument(
      <FormStartControls
        formId="1010ez"
        migrations={[]}
        formSaved
        startPage={startPage}
        router={routerSpy}
        fetchInProgressForm={fetchSpy}/>
    );
    const findDOM = findDOMNode(tree);
    findDOM.querySelector('.usa-button-primary').click();

    expect(routerSpy.push.calledWith(startPage));
  });

  it('should go to the first page when "Start over" is clicked', () => {
    const routerSpy = {
      push: sinon.spy()
    };
    const fetchSpy = sinon.spy();
    const tree = ReactTestUtils.renderIntoDocument(
      <FormStartControls
        formId="1010ez"
        migrations={[]}
        formSaved
        startPage={startPage}
        router={routerSpy}
        fetchInProgressForm={fetchSpy}/>
    );
    const findDOM = findDOMNode(tree);
    findDOM.querySelector('.usa-button-secondary').click();

    expect(routerSpy.push.calledWith(startPage));
  });
  it('should go to the returnUrl when "Resume previous application" is clicked', () => {
    const routerSpy = {
      push: sinon.spy()
    };
    const fetchSpy = sinon.stub();
    fetchSpy.returns(Promise.resolve('return/url'));
    const tree = ReactTestUtils.renderIntoDocument(
      <FormStartControls
        formId="1010ez"
        migrations={[]}
        formSaved
        startPage={startPage}
        router={routerSpy}
        fetchInProgressForm={fetchSpy}/>
    );
    const findDOM = findDOMNode(tree);
    findDOM.querySelector('.usa-button-primary').click();

    expect(routerSpy.push.calledWith('return/url'));
  });

  it('should do prefill when "Continue" is clicked', () => {
    const routerSpy = {
      push: sinon.spy()
    };
    const fetchSpy = sinon.spy();
    const tree = ReactTestUtils.renderIntoDocument(
      <FormStartControls
        formId="1010ez"
        migrations={[]}
        startPage={startPage}
        router={routerSpy}
        fetchInProgressForm={fetchSpy}
        prefillAvailable/>
    );
    const formDOM = getFormDOM(tree);
    formDOM.click('.usa-button-primary');

    expect(fetchSpy.firstCall.args[2]).to.be.true;
  });

  it('should show modal and remove form when starting over', () => {
    const routerSpy = {
      push: sinon.spy()
    };
    const fetchSpy = sinon.spy();
    const tree = ReactTestUtils.renderIntoDocument(
      <FormStartControls
        formId="1010ez"
        migrations={[]}
        router={routerSpy}
        formSaved
        removeInProgressForm={fetchSpy}
        prefillAvailable/>
    );
    const formDOM = getFormDOM(tree);
    document.body.appendChild(formDOM);
    formDOM.click('.usa-button-secondary');

    expect(formDOM.querySelector('.va-modal-body')).to.not.be.null;

    formDOM.click('.va-modal-body .usa-button-primary');

    expect(fetchSpy.called).to.be.true;
    expect(formDOM.querySelector('.va-modal-body')).to.be.null;
  });
});
