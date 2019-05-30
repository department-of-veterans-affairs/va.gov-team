import {
  createInitialState,
} from '../state/helpers';
import reducers from '../state/reducers';

export default function createSchemaFormReducer(formConfig, initialState = createInitialState(formConfig), formReducers = reducers) {
  return (state = initialState, action) => {
    const reducer = formReducers[action.type];

    if (reducer) {
      return reducer(state, action);
    }

    return state;
  };
}
