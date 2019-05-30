import ModalDisplayReducer from './modals';
import PageTitleReducer from './title';
import PreviewModeReducer from './preview';
import CalculatorConstantsReducer from './constants';
import EligibilityReducer from './eligibility';
import AutocompleteReducer from './autocomplete';
import SearchReducer from './search';
import InstitutionDetailsFilterReducer from './filter';
import ProfileReducer from './profile';
import CalculatorReducer from './calculator';

const rootReducer = {
  modals: ModalDisplayReducer,
  pageTitle: PageTitleReducer,
  preview: PreviewModeReducer,
  constants: CalculatorConstantsReducer,
  eligibility: EligibilityReducer,
  autocomplete: AutocompleteReducer,
  search: SearchReducer,
  filters: InstitutionDetailsFilterReducer,
  profile: ProfileReducer,
  calculator: CalculatorReducer,
};

export default rootReducer;
