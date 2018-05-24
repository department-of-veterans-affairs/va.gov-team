import { expect } from 'chai';

import {
  formatPartialDate
} from '../../utils/helpers';
import { makeField } from '../../../../platform/forms/fields';

describe('edu helpers:', () => {
  describe('formatPartialDate', () => {
    it('should format a full date', () => {
      const date = {
        month: makeField('5'),
        day: makeField('1'),
        year: makeField('2001')
      };

      expect(formatPartialDate(date)).to.equal('2001-05-01');
    });
    it('should format a full date with 2 digit month and day', () => {
      const date = {
        month: makeField('12'),
        day: makeField('12'),
        year: makeField('2001')
      };

      expect(formatPartialDate(date)).to.equal('2001-12-12');
    });
    it('should format a date with missing month', () => {
      const date = {
        month: makeField(''),
        day: makeField('12'),
        year: makeField('2001')
      };

      expect(formatPartialDate(date)).to.equal('2001-XX-12');
    });
    it('should format a date with missing day', () => {
      const date = {
        month: makeField('12'),
        day: makeField(''),
        year: makeField('2001')
      };

      expect(formatPartialDate(date)).to.equal('2001-12-XX');
    });
    it('should format a date with missing year', () => {
      const date = {
        month: makeField('12'),
        day: makeField('31'),
        year: makeField('')
      };

      expect(formatPartialDate(date)).to.equal('XXXX-12-31');
    });
    it('should format a date with space in year', () => {
      const date = {
        month: makeField('12'),
        day: makeField('31'),
        year: makeField('2001 ')
      };

      expect(formatPartialDate(date)).to.equal('2001-12-31');
    });
    it('should format a date with non digit characters in year', () => {
      const date = {
        month: makeField('12'),
        day: makeField('31'),
        year: makeField('2001*')
      };

      expect(formatPartialDate(date)).to.equal('2001-12-31');
    });
    it('should return undefined for blank date', () => {
      const date = {
        month: makeField(''),
        day: makeField(''),
        year: makeField('')
      };

      expect(formatPartialDate(date)).to.be.undefined;
    });
    it('should return undefined for undefined date', () => {
      expect(formatPartialDate()).to.be.undefined;
    });
    it('should format a partial year', () => {
      const date = {
        month: makeField('12'),
        day: makeField('31'),
        year: makeField('96')
      };

      expect(formatPartialDate(date)).to.equal('1996-12-31');
    });
  });
});
