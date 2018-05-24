import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { ConfirmationPage } from '../../containers/ConfirmationPage';

describe('686 <ConfirmationPage>', () => {
  it('should render', () => {
    const form = {
      submission: {
        response: {
          timestamp: '2010-01-01',
          confirmationNumber: '3702390024'
        }
      },
      data: {
        veteranFullName: {
          first: 'Joe',
          middle: 'Marjorie',
          last: 'Smith',
          suffix: 'Sr.'
        }
      }
    };

    const tree = shallow(
      <ConfirmationPage form={form}/>
    );

    expect(tree.find('.confirmation-page-title').text()).to.contain('Your claim has been submitted.');
    expect(tree.find('.claim-list').exists()).to.be.true;
    expect(tree.find('span').at(2).text()).to.contain('3702390024');
    expect(tree.find('span').at(3).text()).to.contain('01/01/2010');
    expect(tree.find('p').first().text()).to.contain('We process applications in the order we receive them.');
  });

  it('should render without the response properties', () => {

    const form = {
      submission: {
      },
      data: {
        veteranFullName: {
          first: 'Joe',
          middle: 'Marjorie',
          last: 'Smith',
          suffix: 'Sr.'
        }
      }
    };
    const tree = shallow(
      <ConfirmationPage form={form}/>
    );

    expect(tree.find('.confirmation-page-title').text()).to.contain('Your claim has been submitted.');
    expect(tree.find('.claim-list').exists()).to.be.false;
    expect(tree.find('p').first().text()).to.contain('We process applications in the order we receive them.');
  });
});
