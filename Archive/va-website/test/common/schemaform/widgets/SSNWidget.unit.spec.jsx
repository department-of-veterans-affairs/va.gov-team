import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';
import sinon from 'sinon';

import SSNWidget from '../../../../src/applications/common/schemaform/widgets/SSNWidget';

describe('Schemaform <SSNWidget>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(
      <SSNWidget
        value="12345678"/>
    );
    expect(tree.subTree('TextWidget').props.value).to.equal('12345678');
  });
  it('should remove dashes on change', () => {
    const onChange = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <SSNWidget
        value=""
        onChange={onChange}/>
    );
    tree.subTree('TextWidget').props.onChange('123-45-5677');
    expect(onChange.calledWith('123455677')).to.be.true;
  });
  it('should call onChange with undefined if the value is blank', () => {
    const onChange = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <SSNWidget
        value="123121234"
        onChange={onChange}/>
    );
    tree.subTree('TextWidget').props.onChange('');
    expect(onChange.calledWith(undefined)).to.be.true;
  });
});
