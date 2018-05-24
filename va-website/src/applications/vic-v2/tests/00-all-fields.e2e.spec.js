const E2eHelpers = require('../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../platform/testing/e2e/timeouts');
const PageHelpers = require('./vic-helpers');
const testData = require('./schema/maximal-test.json');

const runTest = E2eHelpers.createE2eTest(
  (client) => {
    PageHelpers.initPhotoUploadMock();
    PageHelpers.initDocumentUploadMock();
    PageHelpers.initApplicationSubmitMock();
    PageHelpers.initApplicationPollMock();

    // Ensure introduction page renders.
    client
      .url(`${E2eHelpers.baseUrl}/veteran-id-card/apply`)
      .waitForElementVisible('body', Timeouts.normal)
      .assert.title('Apply for a Veteran ID Card: Vets.gov')
      .waitForElementVisible('.schemaform-title', Timeouts.slow)  // First render of React may be slow.
      .click('.schemaform-start-button');

    E2eHelpers.overrideVetsGovApi(client);
    E2eHelpers.overrideSmoothScrolling(client);
    E2eHelpers.expectNavigateAwayFrom(client, '/introduction');

    // Applicant information page
    client.waitForElementVisible('input[name="root_veteranFullName_first"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeApplicantInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/applicant-information');

    // Address page
    client.waitForElementVisible('input[name="root_veteranAddress_city"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(2)', 'progress-segment-complete');
    PageHelpers.completeAddressInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/address-information');

    // Contact info page
    client.waitForElementVisible('input[name="root_email"]', Timeouts.normal);
    PageHelpers.completeContactInformation(client, testData.data);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(2)', 'progress-segment-complete');
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/contact-information');

    // // Photo page
    // client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(3)', 'progress-segment-complete');
    // client.waitForElementVisible('label.usa-button.usa-button-secondary', Timeouts.normal);
    // client.execute('window.resizeTo(1202, 800)');
    // // check that drop zone is large on large screen
    // client.expect.element('.drop-target').to.have.css('width').which.equals('300px');
    // // check that drop zone is small on small screen
    // client.execute('window.resizeTo(1024, 800)');
    // client.expect.element('.drop-target').to.have.css('width').which.equals('240px');
    // client.execute('window.resizeTo(1202, 800)');
    // client.axeCheck('.main');
    //
    // // Disable upload button style to reveal input for test
    // #<{(| HACK: style overridden so client driver can find/interact with hidden inputs
    //    (see https://github.com/nightwatchjs/nightwatch/issues/505) |)}>#
    // client
    //   .execute("document.getElementsByName('fileUpload')[0].style.display = 'block';");
    // // HACK: waitforElementVisible did not work but this does
    // client.elementIdDisplayed('errorable-file-input-11');
    //
    // // sighted path
    // // upload photo
    // client
    //   .setValue('input[name="fileUpload"]', require('path').resolve(`${__dirname}/examplephoto.jpg`));
    //
    // // crop photo
    // // check that crop box is large on large screen
    // client.waitForElementPresent('.cropper-crop-box', Timeouts.normal);
    // client.expect.element('.cropper-crop-box').to.have.css('width').which.equals('300px');
    // // check that crop box is small on small screen
    // client.execute('window.resizeTo(1024, 800)');
    // client.expect.element('.cropper-crop-box').to.have.css('width').which.equals('240px');
    // // check that crop tools are flat on large screen
    // client.expect.element('.cropper-control-container').to.have.css('width').which.equals('462px');
    // // check that crop tools are stacked on small screen
    // client.execute('window.resizeTo(1202, 800)');
    // client.expect.element('.cropper-control-container').to.have.css('width').which.equals('600px');
    // client.waitForElementVisible('.cropper-container-outer', Timeouts.normal);
    //
    // client.click('.form-panel .usa-button-primary');
    //
    // // preview photo
    // client.waitForElementVisible('.photo-preview', Timeouts.normal);
    // client.axeCheck('.main');
    // // check that preview is large on large screen
    // client.expect.element('.photo-preview').to.have.css('width').which.equals('300px');
    // // check that preview is small on small screen
    // client.execute('window.resizeTo(1024, 800)');
    // client.expect.element('.photo-preview').to.have.css('width').which.equals('240px');
    // client.execute('window.resizeTo(1202, 800)');
    //
    // // nonsighted path
    // // upload photo
    // client.click('.photo-preview-link');
    // client
    //   .execute("document.getElementsByName('screenReaderFileUpload')[0].style.display = 'block';");
    // // HACK: waitforElementVisible did not work but this does
    // client.elementIdDisplayed('errorable-file-input-12');
    // client
    //   .setValue('input[name="screenReaderFileUpload"]', require('path').resolve(`${__dirname}/examplephoto.jpg`));
    //
    // // preview photo
    // client.waitForElementVisible('.photo-preview', Timeouts.normal);
    // client.axeCheck('.main');
    // client.click('.form-panel .usa-button-primary');
    // E2eHelpers.expectNavigateAwayFrom(client, '/photo');
    //
    // // Discharge Documents page
    // client
    //   .waitForElementVisible('label[for="root_dd214"]', Timeouts.normal);
    // client
    //   .assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(3)', 'progress-segment-complete');
    // client.axeCheck('.main');
    //
    // // Disable upload button style to reveal input for test
    // #<{(| HACK: style overridden so client driver can find/interact with hidden inputs
    //    (see https://github.com/nightwatchjs/nightwatch/issues/505) |)}>#
    // client
    //   .execute("document.getElementById('root_dd214').style.display = 'block';")
    //   .waitForElementVisible('#root_dd214', Timeouts.normal);
    //
    // client
    //   .setValue('input#root_dd214', require('path').resolve(`${__dirname}/VA40-10007.pdf`));
    // client
    //   .waitForElementVisible('label#root_dd214_add_label', Timeouts.slow);
    // client.click('.form-panel .usa-button-primary');
    // E2eHelpers.expectNavigateAwayFrom(client, '/dd214');
    //
    // // Review and Submit Page.
    // client
    //   .waitForElementVisible('label[name="privacyAgreement-label"]', Timeouts.slow);
    // client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(4)', 'progress-segment-complete');
    // client.axeCheck('.main');
    // client.click('button[aria-controls="collapsible-11"]');
    // // check that preview is small on large review page
    // client.waitForElementPresent('.photo-review', Timeouts.normal);
    // client.expect.element('.photo-review').to.have.css('width').which.equals('150px');
    // // enter photo field
    // client.waitForElementPresent('.form-review-panel-page-header-row button', Timeouts.normal);
    // client.click('.form-review-panel-page-header-row button');
    // // edit photo
    // client.waitForElementPresent('.photo-preview-link.va-button-link', Timeouts.normal);
    // client.click('.photo-preview-link.va-button-link');
    // // Disable upload button style to reveal input for test
    // #<{(| HACK: style overridden so client driver can find/interact with hidden inputs
    //    (see https://github.com/nightwatchjs/nightwatch/issues/505) |)}>#
    // client
    //   .execute("document.getElementsByName('fileUpload')[0].style.display = 'block';");
    // // HACK: waitforElementVisible did not work but this does
    // client.elementIdDisplayed('errorable-file-input-11');
    // // check that drop target is small on large review page
    // client.waitForElementPresent('.drop-target', Timeouts.normal);
    // client.expect.element('.drop-target').to.have.css('width').which.equals('240px');
    // // upload photo
    // client
    //   .setValue('input[name="fileUpload"]', require('path').resolve(`${__dirname}/examplephoto.jpg`));
    // // check that cropbox is small on large review page
    // client.waitForElementPresent('.cropper-crop-box', Timeouts.normal);
    // client.expect.element('.cropper-crop-box').to.have.css('width').which.equals('240px');
    // // check that crop tools are flat on large screen
    // client.expect.element('.cropper-control-container').to.have.css('width').which.equals('512.047px');
    // // crop photo
    // client.click('.crop-button-container .usa-button-primary');
    // // preview
    // // wait for upload
    // client.waitForElementPresent('.photo-preview', Timeouts.normal);
    // // check that preview is large on large screen
    // client.expect.element('.photo-preview').to.have.css('width').which.equals('240px');
    // // update form
    // client.waitForElementPresent('.usa-button-primary', Timeouts.normal);
    // client.click('.usa-button-primary');
    //
    // // Accept privacy agreement
    // client.click('input[type="checkbox"]');
    // client.click('.form-progress-buttons .usa-button-primary');
    // E2eHelpers.expectNavigateAwayFrom(client, '/review-and-submit');
    // client.expect.element('.js-test-location').attribute('data-location')
    //   .to.not.contain('/review-and-submit').before(Timeouts.slow);
    //
    // // Submit message
    // client.waitForElementVisible('.schemaform-confirmation-section-header', Timeouts.normal);
    //
    client.axeCheck('.main');
    client.end();
  }
);

module.exports = runTest;
