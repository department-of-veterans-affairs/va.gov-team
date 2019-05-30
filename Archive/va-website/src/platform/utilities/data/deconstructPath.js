// Coerce to numbers where applicable
function coerceNumber(e) {
  const num = parseInt(e, 10);
  return e === `${num}` ? num : e;
}

/**
 * Takes a string and casts it into an array.
 * Can take strings like a.b[4].c
 *
 * @param {string} path
 * @return {Array}
 */
export default function deconstructPath(path) {
  const arrayPath = path
    .split(/[.[\]]/)
    .filter(e => e !== '')
    .map(coerceNumber);

  return arrayPath;
}
