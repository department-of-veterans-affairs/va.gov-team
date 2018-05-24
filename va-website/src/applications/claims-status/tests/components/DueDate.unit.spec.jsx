import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import moment from 'moment';

import DueDate from '../../components/DueDate';

describe('<DueDate>', () => {
  it('should render past due class', () => {
    const date = moment().subtract(1, 'day').format('YYYY-MM-DD');
    const tree = SkinDeep.shallowRender(
      <DueDate
        date={date}/>
    );

    expect(tree.everySubTree('.past-due')).not.to.be.empty;
  });
  it('should render past due class when less than day difference', () => {
    const date = moment().subtract(1, 'hour').format('YYYY-MM-DD');
    const tree = SkinDeep.shallowRender(
      <DueDate
        date={date}/>
    );

    expect(tree.everySubTree('.past-due')).not.to.be.empty;
  });
  it('should render file due class', () => {
    const date = moment().add(1, 'day').format('YYYY-MM-DD');
    const tree = SkinDeep.shallowRender(
      <DueDate
        date={date}/>
    );

    expect(tree.everySubTree('.due-file')).not.to.be.empty;
  });
});
