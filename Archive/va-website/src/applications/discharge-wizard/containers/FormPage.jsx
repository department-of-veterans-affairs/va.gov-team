import { connect } from 'react-redux';
import React from 'react';

import { updateField } from '../actions';
import FormQuestions from '../components/FormQuestions';

class FormPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    if (!sessionStorage.getItem('dw-session-started')) {
      this.props.router.push('/');
    }
  }

  render() {
    return (
      <div>
        <h1>How to Apply for a Discharge Upgrade</h1>
        <div className="medium-8">
          <FormQuestions formValues={this.props.formValues} updateField={this.props.updateField}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    formValues: state.dischargeWizard.form,
  };
};
const mapDispatchToProps = {
  updateField,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormPage);
