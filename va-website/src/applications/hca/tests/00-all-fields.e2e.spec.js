const E2eHelpers = require('../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../platform/testing/e2e/timeouts.js');
const HcaHelpers = require('./hca-helpers.js');
const testData = require('./schema/maximal-test.json');

module.exports = E2eHelpers.createE2eTest(
  (client) => {
    HcaHelpers.initApplicationSubmitMock();

    // Ensure introduction page renders.
    client
      .url(`${E2eHelpers.baseUrl}/health-care/apply/application`)
      .waitForElementVisible('body', Timeouts.normal)
      .assert.title('Apply for Health Care: Vets.gov')
      .waitForElementVisible('.schemaform-title', Timeouts.slow)  // First render of React may be slow.
      .click('.usa-button-primary');

    E2eHelpers.overrideVetsGovApi(client);
    E2eHelpers.overrideSmoothScrolling(client);
    E2eHelpers.expectNavigateAwayFrom(client, '/introduction');

    // Personal Information page.
    client.expect.element('input[name="root_veteranFullName_first"]').to.be.visible;
    HcaHelpers.completePersonalInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/veteran-information/personal-information');

    // Birth information page.
    client.expect.element('select[name="root_veteranDateOfBirthMonth"]').to.be.visible;
    HcaHelpers.completeBirthInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/veteran-information/birth-information');

    // Demographic information page.
    client.expect.element('select[name="root_gender"]').to.be.visible;
    HcaHelpers.completeDemographicInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/veteran-information/demographic-information');

    // Veteran Address page.
    client.expect.element('select[name="root_veteranAddress_country"]').to.be.visible;
    HcaHelpers.completeVeteranAddress(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/veteran-information/veteran-address');

    // Contact Information Page.
    client.expect.element('input[name="root_email"]').to.be.visible;
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/veteran-information/contact-information');

    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');

    // Military Service Information Page.
    client.expect.element('select[name="root_lastServiceBranch"]').to.be.visible;
    HcaHelpers.completeMilitaryService(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/military-service/service-information');

    // Military Service Additional Information Page.
    client.waitForElementVisible('label[for="root_purpleHeartRecipient"]', Timeouts.slow);
    HcaHelpers.completeAdditionalInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/military-service/additional-information');

    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(2)', 'progress-segment-complete');

    // VA Benefits Basic Info page.
    client.waitForElementVisible('label[for="root_vaCompensationType_0"]', Timeouts.normal);
    HcaHelpers.completeVaBenefits(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/va-benefits/basic-information');

    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(3)', 'progress-segment-complete');

    // Financial disclosure page.
    client.expect.element('label[for="root_discloseFinancialInformationYes"]').to.be.visible;
    HcaHelpers.completeFinancialDisclosure(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/household-information/financial-disclosure');

    // Spouse information Page
    client.expect.element('label[for="root_spouseFullName_first"]').to.be.visible.before(Timeouts.normal);
    HcaHelpers.completeSpouseInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/household-information/spouse-information');

    // Dependent Information Page
    client.expect.element('label[for="root_view:reportDependentsYes"]').to.be.visible;
    HcaHelpers.completeDependentInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/household-information/dependent-information');

    // Annual Income Page
    client.expect.element('input[name="root_veteranGrossIncome"]').to.be.visible;
    HcaHelpers.completeAnnualIncomeInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/household-information/annual-income');

    // Deductible Expenses Page
    client.expect.element('label[for="root_deductibleMedicalExpenses"]').to.be.visible;
    HcaHelpers.completeDeductibleExpenses(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/household-information/deductible-expenses');

    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(4)', 'progress-segment-complete');

    // Medicare and Medicaid Page.
    client.expect.element('label[for="root_isMedicaidEligibleYes"]').to.be.visible;
    HcaHelpers.completeMedicareAndMedicaid(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/insurance-information/medicare');

    // Insurance Information Page.
    client.expect.element('label[for="root_isCoveredByHealthInsuranceYes"]').to.be.visible;
    HcaHelpers.completeInsuranceInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/insurance-information/general');

    // Additional VA Insurance Information Page.
    client.expect.element('select[name="root_view:preferredFacility_view:facilityState"]').to.be.visible;
    HcaHelpers.completeVaInsuranceInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/insurance-information/va-facility');

    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(5)', 'progress-segment-complete');

    // Review and Submit Page.
    client
      .waitForElementVisible('label[name="privacyAgreement-label"]', Timeouts.slow)
      .pause(1000)
      .click('input[type="checkbox"]')
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    // E2eHelpers.expectNavigateAwayFrom(client, '/review-and-submit');
    client.expect.element('.js-test-location').attribute('data-location')
      .to.not.contain('/review-and-submit').before(Timeouts.slow);

    // Submit message
    client.expect.element('.confirmation-page-title').to.be.visible;

    client.axeCheck('.main');

    client.end();
  });
