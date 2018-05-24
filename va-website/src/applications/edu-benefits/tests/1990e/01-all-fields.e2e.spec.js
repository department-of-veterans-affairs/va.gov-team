const E2eHelpers = require('../../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../../platform/testing/e2e/timeouts.js');
const EduHelpers = require('../1990/edu-helpers');
const Edu1990eHelpers = require('./edu-1990e-helpers');
const testData = require('./schema/maximal-test.json');

module.exports = E2eHelpers.createE2eTest(
  (client) => {
    EduHelpers.initApplicationSubmitMock('1990e');

    // Introduction page renders
    client
      .url(`${E2eHelpers.baseUrl}/education/apply-for-education-benefits/application/1990E`)
      .waitForElementVisible('body', Timeouts.normal)
      .assert.title('Apply for education benefits: Vets.gov')
      .waitForElementVisible('.usa-button-primary', Timeouts.slow)
      .axeCheck('.main')
      .click('.usa-button-primary');
    E2eHelpers.overrideVetsGovApi(client);
    E2eHelpers.overrideSmoothScrolling(client);
    E2eHelpers.expectNavigateAwayFrom(client, '/introduction');

    // Applicant information page
    client
      .waitForElementVisible('input[name="root_relativeFullName_first"]', Timeouts.slow);
    EduHelpers.completeApplicantInformation(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/applicant/information');

    // Additional benefits page
    client
      .waitForElementVisible('label[for="root_nonVaAssistanceYes"]', Timeouts.slow);
    EduHelpers.completeAdditionalBenefits(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/applicant/additional-benefits');

    // Benefits eligibility page
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
    EduHelpers.completeVeteranInformation(client, testData.data);
    EduHelpers.completeVeteranAddress(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/sponsor/information');

    // Education history page
    client
      .waitForElementVisible('input[name="root_postHighSchoolTrainings_0_name"]', Timeouts.slow);
    Edu1990eHelpers.completeEducationHistory(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/education/history');

    // Employment history page
    client
      .waitForElementVisible('label[for="root_view:hasNonMilitaryJobsYes"]', Timeouts.slow);
    EduHelpers.completeEmploymentHistory(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/employment/history');

    // School selection page
    client
      .waitForElementVisible('input[name="root_educationProgram_name"]', Timeouts.slow);
    EduHelpers.completeSchoolSelection(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/school-selection');

    // Contact information page
    client
      .waitForElementVisible('label[for="root_preferredContactMethod_0"]', Timeouts.slow);
    EduHelpers.completeContactInformation(client, testData.data, true);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/personal-information/contact-information');

    // Direct deposit page
    client
      .waitForElementVisible('label[for="root_bankAccount_accountType_0"]', Timeouts.slow);
    EduHelpers.completeDirectDeposit(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/personal-information/direct-deposit');

    // Review and submit page
    client
      .waitForElementVisible('label[name="privacyAgreement-label"]', Timeouts.slow)
      .pause(1000)
      .click('input[type="checkbox"]')
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary')
      .expect.element('.js-test-location').attribute('data-location')
      .to.not.contain('/review-and-submit').before(Timeouts.slow);

    // Confirmation page
    client.waitForElementVisible('.confirmation-page-title', Timeouts.normal);
    client
      .axeCheck('.main')
      .end();
  }
);
