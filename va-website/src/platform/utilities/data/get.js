import deconstructPath from './deconstructPath';
import checkValidPath from './checkValidPath';

/**
 * Gets a the value at the end of the path.
 *
 * Note: This function does not return a clone of this value, so if the return
 *  result of this function is an object, modifying it will also change the original
 *  object it was grabbed from.
 *
 * @param {Object} object
 * @param {Array|string} path
 * @param {*} [defaultValue]
 * @return {*}
 */
export default function get(path, object, defaultValue) {
  const arrayPath = Array.isArray(path) ? path : deconstructPath(path);
  checkValidPath(arrayPath);
  const currentValue = arrayPath.reduce((current, next) => {
    return typeof current === 'undefined' ? current : current[next];
  }, object);

  // Should this clone? the current value? It might use a different ref--not sure.
  return (typeof currentValue !== 'undefined') ? currentValue : defaultValue;
}

