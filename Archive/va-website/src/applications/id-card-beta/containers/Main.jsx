import React from 'react';
import { connect } from 'react-redux';
import { registerBeta } from '../actions';

class Main extends React.Component {

  componentDidMount() {
    this.props.registerBeta();
  }

  render() {
    let message;

    if (this.props.isLoading === true) {
      message = 'Activating beta features...';
    }
    if (this.props.status === 'failed') {
      message = 'Activation failed, please contact beta product manager.';
    } else {
      message = 'Beta features activated for user '.concat(this.props.username).concat('. Thank you.');
    }

    const view = (
      <div className="row">
        <div className="usa-width-two-thirds medium-8 small-12 columns">
          <h1>Veteran ID Card Beta Registration</h1>
          <div>
            <p>{message}</p>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        {view}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const idState = state.idbeta;
  const userState = state.user;
  return {
    profile: userState.profile,
    loginUrl: userState.login.loginUrl,
    verifyUrl: userState.login.verifyUrl,
    username: idState.beta.username,
    status: idState.beta.status,
    isLoading: idState.beta.loading,
  };
};

const mapDispatchToProps = {
  registerBeta,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
export { Main };
