const initialState = {
  errors: [],
};

export default function errors(state, action) {
  switch (action.type) {
    case 'REFILL_FAILURE': {
      return {
        errors: action.errors,
      };
    }
    case 'LOAD_PRESCRIPTIONS_FAILURE': {
      return {
        errors: action.errors,
      };
    }

    default:
      return initialState;
  }
}
