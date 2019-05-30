import { expect } from 'chai';

import formReducer from '../../reducers/form';

describe('form reducer', () => {
  it('should set the start date', () => {
    const state = formReducer(undefined, {
      type: 'START_DATE_CHANGED',
      date: 'start date'
    });

    expect(state.dateRange.start).to.equal('start date');
  });

  it('should set the end date', () => {
    const state = formReducer(undefined, {
      type: 'END_DATE_CHANGED',
      date: 'end date'
    });

    expect(state.dateRange.end).to.equal('end date');
  });

  it('should set the date option', () => {
    const state = formReducer(undefined, {
      type: 'DATE_OPTION_CHANGED',
      dateOption: '1yr'
    });

    expect(state.dateOption).to.equal('1yr');
  });

  it('should toggle a report type', () => {
    const state = formReducer({
      reportTypes: {
        test1: false,
        test2: false,
        test3: true
      }
    }, {
      type: 'REPORT_TYPE_TOGGLED',
      reportType: 'test1',
      checked: true
    });

    expect(state.reportTypes.test1).to.be.true;
    expect(state.reportTypes.test2).to.be.false;
    expect(state.reportTypes.test3).to.be.true;
  });

  it('should toggle all report types', () => {
    const state = formReducer({
      reportTypes: {
        test1: false,
        test2: false,
        test3: true
      }
    }, {
      type: 'ALL_REPORTS_TOGGLED',
      checked: true
    });

    expect(state.reportTypes.test1).to.be.true;
    expect(state.reportTypes.test2).to.be.true;
    expect(state.reportTypes.test3).to.be.true;
  });

  it('should set ready state to true on form success', () => {
    const state = formReducer(undefined, {
      type: 'FORM_SUCCESS'
    });

    expect(state.ready).to.be.true;
  });

  it('should set ready state to false on form success', () => {
    const state = formReducer(undefined, {
      type: 'FORM_FAILURE'
    });

    expect(state.ready).to.be.false;
  });
});
