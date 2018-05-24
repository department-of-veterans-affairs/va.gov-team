import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';
import sinon from 'sinon';

import SelectWidget from '../../../../src/applications/common/schemaform/widgets/SelectWidget';

describe('Schemaform <SelectWidget>', () => {
  it('should render', () => {
    const enumOptions = [
      {
        label: 'Testing',
        val: 'test'
      }
    ];
    const onChange = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <SelectWidget
        schema={{}}
        id="testing"
        onChange={onChange}
        options={{ enumOptions }}/>
    );

    expect(tree.everySubTree('option').length).to.equal(2);
  });
  it('should render label from options', () => {
    const enumOptions = [
      {
        label: 'Testing',
        value: 'test'
      }
    ];
    const labels = {
      test: 'Other'
    };
    const onChange = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <SelectWidget
        schema={{}}
        id="testing"
        onChange={onChange}
        options={{ enumOptions, labels }}/>
    );

    expect(tree.everySubTree('option')[1].text()).to.equal('Other');
  });
  it('should handle change', () => {
    const enumOptions = [
      {
        label: 'Testing',
        val: 'test'
      }
    ];
    const onChange = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <SelectWidget
        schema={{}}
        id="testing"
        onChange={onChange}
        options={{ enumOptions }}/>
    );

    tree.subTree('select').props.onChange({
      target: {
        value: ''
      }
    });
    expect(onChange.firstCall.args[0]).to.be.undefined;
    tree.subTree('select').props.onChange({
      target: {
        value: 'test'
      }
    });
    expect(onChange.secondCall.args[0]).to.equal('test');
  });
  it('should handle number change', () => {
    const enumOptions = [
      {
        label: 'Testing',
        val: 2
      }
    ];
    const onChange = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <SelectWidget
        schema={{ type: 'number' }}
        id="testing"
        onChange={onChange}
        options={{ enumOptions }}/>
    );

    tree.subTree('select').props.onChange({
      target: {
        value: '2'
      }
    });
    expect(onChange.calledWith(2)).to.be.true;
  });
  it('should handle boolean change', () => {
    const enumOptions = [
      {
        label: 'Testing',
        val: 2
      }
    ];
    const onChange = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <SelectWidget
        schema={{ type: 'boolean' }}
        id="testing"
        onChange={onChange}
        options={{ enumOptions }}/>
    );

    tree.subTree('select').props.onChange({
      target: {
        value: 'true'
      }
    });
    expect(onChange.calledWith(true)).to.be.true;
  });
  it('should handle blur', () => {
    const enumOptions = [
      {
        label: 'Testing',
        val: 'test'
      }
    ];
    const onBlur = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <SelectWidget
        schema={{}}
        id="testing"
        onBlur={onBlur}
        options={{ enumOptions }}/>
    );

    tree.subTree('select').props.onBlur({
      target: {
        value: 'test'
      }
    });
    expect(onBlur.calledWith('testing', 'test')).to.be.true;
  });
  it('should not render blank option when default exists', () => {
    const enumOptions = [
      {
        label: 'Testing',
        val: 'test'
      }
    ];
    const onChange = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <SelectWidget
        schema={{
          'default': 'test'
        }}
        id="testing"
        onChange={onChange}
        options={{ enumOptions }}/>
    );

    expect(tree.everySubTree('option').length).to.equal(1);
  });
});
