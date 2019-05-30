import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import {
  CheckboxWidget,
  TextWidget,
  DateWidget,
  SelectWidget,
  yesNo
} from '../../../../src/applications/common/schemaform/review/widgets';

describe('Schemaform review widgets', () => {
  describe('<CheckboxWidget>', () => {
    it('should render', () => {
      const tree = SkinDeep.shallowRender(
        <CheckboxWidget value/>
      );

      expect(tree.text()).to.equal('True');
    });
    it('should render empty for false', () => {
      const tree = SkinDeep.shallowRender(
        <CheckboxWidget/>
      );

      expect(tree.text()).to.equal('');
    });
  });
  describe('<TextWidget>', () => {
    it('should render', () => {
      const tree = SkinDeep.shallowRender(
        <TextWidget value="Testing"/>
      );

      expect(tree.text()).to.equal('Testing');
    });
  });
  describe('<DateWidget>', () => {
    it('should render', () => {
      const tree = SkinDeep.shallowRender(
        <DateWidget value="2010-01-02" options={{}}/>
      );

      expect(tree.text()).to.equal('01/02/2010');
    });
    it('should render month year', () => {
      const tree = SkinDeep.shallowRender(
        <DateWidget value="2010-01-02" options={{ monthYear: true }}/>
      );

      expect(tree.text()).to.equal('01/2010');
    });
  });
  describe('<SelectWidget>', () => {
    it('should render', () => {
      const enumOptions = [
        {
          value: 'Test',
          label: 'Label'
        }
      ];
      const tree = SkinDeep.shallowRender(
        <SelectWidget
          options={{ enumOptions }}
          value="Test"/>
      );

      expect(tree.text()).to.equal('Label');
    });
    it('should render empty', () => {
      const enumOptions = [
        {
          value: 'Test',
          label: 'Label'
        }
      ];
      const tree = SkinDeep.shallowRender(
        <SelectWidget
          options={{ enumOptions }}
          value=""/>
      );

      expect(tree.text()).to.be.empty;
    });
    it('should render label from options', () => {
      const enumOptions = [
        {
          value: 'Test',
          label: 'Label'
        }
      ];

      const labels = {
        Test: 'Other'
      };
      const tree = SkinDeep.shallowRender(
        <SelectWidget
          options={{ enumOptions, labels }}
          value="Test"/>
      );

      expect(tree.text()).to.equal('Other');
    });
  });
  describe('<yesNo>', () => {
    it('should render true', () => {
      const YesNo = yesNo;
      const tree = SkinDeep.shallowRender(
        <YesNo value/>
      );

      expect(tree.text()).to.equal('Yes');
    });
    it('should render false', () => {
      const YesNo = yesNo;
      const tree = SkinDeep.shallowRender(
        <YesNo value={false}/>
      );

      expect(tree.text()).to.equal('No');
    });
    it('should render undefined', () => {
      const YesNo = yesNo;
      const tree = SkinDeep.shallowRender(
        <YesNo/>
      );

      expect(tree.text()).to.be.empty;
    });
    it('should render labels', () => {
      const YesNo = yesNo;
      const tree = SkinDeep.shallowRender(
        <YesNo
          value
          options={{
            labels: {
              Y: 'Whatever'
            }
          }}/>
      );

      expect(tree.text()).to.equal('Whatever');
    });
    it('should render reversed', () => {
      const YesNo = yesNo;
      const tree = SkinDeep.shallowRender(
        <YesNo
          value={false}
          options={{
            yesNoReverse: true
          }}/>
      );

      expect(tree.text()).to.equal('Yes');
    });
  });
});
