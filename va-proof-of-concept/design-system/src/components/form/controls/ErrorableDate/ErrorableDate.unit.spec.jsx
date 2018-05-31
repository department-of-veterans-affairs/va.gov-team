import React from 'react';
// import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { axeCheck } from '../../../../../lib/testing/helpers';
import ErrorableDate from './ErrorableDate';
import { makeField } from '../../../../helpers/fields.js';

describe('<ErrorableDate>', () => {
  it('renders input elements', () => {
    const date = {
      day: makeField(1),
      month: makeField(12),
      year: makeField(2010)
    };
    const tree = shallow(
      <ErrorableDate date={date} onValueChange={(_update) => {}}/>);
    expect(tree.find('ErrorableNumberInput')).to.have.lengthOf(1);
    expect(tree.find('ErrorableSelect')).to.have.lengthOf(2);
  });
  it('displays required message', () => {
    const date = {
      day: makeField(''),
      month: makeField(''),
      year: makeField('')
    };
    date.year.dirty = true;
    date.month.dirty = true;
    date.day.dirty = true;

    const tree = shallow(
      <ErrorableDate required date={date} onValueChange={(_update) => {}}/>);

    expect(tree.find('.usa-input-error')).not.to.be.empty;
    expect(tree.find('.usa-input-error-message').text()).to.equal('Error Please provide a response');
  });
  it('displays invalid message', () => {
    const date = {
      day: makeField(''),
      month: makeField(''),
      year: makeField('1890')
    };
    date.year.dirty = true;
    date.month.dirty = true;
    date.day.dirty = true;

    const tree = shallow(
      <ErrorableDate date={date} onValueChange={(_update) => {}}/>);

    expect(tree.find('.usa-input-error')).not.to.be.empty;
    expect(tree.find('.usa-input-error-message').text()).to.equal('Error Please provide a valid date');
  });

  it('does not show invalid message for month year date', () => {
    const date = {
      day: makeField(''),
      month: makeField('12'),
      year: makeField('2003')
    };
    date.year.dirty = true;
    date.month.dirty = true;
    date.day.dirty = true;

    const tree = shallow(
      <ErrorableDate date={date} onValueChange={(_update) => {}}/>);
    expect(tree.find('.usa-input-error')).to.have.length(0);
  });

  it('displays custom message', () => {
    const date = {
      day: makeField('3'),
      month: makeField(''),
      year: makeField('2010')
    };
    date.year.dirty = true;
    date.month.dirty = true;
    date.day.dirty = true;

    const tree = shallow(
      <ErrorableDate date={date} validation={{ valid: false, message: 'Test' }} onValueChange={(_update) => {}}/>);

    expect(tree.find('.usa-input-error')).not.to.be.empty;
    expect(tree.find('.usa-input-error-message').text()).to.equal('Error Test');
  });
  it('displays custom message from array', () => {
    const date = {
      day: makeField('3'),
      month: makeField(''),
      year: makeField('2010')
    };
    date.year.dirty = true;
    date.month.dirty = true;
    date.day.dirty = true;

    const tree = shallow(
      <ErrorableDate
        date={date}
        validation={[
          { valid: true, message: 'NotShownMessage' },
          { valid: false, message: 'Test' }
        ]}
        onValueChange={(_update) => {}}/>
    );

    expect(tree.find('.usa-input-error')).not.to.be.empty;
    expect(tree.find('.usa-input-error-message').text()).to.equal('Error Test');
  });

  it('should pass aXe check', () => {
    const date = {
      day: makeField(''),
      month: makeField(''),
      year: makeField('1890')
    };

    return axeCheck(<ErrorableDate date={date} onValueChange={(_update) => {}}/>);
  });

  it('should pass aXe check when errorMessage is set', () => {
    const date = {
      day: makeField(''),
      month: makeField(''),
      year: makeField('1890')
    };
    date.year.dirty = true;
    date.month.dirty = true;
    date.day.dirty = true;

    return axeCheck(<ErrorableDate date={date} onValueChange={(_update) => {}}/>);
  });
});
