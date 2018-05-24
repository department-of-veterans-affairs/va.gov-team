import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import MessageSubjectGroup from '../../../components/compose/MessageSubjectGroup';

const props = {
  categories: ['recipient1'],
  category: {},
  charMax: 100,
  cssErrorClass: 'errorClass',
  subject: {}
};

describe('<MessageSubjectGroup>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(<MessageSubjectGroup {...props}/>);

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should have the expected classname if no error', () => {
    const tree = SkinDeep.shallowRender(<MessageSubjectGroup {...props}/>);

    expect(tree.props.className).to.equal(`${props.cssErrorClass} msg-subject-group`);
  });

  it('should have the expected classname if there is an error', () => {
    const tree = SkinDeep.shallowRender(<MessageSubjectGroup {...props} errorMessage="errorMessage"/>);

    expect(tree.props.className).to.equal(`${props.cssErrorClass} msg-subject-group usa-input-error msg-compose-error`);
  });


  it('should render the expected child elements', () => {
    const tree = SkinDeep.shallowRender(<MessageSubjectGroup {...props}/>);

    expect(tree.subTree('MessageCategory')).to.be.ok;
    expect(tree.subTree('MessageSubject')).to.be.ok;
  });

  it('should pass props to child select element', () => {
    const tree = SkinDeep.shallowRender(<MessageSubjectGroup {...props}/>);

    expect(tree.subTree('MessageCategory').props.categories).to.equal(props.categories);
    expect(tree.subTree('MessageSubject').props.charMax).to.equal(props.charMax);
  });
});
