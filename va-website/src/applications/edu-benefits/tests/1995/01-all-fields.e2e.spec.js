const E2eHelpers = require('../../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../../platform/testing/e2e/timeouts.js');
const EduHelpers = require('../1990/edu-helpers');
const Edu1995Helpers = require('./edu-1995-helpers');
const testData = require('./schema/maximal-test.json');

module.exports = E2eHelpers.createE2eTest(
  (client) => {
    EduHelpers.initApplicationSubmitMock('1995');

    // Ensure introduction page renders.
    client
      .url(`${E2eHelpers.baseUrl}/education/apply-for-education-benefits/application/1995`)
      .waitForElementVisible('body', Timeouts.normal)
      .assert.title('Apply for education benefits: Vets.gov')
      .waitForElementVisible('.usa-button-primary', Timeouts.slow)
      .axeCheck('.main')
      .click('.usa-button-primary');
    E2eHelpers.overrideVetsGovApi(client);
    E2eHelpers.overrideSmoothScrolling(client);
    E2eHelpers.expectNavigateAwayFrom(client, '/introduction');

    // Veteran information page.
    client
      .waitForElementVisible('input[name="root_veteranFullName_first"]', Timeouts.slow);
    EduHelpers.completeApplicantInformation(client, testData.data, 'veteran');
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/applicant/information');

    // Benefits eligibility page.
    client
      .waitForElementVisible('label[for="root_benefit_0"]', Timeouts.slow);
    EduHelpers.completeBenefitsSelection(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/benefits/eligibility');

    // Service periods page.
    client
      .waitForElementVisible('label[for="root_view:newServiceYes"]', Timeouts.slow);
    EduHelpers.completeServicePeriods(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/military/service');

    // Military service page.
    client
      .waitForElementVisible('label[for="root_view:hasServiceBefore1978Yes"]', Timeouts.slow);
    Edu1995Helpers.completeMilitaryService(client);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/military/service');

    // New school page.
    client
      .waitForElementVisible('label[for="root_educationType"]', Timeouts.slow);
    Edu1995Helpers.completeNewSchool(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/school-selection/new-school');

    // Old school
    client
      .waitForElementVisible('label[for="root_oldSchool_name"]', Timeouts.slow);
    Edu1995Helpers.completeOldSchool(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/school-selection/old-school');

    // Contact information page.
    client
      .waitForElementVisible('label[for="root_preferredContactMethod_0"]', Timeouts.slow);
    EduHelpers.completeContactInformation(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/personal-information/contact-information');

    // Dependents page.
    client
      .waitForElementVisible('label[for="root_serviceBefore1977_marriedYes"]', Timeouts.slow);
    Edu1995Helpers.completeDependents(client);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/personal-information/dependents');

    // Direct deposit page.
    client
      .waitForElementVisible('label[for="root_bankAccountChange_0"]', Timeouts.slow);
    EduHelpers.completePaymentChange(client, testData.data);
    EduHelpers.completeDirectDeposit(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/personal-information/direct-deposit');

    // Review and submit page.
    client
      .waitForElementVisible('label[name="privacyAgreement-label"]', Timeouts.slow)
      .pause(1000)
      .click('input[type="checkbox"]')
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary')
      .expect.element('.js-test-location').attribute('data-location')
      .to.not.contain('/review-and-submit').before(Timeouts.slow);

    // Confirmation page.
    client.waitForElementVisible('.confirmation-page-title', Timeouts.normal);
    client
      .axeCheck('.main')
      .end();
  }
);
