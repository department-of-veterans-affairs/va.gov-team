import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';
import sinon from 'sinon';

import TextWidget from '../../../../src/applications/common/schemaform/widgets/TextWidget';

describe('Schemaform <TextWidget>', () => {
  it('should render', () => {
    const onChange = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <TextWidget
        id="1"
        value="testing"
        schema={{ type: 'string' }}
        required
        disabled={false}
        onChange={onChange}
        options={{}}/>
    );
    expect(tree.subTree('input').props.value).to.equal('testing');
    expect(tree.subTree('input').props.type).to.equal('text');
  });
  it('should render empty string when undefined', () => {
    const onChange = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <TextWidget
        id="1"
        schema={{ type: 'string' }}
        required
        disabled={false}
        onChange={onChange}
        options={{}}/>
    );
    expect(tree.subTree('input').props.value).to.equal('');
  });
  it('should render number', () => {
    const onChange = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <TextWidget
        id="1"
        value="1"
        schema={{ type: 'number' }}
        required
        disabled={false}
        onChange={onChange}
        options={{}}/>
    );
    expect(tree.subTree('input').props.type).to.equal('number');
  });
  it('should handle change', () => {
    const onChange = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <TextWidget
        id="1"
        value="testing"
        schema={{ type: 'string' }}
        required
        disabled={false}
        onChange={onChange}
        options={{}}/>
    );
    tree.subTree('input').props.onChange({
      target: {
        value: 'nextvalue'
      }
    });
    expect(onChange.calledWith('nextvalue')).to.be.true;
  });
  it('should handle blur', () => {
    const onChange = sinon.spy();
    const onBlur = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <TextWidget
        id="1"
        value="testing"
        schema={{ type: 'string' }}
        required
        disabled={false}
        onChange={onChange}
        onBlur={onBlur}
        options={{}}/>
    );
    tree.subTree('input').props.onBlur();
    expect(onBlur.calledWith('1')).to.be.true;
  });
});
