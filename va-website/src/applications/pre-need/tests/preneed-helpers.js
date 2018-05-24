const mock = require('../../../platform/testing/e2e/mock-helpers');
const Timeouts = require('../../../platform/testing/e2e/timeouts.js');

function completeClaimantInformation(client, data) {
  client
    .fillName('root_application_claimant_name', data.application.claimant.name)
    .fill('input[name="root_application_claimant_ssn"]', data.application.claimant.ssn)
    .fillDate('root_application_claimant_dateOfBirth', data.application.claimant.dateOfBirth)
    .selectRadio('root_application_claimant_relationshipToVet', data.application.claimant.relationshipToVet);

  if (data.application.claimant.relationshipToVet.type === 'other') {
    client
      .waitForElementVisible('input[name="root_application_claimant_relationship_other"]', Timeouts.normal)
      .fill('input[name="root_application_claimant_relationship_other"]', data.application.claimant.relationship.other)
      // Not sure what to do with this, exactly, but I'll make it an option.
      .clickIf('#root_application_claimant_relationship_view:isEntity', data.application.claimant.relationship.isEntity);
  }
}

function completeVeteranInformation(client, data) {
  client
    .fillName('root_application_veteran_currentName', data.application.veteran.currentName)
    .fill('input[name="root_application_veteran_ssn"]', data.application.veteran.ssn)
    .fill('input[name="root_application_veteran_militaryServiceNumber"]', data.application.veteran.militaryServiceNumber)
    .fillDate('root_application_veteran_dateOfBirth', data.application.veteran.dateOfBirth)
    .fill('input[name="root_application_veteran_placeOfBirth"]', data.application.veteran.placeOfBirth)
    .selectRadio('root_application_veteran_gender', data.application.veteran.gender)
    .selectRadio('root_application_veteran_maritalStatus', data.application.veteran.maritalStatus)
    .selectDropdown('root_application_veteran_militaryStatus', data.application.veteran.militaryStatus)
    .selectRadio('root_application_veteran_isDeceased', data.application.veteran.isDeceased)
    .fillDate('root_application_veteran_dateOfDeath', data.application.veteran.dateOfDeath);
}

function completeServicePeriods(client, data) {
  data.serviceRecords.forEach((tour, index) => {
    client
      .fillDate(`root_application_veteran_serviceRecords_${index}_dateRange_from`, tour.dateRange.from)
      .fillDate(`root_application_veteran_serviceRecords_${index}_dateRange_to`, tour.dateRange.to)
      .click(`input[name="root_application_veteran_serviceRecords_${index}_serviceBranch"]`)
      .fill(`input[name="root_application_veteran_serviceRecords_${index}_serviceBranch"]`, 'ALLIED FORCES')
      .sendKeys(`input[name="root_application_veteran_serviceRecords_${index}_serviceBranch"]`, client.Keys.DOWN_ARROW)
      .sendKeys(`input[name="root_application_veteran_serviceRecords_${index}_serviceBranch"]`, client.Keys.ENTER)
      .fill(`input[name="root_application_veteran_serviceRecords_${index}_highestRank"]`, tour.highestRank)
      .selectDropdown(`root_application_veteran_serviceRecords_${index}_dischargeType`, tour.dischargeType);

    // Keep adding them until we're finished.
    if (index < data.serviceRecords.length - 1) {
      client.click('.usa-button-secondary.va-growable-add-btn');
    }
  });
}

function completeServiceName(client, data) {
  client.selectRadio('root_application_veteran_view:hasServiceName', 'Y')
    .fillName('root_application_veteran_serviceName', data.serviceName);
}

function completeBenefitSelection(client, data) {
  // TODO: Include autosuggest interaction
  client
    .fill('input[name="root_application_claimant_desiredCemetery"]', data.claimant.desiredCemetery.label)
    .click('body')
  // Test is flaky so have to select option twice for it to register
    .selectRadio('root_application_hasCurrentlyBuried', data.hasCurrentlyBuried)
    .selectRadio('root_application_hasCurrentlyBuried', data.hasCurrentlyBuried);
  if (data.currentlyBuriedPersons.length) {
    data.currentlyBuriedPersons.forEach((person, index) => {
      client.fill(`input[name="root_application_currentlyBuriedPersons_${index}_cemeteryNumber"]`, person.cemeteryNumber.label)
        .fillName(`root_application_currentlyBuriedPersons_${index}_name`, person.name);
      if (index < data.currentlyBuriedPersons.length - 1) {
        client.click('.usa-button-secondary.va-growable-add-btn');
      }
    });
  }
}

function completeClaimantContactInformation(client, data) {
  client
    .fillAddress('root_application_claimant_address', data.address)
    .fill('input[name$="email"]', data.email)
    .fill('input[name$="phoneNumber"]', data.phoneNumber);
}


function completeVeteranContactInformation(client, data) {
  client.fillAddress('root_application_veteran_address', data.address);
}


function completeApplicantContactInformation(client, data) {
  client.selectRadio('root_application_applicant_applicantRelationshipToClaimant', data.applicantRelationshipToClaimant);
  if (data.applicantRelationshipToClaimant === 'Authorized Agent/Rep') {
    client.fillName('root_application_applicant_view:applicantInfo_name', data['view:applicantInfo'].name)
      .fillAddress('root_application_applicant_view:applicantInfo_mailingAddress', data['view:applicantInfo'].mailingAddress)
      .fill('input[name$="applicantPhoneNumber"]', data['view:applicantInfo']['view:contactInfo'].applicantPhoneNumber);
  }
}


