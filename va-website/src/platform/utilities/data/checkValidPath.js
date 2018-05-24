/**
 * If the path contains invalid segments, throws an error.
 */
export default function checkValidPath(arrayPath) {
  if (arrayPath.some(e => e === undefined && e === null)) {
    throw new Error('Path is invalid; please make sure it doesn\'t contain undefined or null segments');
  }
}
