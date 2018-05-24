const E2eHelpers = require('../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../platform/testing/e2e/timeouts');
const PageHelpers = require('./pensions-helpers');
const testData = require('./schema/maximal-test.json');

const runTest = E2eHelpers.createE2eTest(
  (client) => {
    PageHelpers.initApplicationSubmitMock();
    PageHelpers.initDocumentUploadMock();

    // Ensure introduction page renders.
    client
      .url(`${E2eHelpers.baseUrl}/pension/application/527EZ`)
      .waitForElementVisible('body', Timeouts.normal)
      .assert.title('Apply for pension benefits: Vets.gov')
      .waitForElementVisible('.schemaform-title', Timeouts.slow)  // First render of React may be slow.
      .click('.usa-button-primary');

    E2eHelpers.overrideVetsGovApi(client);
    E2eHelpers.overrideSmoothScrolling(client);
    E2eHelpers.expectNavigateAwayFrom(client, '/introduction');

    // Applicant Information page
    client.waitForElementVisible('input[name="root_veteranFullName_first"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeApplicantInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/applicant-information');

    // Military History page
    client.waitForElementVisible('input[name="root_servicePeriods_0_serviceBranch"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeMilitaryHistory(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/military/history');

    client.waitForElementVisible('label[for="root_view:serveUnderOtherNamesYes"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeGeneralMilitaryInfo(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/military/general');

    client.waitForElementVisible('label[for="root_nationalGuardActivationYes"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeNationalGuard(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/military/reserve-national-guard');

    client.waitForElementVisible('label[for="root_view:powStatusYes"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completePOW(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/military/pow-severance');

    // Work History page

    client.waitForElementVisible('label[for="root_disabilities_0_name"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeDisabilityHistory(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/disability/history');

    client.waitForElementVisible('label[for="root_view:workedBeforeDisabledYes"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeWorkHistory(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/employment/history');

    // marriage info
    client.waitForElementVisible('label[for="root_maritalStatus_0"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeMaritalStatus(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/household/marriage-info');

    // first marriage
    client.waitForElementVisible('label[for="root_spouseFullName_first"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeMarriage(client, testData.data, 0);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/household/marriages/0');

    // second marriage
    client.waitForElementVisible('label[for="root_spouseFullName_first"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeMarriage(client, testData.data, 1);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/household/marriages/1');

    // spouse info
    client.waitForElementVisible('label[for="root_spouseDateOfBirthMonth"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeSpouseInfo(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/household/spouse-info');

    // spouse marriage
    client.waitForElementVisible('label[for="root_dateOfMarriageMonth"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeSpouseMarriage(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/household/spouse-marriages/0');

    // dependents
    client.waitForElementVisible('label[for="root_view:hasDependentsYes"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeDependents(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');

    // dependent info
    client.waitForElementVisible('label[for="root_childPlaceOfBirth"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeDependentInfo(client, testData.data, 0);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/household/dependents/children/information/0');

    // dependent address info
    client.waitForElementVisible('label[for="root_childInHouseholdYes"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeDependentAddressInfo(client, testData.data, 0);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/household/dependents/children/address/0');

    // second dependent info
    client.waitForElementVisible('label[for="root_childPlaceOfBirth"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeDependentInfo(client, testData.data, 1);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/household/dependents/children/information/1');

    // second dependent address info
    client.waitForElementVisible('label[for="root_childInHouseholdYes"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeDependentAddressInfo(client, testData.data, 1);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/household/dependents/children/address/0');

    // Financial disclosure page
    // net worth info
    client.waitForElementVisible('label[for="root_netWorth_bank"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeNetWorthInfo(client, testData.data.netWorth);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/financial-disclosure/net-worth');

    // monthly income info
    client.waitForElementVisible('label[for="root_monthlyIncome_socialSecurity"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeMonthlyIncomeInfo(client, testData.data.monthlyIncome);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/financial-disclosure/monthly-income');

    // expected income info
    client.waitForElementVisible('label[for="root_expectedIncome_salary"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeExpectedIncomeInfo(client, testData.data.expectedIncome);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/financial-disclosure/expected-income');

    // other expenses info
    client.waitForElementVisible('label[for="root_view:hasOtherExpensesYes"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    client.selectYesNo('root_view:hasOtherExpenses', testData.data['view:hasOtherExpenses']);
    PageHelpers.completeOtherExpensesInfo(client, testData.data.otherExpenses[0]);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/financial-disclosure/other-expenses');

    // spouse net worth info
    client.waitForElementVisible('label[for="root_spouseNetWorth_bank"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeNetWorthInfo(client, testData.data.spouseNetWorth);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/financial-disclosure/net-worth/spouse');

    // spouse monthly income info
    client.waitForElementVisible('label[for="root_spouseMonthlyIncome_socialSecurity"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeMonthlyIncomeInfo(client, testData.data.spouseMonthlyIncome);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/financial-disclosure/monthly-income/spouse');

    // spouse expected income info
    client.waitForElementVisible('label[for="root_spouseExpectedIncome_salary"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeExpectedIncomeInfo(client, testData.data.spouseExpectedIncome);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/financial-disclosure/expected-income/spouse');

    // spouse other expenses info
    client.waitForElementVisible('label[for="root_view:spouseHasOtherExpensesYes"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    client.selectYesNo('root_view:spouseHasOtherExpenses', testData.data['view:spouseHasOtherExpenses']);
    PageHelpers.completeOtherExpensesInfo(client, testData.data.spouseOtherExpenses[0], 'spouseOther');
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/financial-disclosure/other-expenses/spouse');

    // first dependent net worth info
    client.waitForElementVisible('label[for="root_netWorth_bank"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeNetWorthInfo(client, testData.data.dependents[0].netWorth);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/financial-disclosure/net-worth/dependents/0');

    // first dependent income info
    client.waitForElementVisible('label[for="root_monthlyIncome_socialSecurity"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeMonthlyIncomeInfo(client, testData.data.dependents[0].monthlyIncome);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/financial-disclosure/monthly-income/dependents/0');

    // first dependent expected income info
    client.waitForElementVisible('label[for="root_expectedIncome_salary"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeExpectedIncomeInfo(client, testData.data.dependents[0].expectedIncome);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/financial-disclosure/expected-income/dependents/0');

    // first dependent other expenses info
    client.waitForElementVisible('label[for="root_view:hasOtherExpensesYes"]', Timeouts.normal);
    client.selectYesNo('root_view:hasOtherExpenses', testData.data.dependents[0]['view:hasOtherExpenses']);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeOtherExpensesInfo(client, testData.data.dependents[0].otherExpenses[0]);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/financial-disclosure/other-expenses/dependents/0');

    // second dependent net worth info
    client.waitForElementVisible('label[for="root_netWorth_bank"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeNetWorthInfo(client, testData.data.dependents[1].netWorth);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/financial-disclosure/net-worth/dependents/1');

    // second dependent income info
    client.waitForElementVisible('label[for="root_monthlyIncome_socialSecurity"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeMonthlyIncomeInfo(client, testData.data.dependents[1].monthlyIncome);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/financial-disclosure/monthly-income/dependents/1');

    // second dependent expected income info
    client.waitForElementVisible('label[for="root_expectedIncome_salary"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeExpectedIncomeInfo(client, testData.data.dependents[1].expectedIncome);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/financial-disclosure/expected-income/dependents/1');

    // second dependent other expenses info
    client.waitForElementVisible('label[for="root_view:hasOtherExpensesYes"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    client.selectYesNo('root_view:hasOtherExpenses', testData.data.dependents[1]['view:hasOtherExpenses']);
    PageHelpers.completeOtherExpensesInfo(client, testData.data.dependents[1].otherExpenses[0]);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/financial-disclosure/other-expenses/dependents/1');

    // Additional Information page
    // direct deposit
    client.waitForElementVisible('label[for="root_view:noDirectDeposit"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeDirectDepositInfo(client, testData.data.bankAccount);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/additional-information/direct-deposit');

    // contact information
    client.waitForElementVisible('label[for="root_veteranAddress_country"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeContactInfo(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/additional-information/contact');

    // Benefits selection page
    client.waitForElementVisible('.usa-alert-info', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/additional-information/aid-attendance');

    // Document Upload page
    client.waitForElementVisible('label[for="root_files"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');

    if (!process.env.SAUCE_ACCESS_KEY) {
      // Looks like there are issues with uploads in nightwatch and Selenium
      // https://github.com/nightwatchjs/nightwatch/issues/890
      client
        .setValue('input#root_files', require('path').resolve(`${__dirname}/test.png`));
      client.waitForElementVisible('.va-button-link', Timeouts.slow);
    }

    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/documents');

    // FDC page
    client.waitForElementVisible('label[for="root_noRapidProcessingYes"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeExpeditedInfo(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/additional-information/fdc');

    // Review and Submit page
    client
      .waitForElementVisible('label[name="privacyAgreement-label"]', Timeouts.slow)
      .pause(1000)
      .click('input[type="checkbox"]')
      .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/review-and-submit');
    client.expect.element('.js-test-location').attribute('data-location')
      .to.not.contain('/review-and-submit').before(Timeouts.slow);

    // Submit message
    client.waitForElementVisible('.confirmation-page-title', Timeouts.normal);

    client.axeCheck('.main');
    client.end();
  }
);

module.exports = runTest;