function initApplicationSubmitMock() {
  mock(null, {
    path: '/v0/preneeds/burial_forms',
    verb: 'post',
    value: {
      data: {
        attributes: {
          confirmationNumber: '123fake-submission-id-567',
          submittedAt: '2016-05-16'
        }
      }
    }
  });
}

function initDocumentUploadMock() {
  mock(null, {
    path: '/v0/preneeds/preneed_attachments',
    verb: 'post',
    value: {
      data: {
        attributes: {
          attachmentId: '1',
          name: 'VA40-10007.pdf',
          confirmationCode: 'e2128ec4-b2fc-429c-bad2-e4b564a80d20',
        }
      }
    }
  });
}

function initGetCemeteriesMock() {
  mock(null, {
    path: '/v0/preneeds/cemeteries',
    verb: 'get',
    value: {
      data: [
        {
          id: '915',
          type: 'preneeds_cemeteries',
          /* eslint-disable camelcase */
          attributes: {
            cemetery_id: '915',
            name: 'ABRAHAM LINCOLN NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '915'
          }
        },
        {
          id: '400',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '400',
            name: 'ALABAMA STATE VETERANS MEMORIAL CEMETERY',
            cemetery_type: 'S',
            num: '400'
          }
        },
        {
          id: '927',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '927',
            name: 'ALABAMA VA NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '927'
          }
        },
        {
          id: '946',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '946',
            name: 'ALAMEDA NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '946'
          }
        },
        {
          id: '088',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '088',
            name: 'ALBANY RURAL CEMETERY',
            cemetery_type: 'P',
            num: '088'
          }
        },
        {
          id: '109',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '109',
            name: 'ALBERT G. HORTON, JR. MEMORIAL VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '109'
          }
        },
        {
          id: '825',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '825',
            name: 'ALEXANDRIA NATIONAL CEMETERY, LA',
            cemetery_type: 'N',
            num: '825'
          }
        },
        {
          id: '826',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '826',
            name: 'ALEXANDRIA NATIONAL CEMETERY, VA',
            cemetery_type: 'N',
            num: '826'
          }
        },
        {
          id: '120',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '120',
            name: 'ALLEGHENY CEMETERY',
            cemetery_type: 'P',
            num: '120'
          }
        },
        {
          id: '800',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '800',
            name: 'ALTON NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '800'
          }
        },
        {
          id: '409',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '409',
            name: 'ANDERSONVILLE NATIONAL HISTORICAL SITE',
            cemetery_type: 'I',
            num: '409'
          }
        },
        {
          id: '410',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '410',
            name: 'ANDREW JOHNSON NATIONAL CEMETERY',
            cemetery_type: 'I',
            num: '410'
          }
        },
        {
          id: '801',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '801',
            name: 'ANNAPOLIS NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '801'
          }
        },
        {
          id: '412',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '412',
            name: 'ARIZONA VETERANS MEMORIAL CEMETERY AT CAMP NAVAJO',
            cemetery_type: 'S',
            num: '412'
          }
        },
        {
          id: '413',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '413',
            name: 'ARIZONA VETERANS MEMORIAL CEMETERY AT MARANA',
            cemetery_type: 'S',
            num: '413'
          }
        },
        {
          id: '091',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '091',
            name: 'ARKANSAS STATE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '091'
          }
        },
        {
          id: '396',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '396',
            name: 'ARKANSAS STATE VETERANS CEMETERY-BIRDEYE',
            cemetery_type: 'S',
            num: '396'
          }
        },
        {
          id: '106',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '106',
            name: 'ARLINGTON CEMETERY',
            cemetery_type: 'S',
            num: '106'
          }
        },
        {
          id: '411',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '411',
            name: 'ARLINGTON NATIONAL CEMETERY',
            cemetery_type: 'A',
            num: '411'
          }
        },
        {
          id: '121',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '121',
            name: 'ASHLAND CEMETERY',
            cemetery_type: 'P',
            num: '121'
          }
        },
        {
          id: '406',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '406',
            name: 'ATLANTIC GARDEN VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '406'
          }
        },
        {
          id: '929',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '929',
            name: 'BAKERSFIELD VA NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '929'
          }
        },
        {
          id: '827',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '827',
            name: 'BALLS BLUFF NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '827'
          }
        },
        {
          id: '802',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '802',
            name: 'BALTIMORE NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '802'
          }
        },
        {
          id: '828',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '828',
            name: 'BARRANCAS NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '828'
          }
        },
        {
          id: '803',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '803',
            name: 'BATH NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '803'
          }
        },
        {
          id: '829',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '829',
            name: 'BATON ROUGE NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '829'
          }
        },
        {
          id: '042',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '042',
            name: 'BAXTER SPRINGS',
            cemetery_type: 'P',
            num: '042'
          }
        },
        {
          id: '830',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '830',
            name: 'BAY PINES NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '830'
          }
        },
        {
          id: '831',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '831',
            name: 'BEAUFORT NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '831'
          }
        },
        {
          id: '804',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '804',
            name: 'BEVERLY NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '804'
          }
        },
        {
          id: '025',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '025',
            name: "BG WILLIAM C DOYLE VET'S MEM CEM",
            cemetery_type: 'S',
            num: '025'
          }
        },
        {
          id: '832',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '832',
            name: 'BILOXI NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '832'
          }
        },
        {
          id: '884',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '884',
            name: 'BLACK HILLS NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '884'
          }
        },
        {
          id: '936',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '936',
            name: 'BUFFALO NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '936'
          }
        },
        {
          id: '414',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '414',
            name: 'CALIFORNIA CENTRAL COAST VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '414'
          }
        },
        {
          id: '805',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '805',
            name: 'CALVERTON NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '805'
          }
        },
        {
          id: '806',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '806',
            name: 'CAMP BUTLER NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '806'
          }
        },
        {
          id: '075',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '075',
            name: 'CAMP CHASE CONFEDERATE CEMETERY',
            cemetery_type: 'P',
            num: '075'
          }
        },
        {
          id: '833',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '833',
            name: 'CAMP NELSON NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '833'
          }
        },
        {
          id: '934',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '934',
            name: 'CAPE CANAVERAL NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '934'
          }
        },
        {
          id: '834',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '834',
            name: 'CAVE HILL NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '834'
          }
        },
        {
          id: '942',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '942',
            name: 'CEDAR CITY NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '942'
          }
        },
        {
          id: '397',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '397',
            name: 'CENTRAL LOUISIANA VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '397'
          }
        },
        {
          id: '127',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '127',
            name: 'CENTRAL TEXAS STATE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '127'
          }
        },
        {
          id: '015',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '015',
            name: 'CENTRAL WISCONSIN VETERANS MEMORIAL CEMETERY',
            cemetery_type: 'S',
            num: '015'
          }
        },
        {
          id: '835',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '835',
            name: 'CHATTANOOGA NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '835'
          }
        },
        {
          id: '001',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '001',
            name: 'CHELTENHAM VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '001'
          }
        },
        {
          id: '945',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '945',
            name: 'CHEYENNE NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '945'
          }
        },
        {
          id: '950',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '950',
            name: 'CHICAGO NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '950'
          }
        },
        {
          id: '836',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '836',
            name: 'CITY POINT NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '836'
          }
        },
        {
          id: '132',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '132',
            name: 'CNMI VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '132'
          }
        },
        {
          id: '395',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '395',
            name: 'COASTAL BEND VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '395'
          }
        },
        {
          id: '052',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '052',
            name: 'COASTAL CAROLINA STATE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '052'
          }
        },
        {
          id: '837',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '837',
            name: 'COLD HARBOR NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '837'
          }
        },
        {
          id: '010',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '010',
            name: 'COLONEL ROBERT F. GATES CEMETERY',
            cemetery_type: 'S',
            num: '010'
          }
        },
        {
          id: '933',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '933',
            name: 'COLORADO SPRINGS NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '933'
          }
        },
        {
          id: '073',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '073',
            name: 'CONFEDERATE MOUND',
            cemetery_type: 'P',
            num: '073'
          }
        },
        {
          id: '076',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '076',
            name: 'CONFEDERATE STOCKADE CEMETERY',
            cemetery_type: 'P',
            num: '076'
          }
        },
        {
          id: '054',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '054',
            name: 'CONGRESSIONAL CEMETERY',
            cemetery_type: 'P',
            num: '054'
          }
        },
        {
          id: '030',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '030',
            name: 'CONNECTICUT STATE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '030'
          }
        },
        {
          id: '838',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '838',
            name: 'CORINTH NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '838'
          }
        },
        {
          id: '074',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '074',
            name: 'CROWN HILL CONFEDERATE PLOT',
            cemetery_type: 'P',
            num: '074'
          }
        },
        {
          id: '807',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '807',
            name: 'CROWN HILL NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '807'
          }
        },
        {
          id: '002',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '002',
            name: 'CROWNSVILLE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '002'
          }
        },
        {
          id: '839',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '839',
            name: 'CULPEPER NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '839'
          }
        },
        {
          id: '808',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '808',
            name: 'CYPRESS HILLS NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '808'
          }
        },
        {
          id: '916',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '916',
            name: 'DALLAS - FT. WORTH NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '916'
          }
        },
        {
          id: '809',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '809',
            name: 'DANVILLE NATIONAL CEMETERY, IL',
            cemetery_type: 'N',
            num: '809'
          }
        },
        {
          id: '840',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '840',
            name: 'DANVILLE NATIONAL CEMETERY, KY',
            cemetery_type: 'N',
            num: '840'
          }
        },
        {
          id: '841',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '841',
            name: 'DANVILLE NATIONAL CEMETERY, VA',
            cemetery_type: 'N',
            num: '841'
          }
        },
        {
          id: '810',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '810',
            name: 'DAYTON NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '810'
          }
        },
        {
          id: '036',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '036',
            name: 'DELAWARE VETERANS MEMORIAL CEMETERY',
            cemetery_type: 'S',
            num: '036'
          }
        },
        {
          id: '093',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '093',
            name: 'DELAWARE VETERANS MEMORIAL CEMETERY-SUSSEX CO.',
            cemetery_type: 'S',
            num: '093'
          }
        },
        {
          id: '398',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '398',
            name: 'DONEL KINNARD MEMORIAL STATE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '398'
          }
        },
        {
          id: '906',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '906',
            name: 'EAGLE POINT NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '906'
          }
        },
        {
          id: '394',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '394',
            name: 'EAST TENNESSEE STATE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '394'
          }
        },
        {
          id: '416',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '416',
            name: 'EASTERN CAROLINA STATE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '416'
          }
        },
        {
          id: '090',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '090',
            name: 'EASTERN MONTANA STATE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '090'
          }
        },
        {
          id: '004',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '004',
            name: 'EASTERN SHORE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '004'
          }
        },
        {
          id: '943',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '943',
            name: 'ELKO NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '943'
          }
        },
        {
          id: '055',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '055',
            name: 'EVERGREEN CEMETERY',
            cemetery_type: 'P',
            num: '055'
          }
        },
        {
          id: '940',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '940',
            name: 'FARGO NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '940'
          }
        },
        {
          id: '842',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '842',
            name: 'FAYETTEVILLE NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '842'
          }
        },
        {
          id: '811',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '811',
            name: "FINN'S POINT NATIONAL CEMETERY",
            cemetery_type: 'N',
            num: '811'
          }
        },
        {
          id: '843',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '843',
            name: 'FLORENCE NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '843'
          }
        },
        {
          id: '911',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '911',
            name: 'FLORIDA NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '911'
          }
        },
        {
          id: '123',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '123',
            name: 'FOREST HILL CEMETERY',
            cemetery_type: 'P',
            num: '123'
          }
        },
        {
          id: '122',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '122',
            name: 'FOREST HOME CEMETERY',
            cemetery_type: 'P',
            num: '122'
          }
        },
        {
          id: '058',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '058',
            name: 'FOREST LAWN CEMETERY',
            cemetery_type: 'N',
            num: '058'
          }
        },
        {
          id: '930',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '930',
            name: 'FORT JACKSON VA NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '930'
          }
        },
        {
          id: '113',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '113',
            name: 'FORT STANTON STATE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '113'
          }
        },
        {
          id: '391',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '391',
            name: 'FT LEONARD WOOD STATE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '391'
          }
        },
        {
          id: '885',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '885',
            name: 'FT. BAYARD NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '885'
          }
        },
        {
          id: '886',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '886',
            name: 'FT. BLISS NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '886'
          }
        },
        {
          id: '059',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '059',
            name: 'FT. CRAWFORD CEMETERY',
            cemetery_type: 'P',
            num: '059'
          }
        },
        {
          id: '909',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '909',
            name: 'FT. CUSTER NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '909'
          }
        },
        {
          id: '844',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '844',
            name: 'FT. GIBSON NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '844'
          }
        },
        {
          id: '845',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '845',
            name: 'FT. HARRISON NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '845'
          }
        },
        {
          id: '887',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '887',
            name: 'FT. LEAVENWORTH NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '887'
          }
        },
        {
          id: '888',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '888',
            name: 'FT. LOGAN NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '888'
          }
        },
        {
          id: '889',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '889',
            name: 'FT. LYON NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '889'
          }
        },
        {
          id: '890',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '890',
            name: 'FT. MCPHERSON NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '890'
          }
        },
        {
          id: '891',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '891',
            name: 'FT. MEADE NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '891'
          }
        },
        {
          id: '908',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '908',
            name: 'FT. MITCHELL NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '908'
          }
        },
        {
          id: '910',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '910',
            name: 'FT. RICHARDSON NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '910'
          }
        },
        {
          id: '407',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '407',
            name: 'FT. RILEY POST CEMETERY',
            cemetery_type: 'M',
            num: '407'
          }
        },
        {
          id: '892',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '892',
            name: 'FT. ROSECRANS NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '892'
          }
        },
        {
          id: '846',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '846',
            name: 'FT. SAM HOUSTON NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '846'
          }
        },
        {
          id: '893',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '893',
            name: 'FT. SCOTT NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '893'
          }
        },
        {
          id: '920',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '920',
            name: 'FT. SILL NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '920'
          }
        },
        {
          id: '847',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '847',
            name: 'FT. SMITH NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '847'
          }
        },
        {
          id: '894',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '894',
            name: 'FT. SNELLING NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '894'
          }
        },
        {
          id: '083',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '083',
            name: 'FT. WINNEBAGO CEMETERY',
            cemetery_type: 'P',
            num: '083'
          }
        },
        {
          id: '003',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '003',
            name: 'GARRISON FOREST VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '003'
          }
        },
        {
          id: '922',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '922',
            name: 'GEORGIA NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '922'
          }
        },
        {
          id: '096',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '096',
            name: 'GEORGIA VETERANS MEMORIAL CEMETERY',
            cemetery_type: 'S',
            num: '096'
          }
        },
        {
          id: '303',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '303',
            name: 'GEORGIA VETERANS MEMORIAL CEMETERY - GLENNVILLE',
            cemetery_type: 'S',
            num: '303'
          }
        },
        {
          id: '917',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '917',
            name: 'GERALD B.H. SOLOMON SARATOGA NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '917'
          }
        },
        {
          id: '848',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '848',
            name: 'GLENDALE NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '848'
          }
        },
        {
          id: '895',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '895',
            name: 'GOLDEN GATE NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '895'
          }
        },
        {
          id: '812',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '812',
            name: 'GRAFTON NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '812'
          }
        },
        {
          id: '923',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '923',
            name: 'GREAT LAKES NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '923'
          }
        },
        {
          id: '061',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '061',
            name: 'GREEN MOUNT CEMETERY',
            cemetery_type: 'P',
            num: '061'
          }
        },
        {
          id: '849',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '849',
            name: 'HAMPTON NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '849'
          }
        },
        {
          id: '850',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '850',
            name: 'HAMPTON VA NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '850'
          }
        },
        {
          id: '043',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '043',
            name: 'HAWAII STATE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '043'
          }
        },
        {
          id: '896',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '896',
            name: 'HOT SPRINGS NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '896'
          }
        },
        {
          id: '851',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '851',
            name: 'HOUSTON NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '851'
          }
        },
        {
          id: '107',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '107',
            name: 'IDAHO STATE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '107'
          }
        },
        {
          id: '006',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '006',
            name: 'INDIANA VETERANS MEMORIAL CEMETERY',
            cemetery_type: 'S',
            num: '006'
          }
        },
        {
          id: '948',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '948',
            name: 'INDIANAPOLIS NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '948'
          }
        },
        {
          id: '813',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '813',
            name: 'INDIANTOWN GAP NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '813'
          }
        },
        {
          id: '301',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '301',
            name: 'IOWA VETERANS CEMETERY AT VAN METER',
            cemetery_type: 'S',
            num: '301'
          }
        },
        {
          id: '928',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '928',
            name: 'JACKSONVILLE NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '928'
          }
        },
        {
          id: '852',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '852',
            name: 'JEFFERSON BARRACKS NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '852'
          }
        },
        {
          id: '853',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '853',
            name: 'JEFFERSON CITY NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '853'
          }
        },
        {
          id: '277',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '277',
            name: 'KANAS VETERANS CEMETERY AT FORT RIELY STATE',
            cemetery_type: 'S',
            num: '277'
          }
        },
        {
          id: '094',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '094',
            name: 'KANSAS VETERANS CEMETERY AT FORT DODGE',
            cemetery_type: 'S',
            num: '094'
          }
        },
        {
          id: '110',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '110',
            name: 'KANSAS VETERANS CEMETERY AT WAKEENEY',
            cemetery_type: 'S',
            num: '110'
          }
        },
        {
          id: '128',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '128',
            name: 'KANSAS VETERANS CEMETERY AT WINFIELD',
            cemetery_type: 'S',
            num: '128'
          }
        },
        {
          id: '112',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '112',
            name: 'KENTUCKY VETERAN CEMETERY SOUTHEAST',
            cemetery_type: 'S',
            num: '112'
          }
        },
        {
          id: '114',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '114',
            name: 'KENTUCKY VETERANS CEMETERY - NORTHEAST',
            cemetery_type: 'S',
            num: '114'
          }
        },
        {
          id: '134',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '134',
            name: 'KENTUCKY VETERANS CEMETERY CENTRAL',
            cemetery_type: 'S',
            num: '134'
          }
        },
        {
          id: '135',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '135',
            name: 'KENTUCKY VETERANS CEMETERY NORTH',
            cemetery_type: 'S',
            num: '135'
          }
        },
        {
          id: '105',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '105',
            name: 'KENTUCKY VETERANS CEMETERY-WEST',
            cemetery_type: 'S',
            num: '105'
          }
        },
        {
          id: '814',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '814',
            name: 'KEOKUK NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '814'
          }
        },
        {
          id: '854',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '854',
            name: 'KERRVILLE NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '854'
          }
        },
        {
          id: '855',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '855',
            name: 'KNOXVILLE NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '855'
          }
        },
        {
          id: '062',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '062',
            name: 'LAKESIDE CEMETERY',
            cemetery_type: 'P',
            num: '062'
          }
        },
        {
          id: '403',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '403',
            name: 'LAKOTA FREEDOM VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '403'
          }
        },
        {
          id: '897',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '897',
            name: 'LEAVENWORTH NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '897'
          }
        },
        {
          id: '856',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '856',
            name: 'LEBANON NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '856'
          }
        },
        {
          id: '857',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '857',
            name: 'LEXINGTON NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '857'
          }
        },
        {
          id: '858',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '858',
            name: 'LITTLE ROCK NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '858'
          }
        },
        {
          id: '815',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '815',
            name: 'LONG ISLAND NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '815'
          }
        },
        {
          id: '898',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '898',
            name: 'LOS ANGELES NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '898'
          }
        },
        {
          id: '816',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '816',
            name: 'LOUDON PARK NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '816'
          }
        },
        {
          id: '970',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '970',
            name: 'LOUISIANA NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '970'
          }
        },
        {
          id: '302',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '302',
            name: 'M.J. DOLLY COOPER VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '302'
          }
        },
        {
          id: '944',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '944',
            name: 'MACHIAS NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '944'
          }
        },
        {
          id: '082',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '082',
            name: 'MACKINAC ISLAND POST CEMETERY',
            cemetery_type: 'P',
            num: '082'
          }
        },
        {
          id: '012',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '012',
            name: "MAINE VETERANS' MEMORIAL CEMETERY",
            cemetery_type: 'S',
            num: '012'
          }
        },
        {
          id: '095',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '095',
            name: "MAINE VETERANS' MEMORIAL CEMETERY - MT VERNON RD",
            cemetery_type: 'S',
            num: '095'
          }
        },
        {
          id: '859',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '859',
            name: 'MARIETTA NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '859'
          }
        },
        {
          id: '817',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '817',
            name: 'MARION NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '817'
          }
        },
        {
          id: '818',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '818',
            name: 'MASSACHUSETTS NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '818'
          }
        },
        {
          id: '108',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '108',
            name: 'MASSACHUSETTS VETERAN MEMORIAL CEMETERY/WINCHENDON',
            cemetery_type: 'S',
            num: '108'
          }
        },
        {
          id: '034',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '034',
            name: "MASSACHUSETTS VETERANS' MEMORIAL CEMETERY",
            cemetery_type: 'S',
            num: '034'
          }
        },
        {
          id: '860',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '860',
            name: 'MEMPHIS NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '860'
          }
        },
        {
          id: '050',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '050',
            name: 'MIDDLE TENNESSEE STATE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '050'
          }
        },
        {
          id: '861',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '861',
            name: 'MILL SPRINGS NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '861'
          }
        },
        {
          id: '053',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '053',
            name: 'MINNESOTA STATE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '053'
          }
        },
        {
          id: '116',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '116',
            name: 'MINNESOTA STATE VETERANS CEMETERY - DULUTH',
            cemetery_type: 'S',
            num: '116'
          }
        },
        {
          id: '415',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '415',
            name: 'MINNESOTA STATE VETERANS CEMETERY - PRESTON',
            cemetery_type: 'S',
            num: '415'
          }
        },
        {
          id: '992',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '992',
            name: 'MIRAMAR NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '992'
          }
        },
        {
          id: '278',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '278',
            name: 'MISSISSIPPI STATE VETERANS MEMORIAL CEMETERY',
            cemetery_type: 'S',
            num: '278'
          }
        },
        {
          id: '104',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '104',
            name: 'MISSOURI STATE VETERANS CEMETERY/JACKSONVILLE',
            cemetery_type: 'S',
            num: '104'
          }
        },
        {
          id: '056',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '056',
            name: 'MISSOURI VETERANS CEMETERY / SPRINGFIELD',
            cemetery_type: 'S',
            num: '056'
          }
        },
        {
          id: '103',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '103',
            name: 'MISSOURI VETERANS CEMETERY AT BLOOMFIELD',
            cemetery_type: 'S',
            num: '103'
          }
        },
        {
          id: '057',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '057',
            name: 'MISSOURI VETERANS CEMETERY/HIGGINSVILLE',
            cemetery_type: 'S',
            num: '057'
          }
        },
        {
          id: '862',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '862',
            name: 'MOBILE NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '862'
          }
        },
        {
          id: '040',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '040',
            name: 'MONTANA STATE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '040'
          }
        },
        {
          id: '063',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '063',
            name: 'MOUND CEMETERY',
            cemetery_type: 'P',
            num: '063'
          }
        },
        {
          id: '064',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '064',
            name: 'MOUND CITY',
            cemetery_type: 'P',
            num: '064'
          }
        },
        {
          id: '863',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '863',
            name: 'MOUND CITY NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '863'
          }
        },
        {
          id: '864',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '864',
            name: 'MOUNTAIN HOME NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '864'
          }
        },
        {
          id: '065',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '065',
            name: 'MT MORIAH SOLDIERS LOT',
            cemetery_type: 'P',
            num: '065'
          }
        },
        {
          id: '066',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '066',
            name: 'MT. MORIAH NAVAL PLOT',
            cemetery_type: 'P',
            num: '066'
          }
        },
        {
          id: '067',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '067',
            name: 'MT. PLEASANT CEMETERY',
            cemetery_type: 'P',
            num: '067'
          }
        },
        {
          id: '865',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '865',
            name: 'NASHVILLE NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '865'
          }
        },
        {
          id: '866',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '866',
            name: 'NATCHEZ NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '866'
          }
        },
        {
          id: '925',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '925',
            name: 'NATIONAL CEMETERY OF THE ALLEGHENIES',
            cemetery_type: 'N',
            num: '925'
          }
        },
        {
          id: '914',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '914',
            name: 'NATIONAL MEMORIAL CEMETERY OF ARIZONA',
            cemetery_type: 'N',
            num: '914'
          }
        },
        {
          id: '899',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '899',
            name: 'NATIONAL MEMORIAL CEMETERY OF THE PACIFIC',
            cemetery_type: 'N',
            num: '899'
          }
        },
        {
          id: '267',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '267',
            name: 'NEBRASKA VETERANS CEMETERY AT ALLIANCE',
            cemetery_type: 'S',
            num: '267'
          }
        },
        {
          id: '867',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '867',
            name: 'NEW ALBANY NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '867'
          }
        },
        {
          id: '868',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '868',
            name: 'NEW BERN NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '868'
          }
        },
        {
          id: '087',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '087',
            name: 'NEW HAMPSHIRE STATE CEMETERY',
            cemetery_type: 'S',
            num: '087'
          }
        },
        {
          id: '037',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '037',
            name: 'NEW JERSEY MEMORIAL HOME CEMETERY',
            cemetery_type: 'S',
            num: '037'
          }
        },
        {
          id: '947',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '947',
            name: 'NEW YORK NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '947'
          }
        },
        {
          id: '077',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '077',
            name: 'NORTH ALTON CONFEDERATE CEMETERY',
            cemetery_type: 'P',
            num: '077'
          }
        },
        {
          id: '049',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '049',
            name: 'NORTH DAKOTA VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '049'
          }
        },
        {
          id: '035',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '035',
            name: 'NORTH MISSISSIPPI VETERANS MEMORIAL CEMETERY',
            cemetery_type: 'S',
            num: '035'
          }
        },
        {
          id: '392',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '392',
            name: 'NORTHEAST LOUISIANA VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '392'
          }
        },
        {
          id: '130',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '130',
            name: 'NORTHERN CALIFORNIA VETERANS CEMETERY AT REDDING',
            cemetery_type: 'S',
            num: '130'
          }
        },
        {
          id: '099',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '099',
            name: 'NORTHERN MAINE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '099'
          }
        },
        {
          id: '046',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '046',
            name: 'NORTHERN NEVADA VETERANS MEMORIAL CEMETERY',
            cemetery_type: 'S',
            num: '046'
          }
        },
        {
          id: '102',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '102',
            name: 'NORTHERN WISCONSIN VETERANS MEMORIAL CEMETERY',
            cemetery_type: 'S',
            num: '102'
          }
        },
        {
          id: '131',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '131',
            name: 'NORTHWEST LOUISIANA VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '131'
          }
        },
        {
          id: '068',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '068',
            name: 'OAKDALE CEMETERY',
            cemetery_type: 'P',
            num: '068'
          }
        },
        {
          id: '092',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '092',
            name: 'OHIO VETERANS HOME CEMETERY',
            cemetery_type: 'S',
            num: '092'
          }
        },
        {
          id: '918',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '918',
            name: 'OHIO WESTERN RESERVE NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '918'
          }
        },
        {
          id: '935',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '935',
            name: 'OMAHA NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '935'
          }
        },
        {
          id: '016',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '016',
            name: 'OREGON TRAIL STATE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '016'
          }
        },
        {
          id: '819',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '819',
            name: 'PHILADELPHIA NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '819'
          }
        },
        {
          id: '078',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '078',
            name: 'POINT LOOKOUT CONFEDERATE CEMETERY',
            cemetery_type: 'P',
            num: '078'
          }
        },
        {
          id: '870',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '870',
            name: 'PORT HUDSON NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '870'
          }
        },
        {
          id: '900',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '900',
            name: 'PRESCOTT NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '900'
          }
        },
        {
          id: '069',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '069',
            name: 'PROSPECT HILL CEMETERY, PA',
            cemetery_type: 'P',
            num: '069'
          }
        },
        {
          id: '070',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '070',
            name: 'PROSPECT HILL CEMETERY, VT',
            cemetery_type: 'P',
            num: '070'
          }
        },
        {
          id: '871',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '871',
            name: 'PUERTO RICO NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '871'
          }
        },
        {
          id: '872',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '872',
            name: 'QUANTICO NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '872'
          }
        },
        {
          id: '820',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '820',
            name: 'QUINCY NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '820'
          }
        },
        {
          id: '873',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '873',
            name: 'RALEIGH NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '873'
          }
        },
        {
          id: '939',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '939',
            name: 'RHINELANDER NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '939'
          }
        },
        {
          id: '013',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '013',
            name: 'RHODE ISLAND VETERAN MEMORIAL CEMETERY',
            cemetery_type: 'S',
            num: '013'
          }
        },
        {
          id: '874',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '874',
            name: 'RICHMOND NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '874'
          }
        },
        {
          id: '133',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '133',
            name: 'RIO GRANDE VALLEY STATE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '133'
          }
        },
        {
          id: '901',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '901',
            name: 'RIVERSIDE NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '901'
          }
        },
        {
          id: '079',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '079',
            name: 'ROCK ISLAND CONFEDERATE CEMETERY',
            cemetery_type: 'P',
            num: '079'
          }
        },
        {
          id: '821',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '821',
            name: 'ROCK ISLAND NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '821'
          }
        },
        {
          id: '005',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '005',
            name: 'ROCKY GAP VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '005'
          }
        },
        {
          id: '902',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '902',
            name: 'ROSEBURG NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '902'
          }
        },
        {
          id: '921',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '921',
            name: 'SACRAMENTO VALLEY VA NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '921'
          }
        },
        {
          id: '875',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '875',
            name: 'SAINT AUGUSTINE NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '875'
          }
        },
        {
          id: '876',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '876',
            name: 'SALISBURY NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '876'
          }
        },
        {
          id: '877',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '877',
            name: 'SAN ANTONIO NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '877'
          }
        },
        {
          id: '903',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '903',
            name: 'SAN FRANCISCO NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '903'
          }
        },
        {
          id: '913',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '913',
            name: 'SAN JOAQUIN VALLEY NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '913'
          }
        },
        {
          id: '085',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '085',
            name: 'SANDHILLS STATE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '085'
          }
        },
        {
          id: '904',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '904',
            name: 'SANTA FE NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '904'
          }
        },
        {
          id: '931',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '931',
            name: 'SARASOTA VA NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '931'
          }
        },
        {
          id: '878',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '878',
            name: 'SEVEN PINES NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '878'
          }
        },
        {
          id: '401',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '401',
            name: 'SICANGU AKICITA OWICAHE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '401'
          }
        },
        {
          id: '905',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '905',
            name: 'SITKA NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '905'
          }
        },
        {
          id: '924',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '924',
            name: 'SOUTH FLORIDA VA NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '924'
          }
        },
        {
          id: '404',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '404',
            name: 'SOUTHEAST LOUISIANA VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '404'
          }
        },
        {
          id: '098',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '098',
            name: 'SOUTHERN ARIZONA VETERANS MEMORIAL CEMETERY',
            cemetery_type: 'S',
            num: '098'
          }
        },
        {
          id: '389',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '389',
            name: 'SOUTHERN MAINE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '389'
          }
        },
        {
          id: '045',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '045',
            name: 'SOUTHERN NEVADA VETERANS MEMORIAL CEMETERY',
            cemetery_type: 'S',
            num: '045'
          }
        },
        {
          id: '060',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '060',
            name: 'SOUTHERN WISCONSIN VETERANS MEMORIAL CEMETERY',
            cemetery_type: 'S',
            num: '060'
          }
        },
        {
          id: '186',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '186',
            name: 'SOUTHWEST VIRGINIA VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '186'
          }
        },
        {
          id: '009',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '009',
            name: 'SPRING GROVE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '009'
          }
        },
        {
          id: '879',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '879',
            name: 'SPRINGFIELD NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '879'
          }
        },
        {
          id: '880',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '880',
            name: 'STAUNTON NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '880'
          }
        },
        {
          id: '919',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '919',
            name: 'TAHOMA NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '919'
          }
        },
        {
          id: '937',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '937',
            name: 'TALLAHASSEE NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '937'
          }
        },
        {
          id: '044',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '044',
            name: 'TENNESSEE STATE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '044'
          }
        },
        {
          id: '273',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '273',
            name: 'TEXAS STATE VETERANS CEMETERY AT ABILENE',
            cemetery_type: 'S',
            num: '273'
          }
        },
        {
          id: '115',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '115',
            name: 'TN STATE VETERANS CEMETERY AT PARKERS CROSSROADS',
            cemetery_type: 'S',
            num: '115'
          }
        },
        {
          id: '822',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '822',
            name: 'TOGUS NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '822'
          }
        },
        {
          id: '941',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '941',
            name: 'TWIN FALLS NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '941'
          }
        },
        {
          id: '080',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '080',
            name: 'UNION CONFEDERATE MONUMENT SITE',
            cemetery_type: 'P',
            num: '080'
          }
        },
        {
          id: '408',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '408',
            name: 'US MILITARY ACADEMY CEMETERY',
            cemetery_type: 'M',
            num: '408'
          }
        },
        {
          id: '170',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '170',
            name: "US SOLDIERS' & AIRMEN'S HOME NATIONAL CEMETERY",
            cemetery_type: 'A',
            num: '170'
          }
        },
        {
          id: '038',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '038',
            name: 'UTAH STATE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '038'
          }
        },
        {
          id: '027',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '027',
            name: 'VERMONT VETERANS HOME WAR MEMORIAL CEMETERY',
            cemetery_type: 'S',
            num: '027'
          }
        },
        {
          id: '399',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '399',
            name: 'VERMONT VETERANS MEMORIAL CEMETERY',
            cemetery_type: 'S',
            num: '399'
          }
        },
        {
          id: '097',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '097',
            name: 'VETERANS MEMORIAL CEMETERY OF WESTERN COLORADO',
            cemetery_type: 'S',
            num: '097'
          }
        },
        {
          id: '084',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '084',
            name: 'VIRGINIA VETERANS CEMETERY AT AMELIA',
            cemetery_type: 'S',
            num: '084'
          }
        },
        {
          id: '926',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '926',
            name: 'WASHINGTON CROSSING NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '926'
          }
        },
        {
          id: '390',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '390',
            name: 'WASHINGTON STATE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '390'
          }
        },
        {
          id: '048',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '048',
            name: 'WEST TENNESSEE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '048'
          }
        },
        {
          id: '912',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '912',
            name: 'WEST VIRGINIA NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '912'
          }
        },
        {
          id: '051',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '051',
            name: 'WESTERN CAROLINA STATE VETERAN CEMETERY',
            cemetery_type: 'S',
            num: '051'
          }
        },
        {
          id: '388',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '388',
            name: 'WESTERN MONTANA STATE VETERANS CEMETERY',
            cemetery_type: 'S',
            num: '388'
          }
        },
        {
          id: '907',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '907',
            name: 'WILLAMETTE NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '907'
          }
        },
        {
          id: '881',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '881',
            name: 'WILMINGTON NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '881'
          }
        },
        {
          id: '882',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '882',
            name: 'WINCHESTER NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '882'
          }
        },
        {
          id: '823',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '823',
            name: 'WOOD NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '823'
          }
        },
        {
          id: '071',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '071',
            name: 'WOODLAND CEMETERY',
            cemetery_type: 'P',
            num: '071'
          }
        },
        {
          id: '072',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '072',
            name: 'WOODLAWN CEMETERY',
            cemetery_type: 'P',
            num: '072'
          }
        },
        {
          id: '081',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '081',
            name: 'WOODLAWN MONUMENT SITE',
            cemetery_type: 'P',
            num: '081'
          }
        },
        {
          id: '824',
          type: 'preneeds_cemeteries',
          attributes: {
            cemetery_id: '824',
            name: 'WOODLAWN NATIONAL CEMETERY',
            cemetery_type: 'N',
            num: '824'
          }
          /* eslint-enable camelcase */
        }
      ]
    }
  });
}

module.exports = {
  completeClaimantInformation,
  completeVeteranInformation,
  completeServicePeriods,
  completeServiceName,
  completeBenefitSelection,
  completeClaimantContactInformation,
  completeVeteranContactInformation,
  completeApplicantContactInformation,

  initApplicationSubmitMock,
  initDocumentUploadMock,
  initGetCemeteriesMock
};
