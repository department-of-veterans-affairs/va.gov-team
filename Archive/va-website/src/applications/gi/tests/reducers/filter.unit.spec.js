import { expect } from 'chai';

import filterReducer from '../../reducers/filter';

const initialState = {
  category: 'ALL',
  type: 'ALL',
  country: 'ALL',
  state: 'ALL',
  studentVeteranGroup: false,
  yellowRibbonScholarship: false,
  principlesOfExcellence: false,
  eightKeysToVeteranSuccess: false,
  typeName: 'ALL',
};

describe('filter reducer', () => {
  it('should change filter successfully', () => {
    const state = filterReducer(
      initialState,
      {
        type: 'INSTITUTION_FILTER_CHANGED',
        filter: {
          category: 'ALL',
          type: 'ALL',
          country: 'ALL',
          state: 'WA',
          studentVeteranGroup: false,
          yellowRibbonScholarship: false,
          principlesOfExcellence: true,
          eightKeysToVeteranSuccess: false,
          typeName: 'ALL'
        },
      }
    );

    expect(state.category).to.eql('ALL');
    expect(state.type).to.eql('ALL');
    expect(state.country).to.eql('ALL');
    expect(state.state).to.eql('WA');
    expect(state.studentVeteranGroup).to.eql(false);
    expect(state.yellowRibbonScholarship).to.eql(false);
    expect(state.principlesOfExcellence).to.eql(true);
    expect(state.eightKeysToVeteranSuccess).to.eql(false);
    expect(state.typeName).to.eql('ALL');
  });
});
