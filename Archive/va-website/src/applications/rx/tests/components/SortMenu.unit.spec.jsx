import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import sinon from 'sinon';

import SortMenu from '../../components/SortMenu';

const props = {
  onChange: () => {},
  onClick: () => {},
  options: [
    {
      label: 'Prescription name',
      value: 'prescriptionName'
    },
    {
      label: 'Facility name',
      value: 'facilityName'
    },
    {
      label: 'Last submit date',
      value: 'lastSubmitDate'
    },
    {
      label: 'Last fill date',
      value: 'refillDate'
    }
  ],
  selected: {
    order: 'ASC',
    value: 'prescriptionName'
  }
};

describe('<SortMenu>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<SortMenu {...props}/>);
    expect(tree.getRenderOutput()).to.exist;
  });

  it('should render the correct options', () => {
    const tree = SkinDeep.shallowRender(<SortMenu {...props}/>).dive(['select']);
    const options = tree.everySubTree('option');
    expect(options).to.have.length(props.options.length);
    options.forEach((option, index) => {
      const { label, value } = props.options[index];
      expect(option.text()).to.equal(label);
      expect(option.props.value).to.equal(value);
    });
  });

  it('should render the sort links for string-based sorts', () => {
    const tree = SkinDeep.shallowRender(<SortMenu {...props}/>).dive(['ul']);
    const links = tree.everySubTree('li');
    expect(links).to.have.length(2);
    expect(links[0].text()).to.equal('A-Z');
    expect(links[1].text()).to.equal('Z-A');
  });

  it('should render the sort links for date-based sorts', () => {
    const tree = SkinDeep.shallowRender(
      <SortMenu
        {...props}
        selected={{
          order: 'ASC',
          value: 'refillDate'
        }}/>
    ).dive(['ul']);
    const links = tree.everySubTree('li');
    expect(links).to.have.length(2);
    expect(links[0].text()).to.equal('Newest to Oldest');
    expect(links[1].text()).to.equal('Oldest to Newest');
  });

  it('should set the string-based ascending order link to active', () => {
    const tree = SkinDeep.shallowRender(<SortMenu {...props}/>);
    const activeLink = tree.subTree('.rx-sort-active');
    expect(activeLink).to.be.ok;
    expect(activeLink.text()).to.equal('A-Z');
  });

  it('should set the string-based descending order link to active', () => {
    const tree = SkinDeep.shallowRender(
      <SortMenu
        {...props}
        selected={{
          order: 'DESC',
          value: 'prescriptionName'
        }}/>
    );
    const activeLink = tree.subTree('.rx-sort-active');
    expect(activeLink).to.be.ok;
    expect(activeLink.text()).to.equal('Z-A');
  });

  it('should set the date-based ascending order link to active', () => {
    const tree = SkinDeep.shallowRender(
      <SortMenu
        {...props}
        selected={{
          order: 'ASC',
          value: 'lastSubmitDate'
        }}/>
    );
    const activeLink = tree.subTree('.rx-sort-active');
    expect(activeLink).to.be.ok;
    expect(activeLink.text()).to.equal('Oldest to Newest');
  });

  it('should set the date-based descending order link to active', () => {
    const tree = SkinDeep.shallowRender(
      <SortMenu
        {...props}
        selected={{
          order: 'DESC',
          value: 'lastSubmitDate'
        }}/>
    );
    const activeLink = tree.subTree('.rx-sort-active');
    expect(activeLink).to.be.ok;
    expect(activeLink.text()).to.equal('Newest to Oldest');
  });

  it('should trigger handleChange correctly', () => {
    const onChange = sinon.spy();

    const sortMenu = ReactTestUtils.renderIntoDocument(
      <SortMenu
        {...props}
        selected={{
          order: 'DESC',
          value: 'lastSubmitDate'
        }}
        onChange={onChange}/>
    );

    sortMenu.handleChange({ target: { value: 'refillSubmitDate' } });
    expect(onChange.calledWith('refillSubmitDate', 'DESC')).to.be.true;
  });

  it('should trigger handleClick correctly', () => {
    const onClick = sinon.spy();

    const sortMenu = ReactTestUtils.renderIntoDocument(
      <SortMenu
        {...props}
        selected={{
          order: 'DESC',
          value: 'lastSubmitDate'
        }}
        onClick={onClick}/>
    );

    sortMenu.handleClick('lastSubmitDate', 'DESC')({ preventDefault: () => {} });
    expect(onClick.calledWith('lastSubmitDate', 'DESC')).to.be.true;
  });
});
