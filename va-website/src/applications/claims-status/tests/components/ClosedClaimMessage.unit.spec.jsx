import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import moment from 'moment';

import ClosedClaimMessage from '../../components/ClosedClaimMessage';

describe('<ClosedClaimMessage>', () => {
  it('should render closed claims within 30 days', () => {
    const claims = [
      {
        id: 1,
        attributes: {
          open: false,
          phaseChangeDate: moment().add(-29, 'days').format('YYYY-MM-DD')
        }
      }
    ];
    const tree = SkinDeep.shallowRender(
      <ClosedClaimMessage
        claims={claims}/>
    );

    expect(tree.everySubTree('.usa-alert')).not.to.be.empty;
  });
  it('should not render closed claims at 30 days', () => {
    const claims = [
      {
        id: 1,
        attributes: {
          open: false,
          phaseChangeDate: moment().add(-30, 'days').format('YYYY-MM-DD')
        }
      }
    ];
    const tree = SkinDeep.shallowRender(
      <ClosedClaimMessage
        claims={claims}/>
    );

    expect(tree.everySubTree('.usa-alert')).to.be.empty;
  });
  it('should render nothing when no closed claims', () => {
    const claims = [
      {
        id: 1,
        attributes: {
          open: true,
          phaseChangeDate: moment().add(-29, 'days').format('YYYY-MM-DD')
        }
      }
    ];
    const tree = SkinDeep.shallowRender(
      <ClosedClaimMessage
        claims={claims}/>
    );

    expect(tree.text()).to.be.empty;
  });
});
