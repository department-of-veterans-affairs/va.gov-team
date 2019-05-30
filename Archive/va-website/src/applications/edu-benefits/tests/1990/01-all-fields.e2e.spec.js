const E2eHelpers = require('../../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../../platform/testing/e2e/timeouts.js');
const EduHelpers = require('./edu-helpers');
const Edu1990Helpers = require('./edu-1990-helpers');
const testData = require('./schema/maximal-test.json');

const test = E2eHelpers.createE2eTest(
  (client) => {
    EduHelpers.initApplicationSubmitMock('1990');

    // Ensure introduction page renders
    client
      .url(`${E2eHelpers.baseUrl}/education/apply-for-education-benefits/application/1990`)
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
      .waitForElementVisible('input[name="root_veteranFullName_first"]', Timeouts.slow);
    EduHelpers.completeApplicantInformation(client, testData.data, 'veteran');
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/applicant/information');

    // benefits page
    client
      .waitForElementVisible('label[for="root_view:selectedBenefits_chapter32"]', Timeouts.slow);
    Edu1990Helpers.completeBenefitsSelection(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/benefits-eligibility/benefits-selection');

    // Benefit relinquishment page
    client
      .waitForElementVisible('label[for="root_view:benefitsRelinquishedContainer_benefitsRelinquished_0"]', Timeouts.slow);
    Edu1990Helpers.completeBenefitRelinquishment(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/benefits-eligibility/benefits-relinquishment');

    // Applicant service page
    client
      .waitForElementVisible('label[for="root_toursOfDuty_0_serviceBranch"]', Timeouts.slow);
    EduHelpers.completeServicePeriods(client, testData.data, null);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/military-history/service-periods');

    // military history
    client
      .waitForElementVisible('label[for="root_serviceAcademyGraduationYear"]', Timeouts.slow);
    Edu1990Helpers.completeMilitaryHistory(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/military-history/military-service');

    // rotc history
    client
      .waitForElementVisible('label[for="root_seniorRotcScholarshipProgramYes"]', Timeouts.slow);
    Edu1990Helpers.completeRotcHistory(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/military-history/rotc-history');

    // contributions history
    client
      .waitForElementVisible('label[for="root_civilianBenefitsAssistance"]', Timeouts.slow);
    Edu1990Helpers.completeContributions(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/military-history/contributions');

    // Education history page
    client
      .waitForElementVisible('label[for="root_highSchoolOrGedCompletionDateMonth"]', Timeouts.slow);
    Edu1990Helpers.completeEducationHistory(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/education-history/education-information');

    // Employment history page
    client
      .waitForElementVisible('label[for="root_view:hasNonMilitaryJobsYes"]', Timeouts.slow);
    EduHelpers.completeEmploymentHistory(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/employment-history/employment-information');

    // School selection page
    client
      .waitForElementVisible('input[name="root_educationProgram_name"]', Timeouts.slow);
    EduHelpers.completeSchoolSelection(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/school-selection/school-information');

    // Contact information page
    client
      .waitForElementVisible('label[for="root_preferredContactMethod_0"]', Timeouts.slow);
    EduHelpers.completeContactInformation(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/personal-information/contact-information');

    // Secondary contact page
    client
      .waitForElementVisible('label[for="root_secondaryContact_fullName"]', Timeouts.slow);
    Edu1990Helpers.completeSecondaryContact(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, 'personal-information/secondary-contact');

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
      .click('.form-progress-buttons .usa-button-primary');
    client.expect.element('.js-test-location').attribute('data-location')
      .to.not.contain('/review-and-submit').before(Timeouts.submission);

    // Confirmation page
    client.waitForElementVisible('.confirmation-page-title', Timeouts.normal);
    client
      .axeCheck('.main')
      .end();
  }
);

module.exports = test;
