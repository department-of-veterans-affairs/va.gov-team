import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import { TrackPackage } from '../../containers/TrackPackage';
import { trackings } from '../rx-helpers.js';

const props = {
  isPending: false,
  items: trackings.data
};

describe('<TrackPackage>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<TrackPackage {...props}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.be.ok;
  });

  it('should render tracking info when available', () => {
    const tree = SkinDeep.shallowRender(<TrackPackage {...props}/>);
    expect(tree.dive(['.rx-tab-explainer']).text()).to.equal(
      'Tracking information for each order expires 30 days after shipment.'
    );

    const table = tree.dive(['.rx-detail-history']);
    const rows = table.dive(['tbody']).everySubTree('tr');

    expect(table).to.be.ok;
    rows.forEach((row, rowIndex) => {
      const {
        attributes: attrs,
        links: { trackingUrl }
      } = trackings.data[rowIndex];

      const link = row.dive(['TrackPackageLink']);
      expect(link.text()).to.equal(attrs.trackingNumber);
      expect(link.props.href).to.equal(trackingUrl);

      rows[rowIndex].everySubTree('div').forEach((div, divIndex) => {
        if (divIndex === 0) {
          expect(div.text()).to.equal(attrs.prescriptionName);
        } else {
          expect(div.text()).to.equal(attrs.otherPrescriptions[divIndex - 1].prescriptionName);
        }
      });
    });
  });

  it('should show a message when tracking info is not yet available', () => {
    const tree = SkinDeep.shallowRender(<TrackPackage isPending items={[]}/>);
    expect(tree.dive(['.rx-tab-explainer']).text()).to.equal(
      'You recently submitted a refill, and the tracking information isn’t available yet.'
    );
  });

  it('should show a message when tracking info has expired', () => {
    const tree = SkinDeep.shallowRender(<TrackPackage items={[]}/>);
    expect(tree.dive(['.rx-tab-explainer']).text()).to.equal(
      'Your prescription shipped more than 30 days ago, and tracking information is no longer available.'
    );
  });
});
