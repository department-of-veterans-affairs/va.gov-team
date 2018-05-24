import React from 'react';
import TextWidget from './TextWidget';

/*
 * Handles removing dashes from SSNs by keeping the user input in local state
 * and saving the transformed version instead
 */
export default class PhoneNumberWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: props.value };
  }
  handleChange = (val) => {
    let stripped;
    if (val) {
      stripped = val.replace(/[ \-()x+]/g, '');
    }

    this.setState({ val }, () => {
      this.props.onChange(stripped);
    });
  }
  render() {
    return <TextWidget {...this.props} value={this.state.val} onChange={this.handleChange}/>;
  }
}
