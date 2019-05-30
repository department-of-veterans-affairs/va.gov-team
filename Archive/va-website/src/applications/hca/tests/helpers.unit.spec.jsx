import { expect } from 'chai';

import { expensesLessThanIncome } from '../helpers.jsx';

describe('HCA helpers', () => {
  describe('expensesLessThanIncome', () => {
    it('should return true if expenses less than income', () => {
      const formData = {
        veteranNetIncome: 3,
        deductibleMedicalExpenses: 2
      };

      expect(expensesLessThanIncome('deductibleEducationExpenses')(formData)).to.be.true;
    });
    it('should return false if expenses greater than income', () => {
      const formData = {
        veteranNetIncome: 3,
        deductibleMedicalExpenses: 4
      };

      expect(expensesLessThanIncome('deductibleEducationExpenses')(formData)).to.be.true;
    });
    it('should include income from dependents', () => {
      const formData = {
        deductibleMedicalExpenses: 2,
        dependents: [{
          grossIncome: 3
        }]
      };

      expect(expensesLessThanIncome('deductibleEducationExpenses')(formData)).to.be.true;
    });
    it('should include spouse income', () => {
      const formData = {
        deductibleMedicalExpenses: 2,
        'view:spouseIncome': {
          spouseGrossIncome: 3
        }
      };

      expect(expensesLessThanIncome('deductibleEducationExpenses')(formData)).to.be.true;
    });
    it('should show only if last non-zero expense amount', () => {
      const formData = {
        dependents: [{
          grossIncome: 3
        }],
        deductibleEducationExpenses: 0,
        deductibleFuneralExpenses: 0,
        deductibleMedicalExpenses: 4
      };

      expect(expensesLessThanIncome('deductibleMedicalExpenses')(formData)).to.be.false;
      expect(expensesLessThanIncome('deductibleEducationExpenses')(formData)).to.be.true;
      expect(expensesLessThanIncome('deductibleFuneralExpenses')(formData)).to.be.true;
    });
    it('should show warning just under last field if all expenses are filled', () => {
      const formData = {
        dependents: [{
          grossIncome: 3
        }],
        deductibleEducationExpenses: 4,
        deductibleFuneralExpenses: 4,
        deductibleMedicalExpenses: 4
      };

      expect(expensesLessThanIncome('deductibleMedicalExpenses')(formData)).to.be.true;
      expect(expensesLessThanIncome('deductibleEducationExpenses')(formData)).to.be.false;
      expect(expensesLessThanIncome('deductibleFuneralExpenses')(formData)).to.be.true;
    });
  });
});

