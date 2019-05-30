import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import { ConfirmationPage } from '../../containers/ConfirmationPage';

describe('<ConfirmationPage>', () => {
  it('should render', () => {
    const form = {
      data: {
        claimantFullName: {
          first: 'Sally',
          middle: 'Jane',
          last: 'Doe'
        },
        veteranFullName: {
          first: 'Josie',
          middle: 'Henrietta',
          last: 'Smith'
        },
        'view:claimedBenefits': {
          burialAllowance: true,
          plotAllowance: true,
          transportation: true
        },
        deathCertificate: {
          length: 1
        },
        transportationReceipts: {
          length: 2
        }
      },
      submission: {
        submittedAt: Date.now(),
        response: {
          confirmationNumber: 'V-EBC-177',
          regionalOffice: [
            'Western Region',
            'VA Regional Office',
            'P.O. Box 8888',
            'Muskogee, OK 74402-8888'
          ]
        }
      }
    };

    const tree = SkinDeep.shallowRender(
      <ConfirmationPage form={form}/>
    );

    expect(tree.subTree('.confirmation-page-title').text()).to.equal('Claim submitted');
    expect(tree.everySubTree('span')[1].text().trim()).to.equal('for Sally Jane Doe');
    expect(tree.subTree('.claim-list').text()).to.include('Burial allowance');
    expect(tree.subTree('.claim-list').text()).to.include('Plot allowance');
    expect(tree.subTree('.claim-list').text()).to.include('Transportation');
    expect(tree.subTree('.claim-list').text()).to.include('Death certificate: 1 file');
    expect(tree.subTree('.claim-list').text()).to.include('Transportation documentation: 2 files');
    expect(tree.everySubTree('p')[0].text()).to.contain('We process claims in the order we receive them');
    expect(tree.everySubTree('p')[1].text()).to.contain('We may contact you for more information or documents.');
    expect(tree.everySubTree('p')[8].text()).to.contain('VA Regional Office');
  });
  it('should render', () => {
    const form = {
      data: {
        claimantFullName: {
          first: 'Sally',
          middle: 'Jane',
          last: 'Doe'
        },
        veteranFullName: {
          first: 'Josie',
          middle: 'Henrietta',
          last: 'Smith'
        },
        'view:claimedBenefits': {
          burialAllowance: true,
          plotAllowance: true,
          transportation: true
        }
      },
      submission: {
        submittedAt: Date.now(),
        response: {
          attributes: {
            confirmationNumber: 'V-EBC-177',
            regionalOffice: [
              'Western Region',
              'VA Regional Office',
              'P.O. Box 8888',
              'Muskogee, OK 74402-8888'
            ]
          }
        }
      }
    };

    const tree = SkinDeep.shallowRender(
      <ConfirmationPage form={form}/>
    );

    expect(tree.subTree('.claim-list').text()).to.not.include('Documents Uploaded');
  });
});
