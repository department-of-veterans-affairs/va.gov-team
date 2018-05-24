/**
 * Lodash replacements is a collection of functions designed to replace common lodash ones.
 * These function will more closely resemble lodash/fp functions in that they should be
 *   non-mutative and support the lodash/fp parameter order. They should _not_ support auto-
 *   currying for simplicity.
 */

import clone from './clone';
import cloneDeep from './cloneDeep';
import get from './get';
import omit from './omit';
import set from './set';

export default {
  clone,
  cloneDeep,
  get,
  omit,
  set
};

