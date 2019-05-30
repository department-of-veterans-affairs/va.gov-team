import { expect } from 'chai';
import moment from 'moment';

import {
  isBlank,
  isNotBlank,
  isValidCurrentOrPastDate,
  isValidDate,
  isValidDateOver17,
  isValidDateRange,
  isValidMonetaryValue,
  isValidName,
  isValidPartialDate,
  isValidPartialMonthYear,
  isValidPartialMonthYearInPast,
  isValidPartialMonthYearRange,
  isValidSSN,
  validateCustomFormComponent
} from '../validations';

describe('Validations unit tests', () => {
  describe('isValidSSN', () => {
    it('accepts ssns of the right one including "invalid" test ones', () => {
      expect(isValidSSN('111-22-1234')).to.be.true;

      // SSNs have certain invalid versions. These are useful for tests so not
      // the validation should return TRUE for them.
      //
      // For information on invalid values see:
      //   https://secure.ssa.gov/poms.nsf/lnx/0110201035
      expect(isValidSSN('666-22-1234')).to.be.true;
      expect(isValidSSN('900-22-1234')).to.be.true;
      expect(isValidSSN('111221234')).to.be.true;
      expect(isValidSSN('111111112')).to.be.true;
    });

    it('rejects invalid ssn format', () => {
      // Disallow empty.
      expect(isValidSSN('')).to.be.false;

      // 123-45-6789 is invalid.
      expect(isValidSSN('123-45-6789')).to.be.false;

      // Invalid characters.
      expect(isValidSSN('111-22-1%34')).to.be.false;
      expect(isValidSSN('111-22-1A34')).to.be.false;
      expect(isValidSSN('hi mom')).to.be.false;
      expect(isValidSSN('123-456789')).to.be.false;
      expect(isValidSSN('12345-6789')).to.be.false;

      // No leading or trailing spaces.
      expect(isValidSSN('111-22-1A34 ')).to.be.false;
      expect(isValidSSN(' 111-22-1234')).to.be.false;
      expect(isValidSSN('-11-11111111')).to.be.false;

      // Too few numbers is invalid.
      expect(isValidSSN('111-22-123')).to.be.false;

      // Consecutive 0's in each segment is invalid.
      expect(isValidSSN('000-22-1234')).to.be.false;
      expect(isValidSSN('111-00-1234')).to.be.false;
      expect(isValidSSN('111-22-0000')).to.be.false;

      // Values with all the same digit are not allowed
      expect(isValidSSN('111111111')).to.be.false;
      expect(isValidSSN('999-99-9999')).to.be.false;
      expect(isValidSSN('222222222')).to.be.false;
      expect(isValidSSN('444-44-4444')).to.be.false;
    });
  });

  describe('isValidDate', () => {
    it('validate february separately cause its a special snowflake', () => {
      // feb 28 should work always.
      expect(isValidDate('28', '2', '2015')).to.be.true;

      // 2015 is not a leap year.
      expect(isValidDate('29', '2', '2015')).to.be.false;

      // 2016 is a leap year.
      expect(isValidDate('29', '2', '2016')).to.be.true;

      // feb 30 is always bad.
      expect(isValidDate('30', '2', '2016')).to.be.false;

      // feb 1 is always fine.
      expect(isValidDate('1', '2', '2016')).to.be.true;

      // feb 0 is always bad.
      expect(isValidDate('0', '2', '2016')).to.be.false;
    });

    it('validate future dates', () => {
      // future dates are bad.
      expect(isValidDate('1', '1', '2050')).to.be.false;
    });
  });

  describe('isValidDateRange', () => {
    it('validates if to date is after from date', () => {
      const fromDate = {
        day: {
          value: '3',
          dirty: true
        },
        month: {
          value: '3',
          dirty: true
        },
        year: {
          value: '2006',
          dirty: true
        }
      };
      const toDate = {
        day: {
          value: '3',
          dirty: true
        },
        month: {
          value: '4',
          dirty: true
        },
        year: {
          value: '2006',
          dirty: true
        }
      };
      expect(isValidDateRange(fromDate, toDate)).to.be.true;
    });
    it('does not validate to date is before from date', () => {
      const fromDate = {
        day: {
          value: '3',
          dirty: true
        },
        month: {
          value: '3',
          dirty: true
        },
        year: {
          value: '2006',
          dirty: true
        }
      };
      const toDate = {
        day: {
          value: '3',
          dirty: true
        },
        month: {
          value: '4',
          dirty: true
        },
        year: {
          value: '2005',
          dirty: true
        }
      };
      expect(isValidDateRange(fromDate, toDate)).to.be.false;
    });
    it('does validate with partial dates', () => {
      const fromDate = {
        day: {
          value: '3',
          dirty: true
        },
        month: {
          value: '3',
          dirty: true
        },
        year: {
          value: '2006',
          dirty: true
        }
      };
      const toDate = {
        day: {
          value: '',
          dirty: true
        },
        month: {
          value: '',
          dirty: true
        },
        year: {
          value: '2008',
          dirty: true
        }
      };
      expect(isValidDateRange(fromDate, toDate)).to.be.true;
    });
  });

  describe('isValidPartialMonthYearRange', () => {
    it('should validate partial range', () => {
      const fromDate = {
        month: {
          value: '2'
        },
        year: {
          value: '2001'
        }
      };

      const toDate = {
        month: {
          value: '3'
        },
        year: {
          value: ''
        }
      };

      expect(isValidPartialMonthYearRange(fromDate, toDate)).to.be.true;
    });
    it('should not validate invalid range', () => {
      const fromDate = {
        month: {
          value: '2'
        },
        year: {
          value: '2002'
        }
      };

      const toDate = {
        month: {
          value: '3'
        },
        year: {
          value: '2001'
        }
      };

      expect(isValidPartialMonthYearRange(fromDate, toDate)).to.be.false;
    });
    it('should validate same date range', () => {
      const fromDate = {
        month: {
          value: '2'
        },
        year: {
          value: '2001'
        }
      };

      const toDate = {
        month: {
          value: '2'
        },
        year: {
          value: '2001'
        }
      };

      expect(isValidPartialMonthYearRange(fromDate, toDate)).to.be.true;
    });
    it('should validate year only range', () => {
      const fromDate = {
        month: {
          value: ''
        },
        year: {
          value: '2001'
        }
      };

      const toDate = {
        month: {
          value: ''
        },
        year: {
          value: '2002'
        }
      };

      expect(isValidPartialMonthYearRange(fromDate, toDate)).to.be.true;
    });
  });

  describe('isValidCurrentOrPastDate', () => {
    it('should validate past date', () => {
      expect(isValidCurrentOrPastDate('2', '2', '2000')).to.be.true;
    });
    it('should validate current date', () => {
      expect(isValidCurrentOrPastDate(moment().date().toString(),
        (moment().month() + 1).toString(),
        moment().year().toString())).to.be.true;
    });
    it('should not validate date in future', () => {
      expect(isValidCurrentOrPastDate((moment().date() + 1).toString(),
        (moment().month() + 1).toString(),
        moment().year().toString())).to.be.false;
    });
  });

  describe('isValidName', () => {
    it('correctly validates name', () => {
      expect(isValidName('Test')).to.be.true;
      expect(isValidName('abc')).to.be.true;
      expect(isValidName('Jean-Pierre')).to.be.true;
      expect(isValidName('Vigee Le Brun')).to.be.true;

      expect(isValidName('')).to.be.false;
      expect(isValidName('123')).to.be.false;
      expect(isValidName('#$%')).to.be.false;
      expect(isValidName('Test1')).to.be.false;
      expect(isValidName(' leadingspace')).to.be.false;
      expect(isValidName(' ')).to.be.false;
    });
  });

  describe('isBlank', () => {
    it('correctly validates blank values', () => {
      expect(isBlank('')).to.be.true;

      expect(isBlank('something')).to.be.false;
    });
  });

  describe('isNotBlank', () => {
    it('correctly validates blank values', () => {
      expect(isNotBlank('Test')).to.be.true;
      expect(isNotBlank('abc')).to.be.true;
      expect(isNotBlank('123')).to.be.true;
      expect(isNotBlank('#$%')).to.be.true;

      expect(isNotBlank('')).to.be.false;
    });
  });

  describe('isValidMonetaryValue', () => {
    it('validates monetary values', () => {
      expect(isValidMonetaryValue('100')).to.be.true;
      expect(isValidMonetaryValue('1.99')).to.be.true;
      expect(isValidMonetaryValue('1000')).to.be.true;

      expect(isValidMonetaryValue('')).to.be.false;
      expect(isValidMonetaryValue('1,000')).to.be.false;
      expect(isValidMonetaryValue('abc')).to.be.false;
      expect(isValidMonetaryValue('$100')).to.be.false;
    });
  });

  describe('isValidDateOver17', () => {
    it('validates turning 17 today', () => {
      const date = moment().startOf('day').subtract(17, 'years');
      expect(isValidDateOver17(date.date().toString(),
        (date.month() + 1).toString(),
        date.year().toString())).to.be.true;
    });

    it('does not validate turning 17 tomorrow', () => {
      const date = moment().startOf('day').subtract(17, 'years').add(1, 'days');
      expect(isValidDateOver17(date.date().toString(),
        (date.month() + 1).toString(),
        date.year().toString())).to.be.false;
    });
  });
  describe('isValidPartialDate', () => {
    it('should validate complete date', () => {
      expect(isValidPartialDate('5', '10', '2010')).to.be.true;
    });
    it('should validate empty date', () => {
      expect(isValidPartialDate('', '', '')).to.be.true;
    });
    it('should validate month year date', () => {
      expect(isValidPartialDate('', '10', '2050')).to.be.true;
    });
    it('should validate month day date', () => {
      expect(isValidPartialDate('10', '10', '')).to.be.true;
    });
    it('should validate day year date', () => {
      expect(isValidPartialDate('20', '', '2010')).to.be.true;
    });
    it('should validate day date', () => {
      expect(isValidPartialDate('20', '', '')).to.be.true;
    });
    it('should validate year date', () => {
      expect(isValidPartialDate('', '', '2010')).to.be.true;
    });
    it('should not validate year before 1900', () => {
      expect(isValidPartialDate('', '', '1899')).to.be.false;
    });
    it('should not validate year more than 100 years in future', () => {
      expect(isValidPartialDate('', '', moment().add(101, 'year').year())).to.be.false;
    });
  });
  describe('validateCustomFormComponent', () => {
    it('should return object validation results', () => {
      const validation = {
        valid: false,
        message: 'Test'
      };

      expect(validateCustomFormComponent(validation)).to.equal(validation);
    });
    it('should return passing object validation results', () => {
      const validation = {
        valid: true,
        message: 'Test'
      };

      expect(validateCustomFormComponent(validation).valid).to.be.true;
      expect(validateCustomFormComponent(validation).message).to.be.null;
    });
    it('should return array validation results', () => {
      const validation = [
        {
          valid: true,
          message: 'DoNotShow'
        },
        {
          valid: false,
          message: 'Test'
        }
      ];

      expect(validateCustomFormComponent(validation)).to.equal(validation[1]);
    });
  });
  describe('isValidPartialMonthYear', () => {
    it('should validate month and year', () => {
      expect(isValidPartialMonthYear('2',
        (moment().add(5, 'year').year()).toString())).to.be.true;
    });
    it('should not validate bad year', () => {
      expect(isValidPartialMonthYear('2', '2500')).to.be.false;
    });
    it('should not validate bad month', () => {
      expect(isValidPartialMonthYear('20', '2001')).to.be.false;
    });
  });
  describe('isValidPartialMonthYearInPast', () => {
    it('should validate month and year in past', () => {
      expect(isValidPartialMonthYearInPast('2', '2001')).to.be.true;
    });
    it('should validate month and year that is current', () => {
      expect(isValidPartialMonthYearInPast(moment().add(1, 'month').month().toString(),
        moment().year().toString())).to.be.true;
    });
    it('should not validate month and year that is in the future', () => {
      expect(isValidPartialMonthYearInPast('2',
        (moment().add(2, 'year').year()).toString())).to.be.false;
    });
  });
});
