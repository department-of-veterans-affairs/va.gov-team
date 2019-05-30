import React from 'react';
import _ from 'lodash/fp';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { ConfirmationPage } from '../../containers/ConfirmationPage';

const form = {
  submission: {
    response: {
      confirmationNumber: 'V-VIC-177',
      photo: 'imagesrc'
    }
  },
  data: {
    veteranFullName: {
      first: 'Jane',
      last: 'Doe'
    }
  }
};

describe('<ConfirmationPage>', () => {
  it('should render unverified', () => {
    const tree = shallow(
      <ConfirmationPage form={form} userSignedIn/>
    );

    expect(tree.text()).to.contain('Jane  Doe');
    expect(tree.text()).to.contain('We process applications and print cards in the order we receive them.');
    expect(tree.text()).to.contain('We’ll send you emails updating you on the status of your application. You can also print this page for your records.');
  });
  it('should render not signed in', () => {
    const tree = shallow(
      <ConfirmationPage form={_.set('data.verified', true, form)}/>
    );

    expect(tree.text()).to.contain('Jane  Doe');
    expect(tree.text()).to.contain('We process applications and print cards in the order we receive them.');
    expect(tree.text()).to.contain('We’ll send you emails updating you on the status of your application. You can also print this page for your records.');
  });
  xit('should render verified and signed in', () => {
    const tree = shallow(
      <ConfirmationPage form={_.set('data.verified', true, form)} userSignedIn/>
    );

    expect(tree.text()).not.to.contain('We’ll review your application to verify your eligibility.');
    expect(tree.text()).to.contain('In the meantime, you can print a temporary digital Veteran ID Card.');
    expect(tree.find('VeteranIDCard').props().veteranPhotoUrl).to.equal('imagesrc');
  });
});
