/**
 * Returns a shallow clone of an object.
 *
 * @param {Object} object
 * @return {Object}
 */
export default function clone(object) {
  /* eslint-disable no-prototype-builtins */
  switch (typeof object) {
    case 'object':
      if (Array.isArray(object)) {
        return object.slice();
      } else if (Set.prototype.isPrototypeOf(object)) {
        return new Set(object);
      } else if (Map.prototype.isPrototypeOf(object)) {
        return new Map(object);
      }
      // Probably just ye olde object
      return Object.assign({}, object);
    default:
      throw new Error(`Unknown type in clone: ${typeof object}`);
  }
  /* eslint-enable no-prototype-builtins */
}

