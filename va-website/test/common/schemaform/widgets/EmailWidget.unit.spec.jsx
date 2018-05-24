import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import EmailWidget from '../../../../src/applications/common/schemaform/widgets/EmailWidget';

describe('Schemaform <EmailWidget>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(
      <EmailWidget/>
    );
    expect(tree.subTree('TextWidget').props.type).to.equal('email');
  });
});
