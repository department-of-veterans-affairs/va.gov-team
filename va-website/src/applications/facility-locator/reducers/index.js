import FacilitiesReducer from './facilities';
import SearchQueryReducer from './searchQuery';

const rootReducer = {
  facilities: FacilitiesReducer,
  searchQuery: SearchQueryReducer,
};

export default rootReducer;
