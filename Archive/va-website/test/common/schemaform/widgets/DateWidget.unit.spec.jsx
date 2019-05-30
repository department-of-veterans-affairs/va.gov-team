import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';
import sinon from 'sinon';

import DateWidget from '../../../../src/applications/common/schemaform/widgets/DateWidget';

describe('Schemaform: DateWidget', () => {
  it('should render', () => {
    const onChange = sinon.spy();
    const onBlur = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <DateWidget
        id="test"
        onChange={onChange}
        onBlur={onBlur}/>
    );

    expect(tree.everySubTree('select').length).to.equal(2);
    expect(tree.everySubTree('input').length).to.equal(1);
  });
  it('should render initial date', () => {
    const onChange = sinon.spy();
    const onBlur = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <DateWidget
        id="test"
        value="2010-01-03"
        onChange={onChange}
        onBlur={onBlur}/>
    );

    expect(tree.everySubTree('select')[0].props.value).to.equal('1');
    expect(tree.everySubTree('select')[1].props.value).to.equal('3');
    expect(tree.everySubTree('input')[0].props.value).to.equal('2010');
  });
  it('should call onChange', () => {
    const onChange = sinon.spy();
    const onBlur = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <DateWidget
        id="test"
        onChange={onChange}
        onBlur={onBlur}/>
    );

    const instance = tree.getMountedInstance();
    instance.handleChange('year', '2001');

    expect(onChange.called).to.be.true;
  });
  it('should call onChange only when all fields filled out if required', () => {
    const onChange = sinon.spy();
    const onBlur = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <DateWidget
        id="test"
        required
        onChange={onChange}
        onBlur={onBlur}/>
    );

    const instance = tree.getMountedInstance();
    instance.handleChange('year', '2001');
    instance.handleChange('month', '1');
    instance.handleChange('day', '2');

    expect(onChange.firstCall.args[0]).to.be.undefined;
    expect(onChange.secondCall.args[0]).to.be.undefined;
    expect(onChange.thirdCall.args[0]).not.to.be.undefined;
  });
  it('should call onBlur', () => {
    const onChange = sinon.spy();
    const onBlur = sinon.spy();
    const tree = SkinDeep.shallowRender(
      <DateWidget
        id="test"
        onChange={onChange}
        onBlur={onBlur}/>
    );

    const instance = tree.getMountedInstance();
    instance.handleBlur('year');
    instance.handleBlur('month');
    instance.handleBlur('day');

    expect(onBlur.calledOnce).to.be.true;
  });
  describe('Month/Year', () => {
    it('should render', () => {
      const onChange = sinon.spy();
      const onBlur = sinon.spy();
      const tree = SkinDeep.shallowRender(
        <DateWidget
          options={{ monthYear: true }}
          id="test"
          onChange={onChange}
          onBlur={onBlur}/>
      );

      expect(tree.everySubTree('select').length).to.equal(1);
      expect(tree.everySubTree('input').length).to.equal(1);
    });
    it('should render initial date', () => {
      const onChange = sinon.spy();
      const onBlur = sinon.spy();
      const tree = SkinDeep.shallowRender(
        <DateWidget
          options={{ monthYear: true }}
          id="test"
          value="2010-01-XX"
          onChange={onChange}
          onBlur={onBlur}/>
      );

      expect(tree.everySubTree('select')[0].props.value).to.equal('1');
      expect(tree.everySubTree('input')[0].props.value).to.equal('2010');
    });
    it('should call onChange', () => {
      const onChange = sinon.spy();
      const onBlur = sinon.spy();
      const tree = SkinDeep.shallowRender(
        <DateWidget
          options={{ monthYear: true }}
          id="test"
          onChange={onChange}
          onBlur={onBlur}/>
      );

      const instance = tree.getMountedInstance();
      instance.handleChange('year', '2001');

      expect(onChange.called).to.be.true;
    });
    it('should call onChange only when all fields filled out if required', () => {
      const onChange = sinon.spy();
      const onBlur = sinon.spy();
      const tree = SkinDeep.shallowRender(
        <DateWidget
          options={{ monthYear: true }}
          id="test"
          required
          onChange={onChange}
          onBlur={onBlur}/>
      );

      const instance = tree.getMountedInstance();
      instance.handleChange('year', '2001');
      instance.handleChange('month', '1');

      expect(onChange.firstCall.args[0]).to.be.undefined;
      expect(onChange.secondCall.args[0]).not.to.be.undefined;
    });
    it('should call onBlur', () => {
      const onChange = sinon.spy();
      const onBlur = sinon.spy();
      const tree = SkinDeep.shallowRender(
        <DateWidget
          options={{ monthYear: true }}
          id="test"
          onChange={onChange}
          onBlur={onBlur}/>
      );

      const instance = tree.getMountedInstance();
      instance.handleBlur('year');
      instance.handleBlur('month');

      expect(onBlur.calledOnce).to.be.true;
    });
  });
});
