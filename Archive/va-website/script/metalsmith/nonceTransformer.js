const jsdom = require('jsdom');
const path = require('path');

const CSP_NONCE = '**CSP_NONCE**';

function generateNewId(existingIds) {
  const newId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
  if (!existingIds.has(newId)) {
    existingIds.add(newId);
    return newId;
  }
  return generateNewId(existingIds);
}

module.exports = (files, metalsmith, done) => {
  Object.keys(files).forEach((file) => {
    if (path.extname(file) !== '.html') return;

    const data = files[file];
    const dom = new jsdom.JSDOM(data.contents.toString());
    dom.window.document.querySelectorAll('script').forEach((scriptEl) => {
      if (scriptEl.textContent !== '') {
        scriptEl.setAttribute('nonce', CSP_NONCE);
      }
    });
    const ids = new Set();
    dom.window.document.querySelectorAll('[onclick]').forEach((onclickEl) => {
      if (onclickEl.id === '') {
        onclickEl.id = generateNewId(ids); // eslint-disable-line no-param-reassign
      }
      const id = onclickEl.id;
      const onclick = onclickEl.getAttribute('onclick');
      const newScript = dom.window.document.createElement('script');
      newScript.setAttribute('nonce', CSP_NONCE);
      newScript.textContent = `(function() { var e = document.getElementById('${id}'); e.addEventListener('click', function(ev) { ${onclick} }); })();`;
      onclickEl.removeAttribute('onclick');
      onclickEl.appendChild(newScript);
    });
    data.contents = new Buffer(dom.serialize());
    dom.window.close();
    files[file] = data;  // eslint-disable-line no-param-reassign
  });
  done();
};
