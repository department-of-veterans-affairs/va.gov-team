import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { ConfirmationPage } from '../../../chapter31/containers/ConfirmationPage';

describe('VRE Chapter 31 <ConfirmationPage>', () => {
  it('should render', () => {
    const form = {
      submission: {
        response: {
          attributes: {}
        }
      },
      data: {
        veteranFullName: {
          first: 'Jane',
          last: 'Doe'
        }
      }
    };

    const tree = shallow(
      <ConfirmationPage form={form}/>
    );

    expect(tree.find('.confirmation-page-title').text()).to.equal('Claim received');
    expect(tree.find('span').at(1).text().trim()).to.equal('for Jane  Doe');
    expect(tree.find('p').at(0).text()).to.contain('We’ve received your application.');
  });
});
