import React from 'react';
import TextWidget from './TextWidget';

/*
 * Handles removing dashes from SSNs by keeping the user input in local state
 * and saving the transformed version instead
 */
export default class SSNWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: props.value };
  }
  handleChange = (val) => {
    // If val is blank or undefined, pass undefined to onChange
    let strippedSSN;
    if (val) {
      strippedSSN = val.replace(/[- ]/g, '');
    }

    this.setState({ val }, () => {
      this.props.onChange(strippedSSN);
    });
  }
  render() {
    return <TextWidget {...this.props} value={this.state.val} onChange={this.handleChange}/>;
  }
}
