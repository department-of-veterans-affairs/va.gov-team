import { expect } from 'chai';

import { servedDuringWartime } from '../helpers';

describe('Wartime service validation', () => {
  describe('servedDuringWartime', () => {
    it('should allow for service period overlapping with a wartime period', () => {
      const allow = servedDuringWartime({
        from: '1916-01-01',
        to: '1917-01-02'
      });

      expect(allow).to.be.true;
    });
    it('should allow for service period within a wartime period', () => {
      const allow = servedDuringWartime({
        from: '1916-11-01',
        to: '1916-12-02'
      });

      expect(allow).to.be.true;
    });
    it('should allow for wartime period within service period', () => {
      const allow = servedDuringWartime({
        from: '1950-01-01',
        to: '1956-01-01'
      });

      expect(allow).to.be.true;
    });
    it('should not allow for service period outside of wartime period', () => {
      const allow = servedDuringWartime({
        from: '1980-11-01',
        to: '1981-12-02'
      });

      expect(allow).to.be.false;
    });
  });
});
