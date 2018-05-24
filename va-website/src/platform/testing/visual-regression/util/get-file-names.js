const path = require('path');
const mkdirp = require('mkdirp');
const { baseUrl } = require('../../e2e/helpers');

const screenshotDirectory = path.join(__dirname, '../../../../../logs/visual-regression');
const baselineDir = path.join(screenshotDirectory, '/baseline');
const diffDir = path.join(screenshotDirectory, '/diffs');

// Takes a full URL and translates that into a filename in the logs directory to store images.
function getFileNames(route) {
  const uri = route.replace(baseUrl, '');
  const baseline = path.join(baselineDir, `/${uri}.png`);
  const diff = path.join(diffDir, `/${uri}.png`);

  return [baseline, diff];
}

// Creates a directory if it doesn't exist already.
// Necessary when writing out the diff image.
function createDirectoryIfNotExist(filePath) {
  const directory = path.dirname(filePath);
  return new Promise((resolve, reject) => {
    mkdirp(directory, err => {
      return err ? reject(err) : resolve();
    });
  });
}

module.exports = {
  getFileNames,
  createDirectoryIfNotExist
};
