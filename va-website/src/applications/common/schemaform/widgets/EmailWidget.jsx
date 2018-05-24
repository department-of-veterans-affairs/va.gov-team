import React from 'react';
import TextWidget from './TextWidget';

export default function EmailWidget(props) {
  return <TextWidget type="email" {...props}/>;
}
