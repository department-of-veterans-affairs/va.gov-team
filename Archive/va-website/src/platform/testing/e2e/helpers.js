import Timeouts from './timeouts';

function overrideVetsGovApi(client) {
  client.execute((url) => {
    const current = window.VetsGov || {};
    window.VetsGov = Object.assign({}, current, {
      api: {
        // eslint-disable-next-line object-shorthand
        url: url
      }
    });
    return window.VetsGov;
  },
  [`http://${process.env.API_HOST}:${process.env.API_PORT || 3000}`]);
}

function overrideSmoothScrolling(client) {
  client.execute(() => {
    const current = window.VetsGov || {};
    window.VetsGov = Object.assign({}, current, {
      scroll: {
        duration: 0,
        delay: 0,
        smooth: false
      }
    });
    return window.VetsGov;
  });
}

function overrideScrolling(client) {
  overrideSmoothScrolling(client);
  client.execute(() => {
    window.scrollTo = () => null;
  });
}

// via http://stackoverflow.com/questions/11131875
function overrideAnimations(client) {
  const styles = `* {
     -o-transition-property: none !important;
     -moz-transition-property: none !important;
     -ms-transition-property: none !important;
     -webkit-transition-property: none !important;
      transition-property: none !important;
     -o-transform: none !important;
     -moz-transform: none !important;
     -ms-transform: none !important;
     -webkit-transform: none !important;
     transform: none !important;
     -webkit-animation: none !important;
     -moz-animation: none !important;
     -o-animation: none !important;
     -ms-animation: none !important;
     animation: none !important;
  }`;

  client.execute((str) => {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = str;
    document.getElementsByTagName('head')[0].appendChild(style);
  },
  [styles]);
}

// Returns an object suitable for a nightwatch test case.
//
// Provides test framework maintainers a single entry point for annotating all tests with things
// like uniform reporters.
//
// @param {beginApplication} Callable taking one argument, client, that runs the e2e test.
function createE2eTest(beginApplication) {
  return {
    'Begin application': (client) => {
      overrideSmoothScrolling(client);
      beginApplication(client);
      client.end();
    }
  };
}

// Expects navigation lands at a path with the given `urlSubstring`.
function expectNavigateAwayFrom(client, urlSubstring) {
  client.expect.element('.js-test-location').attribute('data-location')
    .to.not.contain(urlSubstring).before(Timeouts.slow);
}

// Expects navigation lands at a path with the given `urlSubstring`.
function expectNavigateAwayFromExact(client, urlSubstring) {
  client.expect.element('.js-test-location').attribute('data-location')
    .to.not.equal(urlSubstring).before(Timeouts.slow);
}

// Expects navigation lands at a path with the given `urlSubstring`.
function expectLocation(client, urlSubstring) {
  client.expect.element('.js-test-location').attribute('data-location')
    .to.contain(urlSubstring).before(Timeouts.slow);
}

// Expects navigation lands at a path with the given `urlSubstring`.
function expectExactLocation(client, urlSubstring) {
  client.expect.element('.js-test-location').attribute('data-location')
    .to.equal(urlSubstring).before(Timeouts.slow);
}

function expectValueToBeBlank(client, field) {
  client.expect.element(field).to.have.value.that.equals('');
}

function expectInputToNotBeSelected(client, field) {
  client.expect.element(field).to.not.be.selected;
}

module.exports = {
  baseUrl: `http://${process.env.WEB_HOST || 'localhost'}:${process.env.WEB_PORT || 3333}`,
  apiUrl: `http://${process.env.API_HOST || 'localhost'}:${process.env.API_PORT || 3000}`,
  createE2eTest,
  expectNavigateAwayFrom,
  expectNavigateAwayFromExact,
  expectExactLocation,
  expectLocation,
  expectValueToBeBlank,
  expectInputToNotBeSelected,
  overrideVetsGovApi,
  overrideSmoothScrolling,
  overrideAnimations,
  overrideScrolling
};
