import deconstructPath from './deconstructPath';
import clone from './clone';
import checkValidPath from './checkValidPath';

/**
 * Same as `set`, but uses the level param to determine when to clone and give a more helpful error message.
 *
 * Note: Sub-objects in the path will not be `===` to objects in the same path in the existing data, but all
 *  other objects will be. By not cloning the data outside the path, we allow components (and Redux's connect
 *  HoC) to quickly tell which parts of the root object have changed, by doing a `===` comparison.
 *
 * TODO: Link to some documentation which will be a better explanation than the above
 *
 * @param {Array|string} path
 * @param {*} value
 * @param {Array|Object} object
 * @param {Number} level  How many times we've recursed
 * @return {Object} A new object with the appropriate value set
 */
function baseSet(arrayPath, value, object, level = 0) {
  if (level >= arrayPath.length) {
    // We're at the end of our path; time to assign
    return value;
  }

  const newObj = clone(object);

  const pathSegment = arrayPath[level];
  const nextPathSegment = arrayPath[level + 1];

  // Handle a path that doesn't exist
  if (typeof newObj[pathSegment] === 'undefined') {
    // The type of this element depends on the next path chunk
    switch (typeof nextPathSegment) {
      case 'string':
        newObj[pathSegment] = {};
        break;
      case 'number':
        // The array should be big enough to get whatever index we're looking for
        newObj[pathSegment] = new Array(nextPathSegment + 1);
        break;
      case 'undefined':
        // Do nothing; this will be assigned on the next iteration
        break;
      default:
        throw new Error(`Unrecognized path element type: ${typeof nextPathSegment}. Expected string or number. arrayPath[${level + 1}] contains ${nextPathSegment}.`);
    }
  }

  newObj[pathSegment] = baseSet(arrayPath, value, newObj[pathSegment], level + 1);

  return newObj;
}


/**
 * Sets the value at the end of the path, creating the appropriate objects along the way if needed.
 * Separate from `baseSet` to not expose the level param.
 *
 * @param {Array|string} path
 * @param {*} value
 * @param {Object} object
 * @return {Object} A new object with the appropriate value set
 */
export default function set(path, value, object) {
  const arrayPath = Array.isArray(path) ? path : deconstructPath(path);
  checkValidPath(arrayPath);
  return baseSet(arrayPath, value, object, 0);
}

