import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import _ from 'lodash';
import sinon from 'sinon';
import RequiredLoginView from '../../../authorization/components/RequiredLoginView.jsx';

describe('<RequiredLoginView>', () => {
  const redirectFunc = sinon.spy();
  let oldWindow;

  const initialSetup = () => {
    oldWindow = global.window;
    global.sessionStorage = { userToken: 'abcdefg' };

    global.window = {
      pathname: '',
      location: {
        replace: redirectFunc,
      },
    };
  };
  const teardown = () => {
    global.window = oldWindow;
  };

  beforeEach(initialSetup);
  afterEach(teardown);

  const anonymousUser = {
    login: {
      currentlyLoggedIn: false
    },
    profile: {
      accountType: null,
      dob: null,
      email: null,
      gender: null,
      userFullName: {
        first: null,
        last: null,
        middle: null,
        suffix: null
      }
    },
    verified: false
  };

  const loa1User = {
    login: {
      currentlyLoggedIn: true
    },
    profile: {
      accountType: 1,
      dob: null,
      email: 'fake@aol.com',
      gender: null,
      services: ['user-profile'],
      userFullName: {
        first: null,
        last: null,
        middle: null,
        suffix: null
      },
      verified: false
    }
  };

  const loa3User = {
    login: {
      currentlyLoggedIn: true
    },
    profile: {
      accountType: 3,
      dob: '1984-07-17',
      email: 'fake@aol.com',
      gender: 'M',
      // TODO: use services that actually require LOA3 for clarity?
      services: ['facilities', 'hca', 'user-profile', 'edu-benefits'],
      status: 'OK',
      userFullName: {
        first: 'WILLIAM',
        last: 'RYAN',
        middle: 'PETER',
        suffix: null
      },
      verified: true
    }
  };

  const defaultProps = {
    verify: true,
    serviceRequired: 'hca',
    user: loa1User,
    loginUrl: 'http://fake-login-url',
    verifyUrl: 'http://fake-verify-url'
  };

  class TestChildComponent extends React.Component {
    render() {
      return (<div>Child Component {this.props.name}</div>);
    }
  }

  function setup(props = {}) {
    const mergedProps = _.merge({}, defaultProps, props);
    const tree = SkinDeep.shallowRender(
      <RequiredLoginView {...mergedProps}>
        <div>Test Child</div>
      </RequiredLoginView>
    );

    const vdom = tree.getRenderOutput();

    return { tree, mergedProps, vdom };
  }

  it('should render', () => {
    const { vdom } = setup();
    expect(vdom).to.not.be.undefined;
  });

  it('should render a loading graphic while loading', () => {
    const { tree } = setup({
      user: { profile: { loading: true } }
    });
    const loadingIndicatorElement = tree.dive(['LoadingIndicator']);
    expect(loadingIndicatorElement.text()).to.contain('Loading your information');
  });

  it('should display children when service is available', () => {
    const loa3Props = _.merge({}, defaultProps, { user: loa3User });
    const tree = SkinDeep.shallowRender(
      <RequiredLoginView {...loa3Props}>
        <TestChildComponent name="one"/>
        <TestChildComponent name="two"/>
        <TestChildComponent name="three"/>
      </RequiredLoginView>
    );

    // Child components should not be passed an isDataAvailable prop
    tree.props.children.forEach((child) => {
      expect(child.props.isDataAvailable).to.be.undefined;
    });
  });

  it('should display children and pass prop when service is not available', () => {
    const props = _.merge({}, defaultProps, { user: loa3User, serviceRequired: 'messaging' });
    const tree = SkinDeep.shallowRender(
      <RequiredLoginView {...props}>
        <TestChildComponent name="one"/>
        <TestChildComponent name="two"/>
        <TestChildComponent name="three"/>
      </RequiredLoginView>
    );

    // Each direct child component should be passed a false isDataAvailable prop
    tree.props.children.forEach((child) => {
      expect(child.props.isDataAvailable).to.equal(false);
    });
  });

  describe('logged in at LOA 1', () => {
    describe('needs verification', () => {
      it('should prompt for verification', () => {
        const { tree } = setup({ user: loa1User });
        tree.getMountedInstance().componentDidUpdate();
        expect(redirectFunc.calledWith(sinon.match('/verify'))).to.be.true;
      });
    });

    describe('does not need verification', () => {
      it('should display children elements', () => {
        const { tree } = setup({ verify: false, serviceRequired: 'user-profile' });
        expect(tree.subTree('div').subTree('div').text()).to.equal('Test Child');
      });
    });
  });

  describe('logged in at LOA 3', () => {
    it('should display children elements', () => {
      const { tree } = setup({ user: loa3User });
      expect(tree.subTree('div').subTree('div').text()).to.equal('Test Child');
    });

    describe('user profile with SERVER_ERROR', () => {
      it('should display server error message', () => {
        const serverErrorProfile = _.merge({}, loa3User, { profile: { status: 'SERVER_ERROR' } });
        const { tree } = setup({ user: serverErrorProfile });
        expect(tree.toString()).to.contain('Sorry, our system is temporarily down while we fix a few things');
      });
    });

    describe('user profile NOT_FOUND', () => {
      it('should display not found message', () => {
        const notFoundProfile = _.merge({}, loa3User, { profile: { status: 'NOT_FOUND' } });
        const { tree } = setup({ user: notFoundProfile });
        expect(tree.subTree('SystemDownView').props.messageLine1).to.equal('We couldn’t find your records with that information.');
      });
    });
  });

  describe('not logged in', () => {
    it('should prompt for login', () => {
      const { tree } = setup({ user: anonymousUser });
      tree.getMountedInstance().componentDidUpdate();
      expect(redirectFunc.calledWith(sinon.match('/'))).to.be.true;
    });
  });
});
