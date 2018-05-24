import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import { ClaimsAppealsWidget } from '../../containers/ClaimsAppealsWidget';

const props = {
  claimsAppealsList: [
    {
      id: '600118851',
      type: 'evss_claims',
      attributes: {
        evssId: 600118851,
        dateFiled: '2017-12-08',
        minEstDate: null,
        maxEstDate: null,
        phaseChangeDate: null,
        open: true,
        waiverSubmitted: false,
        documentsNeeded: false,
        developmentLetterSent: false,
        decisionLetterSent: false,
        updatedAt: '2018-04-13T19:26:54.480Z',
        phase: 2,
        everPhaseBack: null,
        currentPhaseBack: null,
        requestedDecision: false,
        claimType: 'Compensation'
      }
    },
    {
      attributes: {
        active: false,
        alerts: [],
        aod: false,
        aoj: 'vba',
        appealIds: [
          '1196201'
        ],
        description: 'Service connection, lumbosacral strain',
        docket: null,
        events: [
          {
            date: '2015-09-23',
            type: 'claim_decision'
          },
          {
            date: '2016-01-06',
            type: 'nod'
          },
          {
            date: '2017-06-18',
            type: 'soc'
          },
          {
            date: '2018-05-10',
            type: 'ftr'
          }
        ],
        evidence: [],
        incompleteHistory: false,
        issues: [
          {
            active: false,
            date: '2003-09-30',
            description: 'Service connection, lumbosacral strain',
            diagnosticCode: '5295',
            lastAction: 'withdrawn'
          }
        ],
        location: 'bva',
        programArea: 'compensation',
        status: {
          details: {},
          type: 'ftr'
        },
        type: 'original',
        updated: '2018-05-10T10:20:42-05:00'
      },
      id: '1196201',
      type: 'appealSeries'
    },
  ],
};

describe('<ClaimsAppealsWidget>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<ClaimsAppealsWidget {...props}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.be.ok;
  });

  it('should render claims and appeals', () => {
    const tree = SkinDeep.shallowRender(<ClaimsAppealsWidget {...props}/>);
    const appealListItem = tree.subTree('AppealListItem');
    expect(appealListItem).to.be.ok;

    const claimListItem = tree.subTree('ClaimsListItem');
    expect(claimListItem).to.be.ok;
  });

  it('should render empty state properly', () => {
    const tree = SkinDeep.shallowRender(<ClaimsAppealsWidget {...{ claimsAppealsList: [] }}/>);
    const emptyState = tree.dive(['p']);
    expect(emptyState.text()).to.have.string('We don’t have any new updates for you right now.');
  });
});
