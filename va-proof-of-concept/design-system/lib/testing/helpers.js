/* global axe */
import { mount } from 'enzyme';

export function mountToDiv(component, id) {
  let div = document.getElementById(id);
  if (!div) {
    div = document.createElement('div');
    div.setAttribute('id', id);
    document.body.appendChild(div);
  }
  div.innerHTML = '';

  mount(component, { attachTo: div });
}

export function axeCheck(component) {
  let div = document.getElementById('axeContainer');
  if (!div) {
    div = document.createElement('div');
    div.setAttribute('id', 'axeContainer');
    document.body.appendChild(div);
  }
  div.innerHTML = '';

  mount(component, { attachTo: div });

  return new Promise((resolve, reject) => {
    axe.run(document.body, (err, result) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        reject(err);
      }
      if (result.violations.length) {
        reject(new Error(result.violations.map(violation => {
          const nodeInfo = violation.nodes.reduce((str, node) => {
            const { html, target } = node;
            return [str, html, ...target].join('\n');
          }, '');

          return `[${violation.impact}] ${violation.help}
            See ${violation.helpUrl}
            ${nodeInfo}`;
        }).join('\n')));
      }

      resolve();
    });
  });
}
