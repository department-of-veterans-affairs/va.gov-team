import _ from 'lodash';

export default function nonRequiredFullName(fullName) {
  return _.assign({}, fullName, {
    required: []
  });
}
