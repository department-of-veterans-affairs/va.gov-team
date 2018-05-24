const E2eHelpers = require('../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../platform/testing/e2e/timeouts.js');

module.exports = E2eHelpers.createE2eTest(
  (client) => {
    // Ensure education apply-wizard page renders.
    // Open education apply wizard
    client
      .url(`${E2eHelpers.baseUrl}/education/apply/`)
      .waitForElementVisible('body', Timeouts.normal)
      .assert.title('Education Benefits Application Process: Vets.gov')
      .waitForElementVisible('.wizard-container', Timeouts.normal)
      .click('.wizard-button')
      .waitForElementVisible('label[for="newBenefit-0"]', Timeouts.normal)
      .axeCheck('.main');

    // Create a new application
    client
      .click('input[id="newBenefit-0"]')
      .waitForElementVisible('label[for="serviceBenefitBasedOn-0"]', Timeouts.normal)
    // Select veteran
      .click('input[id="serviceBenefitBasedOn-0"]')
      .waitForElementVisible('label[for="nationalCallToService-0"]', Timeouts.normal)
    // Select national call to service
      .click('#nationalCallToService-0')
      .waitForElementVisible('#apply-now-link', Timeouts.normal);

    client
      .expect.element('#apply-now-link').to.have.attribute('href').which.contains('/education/apply-for-education-benefits/application/1990N');

    client
      .expect.element('.usa-alert-warning').to.be.present;

    // Select non-veteran
    client
      .click('#serviceBenefitBasedOn-1')
      .expect.element('#apply-now-link').not.to.be.present;

    client
      .expect.element('.usa-alert-warning').not.to.be.present;

    client
      .waitForElementVisible('label[for="sponsorDeceasedDisabledMIA-0"]', Timeouts.normal);

    // Select dependent
    client
      .click('#sponsorDeceasedDisabledMIA-0')
      .waitForElementVisible('#apply-now-link', Timeouts.normal);

    client
      .expect.element('#apply-now-link').to.have.attribute('href').which.contains('/education/apply-for-education-benefits/application/5490');

    // Select non-dependent
    client
      .click('#sponsorDeceasedDisabledMIA-1')
      .expect.element('#apply-now-link').not.to.be.present;

    client
      .waitForElementVisible('label[for="sponsorTransferredBenefits-0"]', Timeouts.normal);

    // Select transfer
    client
      .click('#sponsorTransferredBenefits-0')
      .waitForElementVisible('#apply-now-link', Timeouts.normal);

    client
      .expect.element('#apply-now-link').to.have.attribute('href').which.contains('/education/apply-for-education-benefits/application/1990E');

    // Select non-transfer
    client
      .click('#sponsorTransferredBenefits-1')
      .waitForElementVisible('#apply-now-link', Timeouts.normal);

    client
      .expect.element('.usa-alert-warning').to.be.present;

    client
      .expect.element('#apply-now-link').to.have.attribute('href').which.contains('/education/apply-for-education-benefits/application/1990E');

    // Update an existing application
    client
      .click('#newBenefit-1')
      .expect.element('#apply-now-link').not.to.be.present;

    client
      .waitForElementVisible('label[for="transferredEduBenefits-0"]', Timeouts.normal);

    // Select dependent
    client
      .click('#transferredEduBenefits-2')
      .waitForElementVisible('#apply-now-link', Timeouts.normal);

    client
      .expect.element('.usa-alert-warning').not.to.be.present;

    client
      .expect.element('#apply-now-link').to.have.attribute('href').which.contains('/education/apply-for-education-benefits/application/5495');

    // Select non-dependent
    client
      .click('#transferredEduBenefits-0')
      .waitForElementVisible('#apply-now-link', Timeouts.normal);

    client
      .expect.element('#apply-now-link').to.have.attribute('href').which.contains('/education/apply-for-education-benefits/application/1995');

    // Navigate to application
    client
      .click('#apply-now-link')
      .pause(1000)
      .assert.urlContains('/education/apply-for-education-benefits/application/1995/introduction');

    client
      .end();
  }
);
