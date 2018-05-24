import { expect } from 'chai';

import calculatorReducer from '../../reducers/calculator';

describe('calculator reducer', () => {
  it('should correctly change non-dollar input', () => {
    const state = calculatorReducer(
      {},
      {
        type: 'CALCULATOR_INPUTS_CHANGED',
        field: 'field',
        value: 'value'
      }
    );

    expect(state).to.eql({ field: 'value' });
  });

  it('should correctly change dollar input', () => {
    const state = calculatorReducer(
      {},
      {
        type: 'CALCULATOR_INPUTS_CHANGED',
        field: 'tuitionFees',
        value: '$1000.00'
      }
    );

    expect(state).to.eql({ tuitionFees: 1000 });
  });

  it('should correctly change inState input and set inState tuition', () => {
    const state = calculatorReducer(
      { tuitionInState: 10 },
      {
        type: 'CALCULATOR_INPUTS_CHANGED',
        field: 'inState',
        value: 'yes'
      }
    );

    expect(state).to.eql({
      tuitionInState: 10,
      inState: 'yes',
      inStateTuitionFees: 10,
      tuitionFees: 10,
    });
  });

  it('should correctly change inState input and set out of state tuition', () => {
    const state = calculatorReducer(
      { tuitionOutOfState: 100, tuitionInState: 10 },
      {
        type: 'CALCULATOR_INPUTS_CHANGED',
        field: 'inState',
        value: 'no'
      }
    );

    expect(state).to.eql({
      tuitionOutOfState: 100,
      inStateTuitionFees: 10,
      inState: 'no',
      tuitionInState: 10,
      tuitionFees: 100,
    });
  });
});
