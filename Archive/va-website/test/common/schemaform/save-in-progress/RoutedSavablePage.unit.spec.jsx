import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { RoutedSavablePage } from '../../../../src/applications/common/schemaform/save-in-progress/RoutedSavablePage';

describe('Schemaform <RoutedSavablePage>', () => {
  const location = {
    pathname: '/testing/0'
  };

  it('should include SaveLink and SaveStatus', () => {
    const route = {
      pageConfig: {
        pageKey: 'testPage',
        schema: {},
        uiSchema: {},
        errorMessages: {},
        title: ''
      },
      pageList: [
        {
          path: 'testing'
        }
      ]
    };
    const form = {
      disableSave: false,
      pages: {
        testPage: {
          schema: {},
          uiSchema: {},
        }
      },
      data: {}
    };
    const user = {
      profile: {
        savedForms: []
      },
      login: {
        currentlyLoggedIn: true
      }
    };

    const tree = shallow(
      <RoutedSavablePage form={form} route={route} user={user} location={location}/>
    ).find('FormPage').dive();

    expect(tree.find('SaveStatus').exists()).to.be.true;
    expect(tree.find('SaveFormLink').exists()).to.be.true;
  });

  it('should auto save on change', () => {
    const route = {
      pageConfig: {
        pageKey: 'testPage',
        schema: {},
        uiSchema: {},
        errorMessages: {},
        title: ''
      },
      pageList: [
        {
          path: 'testing'
        }
      ]
    };
    const form = {
      disableSave: false,
      pages: {
        testPage: {
          schema: {},
          uiSchema: {},
        }
      },
      data: {}
    };
    const user = {
      profile: {
        savedForms: []
      },
      login: {
        currentlyLoggedIn: true
      }
    };
    const autosave = sinon.spy();
    const setData = sinon.spy();

    const tree = shallow(
      <RoutedSavablePage setData={setData} form={form} route={route} user={user} location={location} autoSave={autosave}/>
    );
    tree.instance().debouncedAutoSave = autosave;

    tree.instance().onChange({ tests: 1 });
    expect(autosave.called).to.be.true;
    expect(setData.called).to.be.true;
  });
});
