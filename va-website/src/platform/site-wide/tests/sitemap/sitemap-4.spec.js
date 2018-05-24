const SitemapHelpers = require('./sitemap-helpers');

module.exports = {
  'sitemap 4/4': (client) => {
    client.timeoutsAsyncScript(1000);
    SitemapHelpers.sitemapURLs((urls, only508List) => {
      const mark = Math.ceil(urls.length / 4);
      const segment = urls.splice(mark * 3);
      SitemapHelpers.runTests(client, segment, only508List);
      client.end();
    });
  }
};
