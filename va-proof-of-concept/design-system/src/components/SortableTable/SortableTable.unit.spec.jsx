import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { axeCheck } from '../../../lib/testing/helpers';
import SortableTable from './SortableTable.jsx';

/* Roll your own! */

const fields = [{ label: 'Label 1', value: '1' }, { label: 'Label 2', value: '2' }, { label: 'Label 3', value: '3' }];
const data = [{ id: 1, rowClass: 'class' }, { id: 2, rowClass: 'class' }, { id: 3, rowClass: 'class' }];
const currentSort = { value: 'String', order: 'ASC' };

describe('<SortableTable>', () => {
  it('should render', () => {
    const tree = shallow(<SortableTable fields={fields} data={data} currentSort={currentSort}/>);
    expect(tree.find('a').first().text()).to.contain('Label 1');
  });

  it('should pass aXe check', () => {
    return axeCheck(<SortableTable fields={fields} data={data} currentSort={currentSort}/>);
  });

});
