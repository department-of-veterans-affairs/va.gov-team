/* eslint-disable no-console */
const find = require('find');
const path = require('path');
const fs = require('fs');

function convertUrlToMarkdownPath(root, url) {
  let contentPath = path.join(root, './content/pages', url);
  if (fs.existsSync(`${contentPath}.md`)) {
    contentPath = `${contentPath}.md`;
  } else {
    contentPath = `${contentPath}/index.md`;
  }

  return contentPath
    .replace(path.join(root, './content/pages'), '')
    .replace(/^\//, '');
}

function getAppManifests(root) {
  return find.fileSync(/manifest\.json$/, path.join(root, './src/applications'))
    .map(file => {
      // eslint-disable-next-line import/no-dynamic-require
      const manifest = require(file);

      manifest.filePath = file;
      manifest.entryFile = path.relative(root, path.join(path.dirname(file), manifest.entryFile));
      if (manifest.rootUrl) {
        manifest.contentPage = convertUrlToMarkdownPath(root, manifest.rootUrl);
      }

      return manifest;
    });
}

function getWebpackEntryPoints(manifests) {
  return manifests.reduce((apps, next) => {
    // eslint-disable-next-line no-param-reassign
    apps[next.entryName] = `./${next.entryFile}`;
    return apps;
  }, {});
}

function getRoutes(manifests) {
  return manifests.filter(m => !m.noRouting)
    .map(m => m.rootUrl);
}

function displayApplications() {
  const root = path.join(__dirname, '..');
  getAppManifests(root)
    .forEach(manifest => {
      console.log(manifest.appName);
      console.log(path.relative(root, manifest.filePath));
      console.log(`Production: ${manifest.production || false}`);
      console.log('');
    });
}

module.exports = {
  displayApplications,
  getWebpackEntryPoints,
  getRoutes,
  getAppManifests
};
