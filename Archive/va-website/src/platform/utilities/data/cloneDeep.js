import clone from './clone';

/**
 * Deeply clones an object. It's probably not super performant on deeply nested objects, but
 *  it gets the job done for now.
 *
 * Functions retain the same reference, but their `this` context changes like we'd expect.
 *
 * @param {Array|Object} object
 * @return {Object}
 */
export default function cloneDeep(object) {
  const newObj = clone(object);

  const cloneArrayElement = e => {
    // Deep clones arrays and objects
    if (typeof e === 'object' && e !== null) {
      return cloneDeep(e);
    }

    return e;
  };

  Object.keys(newObj).forEach(key => {
    if (Array.isArray(newObj[key])) {
      newObj[key] = newObj[key].slice().map(cloneArrayElement);
    } else if (typeof newObj[key] === 'object') {
      newObj[key] = cloneDeep(newObj[key]);
    }
  });

  return newObj;
}

