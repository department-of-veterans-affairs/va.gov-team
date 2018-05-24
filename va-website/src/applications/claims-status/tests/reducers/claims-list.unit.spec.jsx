import { expect } from 'chai';

import claimsList from '../../reducers/claims-list';
import { SET_CLAIMS, FILTER_CLAIMS, SORT_CLAIMS, CHANGE_CLAIMS_PAGE, SHOW_CONSOLIDATED_MODAL, HIDE_30_DAY_NOTICE } from '../../actions';

describe('Claims list reducer', () => {
  it('should populate the claims list', () => {
    const claims = Array(12).fill({
      attributes: {
        phaseChangeDate: '2010-01-01'
      }
    });
    claims[11] = {
      attributes: {
        phaseChangeDate: '2011-01-05'
      }
    };
    claims[10] = {
      attributes: {
      }
    };
    const state = claimsList(undefined, {
      type: SET_CLAIMS,
      claims
    });
    expect(state.claims).to.deep.equal(claims);
  });
  it('should set the sort property', () => {
    const previousState = {
      sortProperty: 'dateFiled'
    };
    const state = claimsList(previousState, {
      type: SORT_CLAIMS,
      sortProperty: 'phaseChangeDate'
    });
    expect(state.sortProperty).to.equal('phaseChangeDate');
  });
  it('should sort by id secondarily', () => {
    const claims = [
      {
        id: 2,
        attributes: {
          phaseChangeDate: '2010-01-01'
        }
      },
      {
        id: 1,
        attributes: {
          phaseChangeDate: '2010-01-01'
        }
      }
    ];
    const previousState = {
      visibleList: claims
    };
    const state = claimsList(previousState, {
      type: SORT_CLAIMS,
      sortProperty: 'phaseChangeDate'
    });

    expect(state.visibleList[0].id).to.equal(1);
  });
  it('should sort null dates after others', () => {
    const claims = [
      {
        id: 2,
        attributes: {
          phaseChangeDate: '2010-01-01'
        }
      },
      {
        id: 1,
        attributes: {
          phaseChangeDate: null
        }
      }
    ];
    const previousState = {
      visibleList: claims
    };
    const state = claimsList(previousState, {
      type: SORT_CLAIMS,
      sortProperty: 'phaseChangeDate'
    });

    expect(state.visibleList[0].id).to.equal(2);
  });
  it('should sort by date received with null dates after others', () => {
    const claims = [
      {
        id: 1,
        attributes: {
          dateFiled: '2010-04-01'
        }
      },
      {
        id: 2,
        attributes: {
          dateFiled: null
        }
      },
      {
        id: 3,
        attributes: {
          dateFiled: '2010-05-01'
        }
      }
    ];
    const previousState = {
      visibleList: claims
    };
    const state = claimsList(previousState, {
      type: SORT_CLAIMS,
      sortProperty: 'dateFiled'
    });
    const sortedClaims = [claims[2], claims[0], claims[1]];
    expect(state.visibleList).to.deep.equal(sortedClaims);
  });
  it('should sort by claim type with null types converted to disability claim', () => {
    const claims = [
      {
        id: 1,
        attributes: {
          claimType: 'Pension'
        }
      },
      {
        id: 2,
        attributes: {
          claimType: null
        }
      },
      {
        id: 3,
        attributes: {
          claimType: 'Compensation'
        }
      }
    ];
    const previousState = {
      visibleList: claims
    };
    const state = claimsList(previousState, {
      type: SORT_CLAIMS,
      sortProperty: 'claimType'
    });
    const sortedClaims = [claims[2], claims[1], claims[0]];
    expect(state.visibleList).to.deep.equal(sortedClaims);
  });
  it('should filter out closed claims', () => {
    const claims = [
      {
        id: 2,
        attributes: {
          open: true
        }
      },
      {
        id: 1,
        attributes: {
          open: false
        }
      }
    ];
    const previousState = {
      claims,
      appeals: [],
    };
    const state = claimsList(previousState, {
      type: FILTER_CLAIMS,
      filter: 'open'
    });
    expect(state.visibleList.length).to.equal(1);
    expect(state.visibleList[0].id).to.equal(2);
  });

  it('should filter out open claims', () => {
    const claims = [
      {
        id: 2,
        attributes: {
          open: true
        }
      },
      {
        id: 1,
        attributes: {
          open: false
        }
      }
    ];
    const previousState = {
      claims,
      appeals: [],
    };
    const state = claimsList(previousState, {
      type: FILTER_CLAIMS,
      filter: 'closed'
    });
    expect(state.visibleList.length).to.equal(1);
    expect(state.visibleList[0].id).to.equal(1);
  });

  it('should maintain the sort when filtering', () => {
    const claims = [
      {
        id: 1,
        attributes: {
          claimType: 'Pension',
          open: true
        }
      },
      {
        id: 2,
        attributes: {
          claimType: null,
          open: true
        }
      },
      {
        id: 3,
        attributes: {
          claimType: 'Compensation',
          open: true
        }
      },
      {
        id: 4,
        attributes: {
          claimType: null,
          open: false
        }
      },
    ];
    const previousState = {
      appeals: [],
      claims,
      sortProperty: 'claimType'
    };
    const state = claimsList(previousState, {
      type: FILTER_CLAIMS,
      filter: 'open'
    });
    const sortedClaims = [claims[2], claims[1], claims[0]];
    expect(state.visibleList).to.deep.equal(sortedClaims);
  });

  it('should change the claims list page', () => {
    const claims = Array(12).fill(4);
    const previousState = {
      visibleList: claims,
      page: 1,
      pages: 2,
      visibleRows: claims.slice(0, 10)
    };
    const state = claimsList(previousState, {
      type: CHANGE_CLAIMS_PAGE,
      page: 2
    });

    expect(state.visibleRows).to.deep.equal(claims.slice(10, 12));
    expect(state.page).to.equal(2);
  });

  it('should toggle modal flag', () => {
    const state = claimsList({}, {
      type: SHOW_CONSOLIDATED_MODAL,
      visible: true
    });

    expect(state.consolidatedModal).to.be.true;
  });
  it('should turn off 30 day notice flag', () => {
    const state = claimsList({
      show30DayNotice: true
    }, {
      type: HIDE_30_DAY_NOTICE
    });

    expect(state.show30DayNotice).to.be.false;
  });
});
