import startCase from 'lodash/startCase';

const E2eHelpers = require('../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../platform/testing/e2e/timeouts.js');
const LettersHelpers = require('./letters-helpers.js');
const Auth = require('../../../platform/testing/e2e/auth');

const newAddress = LettersHelpers.newAddress.data.attributes.address;
const oldAddress = LettersHelpers.address.data.attributes.address;
const oldAddressOne = startCase(oldAddress.addressOne.toLowerCase());
const oldAddressTwo = oldAddress.addressTwo ? `, ${startCase(oldAddress.addressTwo.toLowerCase())}` : '';
const oldAddressThree = oldAddress.addressThree ? `, ${startCase(oldAddress.addressThree.toLowerCase())}` : '';
const oldStreetAddress = oldAddressOne + oldAddressTwo + oldAddressThree;
const oldCityStateZIP = `${oldAddress.militaryPostOfficeTypeCode}, ${oldAddress.militaryStateCode} ${oldAddress.zipCode}`;

module.exports = E2eHelpers.createE2eTest(
  (client) => {
    const token = Auth.getUserToken();

    LettersHelpers.initApplicationMock(token);

    // Ensure main status page renders.
    Auth.logIn(token, client, '/download-va-letters/letters', 3)
      .waitForElementVisible('body', Timeouts.normal)
      .axeCheck('.main')
      .assert.title('Download VA Letters and Documents: Vets.gov')
      .waitForElementVisible('.letters', Timeouts.slow);  // First render of React may be slow.

    client.axeCheck('.main');

    // Checking if full name has rendered
    client.expect.element('h5.letters-address').text.to.contain('William Shakespeare');

    // Checking if address has rendered correctly
    client.expect.element('.street').text.to.contain(oldStreetAddress);
    client.expect.element('.city-state').text.to.contain(oldCityStateZIP);

    // Open, check visibility, and close address help modal
    client.expect.element('#address-help').to.not.be.present;
    client
      .click('.address-help-btn')
      .waitForElementVisible('#address-help', Timeouts.normal)
      .click('.va-modal-close')
      .expect.element('#address-help').to.not.be.present;

    // Update address and cancel
    client
      .click('.usa-button-secondary')
      .expect.element('select').to.be.present.before(Timeouts.normal);

    client
      .setValue('select[name="country"]', 'United Kingdom')
      .clearValue('input[name="city"]')
      .fill('input[name="city"]', 'Stratford-upon-Avon')
      .click('.usa-button-secondary')
      .waitForElementVisible('.city-state', Timeouts.normal)
      .expect.element('.city-state').text.to.contain(oldCityStateZIP);

    // Update address and save
    client
      .click('.usa-button-secondary')
      .expect.element('select').to.be.present.before(Timeouts.normal);

    client
      .clearValue('input[name="city"]')
      .fill('input[name="city"]', newAddress.city)
      .setValue('select[name="state"]', newAddress.stateCode)
      .clearValue('input[name="postalCode"]')
      .fill('input[name="postalCode"]', newAddress.zipCode)
      .click('.usa-button-primary') // submits new data
      .waitForElementVisible('.city-state', Timeouts.normal)
      .expect.element('.city-state').text.to.contain('Chicago, Illinois 60602');

    client
      .click('.view-letters-button')
      .expect.element('.usa-accordion-bordered').to.be.present.before(Timeouts.normal);

    client
      .click('.usa-accordion-bordered')
      .expect.element('.va-button-primary').to.be.present.before(Timeouts.normal);

    client
      .click('div.step-content > p:nth-child(3) > a') // link to go back to confirm-address
      .expect.element('.city-state').to.be.present.before(Timeouts.normal);

    // -- Go to letters list -- //

    client
      .click('.view-letters-button')
      .assert.urlContains('/letters/letter-list')
      .waitForElementVisible('.step-content', Timeouts.normal)
      .click('.step-content div.form-review-panel:nth-of-type(4) button') // open the bsl accordion
      .waitForElementPresent('#militaryService', Timeouts.normal);

    // poke all the checkboxes and expect them to all be unselected
    client
      .expect.element('#militaryService').to.have.attribute('checked').equals('true');
    client
      .click('#militaryService')
      .expect.element('#militaryService').to.not.have.attribute('checked');
    client.execute(() => {
      return Array.from(document.querySelectorAll('#benefitInfoTable input[type="checkbox"]'))
        .map(e => e.getAttribute('id'));
    }, [], (obj) => {
      const ids = obj.value;
      ids.forEach(id => {
        client.expect.element(`#${id}`).to.have.attribute('checked').equals('true');
        client.click(`#${id}`);
        client.expect.element(`#${id}`).to.not.have.attribute('checked');
      });
    });

    // collapse the bsl accordion
    client
      .click('.step-content div.form-review-panel:nth-of-type(4) button') // open the bsl accordion
      .waitForElementNotPresent('#militaryService', Timeouts.normal);

    // poke the back button
    client
      .click('.step-content p:nth-of-type(3) a')
      .assert.urlContains('/letters/confirm-address');

    client.end();
  }
);
