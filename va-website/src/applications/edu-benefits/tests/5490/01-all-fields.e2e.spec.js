const E2eHelpers = require('../../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../../platform/testing/e2e/timeouts.js');
const EduHelpers = require('../1990/edu-helpers');
const Edu5490Helpers = require('./edu-5490-helpers');
const testData = require('./schema/maximal-test.json');

module.exports = E2eHelpers.createE2eTest(
  (client) => {
    EduHelpers.initApplicationSubmitMock('5490');

    // Ensure introduction page renders
    client
      .url(`${E2eHelpers.baseUrl}/education/apply-for-education-benefits/application/5490`)
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
    EduHelpers.completeApplicantInformation(client, {
      relationship: testData.data.relationship,
      ...testData.data
    });
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/applicant/information');

    // Additional benefits page
    client
      .waitForElementVisible('label[for="root_civilianBenefitsAssistanceYes"]', Timeouts.slow);
    EduHelpers.completeAdditionalBenefits(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/applicant/additional-benefits');

    // Applicant service page
    client
      .waitForElementVisible('label[for="root_view:applicantServedYes"]', Timeouts.slow);
    EduHelpers.completeServicePeriods(client, testData.data, 'view:applicantServed');
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/applicant/service');

    // Benefit selection page
    client
      .waitForElementVisible('label[for="root_benefit_0"]', Timeouts.slow);
    EduHelpers.completeBenefitsSelection(client, testData.data);
    // It's like this isn't getting clicked...when I click it in Electron after
    //  it's hung up, I get to the next page. I wonder if it has to do with the
    //  expanding animation...? At any rate, waiting for the expanded element to
    //  be visible seems to make it work.
    client
      .waitForElementVisible('div.schemaform-radio-indent', Timeouts.normal)
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/benefits/eligibility');

    // Benefit relinquishment page
    // This page will only be accessed if relationship is a child
    if (testData.relationship === 'child') {
      client
        .waitForElementVisible('label[for="root_benefitsRelinquishedDateMonth"]', Timeouts.slow);
      Edu5490Helpers.completeBenefitRelinquishment(client, testData.data);
      client
        .axeCheck('.main')
        .click('.form-progress-buttons .usa-button-primary');
      E2eHelpers.expectNavigateAwayFrom(client, '/benefits/relinquishment');
    }

    // Benefit history page
    client
      .waitForElementVisible('label[for="root_previousBenefits_disability"]', Timeouts.slow);
    Edu5490Helpers.completeBenefitHistory(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/benefits/history');

    // Sponsor information page
    client
      .waitForElementVisible('input[name="root_view:currentSponsorInformation_veteranFullName_first"]', Timeouts.slow);
    // Alternatively, we can write a whole new function for this if this is going to
    //  be very specific to the 5490
    EduHelpers.completeVeteranInformation(client,
      Object.assign({},
        testData.data,
        testData.data['view:currentSponsorInformation']
      ),
      'root_view:currentSponsorInformation'
    );
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/veteran/information');

    // Sponsor service page
    client
      .waitForElementVisible('input[name="root_serviceBranch"]', Timeouts.slow);
    Edu5490Helpers.completeSponsorService(client, testData.data);
    client
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/sponsor/service');

    // Education history page
    client
      .waitForElementVisible('select[name="root_highSchool_status"]', Timeouts.slow);
    Edu5490Helpers.completeEducationHistory(client, testData.data);
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

    // Secondary contact page
    client
      .waitForElementVisible('label[for="root_secondaryContact_fullName"]', Timeouts.slow);
    Edu5490Helpers.completeSecondaryContact(client, testData.data);
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
