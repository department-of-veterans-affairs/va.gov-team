const ProxyAdapter = require('./proxyAdapter.js');

module.exports = function vetsAdapter(config) {
  return function proxyAdapter(engineName, instance) {
    const nunjucksAdapter = require('@frctl/nunjucks')(config);

    return {
      register(source, app) {
        const adapter = nunjucksAdapter.register(source, app);
        return new ProxyAdapter(engineName, instance, source, app, adapter);
      }
    };
  };
};
