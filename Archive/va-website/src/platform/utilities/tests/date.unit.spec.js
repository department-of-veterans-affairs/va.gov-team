import { expect } from 'chai';
import moment from 'moment';

import {
  dateToMoment,
  timeFromNow,
  formatDateShort,
  formatDateParsedZoneShort,
  formatDateLong,
  formatDateParsedZoneLong
} from '../date';

describe('Helpers unit tests', () => {
  describe('dateToMoment', () => {
    it('should convert date to moment', () => {
      const date = dateToMoment({
        month: {
          value: 2
        },
        day: {
          value: 3
        },
        year: {
          value: '1901'
        }
      });

      expect(date.isValid()).to.be.true;
      expect(date.year()).to.equal(1901);
      expect(date.month()).to.equal(1);
      expect(date.date()).to.equal(3);
    });
    it('should convert partial date to moment', () => {
      const date = dateToMoment({
        month: {
          value: 2
        },
        year: {
          value: '1901'
        }
      });

      expect(date.isValid()).to.be.true;
      expect(date.year()).to.equal(1901);
      expect(date.month()).to.equal(1);
      expect(date.date()).to.equal(1);
    });
  });
  describe('timeFromNow', () => {
    const today = moment();
    it('should display time in days', () => {
      expect(timeFromNow(moment(today).add(30, 'days'), today)).to.equal('30 days');
    });
    it('should display time in hours', () => {
      expect(timeFromNow(moment(today).add(23, 'hours'), today)).to.equal('23 hours');
    });
    it('should display time in minutes', () => {
      expect(timeFromNow(moment(today).add(59, 'minutes'), today)).to.equal('59 minutes');
    });
    it('should display time in seconds', () => {
      expect(timeFromNow(moment(today).add(59, 'seconds'), today)).to.equal('59 seconds');
    });
  });
  describe('formatDateShort', () => {
    const noon = '1995-11-12T12:00:00.000+0000';

    it('should display the date in the short format', () => {
      expect(formatDateShort(noon)).to.equal('11/12/1995');
    });
  });
  describe('formatDateParsedZoneShort', () => {
    const midnight = '1995-11-12T00:00:00.000+0000';
    const midnightOffsetNegative1 = '1995-11-12T00:00:00.000-1000';
    const sixAMOffset0 = '1995-11-12T06:00:00.000+0000';
    const eightAMOffset0 = '1995-11-12T08:00:00.000+0000';
    const almostMidnightOffset0 = '1995-11-12T23:59:59.999+0000';
    const almostMidnightOffsetNegative1 = '1995-11-12T23:59:59.999-1000';

    it('should display the date in the short format', () => {
      expect(formatDateParsedZoneShort(midnight)).to.equal('11/12/1995');
    });

    it('should display the date string without regard to the timezone or offset', () => {
      expect(formatDateParsedZoneShort(midnight)).to.equal('11/12/1995');
      expect(formatDateParsedZoneShort(midnightOffsetNegative1)).to.equal('11/12/1995');
      expect(formatDateParsedZoneShort(sixAMOffset0)).to.equal('11/12/1995');
      expect(formatDateParsedZoneShort(eightAMOffset0)).to.equal('11/12/1995');
      expect(formatDateParsedZoneShort(almostMidnightOffset0)).to.equal('11/12/1995');
      expect(formatDateParsedZoneShort(almostMidnightOffsetNegative1)).to.equal('11/12/1995');
    });
  });
  describe('formatDateLong', () => {
    const noon = '1995-11-12T12:00:00.000+0000';

    it('should display the date in the short format', () => {
      expect(formatDateLong(noon)).to.equal('November 12, 1995');
    });
  });
  describe('formatDateParsedZoneLong', () => {
    const midnight = '1995-11-12T00:00:00.000+0000';
    const midnightOffsetNegative1 = '1995-11-12T00:00:00.000-1000';
    const sixAMOffset0 = '1995-11-12T06:00:00.000+0000';
    const eightAMOffset0 = '1995-11-12T08:00:00.000+0000';
    const almostMidnightOffset0 = '1995-11-12T23:59:59.999+0000';
    const almostMidnightOffsetNegative1 = '1995-11-12T23:59:59.999-1000';

    it('should display the date in the short format', () => {
      expect(formatDateParsedZoneLong(midnight)).to.equal('November 12, 1995');
    });

    it('should display the date string without regard to the timezone or offset', () => {
      expect(formatDateParsedZoneLong(midnight)).to.equal('November 12, 1995');
      expect(formatDateParsedZoneLong(midnightOffsetNegative1)).to.equal('November 12, 1995');
      expect(formatDateParsedZoneLong(sixAMOffset0)).to.equal('November 12, 1995');
      expect(formatDateParsedZoneLong(eightAMOffset0)).to.equal('November 12, 1995');
      expect(formatDateParsedZoneLong(almostMidnightOffset0)).to.equal('November 12, 1995');
      expect(formatDateParsedZoneLong(almostMidnightOffsetNegative1)).to.equal('November 12, 1995');
    });
  });
});
