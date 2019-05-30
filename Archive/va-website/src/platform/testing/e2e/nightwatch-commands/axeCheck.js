import axeCore from 'axe-core'; // eslint-disable-line no-unused-vars

/**
 * Runs aXe checker on the given context
 * @param  {string} context The selector to run the axe check against
 * @param  {object} config Additional axe configuration options
 * @api commands
 */
export function command(context, config, _callback) {
  // Find the source of the axe module

  // TODO: since this is executed in the context of the browser,
  // we probably don't need to include this as an npm dependency,
  // we may be able to just download it locally into a test fixtures
  // directory and load the source.
  const axeSource = module.children.find((el) => {
    return (el.filename.indexOf('axe-core') !== -1);
  }).exports.source;

  // Attach the axe source to the document
  this.execute(innerAxeSource => {
    const script = document.createElement('script');
    script.text = innerAxeSource;
    document.head.appendChild(script);
  }, [axeSource]);

  // Run axe checks and report
  this.executeAsync((innerContext, rules, done) => {
    axe.run(document.querySelector(innerContext) || document, { // eslint-disable-line no-undef
      runOnly: {
        type: 'tag',
        values: rules
      }
    }, (err, results) => {
      done({ err, results });
    });
  }, [context, (config || {}).rules || this.globals.rules || ['section508', 'wcag2a', 'wcag2aa']], response => {
    const { err, results } = response.value;

    if (err) {
      this.verify.fail(err);
      return;
    }

    if (!results) {
      this.verify.fail('No scan results found');
      return;
    }

    const { violations } = results;

    const scope = (config || {}).scope || '[n/a]';

    violations.forEach(violation => {
      const nodeInfo = violation.nodes.reduce((str, node) => {
        const { html, target } = node;
        return [str, html, ...target].join('\n');
      }, '');
      const message = `${scope}: [${violation.impact}] ${violation.help}
See ${violation.helpUrl}
${nodeInfo}`;
      this.verify.fail(message);
    });
  });
}
