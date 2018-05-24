const libxmljs = require('libxmljs');
const fetch = require('node-fetch');
const E2eHelpers = require('../../../testing/e2e/helpers');
const Timeouts = require('../../../testing/e2e/timeouts.js');

const SITEMAP_URL = `${E2eHelpers.baseUrl}/sitemap.xml`;
const SITEMAP_LOC_NS = 'http://www.sitemaps.org/schemas/sitemap/0.9';
const BUILD_BASE_URL = 'https://www.vets.gov';

function sitemapURLs(callback) {
  fetch(SITEMAP_URL)
    .then((res) => {
      return res.text();
    }).then((body) => {
      const doc = libxmljs.parseXml(body);

      const urls = doc
        .find('//xmlns:loc', SITEMAP_LOC_NS)
        .map(n => n.text().replace(BUILD_BASE_URL, E2eHelpers.baseUrl))
        .filter(url => !(url.endsWith('auth/login/callback/')));

      // Whitelist of URLs to only test against the 'section508' rule set and not
      // the stricter 'wcag2a' rule set. For each URL added to this list, please
      // add a comment explaining why it cannot be tested against stricter rules.
      const onlyTest508Rules = [
        // 404 page contains 2 search auto-suggest elements with the same element ID,
        // which violates WCAG 2.0 standards. This element id is referenced by
        // https://search.usa.gov/assets/sayt_loader_libs.js, so if we change the ID
        // of one of the elements, search won't work.
        '/404.html',
        // This is here because aXe bug flags the custom select component on this page
        '/facilities/',
        // This is here because an aXe bug flags the autosuggest component on this page
        '/gi-bill-comparison-tool/'
      ];

      callback(urls, onlyTest508Rules);
    }).catch(callback);
}

function runTests(client, segment, only508List) {
  segment.forEach(url => {
    const only508 = only508List.filter(path => url.endsWith(path)).length > 0;
    client
      .perform(() => { console.log(url); }) // eslint-disable-line no-console
      .url(url)
      .waitForElementVisible('body', Timeouts.normal)
      .axeCheck('document', only508 ?
        { scope: url, rules: ['section508'] } :
        { scope: url });
  });
}

module.exports = { runTests, sitemapURLs };
