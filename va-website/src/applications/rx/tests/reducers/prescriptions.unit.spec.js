import { expect } from 'chai';

import prescriptionsReducer from '../../reducers/prescriptions.js';

describe('prescriptions reducer', () => {
  it('should show a loading screen for active', () => {
    const state = prescriptionsReducer(
      { active: { loading: false } },
      { type: 'LOADING_ACTIVE' }
    );
    expect(state.active.loading).to.be.true;
  });

  it('should show a loading screen for history', () => {
    const state = prescriptionsReducer(
      { history: { loading: false } },
      { type: 'LOADING_HISTORY' }
    );
    expect(state.history.loading).to.be.true;
  });

  it('should show a loading screen for detail', () => {
    const state = prescriptionsReducer(
      { detail: { loading: false } },
      { type: 'LOADING_DETAIL' }
    );
    expect(state.detail.loading).to.be.true;
  });

  it('should handle failure to fetch a prescription', () => {
    const state = prescriptionsReducer(
      { currentItem: { id: 123 } },
      { type: 'LOAD_PRESCRIPTION_FAILURE' }
    );
    expect(state.currentItem).to.be.null;
    expect(state.detail.loading).to.be.false;
  });

  it('should handle failure to fetch active prescriptions', () => {
    const state = prescriptionsReducer({
      items: ['123', '456', '789']
    }, {
      type: 'LOAD_PRESCRIPTIONS_FAILURE',
      active: true
    });
    expect(state.items).to.be.null;
    expect(state.active.loading).to.be.false;
  });

  it('should handle failure to fetch prescriptions history', () => {
    const state = prescriptionsReducer({
      items: ['123', '456', '789']
    }, {
      type: 'LOAD_PRESCRIPTIONS_FAILURE'
    });
    expect(state.items).to.be.null;
    expect(state.history.loading).to.be.false;
  });

  it('should handle a successful request for active prescriptions', () => {
    const state = prescriptionsReducer({
      items: null
    }, {
      type: 'LOAD_PRESCRIPTIONS_SUCCESS',
      active: true,
      data: {
        data: ['item1', 'item2'],
        meta: {
          pagination: {
            currentPage: 1,
            totalPages: 1
          },
          sort: { prescriptionName: 'ASC' }
        }
      }
    });
    expect(state.items).to.eql(['item1', 'item2']);
    expect(state.active.sort.value).to.eql('prescriptionName');
    expect(state.active.loading).to.be.false;
  });

  it('should handle a successful request for prescriptions history', () => {
    const state = prescriptionsReducer({
      items: null
    }, {
      type: 'LOAD_PRESCRIPTIONS_SUCCESS',
      data: {
        data: ['item1', 'item2'],
        meta: {
          pagination: {
            currentPage: 1,
            totalPages: 1
          },
          sort: { prescriptionName: 'ASC' }
        }
      }
    });
    expect(state.items).to.eql(['item1', 'item2']);
    expect(state.history.sort.value).to.eql('prescriptionName');
    expect(state.history.sort.order).to.eql('ASC');
    expect(state.history.page).to.equal(1);
    expect(state.history.pages).to.equal(1);
    expect(state.history.loading).to.be.false;
  });

  it('should handle a successful refill', () => {
    const state = {
      items: [
        {
          id: 1,
          attributes: {
            refillStatus: 'active',
            isRefillable: true
          }
        },
        {
          id: 2,
          attributes: {
            refillStatus: 'active',
            isRefillable: true
          }
        },
        {
          id: 3,
          attributes: {
            refillStatus: 'active',
            isRefillable: true
          }
        },
      ]
    };

    const newState = prescriptionsReducer(state, {
      type: 'REFILL_SUCCESS',
      prescription: { prescriptionId: 2 }
    });

    expect(newState.items[1].attributes.isRefillable).to.be.false;
    expect(newState.items[1].attributes.refillStatus).to.eql('submitted');
  });

  it('should sort active prescriptions by prescription name', () => {
    const state = {
      items: [
        {
          id: 1,
          attributes: {
            prescriptionName: 'c'
          }
        },
        {
          id: 2,
          attributes: {
            prescriptionName: 'a'
          }
        },
        {
          id: 3,
          attributes: {
            prescriptionName: 'b'
          }
        },
      ]
    };

    const newState = prescriptionsReducer(state, {
      type: 'SORT_PRESCRIPTIONS',
      sort: 'prescriptionName',
      order: 'ASC',
    });

    expect(newState.items[0].id).to.equal(2);
    expect(newState.items[1].id).to.equal(3);
    expect(newState.items[2].id).to.equal(1);
  });

  it('should sort active prescriptions by facility name', () => {
    const state = {
      items: [
        {
          id: 1,
          attributes: {
            facilityName: 'c'
          }
        },
        {
          id: 2,
          attributes: {
            facilityName: 'b'
          }
        },
        {
          id: 3,
          attributes: {
            facilityName: 'a'
          }
        },
      ]
    };

    const newState = prescriptionsReducer(state, {
      type: 'SORT_PRESCRIPTIONS',
      sort: 'facilityName',
      order: 'ASC',
    });

    expect(newState.items[0].id).to.equal(3);
    expect(newState.items[1].id).to.equal(2);
    expect(newState.items[2].id).to.equal(1);
  });

  it('should sort active prescriptions by last submit date', () => {
    const state = {
      items: [
        {
          id: 1,
          attributes: {
            refillSubmitDate: 2
          }
        },
        {
          id: 2,
          attributes: {
            refillSubmitDate: 3
          }
        },
        {
          id: 3,
          attributes: {
            refillSubmitDate: 1
          }
        },
      ]
    };

    const newState = prescriptionsReducer(state, {
      type: 'SORT_PRESCRIPTIONS',
      sort: 'lastSubmitDate',
      order: 'ASC',
    });

    expect(newState.items[0].id).to.equal(3);
    expect(newState.items[1].id).to.equal(1);
    expect(newState.items[2].id).to.equal(2);
  });
});
