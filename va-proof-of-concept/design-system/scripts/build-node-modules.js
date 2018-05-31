/* eslint-disable no-console */
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const glob = require('glob');
const fs = require('fs');
const babel = require('babel-core');
const recast = require('recast');
const path = require('path');
const { ncp } = require('ncp');

console.log('Starting build');
console.log('Cleaning old build');
rimraf.sync('./dist/formation');
mkdirp.sync('./dist/formation');
mkdirp.sync('./dist/formation/sass');

// this comes from gulp-flatten-requires
// https://github.com/insin/gulp-flatten-requires/blob/master/index.js
// Flattens paths given to require
/* eslint-disable */
function flattenRequires(bufferString) {
  return new Buffer(recast.print(recast.visit(recast.parse(bufferString), {
    visitCallExpression: function(path) {
      var expr = path.node
      if (expr.callee.name == 'require') {
        this.traverse(path)
        if (expr.arguments.length && expr.arguments[0].value.charAt(0) == '.') {
          var arg = expr.arguments[0]
          expr.arguments[0] = arg.raw.charAt(0) + './' + arg.value.split('/').pop() + arg.raw.charAt(0)
        }
      }
      else {
        return false
      }
    }
  })).code);
}
/* eslint-enable */
/* eslint-disable no-console */

// get a flat array of file paths
const fileNames = [].concat.apply([], [
  glob.sync('./src/components/**/*.jsx', { ignore: './**/*.unit.spec.jsx' }),
  glob.sync('./src/helpers/*.js')
]);

fileNames.forEach(fileName => {
  // read a file into a buffer
  const fileBuffer = fs.readFileSync(fileName);
  // transform the buffer with babel using babelrc
  const babelTransformedBuffer = babel
    .transform(fileBuffer, { 'extends': './.babelrc' })
    .code;
  // flatten paths given to all requires
  const requireFlattenedBuffer = flattenRequires(babelTransformedBuffer.toString());
  const newFileName = `${path.parse(fileName).name}.js`;

  // write file to dist/build
  fs.writeFileSync(`./dist/formation/${newFileName}`, requireFlattenedBuffer);
  console.log(`${newFileName} built`);
});

ncp('./src/sass',
  './dist/formation/sass',
  { filter: (filename) => !filename.includes('/site') },
  (err) => {
    if (err) {
      throw new Error(`Failed to copy styles: ${err}`);
    }
    console.log('Build complete');
  }
);

