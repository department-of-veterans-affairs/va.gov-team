import { expect } from 'chai';
import sinon from 'sinon';

import { validateSponsorDeathDate } from '../validation';

describe('Pre-need validation', () => {
  describe('validateSponsorDeathDate', () => {
    it('should return error if death is before birth', () => {
      const errors = {
        dateOfDeath: {
          addError: sinon.spy()
        }
      };

      validateSponsorDeathDate(errors, {
        isDeceased: 'yes',
        dateOfBirth: '2011-01-01',
        dateOfDeath: '2010-01-01'
      });

      expect(errors.dateOfDeath.addError.called).to.be.true;
    });

    it('should return error if death is same as birth', () => {
      const errors = {
        dateOfDeath: {
          addError: sinon.spy()
        }
      };

      validateSponsorDeathDate(errors, {
        isDeceased: 'yes',
        dateOfBirth: '2010-01-01',
        dateOfDeath: '2010-01-01'
      });

      expect(errors.dateOfDeath.addError.called).to.be.true;
    });

    it('should not add error if death is after birth', () => {
      const errors = {
        dateOfDeath: {
          addError: sinon.spy()
        }
      };

      validateSponsorDeathDate(errors, {
        isDeceased: 'yes',
        dateOfBirth: '2010-01-01',
        dateOfDeath: '2011-01-01'
      });

      expect(errors.dateOfDeath.addError.called).to.be.false;
    });

    it('should not add error if not deceased', () => {
      const errors = {
        dateOfDeath: {
          addError: sinon.spy()
        }
      };

      validateSponsorDeathDate(errors, {
        isDeceased: 'no',
        dateOfBirth: '2011-01-01',
        dateOfDeath: '2010-01-01'
      });

      expect(errors.dateOfDeath.addError.called).to.be.false;
    });
    it('should not add error if no death date', () => {
      const errors = {
        dateOfDeath: {
          addError: sinon.spy()
        }
      };

      validateSponsorDeathDate(errors, {
        isDeceased: 'yes',
        dateOfBirth: '2011-01-01'
      });

      expect(errors.dateOfDeath.addError.called).to.be.false;
    });
    it('should not add error if no dates', () => {
      const errors = {
        dateOfDeath: {
          addError: sinon.spy()
        }
      };

      validateSponsorDeathDate(errors, {
        isDeceased: 'yes',
      });

      expect(errors.dateOfDeath.addError.called).to.be.false;
    });
  });
});
