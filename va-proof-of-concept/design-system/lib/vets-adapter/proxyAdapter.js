const { Adapter } = require('@frctl/fractal');
const ReactAdapter = require('./reactAdapter');

class ProxyAdapter extends Adapter {
  constructor(engineName, instance, source, app, adapter) {
    super(instance, source);
    this.nunjucksAdapter = adapter;
    this.reactAdapter = new ReactAdapter(engineName, instance, source, app);
  }

  render(...args) {
    if (args[1].startsWith('import')) {
      return this.reactAdapter.render(...args);
    }
    return this.nunjucksAdapter.render(...args);

  }
}

module.exports = ProxyAdapter;
