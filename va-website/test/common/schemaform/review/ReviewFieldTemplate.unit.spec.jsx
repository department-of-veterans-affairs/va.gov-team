import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import ReviewFieldTemplate from '../../../../src/applications/common/schemaform/review/ReviewFieldTemplate';

describe('Schemaform ReviewFieldTemplate', () => {
  it('should render review row', () => {
    const tree = SkinDeep.shallowRender(
      <ReviewFieldTemplate
        schema={{ type: 'string' }}
        uiSchema={{ 'ui:title': 'Label' }}/>
    );

    expect(tree.everySubTree('.review-row')).to.not.be.empty;
    expect(tree.subTree('dt').text()).to.equal('Label');
    expect(tree.everySubTree('dd')).to.not.be.empty;
  });
  it('should render description', () => {
    const uiSchema = {
      'ui:title': 'Label',
      'ui:description': 'Blah'
    };
    const tree = SkinDeep.shallowRender(
      <ReviewFieldTemplate
        schema={{ type: 'string' }}
        uiSchema={uiSchema}/>
    );

    expect(tree.subTree('dt').text()).to.contain('Label');
    expect(tree.subTree('p').text()).to.equal('Blah');
  });
  it('should render element description', () => {
    const uiSchema = {
      'ui:title': 'Label',
      'ui:description': <div>Blah</div>
    };
    const tree = SkinDeep.shallowRender(
      <ReviewFieldTemplate
        schema={{ type: 'string' }}
        uiSchema={uiSchema}/>
    );

    expect(tree.subTree('dt').text()).to.contain('Label');
    expect(tree.text()).to.contain('Blah');
  });
  it('should render description component', () => {
    const uiSchema = {
      'ui:title': 'Label',
      'ui:description': () => <span>Blah</span>
    };
    const tree = SkinDeep.shallowRender(
      <ReviewFieldTemplate
        schema={{ type: 'string' }}
        uiSchema={uiSchema}/>
    );

    expect(tree.subTree('dt').text()).to.contain('Label');
    expect(tree.subTree('dt').text()).to.contain('uiDescription');
  });
  it('should render just children for object type', () => {
    const tree = SkinDeep.shallowRender(
      <ReviewFieldTemplate
        schema={{ type: 'object' }}
        uiSchema={{ 'ui:title': 'Label' }}>
        <div className="test-child"/>
      </ReviewFieldTemplate>
    );

    expect(tree.everySubTree('.review-row')).to.be.empty;
    expect(tree.everySubTree('.test-child')).to.not.be.empty;
  });
});

