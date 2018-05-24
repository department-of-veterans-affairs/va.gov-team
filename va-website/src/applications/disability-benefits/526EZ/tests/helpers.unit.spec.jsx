import { expect } from 'chai';
import {
  flatten,
  isPrefillDataComplete,
  prefillTransformer,
  get4142Selection
} from '../helpers.jsx';
import initialData from './schema/initialData.js';

delete initialData.prefilled;
const treatments = [
  {
    treatment: {
      treatmentCenterName: 'local VA center'
    }
  }
];
initialData.disabilities[0].treatments = treatments;
const flattened = flatten(initialData);
const completeData = initialData;
const incompleteData = {};
const { formData: transformedPrefill } = prefillTransformer([], initialData, {}, { prefilStatus: 'success' });
const { formData: incompletePrefill } = prefillTransformer([], {}, {}, { prefilStatus: 'success' });

describe('526 helpers', () => {
  describe('flatten', () => {
    it('should flatten sibling arrays', () => {
      expect(flattened.treatments).to.exist;
      expect(flattened.disabilities[0].treatments).to.not.exist;
    });
  });
  describe('isPrefillDataComplete', () => {
    it('should reject incomplete prefilled data', () => {
      expect(isPrefillDataComplete(incompleteData)).to.equal(false);
    });
    it('should accept complete prefilled data', () => {
      expect(isPrefillDataComplete(completeData)).to.equal(true);
    });
  });
  describe('prefillTransformer', () => {
    it('should record if the form was prefilled', () => {
      expect(transformedPrefill.prefilled).to.be.true;
    });
    it('should not record if the form was not completely prefilled', () => {
      expect(incompletePrefill.prefilled).to.be.undefined;
    });
  });

  describe('get4142Selection', () => {
    const fullDisabilities = [
      {
        tag: 'shouldReturnTrue',
        'view:selected': true,
        'view:uploadPrivateRecords': 'no'
      },
      {
        tag: 'shouldReturnFalse'
      },
      {
        tag: 'shouldReturnFalse',
        'view:selected': true,
        'view:uploadPrivateRecords': 'yes'
      },
      {
        tag: 'shouldReturnFalse',
        'view:selected': true
      }
    ];

    it('should return true when at least one disability has 4142 selected', () => {
      expect(get4142Selection(fullDisabilities)).to.equal(true);
    });

    it('should return false when disability not selected for increase', () => {
      const disabilities = fullDisabilities.slice(1, 2);
      expect(get4142Selection(disabilities)).to.equal(false);
    });

    it('should return false when disability has upload PMR selected', () => {
      const disabilities = fullDisabilities.slice(2, 3);
      expect(get4142Selection(disabilities)).to.equal(false);
    });

    it('should return false when disability has no PMR supporting evidence', () => {
      const disabilities = fullDisabilities.slice(3);
      expect(get4142Selection(disabilities)).to.equal(false);
    });

    it('should return false when no disabilities have 4142 selected', () => {
      const disabilities = fullDisabilities.slice(1);
      expect(get4142Selection(disabilities)).to.equal(false);
    });
  });
});
