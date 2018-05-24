/**
 * Returns a deep clone of the provided object without the specified fields.
 *
 * @param {Array} fields
 * @param {Object} object
 */
export default function omit(fields, object) {
  return Object.keys(object).reduce((newObj, k) => {
    if (!fields.includes(k)) {
      newObj[k] = object[k]; // eslint-disable-line
    }

    return newObj;
  }, {});
}
