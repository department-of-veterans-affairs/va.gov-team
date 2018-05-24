import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';
import sinon from 'sinon';

import { RoutedSavableApp } from '../../../../src/applications/common/schemaform/save-in-progress/RoutedSavableApp';
import { LOAD_STATUSES, PREFILL_STATUSES } from '../../../../src/applications/common/schemaform/save-in-progress/actions';

let oldWindow;

const setup = () => {
  oldWindow = global.window;

  global.window = {
    ...oldWindow,
    location: {
      pathname: '/',
    },
    addEventListener: () => {},
  };
};

const teardown = () => {
  global.window = oldWindow;
};

describe('Schemaform <RoutedSavableApp>', () => {
  beforeEach(setup);
  afterEach(teardown);

  it('should render children', () => {
    const formConfig = {};
    const currentLocation = {
      pathname: 'introduction',
      search: ''
    };
    const routes = [{
      pageList: [{ path: currentLocation.pathname }]
    }];

    const tree = SkinDeep.shallowRender(
      <RoutedSavableApp
        formConfig={formConfig}
        routes={routes}
        currentLocation={currentLocation}
        loadedStatus={LOAD_STATUSES.notAttempted}>
        <div className="child"/>
      </RoutedSavableApp>
    );

    expect(tree.everySubTree('.child')).not.to.be.empty;
    expect(tree.everySubTree('FormNav')).to.be.empty;
    expect(tree.everySubTree('FormTitle')).to.be.empty;
  });
  it('should render the loading screen', () => {
    const formConfig = {
      title: 'Testing'
    };
    const currentLocation = {
      pathname: 'test',
      search: ''
    };
    const routes = [{
      pageList: [{ path: currentLocation.pathname }]
    }];

    const tree = SkinDeep.shallowRender(
      <RoutedSavableApp
        formConfig={formConfig}
        routes={routes}
        currentLocation={currentLocation}
        loadedStatus={LOAD_STATUSES.pending}
        updateLogInUrl={() => {}}>
        <div className="child"/>
      </RoutedSavableApp>
    );

    expect(tree.everySubTree('LoadingIndicator')).not.to.be.empty;
  });
  it('should route when prefill unfilled', () => {
    const formConfig = {
      title: 'Testing'
    };
    const currentLocation = {
      pathname: 'test',
      search: ''
    };
    const routes = [{
      pageList: [{
        path: 'intro'
      }, {
        path: 'test-path'
      }]
    }];
    const router = {
      push: sinon.spy()
    };

    const tree = SkinDeep.shallowRender(
      <RoutedSavableApp
        formConfig={formConfig}
        routes={routes}
        currentLocation={currentLocation}
        loadedStatus={LOAD_STATUSES.pending}
        prefillStatus={PREFILL_STATUSES.pending}
        updateLogInUrl={() => {}}>
        <div className="child"/>
      </RoutedSavableApp>
    );

    tree.getMountedInstance().componentWillReceiveProps({
      prefillStatus: PREFILL_STATUSES.unfilled,
      router,
      routes
    });

    expect(router.push.calledWith('test-path')).to.be.true;
  });
  it('should route and reset fetch status on success', () => {
    const formConfig = {
      title: 'Testing'
    };
    const currentLocation = {
      pathname: 'test',
      search: ''
    };
    const routes = [{
      pageList: [{ path: currentLocation.pathname }]
    }];
    const router = {
      push: sinon.spy()
    };
    const returnUrl = 'test-path';
    const setFetchFormStatus = sinon.spy();

    const tree = SkinDeep.shallowRender(
      <RoutedSavableApp
        formConfig={formConfig}
        routes={routes}
        currentLocation={currentLocation}
        loadedStatus={LOAD_STATUSES.pending}
        updateLogInUrl={() => {}}>
        <div className="child"/>
      </RoutedSavableApp>
    );

    tree.getMountedInstance().componentWillReceiveProps({
      router,
      returnUrl,
      loadedStatus: LOAD_STATUSES.success,
      setFetchFormStatus
    });

    expect(router.push.calledWith(returnUrl)).to.be.true;
    expect(setFetchFormStatus.calledWith(LOAD_STATUSES.notAttempted)).to.be.true;
  });
  it('should route to error when failed', () => {
    const formConfig = {
      title: 'Testing'
    };
    const currentLocation = {
      pathname: 'test',
      search: ''
    };
    const routes = [{
      pageList: [{ path: currentLocation.pathname }]
    }];
    const router = {
      push: sinon.spy()
    };

    const tree = SkinDeep.shallowRender(
      <RoutedSavableApp
        formConfig={formConfig}
        routes={routes}
        currentLocation={currentLocation}
        loadedStatus={LOAD_STATUSES.pending}
        updateLogInUrl={() => {}}>
        <div className="child"/>
      </RoutedSavableApp>
    );

    tree.getMountedInstance().componentWillReceiveProps({
      router,
      loadedStatus: LOAD_STATUSES.failure,
      formConfig: { urlPrefix: '/' }
    });

    expect(router.push.calledWith('/error')).to.be.true;
  });
  it('should route to the first page if started in the middle and not logged in', () => {
    const formConfig = {
      title: 'Testing'
    };
    const currentLocation = {
      pathname: 'test',
      search: ''
    };
    const routes = [{
      pageList: [
        { path: '/introduction' },
        { path: currentLocation.pathname }, // You are here
        { path: '/lastPage' }
      ]
    }];
    const router = {
      replace: sinon.spy()
    };

    // Only redirects in production or if ?redirect is in the URL
    const buildType = __BUILDTYPE__;
    __BUILDTYPE__ = 'production';
    const tree = SkinDeep.shallowRender(
      <RoutedSavableApp
        formConfig={formConfig}
        routes={routes}
        router={router}
        currentLocation={currentLocation}
        loadedStatus={LOAD_STATUSES.pending}>
        <div className="child"/>
      </RoutedSavableApp>
    );

    tree.getMountedInstance().componentDidMount();

    expect(router.replace.calledWith('/introduction')).to.be.true;
    __BUILDTYPE__ = buildType;
  });
  it('should load a saved form when starting in the middle of a form and logged in', () => {
    const formConfig = {
      title: 'Testing',
      formId: 'testForm'
    };
    const currentLocation = {
      pathname: 'test',
      search: ''
    };
    const routes = [{
      pageList: [
        { path: '/introduction' },
        { path: currentLocation.pathname }, // You are here
        { path: '/lastPage' }
      ]
    }];
    const router = {
      push: sinon.spy(),
      replace: sinon.spy()
    };
    const fetchInProgressForm = sinon.spy();

    // Only redirects in production or if ?redirect is in the URL
    const buildType = __BUILDTYPE__;
    __BUILDTYPE__ = 'production';
    const tree = SkinDeep.shallowRender(
      <RoutedSavableApp
        formConfig={formConfig}
        routes={routes}
        router={router}
        currentLocation={currentLocation}
        profileIsLoading
        loadedStatus={LOAD_STATUSES.pending}>
        <div className="child"/>
      </RoutedSavableApp>
    );

    // When logged in, the component gets mounted before the profile is finished
    //  loading, so the logic is in componentWillReceiveProps()
    tree.getMountedInstance().componentWillReceiveProps({
      profileIsLoading: false,
      isLoggedIn: true,
      savedForms: [{ form: formConfig.formId }],
      prefillsAvailable: [],
      formConfig,
      router,
      routes,
      fetchInProgressForm
    });

    expect(fetchInProgressForm.calledWith(formConfig.formId, formConfig.migrations, false))
      .to.be.true;
    __BUILDTYPE__ = buildType;
  });
  it('should load a pre-filled form when starting in the middle of a form and logged in', () => {
    const formConfig = {
      title: 'Testing',
      formId: 'testForm'
    };
    const currentLocation = {
      pathname: 'test',
      search: ''
    };
    const routes = [{
      pageList: [
        { path: '/introduction' },
        { path: currentLocation.pathname }, // You are here
        { path: '/lastPage' }
      ]
    }];
    const router = {
      replace: sinon.spy(),
      push: sinon.spy()
    };
    const fetchInProgressForm = sinon.spy();

    // Only redirects in production or if ?redirect is in the URL
    const buildType = __BUILDTYPE__;
    __BUILDTYPE__ = 'production';
    const tree = SkinDeep.shallowRender(
      <RoutedSavableApp
        formConfig={formConfig}
        routes={routes}
        router={router}
        currentLocation={currentLocation}
        profileIsLoading
        loadedStatus={LOAD_STATUSES.pending}>
        <div className="child"/>
      </RoutedSavableApp>
    );

    // When logged in, the component gets mounted before the profile is finished
    //  loading, so the logic is in componentWillReceiveProps()
    tree.getMountedInstance().componentWillReceiveProps({
      profileIsLoading: false,
      isLoggedIn: true,
      savedForms: [],
      prefillsAvailable: [formConfig.formId],
      formConfig,
      router,
      routes,
      fetchInProgressForm
    });

    expect(fetchInProgressForm.calledWith(formConfig.formId, formConfig.migrations, true))
      .to.be.true;
    __BUILDTYPE__ = buildType;
  });
});

