const E2eHelpers = require('../../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../../platform/testing/e2e/timeouts.js');
const EduHelpers = require('../1990/edu-helpers');
const Edu5495Helpers = require('./edu-5495-helpers');
const testData = require('./schema/maximal-test.json');

module.exports = E2eHelpers.createE2eTest(
  (client) => {
    EduHelpers.initApplicationSubmitMock('5495');

    // Ensure introduction page renders.
    client
      .url(`${E2eHelpers.baseUrl}/education/apply-for-education-benefits/application/5495`)
      .waitForElementVisible('body', Timeouts.normal)
      .assert.title('Apply for education benefits: Vets.gov')
      .waitForElementVisible('.usa-button-primary', Timeouts.slow)
      .axeCheck('.main')
      .click('.usa-button-primary');
    E2eHelpers.overrideVetsGovApi(client);
    E2eHelpers.overrideSmoothScrolling(client);
    E2eHelpers.expectNavigateAwayFrom(client, '/introduction');

    // Applicant information page.
    client
      .waitForElementVisible('input[name="root_relativeFullName_first"]', Timeouts.slow);
    EduHelpers.completeApplicantInformation(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/applicant/information');

    // Applicant service page
    client
      .waitForElementVisible('label[for="root_view:applicantServedYes"]', Timeouts.slow);
    EduHelpers.completeServicePeriods(client, testData.data, 'view:applicantServed');
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/applicant/service');

    // Benefits eligibility page.
    client
      .waitForElementVisible('label[for="root_benefit_0"]', Timeouts.slow);
    EduHelpers.completeBenefitsSelection(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/benefits/eligibility');

    // Sponsor information page
    client
      .waitForElementVisible('input[name="root_veteranFullName_first"]', Timeouts.slow);
    Edu5495Helpers.completeSponsorInformation(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/sponsor/information');


    // New school page.
    client
      .waitForElementVisible('label[for="root_educationProgram_name"]', Timeouts.slow);
    EduHelpers.completeSchoolSelection(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');

    // Old school
    client
      .waitForElementVisible('label[for="root_oldSchool_name"]', Timeouts.slow);
    Edu5495Helpers.completeOldSchool(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/school-selection/old-school');

    // Contact information page.
    client
      .waitForElementVisible('label[for="root_preferredContactMethod_0"]', Timeouts.slow);
    EduHelpers.completeContactInformation(client, testData.data, true);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/personal-information/contact-information');

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
