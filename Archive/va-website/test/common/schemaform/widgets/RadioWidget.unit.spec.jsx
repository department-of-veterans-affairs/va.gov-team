import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';
import sinon from 'sinon';

import RadioWidget from '../../../../src/applications/common/schemaform/widgets/RadioWidget';

describe('Schemaform <RadioWidget>', () => {
  it('should render', () => {
    const onChange = sinon.spy();
    const enumOptions = [
      {
        label: 'Testing',
        value: '1'
      },
      {
        label: 'Testing2',
        value: '2'
      }
    ];
    const tree = SkinDeep.shallowRender(
      <RadioWidget
        value
        onChange={onChange}
        options={{ enumOptions }}/>
    );
    expect(tree.everySubTree('input').length).to.equal(2);
    expect(tree.everySubTree('label')[0].text()).to.equal('Testing');
    expect(tree.everySubTree('label')[1].text()).to.equal('Testing2');
  });
  it('should render label from options', () => {
    const onChange = sinon.spy();
    const enumOptions = [
      {
        label: 'Testing',
        value: '1'
      },
      {
        label: 'Testing2',
        value: '2'
      }
    ];
    const labels = {
      1: 'Other'
    };
    const tree = SkinDeep.shallowRender(
      <RadioWidget
        value
        onChange={onChange}
        options={{ enumOptions, labels }}/>
    );
    expect(tree.everySubTree('label')[0].text()).to.equal('Other');
    expect(tree.everySubTree('label')[1].text()).to.equal('Testing2');
  });
  it('should handle change', () => {
    const onChange = sinon.spy();
    const enumOptions = [
      {
        label: 'Testing',
        value: '1'
      },
      {
        label: 'Testing2',
        value: '2'
      }
    ];
    const tree = SkinDeep.shallowRender(
      <RadioWidget
        value
        onChange={onChange}
        options={{ enumOptions }}/>
    );
    tree.everySubTree('input')[0].props.onChange();
    expect(onChange.calledWith('1')).to.be.true;
  });
  it('should render nested content', () => {
    const onChange = sinon.spy();
    const enumOptions = [
      {
        label: 'Testing',
        value: '1'
      },
      {
        label: 'Testing2',
        value: '2'
      }
    ];
    const nestedContent = {
      1: <span>Nested</span>
    };
    const tree = SkinDeep.shallowRender(
      <RadioWidget
        value="1"
        onChange={onChange}
        options={{ enumOptions, nestedContent }}/>
    );

    expect(tree.subTree('.schemaform-radio-indent').text()).to.equal('Nested');
  });
  it('should not render nested content if not selected', () => {
    const onChange = sinon.spy();
    const enumOptions = [
      {
        label: 'Testing',
        value: '1'
      },
      {
        label: 'Testing2',
        value: '2'
      }
    ];
    const nestedContent = {
      1: <span>Nested</span>
    };
    const tree = SkinDeep.shallowRender(
      <RadioWidget
        value="2"
        onChange={onChange}
        options={{ enumOptions, nestedContent }}/>
    );

    expect(tree.text()).not.to.contain('Nested');
  });
});
