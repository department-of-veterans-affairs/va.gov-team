import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { axeCheck } from '../../../../../lib/testing/helpers';

import ErrorableMonthYear from './ErrorableMonthYear';
import { makeField } from '../../../../helpers/fields.js';

describe('<ErrorableMonthYear>', () => {
  it('renders input elements', () => {
    const date = {
      month: makeField(12),
      year: makeField(2010)
    };
    const tree = shallow(
      <ErrorableMonthYear date={date} onValueChange={(_update) => {}}/>);
    expect(tree.find('ErrorableNumberInput')).to.have.lengthOf(1);
    expect(tree.find('ErrorableSelect')).to.have.lengthOf(1);
  });
  it('displays required message', () => {
    const date = {
      month: makeField(''),
      year: makeField('')
    };
    date.year.dirty = true;
    date.month.dirty = true;

    const tree = shallow(
      <ErrorableMonthYear required date={date} onValueChange={(_update) => {}}/>);

    expect(tree.find('.usa-input-error').length).to.equal(1);
    expect(tree.find('.usa-input-error-message').first().text()).to.equal('Error Please provide a response');
  });
  it('displays invalid message', () => {
    const date = {
      month: makeField(''),
      year: makeField('1890')
    };
    date.year.dirty = true;
    date.month.dirty = true;

    const tree = shallow(
      <ErrorableMonthYear date={date} onValueChange={(_update) => {}}/>);

    expect(tree.find('.usa-input-error').length).to.equal(1);
    expect(tree.find('.usa-input-error-message').first().text()).to.equal('Error Please provide a valid month and/or year');
  });
  it('does not show invalid message for partial date', () => {
    const date = {
      month: makeField('12'),
      year: makeField('')
    };
    date.year.dirty = true;
    date.month.dirty = true;

    const tree = shallow(
      <ErrorableMonthYear date={date} onValueChange={(_update) => {}}/>);

    expect(tree.find('.usa-input-error').length).to.equal(0);
  });

  it('displays custom message', () => {
    const date = {
      month: makeField(''),
      year: makeField('2010')
    };
    date.year.dirty = true;
    date.month.dirty = true;

    const tree = shallow(
      <ErrorableMonthYear date={date} validation={{ valid: false, message: 'Test' }} onValueChange={(_update) => {}}/>);

    expect(tree.find('.usa-input-error').length).to.equal(1);
    expect(tree.find('.usa-input-error-message').first().text()).to.equal('Error Test');
  });
  it('displays custom message from array', () => {
    const date = {
      month: makeField(''),
      year: makeField('2010')
    };
    date.year.dirty = true;
    date.month.dirty = true;

    const tree = shallow(
      <ErrorableMonthYear
        date={date}
        validation={[
          { valid: true, message: 'NotShownMessage' },
          { valid: false, message: 'Test' }
        ]}
        onValueChange={(_update) => {}}/>
    );

    expect(tree.find('.usa-input-error').length).to.equal(1);
    expect(tree.find('.usa-input-error-message').text()).to.equal('Error Test');
  });
  it('should pass aXe check', () => {
    const date = {
      month: makeField(12),
      year: makeField(2010)
    };
    return axeCheck(
      <ErrorableMonthYear date={date} onValueChange={(_update) => {}}/>
    );
  });
  it('should pass aXe check with error displayed', () => {
    const date = {
      month: makeField('12'),
      year: makeField('')
    };
    date.year.dirty = true;
    date.month.dirty = true;
    return axeCheck(
      <ErrorableMonthYear date={date} onValueChange={(_update) => {}}/>
    );
  });
});

