import { expect } from 'chai';
import moment from 'moment';

import { makeField } from '../../../../platform/forms/fields';
import searchReducer from '../../reducers/search';

import {
  CLOSE_ADVANCED_SEARCH,
  FETCH_FOLDER_SUCCESS,
  OPEN_ADVANCED_SEARCH,
  SET_ADVSEARCH_END_DATE,
  SET_ADVSEARCH_START_DATE,
  SET_SEARCH_PARAM,
  TOGGLE_ADVANCED_SEARCH
} from '../../utils/constants';

const initialState = {
  params: {
    dateRange: {
      start: null,
      end: null
    },
    from: {
      field: makeField(''),
      exact: false
    },
    to: {
      field: makeField(''),
      exact: false
    },
    subject: {
      field: makeField(''),
      exact: false
    }
  },
  advanced: {
    visible: false
  }
};

describe('search reducer', () => {
  it('should set end date for advanced search', () => {
    const today = moment().startOf('day');
    let newState = searchReducer(initialState, {
      type: SET_ADVSEARCH_END_DATE,
      date: today
    });

    expect(newState.params.dateRange.end.toString())
      .to.eql(today.endOf('day').toString());

    const weekAgo = today.clone().subtract(1, 'weeks');
    newState = searchReducer(newState, {
      type: SET_ADVSEARCH_END_DATE,
      date: weekAgo
    });

    expect(newState.params.dateRange.end.toString())
      .to.eql(weekAgo.endOf('day').toString());
  });

  it('should set start date for advanced search', () => {
    const today = moment().startOf('day');
    let newState = searchReducer(initialState, {
      type: SET_ADVSEARCH_START_DATE,
      date: today
    });

    expect(newState.params.dateRange.start.toString())
      .to.eql(today.toString());

    const weekAgo = today.clone().subtract(1, 'weeks');
    newState = searchReducer(newState, {
      type: SET_ADVSEARCH_START_DATE,
      date: weekAgo
    });

    expect(newState.params.dateRange.start.toString())
      .to.eql(weekAgo.toString());
  });

  it('should toggle advanced search', () => {
    let newState = searchReducer(initialState, { type: TOGGLE_ADVANCED_SEARCH });
    expect(newState.advanced.visible).to.be.true;
    newState = searchReducer(newState, { type: TOGGLE_ADVANCED_SEARCH });
    expect(newState.advanced.visible).to.be.false;
  });

  it('should open advanced search', () => {
    const newState = searchReducer({ advanced: { visible: false } }, { type: OPEN_ADVANCED_SEARCH });
    expect(newState.advanced.visible).to.be.true;
  });

  it('should close advanced search', () => {
    const newState = searchReducer({ advanced: { visible: true } }, { type: CLOSE_ADVANCED_SEARCH });
    expect(newState.advanced.visible).to.be.false;
  });

  it('should set search params', () => {
    const fromFieldQuery = makeField('Clinician 1', true);
    let newState = searchReducer(initialState, {
      type: SET_SEARCH_PARAM,
      path: 'from.field',
      field: fromFieldQuery
    });
    expect(newState.params.from.field).to.eql(fromFieldQuery);

    newState = searchReducer(newState, {
      type: SET_SEARCH_PARAM,
      path: 'from.exact',
      field: true
    });
    expect(newState.params.from.exact).to.eql(true);

    const subjectFieldQuery = makeField('tests', true);
    newState = searchReducer(newState, {
      type: SET_SEARCH_PARAM,
      path: 'subject.field',
      field: subjectFieldQuery
    });
    expect(newState.params.subject.field).to.eql(subjectFieldQuery);

    newState = searchReducer(newState, {
      type: SET_SEARCH_PARAM,
      path: 'subject.exact',
      field: true
    });
    expect(newState.params.subject.exact).to.eql(true);
  });

  it('should set search params when folder loads with filters', () => {
    const senderName = 'Veteran';
    const recipientName = 'Clinician';
    const subject = 'Testing 123';
    const startDate = '2017-01-01T00:00:00-05:00';
    const endDate = '2017-01-14T23:59:59-05:00';

    const newState = searchReducer(initialState, {
      type: FETCH_FOLDER_SUCCESS,
      messages: {
        meta: {
          filter: {
            senderName: { eq: senderName },
            recipientName: { eq: recipientName },
            subject: { match: subject },
            sentDate: { gteq: startDate, lteq: endDate }
          }
        }
      }
    });

    expect(newState.params.dateRange.start).to.eql(moment(startDate));
    expect(newState.params.dateRange.end).to.eql(moment(endDate));
    expect(newState.params.from.field).to.eql(makeField(senderName, true));
    expect(newState.params.from.exact).to.be.true;
    expect(newState.params.to.field).to.eql(makeField(recipientName, true));
    expect(newState.params.to.exact).to.be.true;
    expect(newState.params.subject.field).to.eql(makeField(subject, true));
    expect(newState.params.subject.exact).to.be.false;
  });

  it('should clear search params when folder loads without filters', () => {
    const newState = searchReducer({
      params: {
        dateRange: {
          start: '2017-01-01T00:00:00-05:00',
          end: '2017-01-14T23:59:59-05:00'
        },
        from: {
          field: makeField('Veteran', true),
          exact: true
        },
        to: {
          field: makeField('Clinician', true),
          exact: false
        },
        subject: {
          field: makeField('Testing 123', true),
          exact: false
        }
      }
    }, {
      type: FETCH_FOLDER_SUCCESS,
      messages: { meta: {} }
    });
    expect(newState.params).to.eql(initialState.params);
  });
});
