import formConfig from '../config/form';
import { createSaveInProgressFormReducer } from '../../../common/schemaform/save-in-progress/reducers';

export default {
  form: createSaveInProgressFormReducer(formConfig)
};
