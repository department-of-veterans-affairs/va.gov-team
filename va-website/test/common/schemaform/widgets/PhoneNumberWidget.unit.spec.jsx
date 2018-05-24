import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';
import sinon from 'sinon';

import PhoneNumberWidget from '../../../../src/applications/common/schemaform/widgets/PhoneNumberWidget';

describe('Schemaform <PhoneNumberWidget>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(
      <PhoneNumberWidget
        value="1234567890"/>
    );
    expect(tree.subTree('TextWidget').props.value).to.equal('1234567890');
  });
  it('should strip spaces, (, ), -, +, and x on change', () => {
    const onChange = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <PhoneNumberWidget
        value=""
        onChange={onChange}/>
    );
    tree.subTree('TextWidget').props.onChange('+(154) 945-56x77');
    expect(onChange.calledWith('1549455677')).to.be.true;
  });
  it('should call onChange with undefined if value is blank', () => {
    const onChange = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <PhoneNumberWidget
        value="1231231234"
        onChange={onChange}/>
    );
    tree.subTree('TextWidget').props.onChange('');
    expect(onChange.calledWith(undefined)).to.be.true;
  });
});
